import { useQuery } from "urql";
import { getProductsQuery } from "../querys/getProductsQuery.gql";

export function useGetProducts(props) {
  const { pause, currentPage, search, pageSize, store } = props;

  const query = useQuery({
    query: getProductsQuery,
    pause: pause,
    variables: {
      currentPage,
      search,
      pageSize,
      store,
    },
  });

  return query;
}
