import styled from "styled-components";
import { format, isToday, isBefore } from "date-fns-jalali";

import Tag from "../../ui/Tag";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

import { formatCurrency } from "../../utils/helpers";
import { formatDistanceFromNowPersian } from "../../utils/helpers";
import { HiEye } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;

function BookingRow({
  booking: {
    id: bookingId,
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    totalPrice,
    status,
    guests: { fullName: guestName, email },
    cabins: { name: cabinName },
  },
}) {
  const navigate = useNavigate();

  const statusToTagName = {
    "تایید-نشده": "blue",
    "وارد-شده": "green",
    "خارج-شده": "silver",
  };

  const stayDuration = isToday(new Date(endDate))
    ? `تا امروز اقامت`
    : `${numNights} شب اقامت `;

  const stayStatus = isBefore(new Date(endDate), new Date())
    ? ` کرده است `
    : `میکند `;

  const startDateFormatted = format(new Date(startDate), "dd MMMM yyyy");
  const endDateFormatted = format(new Date(endDate), "dd MMMM yyyy");

  return (
    <Table.Row>
      <Cabin>{cabinName}</Cabin>

      <Stacked>
        <span>{guestName}</span>
        <span>{email}</span>
      </Stacked>

      <Stacked>
        <span>
          {isToday(new Date(startDate))
            ? "از امروز"
            : formatDistanceFromNowPersian(startDate)}{" "}
          &larr;{stayDuration}
          {stayStatus}
        </span>

        <span>
          {startDateFormatted} &mdash; {endDateFormatted}
        </span>
      </Stacked>

      <Tag $type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>

      <Amount>{formatCurrency(totalPrice)}</Amount>
      <Menus.Menu>
        <Menus.Toggle id={bookingId} />
        <Menus.List id={bookingId}>
          <Menus.Button
            icon={<HiEye />}
            onClick={() => navigate(`/bookings/${bookingId}`)}
          >
            نمایش جزئیات
          </Menus.Button>
        </Menus.List>
      </Menus.Menu>
    </Table.Row>
  );
}

export default BookingRow;
