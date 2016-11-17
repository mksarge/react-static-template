# React Static Template

### Description

React Static Template is a boilerplate for React apps that has a simple one-page layout
(no routing), markdown compatibility, and plays well with GitHub pages.

This project is inspired by [React Static Boilerplate][rsb]. The Webpack and Node.js 
configuration, as well as the markdown loader, is borrowed and adapted from React Static Boilerplate.

Demo: https://mksarge.github.io/react-static-template/

### Instructions

Install: `npm install`

Lint: `npm run lint`

Dev Build with [HMR][hmr]: `npm run start`

Production Build: `npm run build`

### Deploy to GitHub Pages

1. Make some changes.
2. `npm run build`
3. `git checkout gh-pages`
4. Copy files from `public` into the root folder
5. Commit and push. (Make sure you have GitHub Pages set to `gh-pages` in the settings!)

### License

The source code is licensed under the MIT license found in the [LICENSE.txt][license] file in the root folder of this project.

[rsb]: <https://github.com/kriasoft/react-static-boilerplate>
[hmr]: <https://webpack.github.io/docs/hot-module-replacement.html>
[license]: <https://github.com/mksarge/react-static-template/blob/master/LICENSE.txt>
