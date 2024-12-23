import { gql } from "urql";
export const getProductsQuery = gql`
  query getProducts(
    $currentPage: Int
    $search: String
    $pageSize: Int
    $store: String
  ) {
    products(
      currentPage: $currentPage
      pageSize: $pageSize
      store: $store
      search: $search
    ) {
      items {
        name
        thumbnail {
          url
          label
        }
        price_range {
          minimum_price {
            discount {
              percent_off
              amount_off
            }
            final_price {
              value
            }
            regular_price {
              value

              currency
            }
          }
        }
      }
      page_info {
        page_size
        total_pages
        current_page
      }
    }
  }
`;
