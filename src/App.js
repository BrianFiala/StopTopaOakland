import React from 'react';
import SideBar from './components/sidebar';
import Header from './components/header';
import Home from './components/home';
import './App.scss';

const styles = {
  header: {
    maxHeight: '80px',
    width: '100%',
    position: 'fixed',
    top: '0',
  },
  mainContent: {
    paddingTop: '88px',
  }
}

export default function StopTopa() {
  return (
    <div id="App">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />

      <div id="page-wrap">
        <aside style={styles.header}>
          <Header/>
        </aside>
        <article style={styles.mainContent}>
          <Home/>
        </article>
      </div>
    </div>
    );
}
