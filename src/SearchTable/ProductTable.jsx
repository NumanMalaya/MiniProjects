import ProductRow from "./ProductRow";
import { useState } from "react";
import SearchBar from "./SearchBar";
import ProductHeading from "./ProductHeading";
export default function ProductTable() {
  const [stockedProducts, setStockedProducts] = useState(false);
  const [filterText, setFilterText] = useState("");
  const products = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  ];
  return (
    <>
      <SearchBar
        handleCheckClick={() => {
          setStockedProducts(!stockedProducts);
        }}
        handleInputChange={(value) => {
          setFilterText(value);
          console.log(value);
        }}
        inputValue={filterText}
      />
      <table className="table productTable">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <ProductHeading value="Fruits" />
          <ProductRow
            productList={products}
            stockStatus={stockedProducts}
            category="Fruits"
            inputValue={filterText}
          />
          <ProductHeading value="Vegetables" />
          <ProductRow
            productList={products}
            stockStatus={stockedProducts}
            category="Vegetables"
            inputValue={filterText}
          />
        </tbody>
      </table>
    </>
  );
}
