export function Price(props) {
  const {
    minimum_price: { regular_price, discount, final_price },
  } = props;
  const { currency, value } = regular_price;

  return (
    <div>
      {discount?.percent_off > 0 && (
        <>
          <p className="mt-1 text-sm text-gray-500">
            <span>Precio Regular</span> {value} <span>{currency}</span>
          </p>
          <p className="mt-1 text-sm text-gray-500">
            <span>Descuento</span> {discount.amount_off} <span>{currency}</span>
          </p>
        </>
      )}
      <p className="mt-1 text-sm text-gray-500">
        <span>Total a pagar</span> {final_price.value} <span>{currency}</span>
      </p>
    </div>
  );
}
