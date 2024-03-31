import { Filters, PaginationContainer, ProductsContainer } from "../components";
import { customFetch } from "../utils";
const url = "/products";

export const loader = async ({ request}) => {
  const response = await customFetch(url);
  const product = response.data.data;
  const meta = response.data.meta;
  
  return { product, meta };
};

function Products() {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
}

export default Products;
