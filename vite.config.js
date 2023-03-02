const {checker} = require("vite-plugin-checker")
module.exports = {
  // config options
  publicDir: __dirname + "/public",
  root: "./src",
  build: {
    outDir: __dirname + "/dist",
  },
  plugins: [
    checker({
      // e.g. use TypeScript check
      eslint: {
        // for example, lint .ts and .tsx
        lintCommand: "eslint './**/*.js'",
      },
    }),
  ],
};
