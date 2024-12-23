import { useBearStore } from "../storage/appStorage";

export function useSearchTabs(props) {
  const avianbleSearchers = [
    { name: "Amazon", id: "amazon" },
    { name: "ebay", id: "ebay" },
    { name: "target", id: "target" },
  ];

  const { currentStore, setCurrentStore, setCurrentPage } = useBearStore(
    (state) => state
  );

  function handleSetSearcher(identifier) {
    setCurrentStore(identifier);
    setCurrentPage(1);
  }

  return { avianbleSearchers, currentStore, handleSetSearcher };
}
