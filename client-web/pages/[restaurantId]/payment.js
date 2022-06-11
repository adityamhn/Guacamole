import { Card, Divider, PageHeader, Row } from 'antd';
import React from 'react'
import Styles from '/styles/pages/Payment.module.scss';
import { IoIosClose } from "react-icons/io"
import { MdKeyboardArrowRight } from "react-icons/md"
import GButton from '../../components/GButton';
import { useRouter } from 'next/router';

const Payment = () => {
    const router = useRouter()
    return (
        <div className={Styles.paymentContainer}>
            <PageHeader
                onBack={() => router.back()}
                title="Pay Bill"
            />
            <Card bordered={false} className={Styles.paymentItemsCard}>
                <Row justify="space-between" align="middle" className={Styles.paymentItem}>
                    <div className={Styles.paymentItemTitle}><span style={{ marginRight: 12 }}>Chicken Burger</span><IoIosClose />1</div>
                    <div className={Styles.paymentItemPrice}>₹250</div>
                </Row>
                <Row justify="space-between" align="middle" className={Styles.paymentItem}>
                    <div className={Styles.paymentItemTitle}><span style={{ marginRight: 12 }}>Chicken Burger</span><IoIosClose />1</div>
                    <div className={Styles.paymentItemPrice}>₹250</div>
                </Row><Row justify="space-between" align="middle" className={Styles.paymentItem}>
                    <div className={Styles.paymentItemTitle}><span style={{ marginRight: 12 }}>Chicken Burger</span><IoIosClose />1</div>
                    <div className={Styles.paymentItemPrice}>₹250</div>
                </Row>

            </Card>

            <div className={Styles.sectionHeading}>Offers & benefits</div>
            <Card bordered={false} className={Styles.paymentItemsCard}>
                <Row align="middle" justify="space-between">
                    <div>Apply Coupon</div>
                    <MdKeyboardArrowRight style={{ fontSize: 18 }} />
                </Row>
            </Card>

            <div className={Styles.sectionHeading}>Bill Details</div>
            <Card bordered={false} className={Styles.paymentItemsCard}>
                <Row justify="space-between" align="middle" className={Styles.paymentItem}>
                    <div className={Styles.paymentItemTitle}>Items Total</div>
                    <div className={Styles.paymentItemPrice}>₹250</div>
                </Row>
                <Row justify="space-between" align="middle" className={Styles.paymentItem}>
                    <div className={Styles.paymentItemTitle}>GST <span style={{ marginLeft: 8, fontSize: ".7rem" }}>( 2.5% )</span></div>
                    <div className={Styles.paymentItemPrice}>₹25</div>
                </Row>
                <Divider className={Styles.divider} />
                <Row justify="space-between" align="middle" className={Styles.paymentItem}>
                    <div className={Styles.paymentItemTitle}>Discount <span style={{ marginLeft: 8, fontSize: ".7rem" }}>( 15% )</span></div>
                    <div className={Styles.paymentItemPrice}>- ₹25</div>
                </Row>
                <Divider className={Styles.divider} />
                <Row style={{ marginBottom: "1rem" }} justify="space-between" align="middle" className={Styles.paymentItem}>
                    <div className={Styles.paymentItemTitle}>Total Amount Payable</div>
                    <div className={Styles.paymentItemPrice}>₹2500</div>
                </Row>
            </Card>

            <GButton className={Styles.footerButton}>
                <div className={Styles.buttonText}>Pay</div>
            </GButton>
        </div>
    )
}

export default Payment