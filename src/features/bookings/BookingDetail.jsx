import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "./useBooking";
import Spinner from "../../ui/Spinner";
import { useNavigate } from "react-router-dom";
import { useCheckout } from "../check-in-out/useCheckout";
import Modal from "../../ui/Modal";
import { useDeleteBooking } from "./useDeleteBooking";
import ConfirmDelete from "../../ui/ConfirmDelete";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const { booking, isLoading } = useBooking();
  const { checkout, isCheckingOut } = useCheckout();
  const { deleteBooking, isDeleting } = useDeleteBooking();

  const navigate = useNavigate();

  const moveBack = useMoveBack();

  if (isLoading) return <Spinner />;

  const { status, id: bookingId } = booking;

  const statusToTagName = {
    "تایید-نشده": "blue",
    "وارد-شده": "green",
    "خارج-شده": "silver",
  };

  /*   const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };*/

  return (
    <>
      <Row $type="horizontal">
        <HeadingGroup>
          <Heading as="h1">رزرو #{bookingId} </Heading>
          <Tag $type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>بازگشت &larr;</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        <Button $variation="secondary" onClick={moveBack}>
          بازگشت
        </Button>

        <Modal>
          <Modal.Open opens="delete">
            <Button $variation="danger">حذف رزرو</Button>
          </Modal.Open>
          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName="booking"
              onConfirm={() =>
                deleteBooking(bookingId, {
                  onSettled: () => {
                    navigate(-1);
                  },
                })
              }
              disabled={isDeleting}
            />
          </Modal.Window>
        </Modal>

        {status === "وارد-شده" && (
          <Button onClick={() => checkout(bookingId)} disabled={isCheckingOut}>
            ثبت خروج
          </Button>
        )}

        {status === "تایید-نشده" && (
          <Button onClick={() => navigate(`/checkin/${bookingId}`)}>
            ثبت ورود
          </Button>
        )}
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
