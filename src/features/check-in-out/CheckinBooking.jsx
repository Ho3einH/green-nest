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

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const [confirmPaid, setConfirmPaid] = useState(false);
  const { booking, isLoading } = useBooking();
  const { checkin, checkingIn } = useCheckin();

  useEffect(() => setConfirmPaid(() => booking?.isPaid ?? false), [booking]);

  const moveBack = useMoveBack();

  if (isLoading) return <Spinner />;

  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = booking;

  function handleCheckin() {
    if (!confirmPaid) return;
    checkin(bookingId);
  }

  return (
    <>
      <Row $type="horizontal">
        <Heading as="h1">ثبت ورود رزرو شماره #{bookingId}</Heading>
        <ButtonText onClick={moveBack}> بازگشت &larr; </ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <Box>
        <Checkbox
          checked={confirmPaid}
          disabled={confirmPaid || checkingIn}
          onChange={() => setConfirmPaid((confirm) => !confirm)}
          id="confirm"
        >
          من تأیید می‌کنم که <b>{guests.fullName}</b>
          مبلغ کل <b>{formatCurrency(totalPrice)}</b>
          را پرداخت کرده است.
        </Checkbox>
      </Box>

      <ButtonGroup>
        <Button $variation="secondary" onClick={moveBack}>
          بازگشت
        </Button>
        <Button onClick={handleCheckin} disabled={!confirmPaid || checkingIn}>
          ثبت ورود رزرو شماره #{bookingId}
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
