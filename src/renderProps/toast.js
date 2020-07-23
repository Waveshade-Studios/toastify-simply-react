import { createRef } from "react";

const toastClass = (options = {}) => {
    class ToastRef {
        toastRef = createRef();
    }
    const toastRef = new ToastRef();
    return toastRef;
}

export default toastClass;