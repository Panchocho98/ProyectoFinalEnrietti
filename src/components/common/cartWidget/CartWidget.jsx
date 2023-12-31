import { Badge } from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  let total = getTotalQuantity();

  return (
    <Link to="/cart">
      <Badge badgeContent={total} showZero color="primary">
        <ShoppingCartCheckoutIcon color="action" />
      </Badge>
    </Link>
  );
};

export default CartWidget;
