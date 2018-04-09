module.exports = {
  emitWarning: true,
  useEslintrc: false,
  baseConfig: {
    globals: {
      graphql: true,
    },
    extends: `react-app`,
    plugins: [`graphql`],
  },
}
