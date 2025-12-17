import Filter from "../../ui/Filter";

function CabinTableOperations() {
  return (
    <Filter
      filterFiled="discount"
      options={[
        { value: "all", label: "همه" },
        { value: "with-discount", label: "با تخفیف" },
        { value: "no-discount", label: "بدون تخفیف" },
      ]}
    />
  );
}

export default CabinTableOperations;
