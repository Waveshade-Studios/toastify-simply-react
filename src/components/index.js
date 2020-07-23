// const { default: Toast } = require("./Toast");
// const { default: ToastTopLeft } = require("./ToastTopLeft");
// const { default: ToastTopRight } = require("./ToastTopRight");
// const { default: ToastTopCenter } = require("./ToastTopCenter");
// const { default: ToastBottomLeft } = require("./ToastBottomLeft");
// const { default: ToastBottomRight } = require("./ToastBottomRight");
// const { default: ToastBottomCenter } = require("./ToastBottomCenter");

// exports.Toast = Toast;
// exports.ToastTopLeft = ToastTopLeft;
// exports.ToastTopRight = ToastTopRight;
// exports.ToastTopCenter = ToastTopCenter;
// exports.ToastBottomLeft = ToastBottomLeft;
// exports.ToastBottomRight = ToastBottomRight;
// exports.ToastBottomCenter = ToastBottomCenter;

import ToastCom from "./Toast";

const components = { Toast: ToastCom };

export const Toast = ToastCom;
export default components;