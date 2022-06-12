import { notification, Row, Segmented } from "antd";
import React from "react";
import GButton from "../GButton";
import Styles from "/styles/components/MenuLayout.module.scss";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { GetRestaurantDetails } from "../../services/restaurant.service";
import { useQuery } from "react-query";
import { AddOrder } from "../../services/order.service";
import { GetTableInfo } from "../../services/temp.service";
const MenuLayout = ({ children }) => {
  const { restaurantId, tableId, cart } = useSelector((state) => state.user);

  const router = useRouter();
  const { data: restaurantDetails, isLoading } = useQuery(
    ["restaurant", restaurantId],
    () => GetRestaurantDetails(restaurantId)
  );

  const { data: tableDetails, isLoading: isLoadingTable } = useQuery(
    ["table", tableId],
    () => GetTableInfo(tableId)
  );

  if (tableDetails) {
    console.log(tableDetails);
  }

  const returnAllItemIds = (cart) => {
    let itemIds = [];
    for (let item in cart) {
      itemIds.push(item);
    }
    return itemIds;
  };

  const returnQty = (item) => {
    let qty = 0;
    for (var item in cart) {
      qty += cart[item]["qty"];
    }
    return qty;
  };

  const returnTotal = (item) => {
    let total = 0;
    for (var item in cart) {
      total +=
        parseInt(cart[item]["qty"]) * parseInt(cart[item]["priceperqty"]);
      // total += item.qty * item.priceperqty;
    }
    return total;
  };

  return (
    <div className={Styles.MenuLayoutContainer}>
      <div className={Styles.MenuHeader}>
        <Row justify="space-between" align="middle">
          <div className={Styles.restName}>
            {restaurantDetails?.data?.restaurant?.name}
          </div>
          <div className={Styles.tableNumber}>
            {restaurantDetails?.data?.restaurant?.name}
          </div>
        </Row>
        <div className={Styles.restAddress}>
          {restaurantDetails?.data?.restaurant?.location}
        </div>
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
        {(!tableDetails?.data ||
          tableDetails?.data?.table?.orders?.length === 0) &&
          cart && (
            <GButton
              className={Styles.footerButton}
              onClick={async () => {
                const res = await AddOrder({
                  t_id: tableId,
                  items: returnAllItemIds(cart),
                  cost: returnTotal(cart),
                });

                if (res.data.success) {
                  notification.success({
                    message: "Order Placed",
                    description: "Your order has been placed successfully",
                  });
                }
              }}
            >
              <div className={Styles.buttonText}>
                {returnQty(cart)} Items | ₹ {returnTotal(cart)}
              </div>
              <div style={{ fontSize: ".7rem", color: "#e5e5e5" }}>
                Click to Place order
              </div>
              <MdKeyboardArrowRight className={Styles.arrow} />
            </GButton>
          )}

        {tableDetails?.data && tableDetails?.data?.table?.orders?.length > 0 && (
          <GButton
            className={Styles.footerButton}
            onClick={async () => {
              router.push(`/${restaurantId}/payment`);
            }}
          >
            <div style={{ fontSize: "1rem", color: "#e5e5e5" }}>
              Proceed to pay
            </div>
            <MdKeyboardArrowRight className={Styles.arrow} />
          </GButton>
        )}
      </div>
    </div>
  );
};

export default MenuLayout;
