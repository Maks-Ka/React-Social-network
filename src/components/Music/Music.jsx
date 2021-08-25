import React from 'react';
import styles from './Music.module.css'


class Music extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      play: false,
      pause: true,
    }
    this.url = "http://streaming.tdiradio.com:8000/house.mp3";
    this.audio = new Audio(this.url);
  }

  play = () => {
  this.setState({ play: true, pause: false })
    this.audio.play();
  }
  
  pause = () => {
  this.setState({ play: false, pause: true })
    this.audio.pause();
  }
  
  render() {
    
  return (
    <div  className={styles.pleer}>
    <div className={styles.item}> Radio📻</div>
      <button  className={styles.buttonPleer} onClick={this.play}>Play</button>
      <button  className={styles.buttonPleer} onClick={this.pause}>Pause</button>
    </div>
    );
  }
}

export default Music
