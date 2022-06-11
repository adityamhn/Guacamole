import React from 'react'
import Styles from '/styles/pages/Order.module.scss';
import { IoIosClose } from "react-icons/io"
import GButton from '/components/GButton';
import { useRouter } from 'next/router';

const OrderId = () => {
    const router = useRouter()
    return (
        <div className={Styles.orderContainer}>
            <div className={Styles.order}>

                <div className={Styles.title}>Hurray!!</div>
                <div className={Styles.subtitle}>Your order has been sent to the kitchen, waiter will be at your table soon with the order.</div>

                <div className={Styles.orderItem}><span style={{ marginRight: 24 }}>Chicken Burger</span><IoIosClose />1</div>
                <div className={Styles.orderItem}><span style={{ marginRight: 24 }}>Chicken Burger</span><IoIosClose />1</div>
                <div className={Styles.orderItem}><span style={{ marginRight: 24 }}>Chicken Burger</span><IoIosClose />1</div>
                <div className={Styles.orderItem}><span style={{ marginRight: 24 }}>Chicken Burger</span><IoIosClose />1</div>
                <div className={Styles.orderItem}><span style={{ marginRight: 24 }}>Chicken Burger</span><IoIosClose />1</div>


                <GButton className={Styles.okButton} onClick={() => router.back()}>Okayy</GButton>
            </div>
        </div>
    )
}

export default OrderId