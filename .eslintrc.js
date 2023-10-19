module.exports = {
  rules: {
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
  },
  root: true,
  extends: ['@react-native', 'plugin:nativewind/recommended', 'prettier'],
  endOfLine: 'off',
};
