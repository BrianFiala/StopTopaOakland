import React from 'react';
import SideBar from './components/sidebar';
import Header from './components/header';
import './App.scss';

export default function StopTopa() {
  return (
    <div id="App">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />

      <div id="page-wrap">
        <Header />
        
      </div>
    </div>  );
}
