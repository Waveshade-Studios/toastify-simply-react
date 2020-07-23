import React from "react";

const ToastTopRight = ({ message, visible, type, hideOnTap }) => {
    return (
        <div onClick={hideOnTap} className={`${"toast"} ${visible ? "show" : "hide"}-${"right"} ${type} ${"top-right"}`}>{message}</div>
    );
}

export default ToastTopRight;