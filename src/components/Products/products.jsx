import { useProducs } from "../../talons/useProducts";
import { Pagination } from "../Pagination/pagination";
import { Price } from "../Price/price";
import { StatusView } from "../StatusView";

export function Products() {
  const talonProps = useProducs();
  const { data, fetching, error } = talonProps;
  if (fetching)
    return <StatusView subtitle={"Estamos preparando tus productos."} />;
  if (error)
    return (
      <StatusView
        title={"Oops.."}
        subtitle={"Tuvimos un error al procesar tu busqueda"}
        description={"Por favor intenta mas tarde"}
      />
    );
  if (!data)
    return <StatusView subtitle={"Ingresa el producto a buscar"} />;
  if (data && data?.products?.items?.length === 0) {
    return (
      <StatusView
        title={"Oops..."}
        subtitle={"Ningun producto encontrado con los parametros selecionados"}
        description={"Intenta buscar en otra tienda."}
      />
    );
  }

  const {
    products: { items, page_info },
  } = data;

  const products = items.map(
    ({ thumbnail, name, price_range, __typename }, key) => (
      <div className="group relative" key={__typename + key}>
        <img
          src={thumbnail.url}
          alt={thumbnail.label}
          className="aspect-square w-full rounded-md bg-gray-200 object-contain group-hover:opacity-75 lg:aspect-auto lg:h-80"
        />
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0"></span>
                {name}
              </a>
            </h3>
            <Price {...price_range} />
          </div>
        </div>
      </div>
    )
  );
  return (
    <div>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products}
      </div>
      <Pagination {...page_info} />
    </div>
  );
}
