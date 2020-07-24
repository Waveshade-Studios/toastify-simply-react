## Toastify-Simply-React

Just toasts got better and simpler

### Installation

```markdown
# yarn add toastify-simply-react

**or**

# npm install --save toastify-simply-react
```

### Available props list

Prop | Type | Description
---- | ---- | -----------
Toast | component | main component to show or render toast in your react component
useToast | hook | can be used in functional component, to call `toast` object and `toastRef` to get `Toast` component reference
toastClass | function | used in class components to get the `toastRef` for `Toast` component reference
toastFunction | function | used in class components with `toastClass` to call the `toast` object
toast | object | used to throw toast, received from `toastRef` using `useToast` or `toastFunction`
transitionDirection | string | toast slide in direction option, depends on `position`, default value `right`
position | string | toast position option, depends on `transitionDirection`, default value `top-right`
timeout | number | toast show timeout, default value `5000`

### How to use

It's quiet simple

```jsx
## With hooks

import {useToast, Toast} from "toastify-simply-react";

function MyComponent() {
    const [toast, toastRef] = useToast(); // generate toast and toastRef

    return (
        <div>
            <button onClick={() => toast.primary("Hello!")}>show toast</button>

            <Toast ref={toastRef} /> // Toast component
        </div>
    );
}

## With functions

import {toastClass, toastFunction, Toast} from "toastify-simply-react";

class MyComponent extends Component{
    toastRef = toastClass(); // generate toastRef

    componentDidMount() {
        this.toast = toastFunction(toastRef); // generate toast
    }

    render() {
        return (
            <div>
                <button onClick={() => this.toast.primary("Hello!")}>show toast</button>

                <Toast ref={this.toastRef} /> // Toast component
            </div>
        );
    }
}
```

### Types of toast

Type | Method | Colors
---- | ------ | ------
primary | toast.primary(message, options) | {background-color: #03a9f4, text-color: #000000, border-color: #000000}
success | toast.success(message, options) | {background-color: #8bc34a, text-color: #000000, border-color: #000000}
warn | toast.warn(message, options) | {background-color: #ffeb3b, text-color: #455a64, border-color: #455a64}
error | toast.error(message, options) | {background-color: #f44336, text-color: #000000, border-color: #000000}
info | toast.info(message, options) | {background-color: #ffffff, text-color: #455a64, border-color: #455a64}

##### Args

Args | Type | Description
---- | ---- | -----------
message | string | message to be displayed inside toast
options | object | available properties to change default toast props

##### Options

Option | Type | Description
------ | ---- | -----------
transitionDirection | string | toast slide in direction option, depends on `position`, default value `right`
position | string | toast position option, depends on `transitionDirection`, default value `top-right`
timeout | number | toast show timeout, default value `5000`

### Modifying default toast props

```jsx
// inside hook default to all toasts
useToast({
    transitionDirection: "left"
    position: "bottom-left"
    timeout: 15000
})

//inside toastFunction default to all toasts
toastFunction(this.toastRef, {
    transitionDirection: "left"
    position: "bottom-left"
    timeout: 15000
})

// for individual toast
toast.success("Hello", {
    transitionDirection: "left"
    position: "bottom-left"
    timeout: 15000
})

**or**

this.toast.success("Hello", {
    transitionDirection: "left"
    position: "bottom-left"
    timeout: 15000
})
```

### transitionDirection and position valid combinations

transitionDirection | position
------------------- | --------
right | top-right
left | top-left
top | top-center
right | bottom-right
left | bottom-left
bottom | bottom-center

### Documentation
[Docs](https://waveshade-studios.github.io/toastify-simply-react)

### Contribution

##### Contributors

<a href="https://github.com/rohit231095"><img src="http://i.imgur.com/XHjuWgo.png" width="40" height="40" style="border-radius:50%;" /></a> <a href="https://github.com/Waveshade-Studios"><img src="https://avatars1.githubusercontent.com/u/68241259?s=60&v=4" width="40" height="40" style="border-radius:50%;" /></a>

##### Anbody can contribute

```markdown
# Ways to contribute

## by coding some stuff together
- Fork the repository from `master` branch
- Fixed the things in your branch or forked repo
- Generated the pull request back to `master` branch to this library

## raise an issue
- Create an issue [here](https://github.com/Waveshade-Studios/toastify-simply-react/issues)
- Add required labels to it
- Issue will be reviewed, fixed and released as per the priority
```

### Financing

Any special requirement or feature will be handled at priority, with minimal financial assistance, you can [email us](mailto:waveshade.studios@gmail.com?subject=Proposal-Toastify-Simply-React) directly.

# Release Notes

Latest release [here](https://github.com/Waveshade-Studios/toastify-simply-react/releases/tag/v1.0.3)
All releases [here](https://github.com/Waveshade-Studios/toastify-simply-react/releases)