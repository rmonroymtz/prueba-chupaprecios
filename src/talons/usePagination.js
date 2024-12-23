import { useBearStore } from "../storage/appStorage";

export function usePagination({ total_pages }) {
  const { currentPage, setCurrentPage } = useBearStore((state) => state);
  function handleSelectPage(newPage) {
    setCurrentPage(newPage);
  }

  function handleNextPage() {
    handleSelectPage(currentPage + 1);
  }

  function handlePreviewPage() {
    handleSelectPage(currentPage - 1);
  }
  return {
    handleNextPage,
    handlePreviewPage,
    isNextPageAviable: total_pages < currentPage,
    isPrevPageAviable: currentPage === 1,
    totalPages: total_pages,
    currentPage
  };
}
