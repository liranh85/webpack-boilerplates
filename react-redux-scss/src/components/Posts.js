import React, { PureComponent } from 'react'
import Post from './Post'

class Posts extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    const { items, isLoading } = this.props
    return (
      <div className="posts-wrapper">
        {isLoading
          ? (<span>Spinner</span>)
          : (<ul className="posts">
          {
            items.map(item => {
              return <Post key={item.id} {...item} />
            })
          }
        </ul>)
        }
      </div>
    )
  }
}

export default Posts