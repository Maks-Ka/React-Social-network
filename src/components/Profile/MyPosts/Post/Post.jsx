import styles from './Post.module.css'
const Post = (props) => {
  return (
    <div className={styles.item}>
      <img src='https://sun2-10.userapi.com/s/v1/if1/LuadwtIw4jcZH1yvpORdN--H1fclrUYb7CsgV7ennIdgIke1PYraqTnJqD2A5S0cXHwuQA8-.jpg?size=50x0&quality=96&crop=58,0,339,339&ava=1' alt='' />
          { props.message }
      <div>
        <span className={styles.text}>like 🤍</span> {props.likesCount}
      </div>
    </div>
  )
}

export default Post;