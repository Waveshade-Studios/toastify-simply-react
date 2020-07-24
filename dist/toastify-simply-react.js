

function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function useToastFunction(toastRef) {
  var _useState = React.useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      toast = _useState2[0],
      setToast = _useState2[1];

  React.useEffect(function () {
    if (toastRef.current && toastRef.current.toast) {
      setToast(function () {
        return toastRef.current.toast;
      });
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [toastRef, toastRef.current]);
  return toast;
}

function useToastType(toast) {
  var defaultOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var toastType = {
    warn: function warn(message) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions;
      return toast(message, "warn", true, options);
    },
    success: function success(message) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions;
      return toast(message, "success", true, options);
    },
    error: function error(message) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions;
      return toast(message, "error", true, options);
    },
    info: function info(message) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions;
      return toast(message, "info", true, options);
    },
    primary: function primary(message) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions;
      return toast(message, "primary", true, options);
    }
  };
  return toastType;
}

function useToast() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var toastRef = React.useRef();
  var toast = useToastFunction(toastRef);
  var toastType = useToastType(toast, options);
  return [toastType, toastRef];
}

// const { default: useToast } = require("./toast");
var useToast$1 = useToast;

___$insertStyle(".toast {\n  position: fixed;\n  z-index: 1000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 240px;\n  max-width: 480px;\n  padding: 10px;\n  transition-property: all;\n  transition-duration: 0.5s;\n  font-weight: 800;\n  font-size: 18px;\n  word-break: break-all;\n  cursor: pointer;\n  border-radius: 5px;\n  border-width: 0.2px;\n  border-style: dashed;\n  box-shadow: 0 4px 8px 0 #33455a64;\n}\n.toast:hover {\n  box-shadow: 0 8px 16px 0 #33455a64;\n}\n.toast.top-right {\n  right: 10px;\n  top: 10px;\n}\n.toast.bottom-right {\n  right: 10px;\n  bottom: 10px;\n}\n.toast.top-left {\n  left: 10px;\n  top: 10px;\n}\n.toast.bottom-left {\n  left: 10px;\n  bottom: 10px;\n}\n.toast.top-center {\n  left: 50%;\n  transform: translate(-50%, 0);\n  top: 10px;\n}\n.toast.bottom-center {\n  left: 50%;\n  transform: translate(-50%, 0);\n  bottom: 10px;\n}\n.toast.show-left {\n  margin-left: 0px;\n}\n.toast.show-right {\n  margin-right: 0px;\n}\n.toast.show-top {\n  margin-top: 0px;\n}\n.toast.show-bottom {\n  margin-bottom: 0px;\n}\n.toast.hide-left {\n  margin-left: -1000px;\n}\n.toast.hide-right {\n  margin-right: -1000px;\n}\n.toast.hide-top {\n  margin-top: -1000px;\n}\n.toast.hide-bottom {\n  margin-bottom: -1000px;\n}\n.toast.error {\n  background-color: #f44336;\n  color: #000000;\n  border-color: #000000;\n}\n.toast.warn {\n  background-color: #ffeb3b;\n  color: #455a64;\n  border-color: #455a64;\n}\n.toast.success {\n  background-color: #8bc34a;\n  color: #000000;\n  border-color: #000000;\n}\n.toast.info {\n  background-color: #ffffff;\n  color: #455a64;\n  border-color: #455a64;\n}\n.toast.primary {\n  background-color: #03a9f4;\n  color: #000000;\n  border-color: #000000;\n}");

var ToastTopRight = function ToastTopRight(_ref) {
  var message = _ref.message,
      visible = _ref.visible,
      type = _ref.type,
      hideOnTap = _ref.hideOnTap;
  return /*#__PURE__*/React__default.createElement("div", {
    onClick: hideOnTap,
    className: "toast".concat(" ", visible ? "show" : "hide", "-", "right", " ").concat(type, " ", "top-right")
  }, message);
};

var ToastTopLeft = function ToastTopLeft(_ref) {
  var message = _ref.message,
      visible = _ref.visible,
      type = _ref.type,
      hideOnTap = _ref.hideOnTap;
  return /*#__PURE__*/React__default.createElement("div", {
    onClick: hideOnTap,
    className: "toast".concat(" ", visible ? "show" : "hide", "-", "left", " ").concat(type, " ", "top-left")
  }, message);
};

var ToastTopCenter = function ToastTopCenter(_ref) {
  var message = _ref.message,
      visible = _ref.visible,
      type = _ref.type,
      hideOnTap = _ref.hideOnTap;
  return /*#__PURE__*/React__default.createElement("div", {
    onClick: hideOnTap,
    className: "toast".concat(" ", visible ? "show" : "hide", "-", "top", " ").concat(type, " ", "top-center")
  }, message);
};

var ToastBottomRight = function ToastBottomRight(_ref) {
  var message = _ref.message,
      visible = _ref.visible,
      type = _ref.type,
      hideOnTap = _ref.hideOnTap;
  return /*#__PURE__*/React__default.createElement("div", {
    onClick: hideOnTap,
    className: "toast".concat(" ", visible ? "show" : "hide", "-", "right", " ").concat(type, " ", "bottom-right")
  }, message);
};

var ToastBottomLeft = function ToastBottomLeft(_ref) {
  var message = _ref.message,
      visible = _ref.visible,
      type = _ref.type,
      hideOnTap = _ref.hideOnTap;
  return /*#__PURE__*/React__default.createElement("div", {
    onClick: hideOnTap,
    className: "toast".concat(" ", visible ? "show" : "hide", "-", "left", " ").concat(type, " ", "bottom-left")
  }, message);
};

