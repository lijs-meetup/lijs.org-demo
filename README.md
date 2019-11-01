# lijs.org demo

This is the rewrite of the lijs.org website in Gatsby for our October 2019 Meetup event.

To see the semi-completed version, check out [https://github.com/lijs-meetup/lijs.org/tree/new-gatsby-site](https://github.com/lijs-meetup/lijs.org/tree/new-gatsby-site).

## Installation

```sh
git clone git@github.com:lijs-meetup/lijs.org-demo.git
cd lijs.org-demo
npm install
```

## Usage

To start the development servers:

```sh
npm run develop
```

If all was successful, you should see links to two development servers in the Node terminal. You can open these url in any browser that you would like.

1. [http://localhost:8080](http://localhost:8080):

This is the development server that allows you to preview your website. It comes with hot-module reloading, which means that you should see your changes almost immediately without having to refresh the browser tab.

2. [http://localhost:8000/\_\_\_graphql](http://localhost:8000/___graphql):

This is the development server that allows you to interact with the your site's GraphQL data via the GraphiQL IDE.

### Available Scripts

| Script            | Description                                                              |
| ----------------- | :----------------------------------------------------------------------- |
| `develop`         | Start the development server with hot module reloading.                  |
| `dev`             | Alias for `develop`.                                                     |
| `format`          | Format your code with Prettier.                                          |
| `clean`           | Delete the `.cache` and `public` directories.                            |
| `test`            | Run your Jest tests once.                                                |
| `test:watch`      | Run your Jest tests in watch mode.                                       |
| `lint`            | Lint your code with ESLint.                                              |
| `lint:watch`      | Lint your code with ESLint in watch mode.                                |
| `lint:fix`        | Lint your code with ESLint and attempt to fix linting issues.            |
| `serve`           | Serve the production build of your site for testing.                     |
| `build`           | Compile your application and make it ready for deployment                |
| `storybook`       | Starts Storybook.                                                        |
| `build-storybook` | Compiles your stories and makes them ready for deployment.               |
| `update`          | Updates all dependencies to the latest version using npm-check-updates . |

## Styling

This library is pre-configured to work with Styled-Components and works with the `css` prop:

```jsx
import styled from "styled-components";

const MyComponent = () => (
  <div>
    <h1
      css={`
        color: #333;
      `}
    >
      Hello World!
    </h1>
  </div>
);
```

## CSS Debugger

This starter also includes a `useCSSDebugger` custom hook. This hook allows you to drop a component into your layout that can toggle outlines around all elements for easy style debugging. It also includes a toggle button that you can optionally use during debugging.

**_Note: You can drag the toggle button around if it gets in your way._**

The `useCSSDebugger` custom hook is located in `src/hooks/useCSSDebugger.tsx` and is used in the `layout.tsx` component.

<img src="https://res.cloudinary.com/gojutin/image/upload/v1568660140/gatsby-starter-typescript-deluxe/css-debugger.gif" alt="GIF of css debugger" style="max-width: 100%;" />

## Linting

This project includes a combination of ESLint, TSLint, and React-A11y rules for React and TypeScript code, which are extended from the [eslint-config-gojutin](https://github.com/gojutin/eslint-config-gojutin) npm package. Many of the rules favor a functional approach with a strong emphasis on immutability and strong type definitions. Since all of the rules and dependencies are included in this package, you can easily remove it if you prefer to wire up your own linting configuration.

The rules are listed as key/value pairs. The key represents the rule name and the value (number) represents the setting of the rule:

|     |       |
| --- | :---- |
| `0` | off   |
| `1` | warn  |
| `2` | error |

Here is an example of a rule:

```
"immutable/no-this": 2
```

This particular rule disallows the use of the `this` keyword, which will result in an error.

## Storybook

Storybook is available by creating stories in the `src/stories` directory and running the `npm run storybook` script. Your storybook will be availble at [http://localhost:6006](http://localhost:6006).

You can also compile a production build of your Storybook by running `npm run build:storybook`. The compiled production build will be located in a `/storybook-static` directory.

## Deployment

Lint your files and fix all linting issues.

```sh
npm run lint
```

Run your test suite and fix any broken tests.

```sh
npm run test
```

Compile a production build to the `/public` directory.

```sh
npm run build
```
