const presets = ['@babel/preset-env', '@babel/preset-react'];
const plugins = ['@babel/plugin-proposal-class-properties'];

if (process.env.NODE_ENV === 'production') {
  plugins.push('transform-react-remove-prop-types');
}

module.exports = { presets, plugins };
