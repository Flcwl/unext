module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-unext`
  extends: ["unext"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
