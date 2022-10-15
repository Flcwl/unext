const withTM = require("next-transpile-modules")(["unext"]);

module.exports = withTM({
  reactStrictMode: true,
});
