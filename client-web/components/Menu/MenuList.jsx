import { Col, Divider, Image, InputNumber, Row, Skeleton } from "antd";
import React, { useState } from "react";
import GButton from "../GButton";
import Styles from "/styles/components/MenuLayout.module.scss";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

import { useDispatch } from "react-redux";
import { updateCart } from "../../store/user.slice";

const MenuList = ({ isLoading, menu }) => {
  const dispatch = useDispatch();
  const [cart, setCart] = useState({});

  return (
    <div className={Styles.menuListContainer}>
      <div className={Styles.listName}>Best Sellers</div>

      <div className={Styles.list}>
        {isLoading && !menu ? (
          <Skeleton />
        ) : (
          menu &&
          menu.map((item, index) => (
            <div className={Styles.listItem} key={index}>
              <Image
                className={Styles.itemImage}
                src={item.itemPhoto}
                alt="item"
                style={{
                  objectFit: "cover",
                }}
              />
              <div className={Styles.itemDetails}>
                <Row align="middle" justify="space-between">
                  <div className={Styles.itemName}>{item.name}</div>
                  <div className={Styles.itemPrice}>Rs.{" " + item.price}</div>
                </Row>
                <Row justify="space-between" style={{ marginTop: 4 }} span={24}>
                  <Col span={18}>
                    <div className={Styles.itemDescription}>
                      {item.description}
                    </div>
                  </Col>
                  <Col
                    span={5}
                    offset={1}
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      position: "relative",
                    }}
                  >
                    {cart[item._id] ? (
                      <div className={Styles.itemPicker}>
                        <BiMinus
                          className={Styles.iconLeft}
                          onClick={() => {
                            if (cart[item._id] > 1) {
                              setCart({
                                ...cart,
                                [item._id]: cart[item._id] - 1,
                              });
                              dispatch(
                                updateCart({
                                  ...cart,
                                  [item._id]: cart[item._id] - 1,
                                })
                              );
                            } else {
                              setCart({ ...cart, [item._id]: null });
                              dispatch(
                                updateCart({
                                  ...cart,
                                  [item._id]: null,
                                })
                              );
                            }
                          }}
                        />
                        <div className={Styles.number}>
                          {cart[item._id] ? cart[item._id] : 0}
                        </div>
                        <BsPlus
                          onClick={() => {
                            setCart({
                              ...cart,
                              [item._id]: cart[item._id] + 1,
                            });
                            dispatch(
                              updateCart({
                                ...cart,
                                [item._id]: cart[item._id] + 1,
                              })
                            );
                          }}
                          className={Styles.iconRight}
                        />
                      </div>
                    ) : (
                      <GButton
                        onClick={() => {
                          setCart({ ...cart, [item._id]: 1 });
                          dispatch(
                            updateCart({
                              ...cart,
                              [item._id]: 1,
                            })
                          );
                        }}
                        className={Styles.addButton}
                      >
                        Add
                      </GButton>
                    )}
                  </Col>
                </Row>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MenuList;
