import React from "react";

const ToastBottomRight = ({ message, visible, type, hideOnTap }) => {
    return (
        <div onClick={hideOnTap} className={`${"toast"} ${visible ? "show" : "hide"}-${"right"} ${type} ${"bottom-right"}`}>{message}</div>
    );
}

export default ToastBottomRight;