import { Col, Divider, Image, InputNumber, Row } from 'antd'
import React from 'react'
import GButton from '../GButton'
import Styles from "/styles/components/MenuLayout.module.scss"
import { BsPlus } from "react-icons/bs"
import { BiMinus } from "react-icons/bi"

const MenuList = () => {
    return (
        <div className={Styles.menuListContainer}>
            <div className={Styles.listName}>Best Sellers</div>

            <div className={Styles.list}>

                {Array(10).fill(0).map((_, index) => (
                    <div className={Styles.listItem} key={index}>
                        <Image className={Styles.itemImage} src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80" />
                        <div className={Styles.itemDetails}>
                            <Row align="middle" justify="space-between" >
                                <div className={Styles.itemName}>Chicken Biriyani</div>
                                <div className={Styles.itemPrice}>₹250</div>
                            </Row>
                            <Row justify="space-between" style={{ marginTop: 4 }} span={24}>
                                <Col span={18}>
                                    <div className={Styles.itemDescription}>Lorem ipsum dolor sit amet consectetur. </div>
                                </Col>
                                <Col span={5} offset={1} style={{display: 'flex',justifyContent:"flex-end"}}>
                                    <GButton className={Styles.addButton}>Add</GButton>
                                    {/* <div className={Styles.itemPicker}>
                                        <BsPlus className={Styles.iconLeft} />
                                        <div className={Styles.number} >1</div>
                                        <BiMinus className={Styles.iconRight} />
                                    </div> */}
                                </Col>
                            </Row>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default MenuList