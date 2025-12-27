import styled from "styled-components";
import BookingDataBox from "../../features/bookings/BookingDataBox";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import Checkbox from "../../ui/Checkbox";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "../bookings/useBooking";
import { useEffect, useState } from "react";
import Spinner from "../../ui/Spinner";
import { useCheckin } from "./useCheckin";
import { formatCurrency } from "../../utils/helpers";
import { useSettings } from "../settings/useSettings";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const [confirmPaid, setConfirmPaid] = useState(false);
  const [addBreakfast, setAddBreakfast] = useState(false);
  const { booking, isLoading } = useBooking();
  const { checkin, checkingIn } = useCheckin();
  const { settings, isLoading: isLoadingSettings } = useSettings();

  useEffect(() => setConfirmPaid(() => booking?.isPaid ?? false), [booking]);

  const moveBack = useMoveBack();

  if (isLoading || isLoadingSettings) return <Spinner />;

  const {
    id: bookingId,
    status,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = booking;

  const optionalBrakfastPrice = settings.breakfastPrice * numNights * numGuests;
  const disableCheckinCondition =
    confirmPaid === false ||
    checkingIn ||
    status === "خارج-شده" ||
    (status === "وارد-شده" && addBreakfast === false);

  function handleCheckin() {
    if (!confirmPaid) return;
    if (addBreakfast) {
      checkin({
        bookingId,
        breakfast: {
          hasBreakfast: true,
          extrasPrice: optionalBrakfastPrice,
          totalPrice: totalPrice + optionalBrakfastPrice,
        },
      });
    } else {
      checkin({ bookingId, breakfast: {} });
    }
  }

  return (
    <>
      <Row $type="horizontal">
        <Heading as="h1">ثبت ورود رزرو شماره #{bookingId}</Heading>
        <ButtonText onClick={moveBack}> بازگشت &larr; </ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      {hasBreakfast ||
        (status !== "خارج-شده" && (
          <Box>
            <Checkbox
              onChange={() => {
                setAddBreakfast((prev) => !prev);
                setConfirmPaid(false);
              }}
              id="brakfast"
            >
              آیا میخواهید صبحانه را به قیمت{" "}
              <b>{formatCurrency(optionalBrakfastPrice)}</b> اضافه کنید ؟
            </Checkbox>
          </Box>
        ))}

      <Box>
        <Checkbox
          checked={confirmPaid}
          disabled={confirmPaid || checkingIn}
          onChange={() => setConfirmPaid((confirm) => !confirm)}
          id="confirm"
        >
          من تأیید می‌کنم که <b>{guests.fullName}</b>
          مبلغ کل{" "}
          {addBreakfast ? (
            <b>
              {`  (${formatCurrency(totalPrice)} + ${formatCurrency(
                optionalBrakfastPrice
              )}) `}
              = {formatCurrency(totalPrice + optionalBrakfastPrice)}
            </b>
          ) : (
            <b>{formatCurrency(totalPrice)}</b>
          )}
          را پرداخت کرده است.
        </Checkbox>
      </Box>

      <ButtonGroup>
        <Button $variation="secondary" onClick={moveBack}>
          بازگشت
        </Button>
        <Button onClick={handleCheckin} disabled={disableCheckinCondition}>
          ثبت ورود رزرو شماره #{bookingId}
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
