# Hi, I'm so glad you're here <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="25px">

## About Project

This is a pre-built `nextjs` project that combines the [`Atomic Design`](https://www.google.com](https://atomicdesign.bradfrost.com/chapter-2/)) structure with `eslint` and `prettier` to make a fantastic structure.

## Getting Started Guide

if you run the project for the first time, run `yarn && yarn build && yarn start` command

#### To run project
```
yarn && yarn start
```

#### To run storybook
```
Change branch `develop-db`, default branch is `develop`
#### yarn && yarn sb
```

#### To create `component`, `container`, `page`
```
yarn gen:component,
yarn gen:container, 
yarn gen:page
```

## Languages and Frameworks

- NextJS v12.1.6
- TypeScript v4.7.2
- Storybook v6
- ESLint + Prettier
- Hygen
- Husky + Lint-staged
- Atomic Design


## Files/Directories

| Path                    | Purpose                                                            |
| ----------------------- | ------------------------------------------------------------------ |
| /.storybook/            | contains Storybook config files                                    |
| /.eslintrc              | settings for `ESLint`                                              |
| /.husky                 | settings for `Husky`                                               |
| /.hygen.js              | settings for `Hygen`                                               |
| /\_templates/           | contains scaffolding templates based on `Hygen`                    |
| /.vscode/               | settings for `Visual Studio Code` workspace                        |
| /tsconfig.json          | settings for `TypeScript`                                          |
| /public/                | root folder that gets served up as our next app.                   |
| /src/components/        | contains Atomic Design components                                  |
| /src/container/         | contains Logic handler                                             |
| /src/pages/             | handle fetching data api                                           |
| /src/assets/            | contains images, icons, fonts, dummyData                           |
| /src/store/             | contains shared store (Redux, Recoil,...)                          |
| /src/types/             | contains shared types                                              |
| /src/services/          | contains shared services                                           |
| /src/hooks/             | contains custom hooks                                              |
| /src/utils/             | contains functions, schemas, constants, ...others                  |
| /src/styles/            | contains styles: breakpoints, colors, font, mixin, function, global|

## Command Line

| Path             | Purpose                             |
| ---------------- | ----------------------------------- |
| yarn dev         | start the project                   |
| gen:page         | generate new page                   |
| gen:component    | generate new component              |
| gen:container    | generate new container              |
| yarn sb          | run the storybook                   |
| yarn lint        | run to check the syntax             |
| yarn lint:fix    | run to fix the syntax               |
| yarn prettier    | run to format code                  |

---

## Note for Error

If `prettier` not working when save, install `prettier` extension in vscode and set it as defaukt
...

---

### `Abem`

<https://css-tricks.com/abem-useful-adaptation-bem/>

**Note: Use only the `Single_Underscore(_) && Single-Dash(-)` format for `className`.**

```tsx
//GOOD 🏆🏆🏆
export const Sample = () => (
  <div className='a-sample'>
    <span className='a-sample_title'>Title</span>
  </div>
);

//NOT GOOD 💩💩💩
export const Sample = () => (
  <div className='a--sample'>
    <span className='a--sample__title'>Title</span>
  </div>
);
```

**Note: The `className` must be formatted as `block_element-modifier`. But `Sometimes` it will be formatted as `block_element_element-modifier`.**

```tsx
//GOOD 🏆🏆🏆
export const Sample = () => (
  <div className='a-sample'>
    <span className='a-sample_element'>One Element</span>
  </div>
);

export const Sample = () => (
  <div className='a-sample'>
    <span className='a-sample_element1_element2'>Two elements</span>
  </div>
);

export const Sample = () => (
  <div className='a-sample'>
    <span className='a-sample_element1_element2-primary'>Two elements</span>
  </div>
);

//NOT GOOD 💩💩💩
export const Sample = () => (
  <div className='a-sample'>
    <span className='a-sample_element1_element2_element3'>Greater than 2 elements</span>
  </div>
);
```

### `Components`

- Use only `React-Hook`
- Follow the `rules of hook` (<https://reactjs.org/docs/hooks-rules.html>)


**Note: Use `// eslint-disable-next-line react-hooks/exhaustive-deps` when you want to avoid checking of the `useEffect` syntax (also on `useMemo & useCallback`)**

```tsx
  useEffect(() => {
    Todo Something...
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
```

**Note: Use simple syntax when the component has no properties.**

```tsx
//GOOD 🏆🏆🏆
export const Component = () => <div>Without children...</div>;

export const Component: React.FC = ({ children }) => <div>{children}</div>;

//NOT GOOD 💩💩💩
export const Component: React.FC = () => <div>Without children...</div>;
```

**Note: Clearly define the data type of the property.**

```tsx
//GOOD 🏆🏆🏆
interface Props {
  title: string;
}

//NOT GOOD 💩💩💩
interface Props {
  title: any;
}
```

**Note: Please leave TODO when you encounter some unresolved issues immediately.**

```tsx
export const Component = () => {
  // TODO: bla...bla...bla
  const Problems = "Problems";

  return <div>Todo Something...</div>;
};
```

**Note: Use the filename as the component name. For example, Example.tsx should have a reference name of Example. However, for root components of a directory, use index.jsx as the filename and use the directory name as the component name:**

```tsx
//GOOD 🏆🏆🏆
import Example from "@/components/atoms/Example";

//NOT GOOD 💩💩💩
import Example from "@/components/atoms/Example/index";
```
