import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { useStateContext } from "../lib/context";
import { NavItems, NavStyled } from "../styles/NavStyled";
import Cart from "./cart";
import { User } from "./User";
const { AnimatePresence, motion } = require("framer-motion");

const Nav = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const { user, error, isLoading } = useUser();
  console.log(user);
  return (
    <NavStyled>
      <Link href="/">ThrasheR</Link>
      <NavItems>
        <User />
        <div onClick={() => setShowCart(true)}>
          {totalQuantities > 0 && (
            <motion.span animate={{ scale: 1 }} initial={{ scale: 0.3 }}>
              {totalQuantities}
            </motion.span>
          )}
          <FiShoppingBag />
          <h3>Cart</h3>
        </div>
      </NavItems>
      <AnimatePresence>{showCart && <Cart />}</AnimatePresence>
    </NavStyled>
  );
};

export default Nav;
