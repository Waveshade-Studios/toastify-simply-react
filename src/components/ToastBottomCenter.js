import React from "react";

const ToastBottomCenter = ({ message, visible, type, hideOnTap }) => {
    return (
        <div onClick={hideOnTap} className={`${"toast"} ${visible ? "show" : "hide"}-${"bottom"} ${type} ${"bottom-center"}`}>{message}</div>
    );
}

export default ToastBottomCenter;