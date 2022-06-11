import { Row, Segmented } from "antd";
import React from "react";
import GButton from "../GButton";
import Styles from "/styles/components/MenuLayout.module.scss";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
const MenuLayout = ({ children }) => {
  const { cart, restaurantId, tableId } = useSelector((state) => state.user);

  const router = useRouter();

  console.log("cart", cart);

  return (
    <div className={Styles.MenuLayoutContainer}>
      <div className={Styles.MenuHeader}>
        <Row justify="space-between" align="middle">
          <div className={Styles.restName}>Chin Lung</div>
          <div className={Styles.tableNumber}>Table 7</div>
        </Row>
        <div className={Styles.restAddress}>Koramanagala, bengaluru</div>
        <div className={Styles.foodTypesContainer}>
          <Segmented
            options={[
              "All",
              "Food",
              "Non-Alcoholic Beverages",
              "Alcoholic Beverages",
            ]}
            className={Styles.foodTypes}
          />
        </div>
      </div>
      <div className={Styles.mainMenu}>{children}</div>
      <div className={Styles.footer}>
        <GButton
          className={Styles.footerButton}
          onClick={() => router.push("/213123/order/12123")}
        >
          <div className={Styles.buttonText}>1 Item | ₹250</div>
          <div style={{ fontSize: ".7rem", color: "#e5e5e5" }}>
            Click to Place order
          </div>
          <MdKeyboardArrowRight className={Styles.arrow} />
        </GButton>
      </div>
    </div>
  );
};

export default MenuLayout;
