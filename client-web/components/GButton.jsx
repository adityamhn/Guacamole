import { Button } from "antd";
import React from "react";
import Styles from "/styles/components/GButton.module.scss";

const GButton = ({ children, secondary, className, ...props }) => {
  return (
    <Button
      className={`${Styles.GButton} ${
        secondary && Styles.GButtonSecondary
      } ${className}`}
      onClick={props.onClick}
      style={props.style}
      loading={props.loading}
      icon={props.icon}
      ghost={props.ghost}
      disabled={props.disabled}
      danger={props.danger}
      htmlType={props.htmlType}
    >
      {children}
    </Button>
  );
};

export default GButton;
