import React, { PureComponent } from 'react'

class Post extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    const { title, body } = this.props

    return (
      <li className='post'>
        <h1>{title}</h1>
        <p>{body}</p>
      </li>
    )
  }
}

export default Post
