# redux-counter-snowpack

This is an example app built using [Snowpack](https://www.snowpack.dev).

## How it works

After every depencency is installed we run **Snowpack** to simplify them into single file in `web_modules` directory.
-> [See docs](https://www.snowpack.dev/#how-it-works)

### React
Since we're using React that doesn't have ESM support we have to use Pika's build of React and ReactDOM
-> [See docs](https://www.snowpack.dev/#react)

### JSX
We're also using JSX, which is non-standard JS, thus we have to use Babel. It exports our source files into `lib` directory.
-> [See docs](https://www.snowpack.dev/#jsx)

The entry files are loaded from this directory into a simple `<script>` tag in our `index.html`:
```html
<script type="module" src="/lib/app.js"></script>
```

### Legacy browser support
Browsers started supporting ESM natively since ~2018. Older browsers like IE11 doesn't support them. We don't have to penetialize majority of our userbase. Snowpack in version 1.1 added support for them by the `--nomodule` flag.
-> [See docs](https://www.snowpack.dev/#legacy-browser-support)

In the build command we use it to generate the `app.nomodule.js` file that we then use as the last `<script>` tag in our HTML. Newer browsers use the new ESM files, older ones ignore it and instead use this one:
```html
<script nomodule src="/web_modules/app.nomodule.js"></script>
```

## Usage

### Install
```
yarn
yarn prepare
```

### Start development server
```
yarn start
```

### Build production version
```
yarn build
```

