import {
  ActionFunctionArgs,
  ParamParseKey,
  Params,
  useLoaderData,
} from "react-router-dom";
import { formatPrice, customFetch, generateAmountOptions } from "../utils";
import { Link } from "react-router-dom";
import { useState } from "react";

const Paths = {
  id: "",
} as const;

interface ProductArgs extends ActionFunctionArgs {
  params: Params<ParamParseKey<typeof Paths.id>>;
}
type Product = {
  id: string;
  attributes: {
    image: string;
    description: string;
    title: string;
    price: string;
    colors: string[];
    company: string;
  };
};

export const loader = async ({ params }: ProductArgs) => {
  const response = await customFetch(`products/${params.id}`);
  const product = response.data.data;

  return { product };
};

function SingleProduct() {
  const { product } = useLoaderData() as { product: Product };
  const { image, title, price, description, colors, company } =
    product.attributes;
  const dollarsAmount = formatPrice(+price);
  const [productColor, setProductColor] = useState(colors.at(0));
  const [amount, setAmount] = useState(1);

  const handleAmount = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAmount(parseInt(e.target.value));
  };

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      {/* PRODUCT */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2  lg:gap-x-16">
        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full  "
        />
        {/* PRODUCT INFO */}
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h4>

          <p className="mt-3 text-xl">{dollarsAmount}</p>

          <p className="mt-6 leading-8">{description}</p>

          {/* COLORS */}
          <div className="mt-6">
            <h4 className="text-md font-medium tracking-wider capitalize">
              colors
            </h4>
            <div className="mt-2">
              {colors.map((color: string) => {
                return (
                  <button
                    key={color}
                    type="button"
                    className={`badge  w-6 h-6 mr-2  ${
                      color === productColor && "border-2 border-secondary"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  ></button>
                );
              })}
            </div>
          </div>
          {/* AMOUNT */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <h4 className="text-md font-medium tracking-wider capitalize">
                amount
              </h4>
            </label>
            <select
              className="select select-secondary select-bordered select-md"
              value={amount}
              onChange={(e)=>handleAmount(e)}
            >
              {generateAmountOptions(10)}
            </select>
          </div>
          {/* CART BUTTON */}
          <div className="mt-10 ">
            <button
              className="btn btn-secondary btn-md"
              onClick={() => console.log("add to bag")}
            >
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleProduct;
