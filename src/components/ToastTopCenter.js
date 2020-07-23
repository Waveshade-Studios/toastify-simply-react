import React from "react";

const ToastTopCenter = ({ message, visible, type, hideOnTap }) => {
    return (
        <div onClick={hideOnTap} className={`${"toast"} ${visible ? "show" : "hide"}-${"top"} ${type} ${"top-center"}`}>{message}</div>
    );
}

export default ToastTopCenter;