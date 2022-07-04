import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";
import { useRouter } from "next/router";
import {
  Buy,
  DetailsStyled,
  ProductInfo,
  Quantity,
} from "../../styles/ProductsDetails";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { useStateContext } from "../../lib/context";
import toast from "react-hot-toast";
import { useEffect } from "react";

const ProductDetails = () => {
  const { qty, increaseQty, decreaseQty, onAdd, setQty } = useStateContext();

  useEffect(() => {
    setQty(1);
  }, []);

  const { query } = useRouter();
  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug },
  });
  const { data, fetching, error } = results;
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh {error.message}</p>;
  const product = data.products.data[0].attributes;
  const { title, description, image } = product;
  const notify = () => {
    toast.success(`${title} added`, { duration: 1000 });
  };

  return (
    <DetailsStyled>
      <img src={image.data.attributes.formats.medium.url} alt={title} />
      <ProductInfo>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <Quantity>
          <span>Quantity</span>
          <button onClick={decreaseQty}>
            <AiFillMinusCircle />
          </button>
          <p>{qty}</p>
          <button onClick={increaseQty}>
            <AiFillPlusCircle />
          </button>
        </Quantity>
        <Buy
          onClick={() => {
            notify();
            onAdd(product, qty);
          }}
        >
          Add to cart
        </Buy>
      </ProductInfo>
    </DetailsStyled>
  );
};

export default ProductDetails;
