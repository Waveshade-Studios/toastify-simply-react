function useToastType(toast, defaultOptions = {}) {
    const types = ["warn", "success", "error", "info", "primary"];
    const toastType = {};
    types.map(type => toastType[type] = (message, options = defaultOptions) => toast(message, type, options));
    return toastType;
}

export default useToastType;