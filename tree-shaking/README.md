# Webpack Tree Shaking & Loader Assignment

## Tree Shaking

This project shows how Webpack removes unused code when in **production mode**.

In `math.js`, I exported three functions: `add`, `subtract`, and `multiply`.  
In `index.js`, I only used `add`.

When I ran `npx webpack`, Webpack **removed the unused functions** (`subtract` and `multiply`) from the final bundle in `dist/bundle.js`.  
This made the file smaller and cleaner.

## CSS Loader

I also added a small CSS file called `style.css` to style the background.

To handle CSS files in JS, I installed:
