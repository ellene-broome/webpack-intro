# Webpack Intro

This project is a basic example of using Webpack to bundle JavaScript modules.

## What I learned

- What Webpack is and why it is useful.
- How to set up a basic project
- How to `export` and `import` ES Modules
- How to build and test a simple JS bundle
- How Webpack behaves without a config file.
- How folder structure affects the build.
- How to custom config file name.

## How it Works

1. I created two js files inside a src/folder:
    - `greetings.js` includes 2 functions: `sayHello` and `sayGoodbye`.
    - `index.js` imports those functions and logs the messages to the console.
2. I wrote a Webpack configuration file (`webpack.config.js`) to bundle everything into one file: `bundle.js`.
3. I added a build script to `package.json`, then ran it using `npm run build`.
4. I created an `index.html` file to load the final script and viewed the results in my browser's console.

## How to Run It.

1. Clone or download the project folder.
2. Runn `npm install` to install Webpack.
3. Use `npm run build` to create the bundle.
4. Open `index.html` ia a browser.
5. Check the console to see the messages.

## Exploring Webpack Defaults and Custom Setups.

1. Tested Webpack without a config file.
    - Ran `npm webpack` with no `webpack.config.js` .
    - Webpack used `./src/index.js` by default as the entry file.
    - Output went to `./dist/main.js`.
2. Changed the folder structure.
    - Changed source file's name to `client/`.
    - Webpack could not find the default `src/index.js`, so added a custom `webpack.config.js` to point to `client/index.js` instead of `src/index.js`.
3. Used a custom config. file name.
    - Renamed `webpack.config.js` to point to `webpack.custom.js`.
    - Ran Webpack with `npx webpack --config webpack.custom.js.
## Notes:

- **Default Entry:** `./src/index.js`
- **Default Output:** `./dist/main.js`
- **Folder Structure:** If files are moved, the config must be updated.
- **Custom Config:** Can be used with `--config <filename>` when running Webpack.

/webpack-intro
├── client/
│   ├── index.js
│   └── greetings.js
├── webpack.custom.js
├── package.json
