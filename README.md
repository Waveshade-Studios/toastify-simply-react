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
useToast | hook | can be used in functional component, to call `toast` function and `toastRef` to get `Toast` component reference
toastClass | function | used in class components to get the `toastRef` for `Toast` component reference
toastFunction | function | used in class components with `toastClass` to call the `toast` method
toast | function | used to throw toast received from `toastRef` using `useToast` or `toastFunction`
transitionDirection | string | toast slide in direction option, depends on `position`, default value `right`
position | string | toast position option, depends on `transitionDirection`, default value `top-right`
timeout | number | toast show timeout, default value `5000`

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/Waveshade-Studios/toastify-simply-react/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.
