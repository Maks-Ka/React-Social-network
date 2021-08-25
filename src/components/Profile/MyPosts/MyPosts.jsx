
import styles from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react'
import { Field, reduxForm } from 'redux-form'


const MyPosts = React.memo(props => {
  let postsElements = [...props.posts]
    .reverse()
    .map(p => <Post key={p.id} message={p.message} key={p.id} likesCount={p.likesCount} />)

  let addNewPost = (values) => {
    props.addPost(values.newPostText);
  }


  return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>
      <ProfileReduxForm onSubmit={addNewPost} />
      <addNewPostReduxForm />
      <div className={styles.posts}>
        {postsElements}
      </div>
    </div>
  )
})

const addNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} >
      <div>
        <Field className={styles.textarea} name='newPostText' component='textarea' placeholder='Your news...' />
      </div>
      <div >
        <button className={styles.button}>Add post</button>
      </div>
    </form>
  )
}

// addNewPostReduxForm
const ProfileReduxForm = reduxForm({ form: 'profileNewPostText' })(addNewPostForm)


export default MyPosts;