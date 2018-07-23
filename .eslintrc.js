module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "jest": true
  },
  "plugins": ["react"],
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["src"]
      }
    }
  },
  "rules": {
    "react/jsx-filename-extension": [2, {
      "extensions": [".js"]
    }],
    "comma-dangle": ["error", "never"],
    "react/forbid-prop-types": [0],
    "react/require-default-props": [0],
    "jsx-a11y/anchor-is-valid": [ "error", {
      "components": [ "Link" ],
      "specialLink": [ "to" ]
    }]
  }
};
