import styles from './ScrollingBackground.module.css';

function ScrollingBackground(){
  return(
    <div className={styles.containter}>
      <div className={styles.slidingBackground}></div>
    </div>
  )
} 


export default ScrollingBackground