import { usePagination } from "../../talons/usePagination";

export function Pagination(props) {
  const talonProps = usePagination(props);
  const {
    handleNextPage,
    handlePreviewPage,
    isPrevPageAviable,
    isNextPageAviable,
    currentPage,
    totalPages,
  } = talonProps;
  return (
    <div>
      <div className="flex flex-col items-center">
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Mostrando página &nbsp;
          <span className="font-semibold text-gray-900">
            {currentPage} &nbsp;
          </span>
          de &nbsp;
          <span className="font-semibold text-gray-900">
            {totalPages} &nbsp;
          </span>
          páginas
        </span>
        <div className="inline-flex mt-2 xs:mt-0">
          <button
            className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900"
            disabled={isPrevPageAviable}
            onClick={handlePreviewPage}
          >
            Anteriores
          </button>
          <button
            className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 "
            disabled={isNextPageAviable}
            onClick={handleNextPage}
          >
            Siguientes
          </button>
        </div>
      </div>
    </div>
  );
}
