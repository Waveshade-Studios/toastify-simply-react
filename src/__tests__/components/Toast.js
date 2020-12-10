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
    it("close the toast by clicking", () => {
        const msg = "test message";
        toast.info(msg);
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
});
