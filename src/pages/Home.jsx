import React, { useState } from 'react';
import style from '../styles/css/Home.module.css';
import backGroundVideo from '../styles/videos/backGroundVideo.mp4';

function Home() {

	// useState(() => {
	// 	document.getElementsByTagName('video')[0].play();
	// }, [])

  return (
    <main className={style.main}>
			{/* <video src={backGroundVideo} onClick={ (e) =>  e.play() } autoplay muted/> */}
    </main>
  );
}

export default Home;
