import { Client, cacheExchange, fetchExchange } from "urql";

const url = "/graphql";

export const client = new Client({
  url,
  exchanges: [cacheExchange, fetchExchange],
});
