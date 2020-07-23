// const { default: useToast } = require("./toast");
// const { default: useToastFunction } = require("./toastFunction");
// const { default: useToastType } = require("./toastType");

// exports.useToast = useToast;
// exports.useToastFunction = useToastFunction;
// exports.useToastType = useToastType;

import toastHook from "./toast";

const hooks = { useToast: toastHook };

export const useToast = toastHook;
export default hooks;