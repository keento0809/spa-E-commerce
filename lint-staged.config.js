module.exports = {
  "**/*.(js,jsx)": ["eslint --cache --fix"],
  "**/*.(ts|tsx)": [() => "npx tsc --noEmit", "eslint --cache --fix"],
};
