import { Col, Form, Input, InputNumber, Modal, Row, Select } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { countryCodes } from "../../components/data/countryCodes";
import GButton from "/components/GButton";
import Styles from "/styles/pages/Home.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../store/user.slice";

const { Option } = Select;

export default function Home({ tableId }) {
  const { isLoggedIn, restaurantId } = useSelector((state) => state.user);

  const [showModal, setShowModal] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogin = () => {
    setShowModal("");

    dispatch(
      login({
        restaurantId,
        tableId,
        user: {},
        isLoggedIn: true,
        token: "",
      })
    );
    router.push(`/${restaurantId}/menu`);
  };

  if (isLoggedIn) {
    router.push(`/${restaurantId}/menu`);
  }

  return (
    <div className={Styles.homeContainer}>
      <div className={Styles.logoContainer}>
        <Image
          src={"/images/logo-full.svg"}
          width={200}
          height={100}
          objectFit="contain"
          alt="guacamole logo"
        />
      </div>

      <Col className={Styles.buttonsContainer}>
        <GButton className={Styles.button}>Download the App</GButton>
        <GButton
          secondary
          className={Styles.button}
          onClick={() => setShowModal(true)}
        >
          Continue with Web
        </GButton>
      </Col>

      <p className={Styles.note}>
        Download the App to get access to exclusive Guacamol offers.
      </p>

      <Modal
        style={{
          top: "100vh",
          transform: "translateY(-105%)",
        }}
        visible={showModal}
        footer={false}
        className="homeModal"
        closable={false}
        maskClosable={true}
        onCancel={() => setShowModal(false)}
      >
        <Form className={Styles.loginForm}>
          <h3>Enter your Details</h3>
          <Form.Item className={Styles.formItem}>
            <Input placeholder="Enter your Name" className={Styles.formInput} />
          </Form.Item>
          <Form.Item className={Styles.formItem}>
            <InputNumber
              controls={false}
              placeholder="Contact Number"
              style={{ width: "100%" }}
              className={Styles.formInput}
            />
          </Form.Item>
          <GButton onClick={handleLogin}>Next</GButton>
        </Form>
      </Modal>
    </div>
  );
}

Home.getInitialProps = ({ query: { restaurantId, tableId } }) => {
  return { tableId };
};