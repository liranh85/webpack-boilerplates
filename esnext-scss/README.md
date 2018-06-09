# Webpack 4 boilerplate for ESNext and SCSS
This boilerplate will quickly set you up with:
- Webpack 4
- ESNext with source map (plus: class-properties, es2015-modules-commonjs and object-rest-spread)
- SCSS with source map
- webpack dev server with Live Reload
- Copying images on build
- Cleaning dist folder on build
- Separate configuration for dev and prod
- Uglify on prod build
- Prettier-standard
- ESLint

## Installation
1) Run the following in a location of your choosing:
```
git clone git@github.com:liranh85/webpack-boilerplates.git
```
2) Copy the `esnext-scss` directory to the location you'd like your project to be in
3) Rename this directory to your project name
4) Inside your new project directory, run:
```
npm install
```

## Usage

### Development
1) Start the webpack-dev-server
```
npm start
```
2) In your browser, navigate to http://localhost:8081

Webpack will now watch your code, and when a change is detected, it will re-compile it 

### Build
```
npm run build
```
Production code will then be available in the `dist` directory

### JS Format (using prettier-standard)
```
npm run format
```

### ESLint
```
npm run lint
```

## Notes

### ESNext source map
This boilerplate is using `devtool: 'source-map'` (defined in `webpack.dev.js`). This particular source map, whilst visually very appealing, appears to have often have wrong code evaluation in the browser devtools. If this poses a problem, try switching the `devtool` to `'eval'`.

## Dependencies
None

## Contributing
Feel free to submit issues and pull requests

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
