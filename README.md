# Hi, I'm so glad you're here <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="25px">

## About Project

## Note: 

To use `Storybook`, please change to branch `develop-sb`
Then to start `Storybook` , run `yarn && yarn storybook`

## Languages and Frameworks

- CRA
- TypeScript v4.7.2
- NextJS v12.1.6
- Hygen
- Storybook v6
- ESLint
- Prettier


## Files/Directories

| Path                    | Purpose                                                            |
| ----------------------- | ------------------------------------------------------------------ |
| /.storybook/            | contains Storybook config files                                    |
| /.eslintrc              | settings for `ESLint`                                              |
| /.hygen.js              | settings for `Hygen`                                               |
| /\_templates/           | contains scaffolding templates based on `Hygen`                    |
| /.vscode/               | settings for `Visual Studio Code` workspace                        |
| /package.json           | manifest file for Node.js projects                                 |
| /tsconfig.json          | settings for `TypeScript`                                          |
| /public/                | root folder that gets served up as our next app.                   |
| /src/components/        | contains Atomic Design components                                  |
| /src/container/         | contains Logic handler                                             |
| /src/pages/             | contains pages                                                     |
| /src/assets/            | contains images, movies, fonts                                     |
| /src/store/             | contains shared store                                              |
| /src/services/          | contains shared services                                           |
| /src/styles/            | contains common styles: breakpoints, colors, font, mixin, function |
---

## Command Line

| Path             | Purpose                             |
| ---------------- | ----------------------------------- |
| yarn dev         | start the project                   |
| gen:page         | generate new page                   |
| gen:component    | generate new component              |
| gen:container    | generate new container              |
| yarn storybook   | run the storybook                   |
| yarn lint        | run to check the syntax             |
| yarn lint:fix    | run to fix the syntax               |
| yarn prettier    | run to format code                  |

---

### `Abem`

<https://css-tricks.com/abem-useful-adaptation-bem/>

**Note: Use only the `lowercase` format for `className`.**

```tsx
//GOOD 🏆🏆🏆
export const Sample: React.FC = ({ children }) => <div className='a-sample'>{children}</div>;

//NOT GOOD 💩💩💩
export const Sample: React.FC = ({ children }) => <div className='a-Sample'>{children}</div>;
```

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

//NOT GOOD 💩💩💩
export const Sample = () => (
  <div className='a-sample'>
    <span className='a-sample_element1_element2_element3'>Greater than 2 elements</span>
  </div>
);
```

### `Atomic`

<https://bradfrost.com/blog/post/atomic-web-design/>

### `Components`

- Use only `React-Hook`
- Follow the `rules of hook` (<https://reactjs.org/docs/hooks-rules.html>)

**Note: Use `mapModifiers` to generate `modifiers`.**

```tsx
export const Component: React.FC<Props> = (props) => (
  <div className={mapModifiers("a-sample", props.modifiers)}>{props.children}</div>
);
```

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
import Example from "components/atoms/Example";

//NOT GOOD 💩💩💩
import Example from "components/atoms/Example/index";
```
