import { useEffect } from "react";
import { useBearStore } from "../storage/appStorage";
import { useGetProducts } from "./useGetProducts";

export function useProducs() {
  const { searcherText, currentStore, currentPage } = useBearStore(
    (state) => state
  );

  const [detail, refetch] = useGetProducts({
    currentPage,
    search: searcherText,
    pageSize: 5,
    store: currentStore,
    pause: true,
  });

  useEffect(() => {
    if (searcherText?.length > 0 && currentStore?.length) {
      refetch();
    }
  }, [searcherText, currentStore, currentPage]);

  return { ...detail };
}
