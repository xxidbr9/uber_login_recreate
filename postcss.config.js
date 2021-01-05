module.exports = {
  plugins:
    process.env.NODE_ENV !== "development"
      ? [
          require("postcss-uncss")({
            html: ["./src/index.html"]
          }),
          require("cssnano")({
            preset: "default"
          })
        ]
      : []
};
