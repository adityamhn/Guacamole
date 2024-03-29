import { Card, Divider, notification, PageHeader, Row } from "antd";
import React from "react";
import Styles from "/styles/pages/Payment.module.scss";
import { IoIosClose } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import GButton from "../../components/GButton";
import { useRouter } from "next/router";
import { GetOrderDetails } from "../../services/order.service";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "react-query";
import { logout } from "../../store/user.slice";


const Payment = () => {
  const router = useRouter();
  const { restaurantId, tableId } = useSelector((state) => state.user);
  const dispatch = useDispatch()

  const { data: orderDetails, isLoading: isLoadingTable } = useQuery(
    ["order-details", tableId],
    () => GetOrderDetails(tableId)
  );
  console.log(orderDetails);
  return (
    <div className={Styles.paymentContainer}>
      <PageHeader
        onBack={() => router.back()}
        title="Pay Bill"
        style={{
          color: "#fff",
        }}
      />
      <Card bordered={false} className={Styles.paymentItemsCard}>
        {orderDetails?.data?.order?.items?.map((item, idx) => (
          <Row
            justify="space-between"
            align="middle"
            className={Styles.paymentItem}
            key={idx}
          >
            <div className={Styles.paymentItemTitle}>
              <span style={{ marginRight: 12 }}>{item?.name}</span>
              <IoIosClose />1
            </div>
            <div className={Styles.paymentItemPrice}>₹ {item?.price}</div>
          </Row>
        ))}
      </Card>

      <div className={Styles.sectionHeading}>Offers & benefits</div>
      <Card bordered={false} className={Styles.paymentItemsCard}>
        <Row align="middle" justify="space-between">
          <div style={{ color: "#FFF" }}>Apply Coupon</div>
          <MdKeyboardArrowRight style={{ fontSize: 18 }} />
        </Row>
      </Card>

      <div className={Styles.sectionHeading}>Bill Details</div>
      <Card bordered={false} className={Styles.paymentItemsCard}>
        <Row
          justify="space-between"
          align="middle"
          className={Styles.paymentItem}
        >
          <div className={Styles.paymentItemTitle}>Items Total</div>
          <div className={Styles.paymentItemPrice}>
            ₹{orderDetails?.data?.order?.cost}
          </div>
        </Row>

        <Row
          justify="space-between"
          align="middle"
          className={Styles.paymentItem}
        >
          <div className={Styles.paymentItemTitle}>
            GST{" "}
            <span style={{ marginLeft: 8, fontSize: ".7rem" }}>( 2.5% )</span>
          </div>
          <div className={Styles.paymentItemPrice}>
            ₹ {orderDetails?.data?.order?.cost * 0.025}
          </div>
        </Row>
        {/* <Divider className={Styles.divider} />
        <Row
          justify="space-between"
          align="middle"
          className={Styles.paymentItem}
        >
          <div className={Styles.paymentItemTitle}>
            Discount{" "}
            <span style={{ marginLeft: 8, fontSize: ".7rem" }}>( 15% )</span>
          </div>
          <div className={Styles.paymentItemPrice}>- ₹25</div>
        </Row> */}
        <Divider className={Styles.divider} />
        <Row
          style={{ marginBottom: "1rem" }}
          justify="space-between"
          align="middle"
          className={Styles.paymentItem}
        >
          <div className={Styles.paymentItemTitle}>Total Amount Payable</div>
          <div className={Styles.paymentItemPrice}>
            ₹ {orderDetails?.data?.order?.cost * 1.025}
          </div>
        </Row>
      </Card>

      <GButton className={Styles.footerButton}>
        <div
          className={Styles.buttonText}
          onClick={async () => {

            notification.success({
              message: "Payment processed successfully",
            });
            await dispatch(logout())
            router.push(`/${restaurantId}/${tableId}`);
          }}
        >
          Pay
        </div>
      </GButton>
    </div>
  );
};

export default Payment;
