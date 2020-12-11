import React from "react";
import { mount, shallow } from "enzyme";
import { Toast } from "../../components";
import { useToast } from "../../hooks";

let toast;
let wrapper = {};

const testShallow = () => {
    const MyTestComponent = () => {
        const [toast, toastRef] = useToast({ timeout: 5000, transitionDirection: "top", position: "top-left" });
        return (
            <div>
                <Toast ref={toastRef} />
            </div>
        );
    }
    wrapper["shallow"] = shallow(<MyTestComponent />);
}

const testMount = () => {
    let toastF;
    const MyTestComponent = () => {
        const [toast, toastRef] = useToast({ timeout: 5000, transitionDirection: "top", position: "top-left" });
        toastF = toast;
        return (
            <div>
                <Toast ref={toastRef} />
            </div>
        );
    }
    wrapper["mount"] = mount(<MyTestComponent />);
    return toastF;
}

testShallow();
toast = testMount();

describe("Test Component", () => {
    it("test component should render correctly", () => {
        expect(wrapper.shallow).toMatchSnapshot();
    });
    it("render a toast message", () => {
        const msg = "test message";
        toast.info(msg);
        expect(wrapper.mount.text()).toContain(msg);
    });
});

describe("Test functionalities", () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });
    it("close the toast by clicking", () => {
        const msg = "test message";
        toast.info(msg, { timeout: 1000 });
        expect(wrapper.mount.find(".toast").length).toEqual(1);
        wrapper.mount.find(".toast").simulate("click");
        expect(wrapper.mount.contains(msg)).toEqual(true);
    });
    it("toast object should have all props", () => {
        expect(toast).toHaveProperty("info");
        expect(toast).toHaveProperty("primary");
        expect(toast).toHaveProperty("warn");
        expect(toast).toHaveProperty("success");
        expect(toast).toHaveProperty("error");
    });
    it("change optional params", () => {
        toast.info("test info type", { timeout: 15000, transitionDirection: "left", position: "top-left" });
        expect(wrapper.mount.text()).toContain("test info type");
        toast.warn("test warn type", { timeout: 15000, transitionDirection: "left", position: "top-left" });
        expect(wrapper.mount.text()).toContain("test warn type");
        toast.primary("test primary type", { timeout: 15000, transitionDirection: "left", position: "top-left" });
        expect(wrapper.mount.text()).toContain("test primary type");
        toast.success("test success type", { timeout: 15000, transitionDirection: "left", position: "top-left" });
        expect(wrapper.mount.text()).toContain("test success type");
        toast.error("test error type", { timeout: 15000, transitionDirection: "left", position: "top-left" });
        expect(wrapper.mount.text()).toContain("test error type");
    });
    it("try different postion and transitionDirection combinations", () => {
        toast.info("test postion: top-left, transitionDirection: top", { timeout: 15000, transitionDirection: "top", position: "top-left" });
        expect(wrapper.mount.text()).toContain("test postion: top-left, transitionDirection: top");
        toast.info("test postion: top-left, transitionDirection: left", { timeout: 15000, transitionDirection: "left", position: "top-left" });
        expect(wrapper.mount.text()).toContain("test postion: top-left, transitionDirection: left");
        toast.info("test postion: top-right, transitionDirection: top", { timeout: 15000, transitionDirection: "top", position: "top-right" });
        expect(wrapper.mount.text()).toContain("test postion: top-right, transitionDirection: top");
        toast.info("test postion: top-right, transitionDirection: right", { timeout: 15000, transitionDirection: "right", position: "top-right" });
        expect(wrapper.mount.text()).toContain("test postion: top-right, transitionDirection: right");
        toast.info("test postion: top-center, transitionDirection: top", { timeout: 15000, transitionDirection: "top", position: "top-center" });
        expect(wrapper.mount.text()).toContain("test postion: top-center, transitionDirection: top");
        toast.info("test postion: bottom-left, transitionDirection: bottom", { timeout: 15000, transitionDirection: "bottom", position: "bottom-left" });
        expect(wrapper.mount.text()).toContain("test postion: bottom-left, transitionDirection: bottom");
        toast.info("test postion: bottom-left, transitionDirection: left", { timeout: 15000, transitionDirection: "left", position: "bottom-left" });
        expect(wrapper.mount.text()).toContain("test postion: bottom-left, transitionDirection: left");
        toast.info("test postion: bottom-right, transitionDirection: bottom", { timeout: 15000, transitionDirection: "bottom", position: "bottom-right" });
        expect(wrapper.mount.text()).toContain("test postion: bottom-right, transitionDirection: bottom");
        toast.info("test postion: bottom-right, transitionDirection: right", { timeout: 15000, transitionDirection: "right", position: "bottom-right" });
        expect(wrapper.mount.text()).toContain("test postion: bottom-right, transitionDirection: right");
        toast.info("test postion: bottom-center, transitionDirection: bottom", { timeout: 15000, transitionDirection: "bottom", position: "bottom-center" });
        expect(wrapper.mount.text()).toContain("test postion: bottom-center, transitionDirection: bottom");
    });
    it("try wrong transitionDirection values", () => {
        toast.info("test postion: top-left, transitionDirection: left", { timeout: 15000, transitionDirection: "right", position: "top-left" });
        expect(wrapper.mount.text()).toContain("test postion: top-left, transitionDirection: left");
        toast.info("test postion: top-right, transitionDirection: right", { timeout: 15000, transitionDirection: "left", position: "top-right" });
        expect(wrapper.mount.text()).toContain("test postion: top-right, transitionDirection: right");
        toast.info("test postion: top-center, transitionDirection: top", { timeout: 15000, transitionDirection: "center", position: "top-center" });
        expect(wrapper.mount.text()).toContain("test postion: top-center, transitionDirection: top");
        toast.info("test postion: bottom-left, transitionDirection: left", { timeout: 15000, transitionDirection: "right", position: "bottom-left" });
        expect(wrapper.mount.text()).toContain("test postion: bottom-left, transitionDirection: left");
        toast.info("test postion: bottom-right, transitionDirection: right", { timeout: 15000, transitionDirection: "left", position: "bottom-right" });
        expect(wrapper.mount.text()).toContain("test postion: bottom-right, transitionDirection: right");
        toast.info("test postion: bottom-center, transitionDirection: bottom", { timeout: 15000, transitionDirection: "center", position: "bottom-center" });
        expect(wrapper.mount.text()).toContain("test postion: bottom-center, transitionDirection: bottom");
    });
    it("try multiple toasts of variable timeout", () => {
        toast.info("timeout: 1000", { timeout: 1000 });
        expect(wrapper.mount.text()).toContain("timeout: 1000");
        toast.info("timeout: 25000", { timeout: 25000 });
        expect(wrapper.mount.text()).toContain("timeout: 25000");
        toast.info("timeout: 1000", { timeout: 1000 });
        expect(wrapper.mount.text()).toContain("timeout: 1000");
        toast.info("timeout: 3000", { timeout: 3000 });
        expect(wrapper.mount.text()).toContain("timeout: 3000");
    });
});
