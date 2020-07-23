function useToastType(toast, defaultOptions = {}) {
    const toastType = {
        warn: (message, options = defaultOptions) => toast(message, "warn", true, options),
        success: (message, options = defaultOptions) => toast(message, "success", true, options),
        error: (message, options = defaultOptions) => toast(message, "error", true, options),
        info: (message, options = defaultOptions) => toast(message, "info", true, options),
        primary: (message, options = defaultOptions) => toast(message, "primary", true, options),
    }

    return toastType;
}

export default useToastType;