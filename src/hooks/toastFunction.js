import { useState, useEffect } from "react";

function useToastFunction(toastRef) {
    const [toast, setToast] = useState(null);
    useEffect(() => {
        if (toastRef.current && toastRef.current.toast) {
            setToast(() => toastRef.current.toast);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [toastRef, toastRef.current]);
    return toast;
}

export default useToastFunction;