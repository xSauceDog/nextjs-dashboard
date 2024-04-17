const styleguide = require('@vercel/style-guide/prettier');

module.exports = {
	...styleguide,
	plugins: [...styleguide.plugins, 'prettier-plugin-tailwindcss'],
	endOfLine: 'auto',
	printWidth: 80,
	tabWidth: 2,
};
