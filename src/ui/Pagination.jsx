import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/constants";
const Pagination = ({ count }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / PAGE_SIZE);
  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }
  function prevPage() {
    const prev = currentPage === 1 ? 1 : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  if (pageCount < 2) return null;

  return (
    <div className="flex w-full items-center justify-between font-sans text-sm">
      <p className="ml-2 text-gray-700">
        Showing{" "}
        <span className="font-semibold">
          {(currentPage - 1) * PAGE_SIZE + 1}
        </span>{" "}
        to{" "}
        <span className="font-semibold">
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{" "}
        of <span className="font-semibold">{count} results</span>
      </p>

      <Buttons>
        <PaginationButton disabled={currentPage === 1} onClick={prevPage}>
          <HiChevronLeft />
          <span>Previous</span>
        </PaginationButton>
        <PaginationButton
          disabled={currentPage === pageCount}
          onClick={nextPage}
        >
          <span>Next</span>
          <HiChevronRight />
        </PaginationButton>
      </Buttons>
    </div>
  );
};

export default Pagination;

const Buttons = ({ children }) => {
  return <div className="flex gap-1.5">{children}</div>;
};

const PaginationButton = ({ children, active, ...props }) => {
  return (
    <button
      className={`${
        active ? "bg-blue-600 text-blue-50" : "bg-gray-50"
      } flex items-center justify-center gap-1.5 rounded-md border-none px-3 py-1.5 text-base font-medium text-gray-700 transition-all duration-300 hover:bg-blue-600 hover:text-blue-50 disabled:cursor-not-allowed disabled:text-gray-400 disabled:hover:bg-gray-50`}
      {...props}
    >
      {children}
    </button>
  );
};
