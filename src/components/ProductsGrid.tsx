import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";
type Product = {
  id: string;
  attributes: {
    title: string;
    company: string;
    description: string;
    featured: boolean;
    createdAt: string;
    image: string;
    price: number;
  };
};
function ProductsGrid() {
  const products = useLoaderData() as {product:[]};

  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.product.map((product:Product) => {
        const { title, price, image } = product.attributes;
        const dollarsAmount = formatPrice(+price);
        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="card w-full  shadow-xl hover:shadow-2xl transition duration-300"
          >
            <figure className="px-4 pt-4">
              <img
                className="rounded-xl h-64 md:h-48 w-full object-cover"
                src={image}
                alt={title}
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title capitalize tracking-wider">{title}</h2>
              <span className="text-secondary">{dollarsAmount}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductsGrid;
