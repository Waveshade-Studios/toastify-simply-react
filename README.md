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

```markdown
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

### Contribution

##### Contributor
[Waveshade-Studios](https://github.com/Waveshade-Studios)
[rohit231095](https://github.com/rohit231095)

##### Anbody can contribute

```markdown
# Steps to contribute

## by coding some stuff together
- Fork the repository from `master` branch
- Fixed the things in your branch or forked repo
- Generated the pull request back to `master` branch to this library

## raise an issue
- Create an issue [here](http://github.com/Waveshade-Studios/toastify-simply-react/issues)
- Add required labels to it
- Issue will be reviewed, fixed and released as per the priority
```

### Financing

Any special requirement or feature will be handled at priority, with minimal financial assistance, you can [email us](mailto:waveshade.studios@gmail.com?subject=Proposal-Toastify-Simply-React) directly.