
export default function ProductRow({
  productList,
  category,
  stockStatus,
  inputValue
}) {
  return (
    <>
      {productList.map((product) => {
        if (stockStatus == false) {
          return (
            product.category == category &&
            product.name.toLowerCase().includes(inputValue) && (
              <tr>
                <td
                  scope="row"
                  className={product.stocked ? "" : "text-danger"}
                >
                  {product.name}
                </td>
                <td>{product.price}</td>
              </tr>
            )
          );
        } else {
          return (
            product.stocked == true &&
            product.category == category && (
              <tr>
                <td scope="row">{product.name}</td>
                <td>{product.price}</td>
              </tr>
            )
          );
        }
      })}
    </>
  );
}
