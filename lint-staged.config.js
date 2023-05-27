module.exports = {
  "**/*.(js,jsx)": [() => "eslint --fix"],
  "**/*.(ts|tsx)": [() => "npx tsc --noEmit", "eslint --fix"],
};
