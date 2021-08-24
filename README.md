# require_optional replacemenet

This replaces require_optional in next-auth with one which loads `mongodb` module.

This fix needed so MongoDB can be used as storage provider in next-auth, see https://github.com/nextauthjs/next-auth/issues/887

## Usage

Add this to `next.config.js`

```js
module.exports = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      require_optional: "require-optional-next-auth@0.1.2",
    };

    return config;
  },
};

```

Add this to `package.json`

```
"dependencies": {
  ...
  "require_optional": "require-optional-next-auth@0.1.2",
  ...
}
```