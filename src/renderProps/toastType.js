const toastType = (toast, defaultOptions = {}) => {
    const toastTypeConst = {
        warn: (message, options = defaultOptions) => toast(message, "warn", options),
        success: (message, options = defaultOptions) => toast(message, "success", options),
        error: (message, options = defaultOptions) => toast(message, "error", options),
        info: (message, options = defaultOptions) => toast(message, "info", options),
        primary: (message, options = defaultOptions) => toast(message, "primary", options),
    }

    return toastTypeConst;
}

export default toastType;