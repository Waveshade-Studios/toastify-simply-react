import React from "react";

const ToastTopLeft = ({ message, visible, type, hideOnTap }) => {
    return (
        <div onClick={hideOnTap} className={`${"toast"} ${visible ? "show" : "hide"}-${"left"} ${type} ${"top-left"}`}>{message}</div>
    );
}

export default ToastTopLeft;