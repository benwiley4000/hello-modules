# Hello, modules

A simple working usage of static and dynamic ES2015 imports, working in Safari Technolgy Preview (Tested Release 25, March 2017).

## How to run
Open `index.html` in a browser (specifically, Safari Technology Preview). Open the developer console and observe the output. See the JavaScript and HTML files for reference. As of this writing Chrome and Firefox do not fully implement either dynamic or static ES2015 imports.

## Some things to know (for now)
* Unlike Node, or bundlers such as webpack and browserify, Safari expects `.js`
extensions to be included in imports. e.g. `import './program.js'`.
* Dynamic imports can be used anywhere, including `<script>` tags embedded in HT
ML pages.
* Static imports can only be used at the top level of JavaScript modules (separate `.js` files).
* The result obtained via a dynamic import's returned `Promise` is not the default export. You must use the `default` property of the passed object.

