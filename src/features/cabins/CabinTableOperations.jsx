import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField={"discount"}
        options={[
          { value: "all", label: "all" },
          { value: "no-discount", label: "no discount" },
          { value: "with-discount", label: "with discount" },
        ]}
      />

      <SortBy
        options={[
          { value: "name-asc", label: "Sort by name (a-z)" },
          { value: "name-desc", label: "Sort by name (z-a)" },
          { value: "regularPrice-asc", label: "Sort by price (low first)" },
          { value: "regularPrice-desc", label: "Sort by price (high first)" },
          { value: "maxCapacity-asc", label: "Sort by capacity (low first)" },
          { value: "maxCapacity-desc", label: "Sort by capacity (high first)" },
          { value: "discount-asc", label: "Sort by discount (low first)" },
          { value: "discount-desc", label: "Sort by discount (high first)" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
