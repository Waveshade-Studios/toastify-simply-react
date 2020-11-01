import React, { Component } from "react";
import "../scss/components/Toast.scss";

class Toast extends Component {
    state = {
        visible: false,
        type: "primary",
        message: "",
        transitionDirection: "right",
        position: "top-right",
        timeout: 5000
    }
    toastTimeout = null;
    throwToast = (message, type, options) => {
        const { transitionDirection, position, timeout } = options;
        const validPositions = ["top-right", "top-left", "top-center", "bottom-right", "bottom-left", "bottom-center"];
        const validTypes = ["warn", "success", "error", "info", "primary"];
        this.setState({ message, type: [...validTypes].includes(type) ? type : "primary", transitionDirection, position: [...validPositions].includes(position) ? position || "top-right" : "top-right", timeout: timeout || 5000 }, () => {
            setTimeout(() => {
                this.setState({ visible: true }, () => {
                    this.toastTimeout = setTimeout(() => {
                        if (this.state.visible) {
                            this.setState({ visible: false });
                        }
                    }, this.state.timeout);
                });
            }, 250);
        });
    }
    toast = (message, type, options = {}) => {
        if (this.state.visible) {
            clearTimeout(this.toastTimeout);
            this.setState({ visible: false }, () => {
                setTimeout(() => {
                    this.throwToast(message, type, options);
                }, 250);
            });
        } else {
            this.throwToast(message, type, options);
        }
    }
    closeToast = () => {
        clearTimeout(this.toastTimeout);
        this.setState({ visible: false });
    }
    determineShiftDirection = (position, transitionDirection) => {
        const directions = position.split("-");
        if (directions.includes("center")) {
            return directions[0];
        } else {
            if (directions.includes(transitionDirection)) {
                return transitionDirection;
            } else {
                return directions[1];
            }
        }
    }
    renderToast = (message, visible, type) => {
        const { transitionDirection, position } = this.state;
        const shiftDirection = this.determineShiftDirection(position, transitionDirection);
        return <div onClick={this.closeToast} className={`${"toast"} ${visible ? "show" : "hide"}-${shiftDirection} ${type} ${position}`}>{message}</div>
    }
    render() {
        const { message, visible, type } = this.state;
        return (<>{this.renderToast(message, visible, type)}</>);
    }
}

export default Toast;