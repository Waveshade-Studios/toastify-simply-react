import React from "react";

const ToastBottomLeft = ({ message, visible, type, hideOnTap }) => {
    return (
        <div onClick={hideOnTap} className={`${"toast"} ${visible ? "show" : "hide"}-${"left"} ${type} ${"bottom-left"}`}>{message}</div>
    );
}

export default ToastBottomLeft;