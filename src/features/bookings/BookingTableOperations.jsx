import SortBy from "../../ui/SortBy";
import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";
import Search from "../../ui/Search";

function BookingTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "همه" },
          { value: "خارج-شده", label: "مهمانان خارج شده" },
          { value: "وارد-شده", label: "مهمانان وارد شده" },
          { value: "تایید-نشده", label: "مهمانان تأیید نشده" },
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
      <Search />
    </TableOperations>
  );
}

export default BookingTableOperations;
