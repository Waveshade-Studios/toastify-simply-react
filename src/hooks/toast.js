import { useRef } from "react";
import useToastFunction from "./toastFunction";
import useToastType from "./toastType";

function useToast(options = {}) {
    const toastRef = useRef();
    const toast = useToastFunction(toastRef);
    const toastType = useToastType(toast, options);
    return [toastType, toastRef];
}

export default useToast;