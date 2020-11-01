const toastType = (toast, defaultOptions = {}) => {
    const types = ["warn", "success", "error", "info", "primary"];
    const toastTypeConst = {};
    types.map(type => toastTypeConst[type] = (message, options = defaultOptions) => toast(message, type, options));
    return toastTypeConst;
}

export default toastType;