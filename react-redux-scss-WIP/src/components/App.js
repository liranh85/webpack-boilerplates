import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { load as loadPosts } from '../redux/modules/posts'
import Posts from './Posts'

class App extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    const { loadPosts, posts } = this.props
    console.log(posts)
    return (
      <div className="example-app">
        <img src="images/webpack.png" width="225" height="225" alt="Webpack logo" />
        <h1>Webpack 4 + React + Redux + SCSS boilerplate</h1>
        <p>Congratulations, this boilerplate is set up and ready to go.</p>
        <button className="load-posts" onClick={loadPosts}>Load dummy posts using Redux</button>
        <p className="credit">(Courtesy of <a href="https://jsonplaceholder.typicode.com/" target="_blank" rel="noopener">JSONPlaceholder</a>)</p>
        <Posts
          items={posts.items}
          isLoading={posts.isLoading}
        />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    posts: state.posts
  }
}

function mapDispatchToProps (dispatch) {
  return {
    loadPosts: () => dispatch(loadPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)