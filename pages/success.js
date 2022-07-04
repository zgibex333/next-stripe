import Image from "next/image";
import { useRouter } from "next/router";
import Logo from "../public/Thrasher-PNG-File.png";
import styled from "styled-components";
const { motion } = require("framer-motion");

const stripe = require("stripe")(
  `${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
);

const Success = ({ session }) => {
  const route = useRouter();
  console.log(session);
  return (
    <Wrapper>
      <Card
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.75 }}
        transition={{ duration: 0.7 }}
      >
        <div>
          <h1>Thank you for order!</h1>
          <h2>A comfirmation email has been sent to</h2>
          <h2>{session.customer_details.email}</h2>
        </div>
        <InfoWrapper>
          <Address>
            <h3>Address</h3>
            {Object.entries(session.customer_details.address).map(
              ([key, value]) => (
                <p key={key}>
                  {key} : {value}
                </p>
              )
            )}
            <h2>All the products</h2>
          </Address>
          <OrderInfo>
            <h3>Products</h3>
            <h2>All the products</h2>
            {session.line_items.data.map((item) => (
              <div key={item.id}>
                <p>Product: {item.description}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: {item.price.unit_amount}</p>
              </div>
            ))}
          </OrderInfo>
        </InfoWrapper>

        <button onClick={() => route.push("/")}>Continue Shopping</button>
        <div className="success-img">
          <Image src={Logo} alt="logo" />
        </div>
      </Card>
    </Wrapper>
  );
};

export default Success;

export async function getServerSideProps(params) {
  const session = await stripe.checkout.sessions.retrieve(
    params.query.session_id,
    {
      expand: ["line_items"],
    }
  );
  return { props: { session } };
}

const Wrapper = styled.div`
  margin: 5rem 15rem;
`;

const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-radius: 2rem;
  padding: 3rem;
  text-align: center;

  h2 {
    margin: 1rem 0rem;
  }

  button {
    color: white;
    background: var(--primary);
    font-size: 1.2rem;
    font-weight: 500;
    padding: 1rem 2rem;
    border: none;
    cursor: pointer;
  }

  .success-img {
    margin: 2rem 0 0;
  }
`;

const Address = styled.div`
  font-size: 1rem;
  width: 100%;
  text-align: start;
`;

const OrderInfo = styled.div`
  font-size: 1rem;
  width: 100%;
  text-align: start;
`;

const InfoWrapper = styled.div`
  display: flex;
  padding-bottom: 1rem;
`;