var ToastBottomCenter = function ToastBottomCenter(_ref) {
  var message = _ref.message,
      visible = _ref.visible,
      type = _ref.type,
      hideOnTap = _ref.hideOnTap;
  return /*#__PURE__*/React__default.createElement("div", {
    onClick: hideOnTap,
    className: "toast".concat(" ", visible ? "show" : "hide", "-", "bottom", " ").concat(type, " ", "bottom-center")
  }, message);
};

var Toast = /*#__PURE__*/function (_Component) {
  _inherits(Toast, _Component);

  var _super = _createSuper(Toast);

  function Toast() {
    var _this;

    _classCallCheck(this, Toast);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      visible: false,
      type: "",
      message: "",
      transitionDirection: "right",
      position: "top-right",
      timeout: 5000
    });

    _defineProperty(_assertThisInitialized(_this), "toastTimeout", null);

    _defineProperty(_assertThisInitialized(_this), "throwToast", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(message, type, visible, options) {
        var transitionDirection, position, timeout;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                transitionDirection = options.transitionDirection, position = options.position, timeout = options.timeout;

                _this.setState({
                  transitionDirection: transitionDirection || "right",
                  position: position || "top-right",
                  timeout: timeout || 5000
                }, function () {
                  setTimeout(function () {
                    _this.setState({
                      message: message,
                      type: type,
                      visible: visible
                    }, function () {
                      _this.toastTimeout = setTimeout(function () {
                        if (_this.state.visible) {
                          _this.setState({
                            visible: false
                          });
                        }
                      }, _this.state.timeout);
                    });
                  }, 10);
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2, _x3, _x4) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "toast", function (message, type) {
      var visible = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (_this.state.visible) {
        clearTimeout(_this.toastTimeout);

        _this.setState({
          visible: false
        }, function () {
          setTimeout(function () {
            _this.throwToast(message, type, visible, options);
          }, 500);
        });
      } else {
        _this.throwToast(message, type, visible, options);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "closeToast", function () {
      clearTimeout(_this.toastTimeout);

      _this.setState({
        visible: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderToast", function (message, visible, type) {
      var _this$state = _this.state,
          transitionDirection = _this$state.transitionDirection,
          position = _this$state.position;

      if (transitionDirection === "right" && position === "top-right") {
        return /*#__PURE__*/React__default.createElement(ToastTopRight, {
          message: message,
          visible: visible,
          type: type,
          hideOnTap: _this.closeToast
        });
      }

      if (transitionDirection === "left" && position === "top-left") {
        return /*#__PURE__*/React__default.createElement(ToastTopLeft, {
          message: message,
          visible: visible,
          type: type,
          hideOnTap: _this.closeToast
        });
      }

      if (transitionDirection === "top" && position === "top-center") {
        return /*#__PURE__*/React__default.createElement(ToastTopCenter, {
          message: message,
          visible: visible,
          type: type,
          hideOnTap: _this.closeToast
        });
      }

      if (transitionDirection === "right" && position === "bottom-right") {
        return /*#__PURE__*/React__default.createElement(ToastBottomRight, {
          message: message,
          visible: visible,
          type: type,
          hideOnTap: _this.closeToast
        });
      }

      if (transitionDirection === "left" && position === "bottom-left") {
        return /*#__PURE__*/React__default.createElement(ToastBottomLeft, {
          message: message,
          visible: visible,
          type: type,
          hideOnTap: _this.closeToast
        });
      }

      if (transitionDirection === "bottom" && position === "bottom-center") {
        return /*#__PURE__*/React__default.createElement(ToastBottomCenter, {
          message: message,
          visible: visible,
          type: type,
          hideOnTap: _this.closeToast
        });
      }
    });

    return _this;
  }

  _createClass(Toast, [{
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          message = _this$state2.message,
          visible = _this$state2.visible,
          type = _this$state2.type;
      return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, this.renderToast(message, visible, type));
    }
  }]);

  return Toast;
}(React.Component);

// const { default: Toast } = require("./Toast");
var Toast$1 = Toast;

var toastClass = function toastClass() {

  var ToastRef = function ToastRef() {
    _classCallCheck(this, ToastRef);

    _defineProperty(this, "toastRef", /*#__PURE__*/React.createRef());
  };

  var toastRef = new ToastRef();
  return toastRef;
};

var toastType = function toastType(toast) {
  var defaultOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var toastTypeConst = {
    warn: function warn(message) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions;
      return toast(message, "warn", true, options);
    },
    success: function success(message) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions;
      return toast(message, "success", true, options);
    },
    error: function error(message) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions;
      return toast(message, "error", true, options);
    },
    info: function info(message) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions;
      return toast(message, "info", true, options);
    },
    primary: function primary(message) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions;
      return toast(message, "primary", true, options);
    }
  };
  return toastTypeConst;
};

var toastFunction = function toastFunction(toastRef) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var toast = toastRef.current.toast;
  var toastTypeConst = toastType(toast, options);
  return toastTypeConst;
};

// const { default: toastClass } = require("./toast");
var toastClass$1 = toastClass;
var toastFunction$1 = toastFunction;

exports.useToast = useToast$1;
exports.Toast = Toast$1;
exports.toastClass = toastClass$1;
exports.toastFunction = toastFunction$1;
//# sourceMappingURL=toastify-simply-react.js.map
