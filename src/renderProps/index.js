// const { default: toastClass } = require("./toast");
// const { default: toastFunction } = require("./toastFunction");
// const { default: toastType } = require("./toastType");

// exports.toastClass = toastClass;
// exports.toastFunction = toastFunction;
// exports.toastType = toastType;

import toast from "./toast";
import toastFunc from "./toastFunction";

const renderProps = {
    toastClass: toast,
    toastFunction: toastFunc
};

export const toastClass = toast;
export const toastFunction = toastFunc;
export default renderProps;