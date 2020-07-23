import toastType from "./toastType";

const toastFunction = (toastRef, options = {}) => {
    const toast = toastRef.current.toast;
    const toastTypeConst = toastType(toast, options);
    return toastTypeConst;
}

export default toastFunction;