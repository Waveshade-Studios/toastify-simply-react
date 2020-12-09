import React from "react";
import { mount, shallow } from "enzyme";
import { Toast } from "../../components";
import { useToast } from "../../hooks";

let toast;
let wrapper = {};

const testShallow = () => {
    const MyTestComponent = () => {
        const [toast, toastRef] = useToast();
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
        const [toast, toastRef] = useToast();
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
