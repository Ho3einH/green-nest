import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";
function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterFiled="discount"
        options={[
          { value: "all", label: "همه" },
          { value: "with-discount", label: "با تخفیف" },
          { value: "no-discount", label: "بدون تخفیف" },
        ]}
      />
      <SortBy
        options={[
          {
            value: "name-asc",
            label: "ترتیب بر اساس اسم (الف-ی)",
          },
          {
            value: "name-desc",
            label: "ترتیب بر اساس اسم (ی-الف)",
          },
          {
            value: "regularPrice-asc",
            label: "ترتیب بر اساس قیمت (کمترین)",
          },
          {
            value: "regularPrice-desc",
            label: "ترتیب بر اساس قیمت (بیشترین)",
          },
          {
            value: "maxCapacity-asc",
            label: "ترتیب بر اساس ظرفیت (کمترین)",
          },
          {
            value: "maxCapacity-desc",
            label: "ترتیب بر اساس ظرفیت (بیشترین)",
          },
          {
            value: "discount-asc",
            label: "ترتیب بر اساس تخفیف (کمترین)",
          },
          {
            value: "discount-desc",
            label: "ترتیب بر اساس تخفیف (بیشترین)",
          },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
