import { ProductStyled } from "../styles/ProductStyled";
import Link from "next/link";

const Product = ({ product }) => {
  const { title, price, image, slug } = product.attributes;
  return (
    <ProductStyled>
      <Link href={`/products/${slug}`}>
        <div>
          <img src={image.data.attributes.formats.small.url} alt={title} />
        </div>
      </Link>
      <h2>{title}</h2>
      <h3>{price}$</h3>
    </ProductStyled>
  );
};

export default Product;
