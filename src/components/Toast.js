import React, { Component } from "react";
import "../scss/components/Toast.scss";
import ToastTopRight from "./ToastTopRight";
import ToastTopLeft from "./ToastTopLeft";
import ToastTopCenter from "./ToastTopCenter";
import ToastBottomRight from "./ToastBottomRight";
import ToastBottomLeft from "./ToastBottomLeft";
import ToastBottomCenter from "./ToastBottomCenter";

class Toast extends Component {
    state = {
        visible: false,
        type: "",
        message: "",
        transitionDirection: "right",
        position: "top-right",
        timeout: 5000
    }
    toastTimeout = null;
    throwToast = async (message, type, visible, options) => {
        const { transitionDirection, position, timeout } = options;
        this.setState({ transitionDirection: transitionDirection || "right", position: position || "top-right", timeout: timeout || 5000 }, () => {
            setTimeout(() => {
                this.setState({ message, type, visible }, () => {
                    this.toastTimeout = setTimeout(() => {
                        if (this.state.visible) {
                            this.setState({ visible: false });
                        }
                    }, this.state.timeout);
                });
            }, 10);
        });
    }
    toast = (message, type, visible = true, options = {}) => {
        if (this.state.visible) {
            clearTimeout(this.toastTimeout);
            this.setState({ visible: false }, () => {
                setTimeout(() => {
                    this.throwToast(message, type, visible, options);
                }, 500);
            })
        } else {
            this.throwToast(message, type, visible, options);
        }
    }
    closeToast = () => {
        clearTimeout(this.toastTimeout);
        this.setState({ visible: false });
    }
    renderToast = (message, visible, type) => {
        const { transitionDirection, position } = this.state;
        if (transitionDirection === "right" && position === "top-right") {
            return <ToastTopRight message={message} visible={visible} type={type} hideOnTap={this.closeToast} />;
        }
        if (transitionDirection === "left" && position === "top-left") {
            return <ToastTopLeft message={message} visible={visible} type={type} hideOnTap={this.closeToast} />;
        }
        if (transitionDirection === "top" && position === "top-center") {
            return <ToastTopCenter message={message} visible={visible} type={type} hideOnTap={this.closeToast} />;
        }
        if (transitionDirection === "right" && position === "bottom-right") {
            return <ToastBottomRight message={message} visible={visible} type={type} hideOnTap={this.closeToast} />;
        }
        if (transitionDirection === "left" && position === "bottom-left") {
            return <ToastBottomLeft message={message} visible={visible} type={type} hideOnTap={this.closeToast} />;
        }
        if (transitionDirection === "bottom" && position === "bottom-center") {
            return <ToastBottomCenter message={message} visible={visible} type={type} hideOnTap={this.closeToast} />;
        }
    }
    render() {
        const { message, visible, type } = this.state;
        return (<>{this.renderToast(message, visible, type)}</>);
    }
}

export default Toast;