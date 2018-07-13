import React, { PureComponent } from 'react'

class App extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <img
          className='webpack-logo'
          src='images/webpack.png'
          width='225'
          height='225'
          alt='Webpack logo'
        />
        <h1>Webpack 4 + React + SCSS boilerplate</h1>
        <p>Congratulations, this boilerplate is set up and ready to go.</p>
      </div>
    )
  }
}

export default App
