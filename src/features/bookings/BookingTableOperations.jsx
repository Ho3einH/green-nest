import SortBy from "../../ui/SortBy";
import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function BookingTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "همه" },
          { value: "checked-out", label: "مهمانان خارج شده" },
          { value: "checked-in", label: "مهمانان وارد شده" },
          { value: "unconfirmed", label: "مهمانان تأیید نشده" },
        ]}
      />

      <SortBy
        options={[
          { value: "startDate-desc", label: "جدیدترین رزروها" },
          { value: "startDate-asc", label: "قدیمی‌ترین رزروها" },
          {
            value: "totalPrice-desc",
            label: "گران‌ترین رزروها",
          },
          { value: "totalPrice-asc", label: "ارزان‌ترین رزروها" },
        ]}
      />
    </TableOperations>
  );
}

export default BookingTableOperations;
