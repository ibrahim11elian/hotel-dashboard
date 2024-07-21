import AddCabin from "../features/cabins/AddCabin";
import CabinTable from "../features/cabins/CabinTable";
import CabinTableOperations from "../features/cabins/CabinTableOperations";

function Cabins() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-gray-700">All Cabins</h1>
        <CabinTableOperations />
      </div>

      <CabinTable />

      <AddCabin />
    </>
  );
}

export default Cabins;
