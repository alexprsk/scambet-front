import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import NavBar from './components/NavBar';
import Registration from './components/Registration';
import Login from './components/Login';
import SideBar from './components/SideBar';
import Carousel from './components/Carousel';
import Betslip from './components/BetSlip';
import {PreLiveMarkets, PreLiveMarketsType } from './components/Prelive/PreLiveMarkets';


function App() {
  return (
    <>
      <NavBar />
      <Registration />
      <Login />
      <div className="relative min-h-screen flex">
        <SideBar />
        <div className="flex-1 flex-col">
          <div className="carousel_card m-8 h-56 flex flex-row rounded-xl">
            <Carousel />
            <Carousel />
            <Carousel />
            <Carousel />
            <Carousel />
          </div>
          <div className="events_outside_container relative">
            <div className="events_container m-8 h-full flex flex-col bg-gradient-to-r from-dark-grey-700 to-teal-700 rounded-md z-10">
              <div className="events_card flex-1 flex-col bg-inherit rounded-md " id="events_card">
                <PreLiveMarketsType />
                <PreLiveMarkets
                  time="22:50"
                  teamHome="Dortmund"
                  teamAway="Wolfsburg"
                  odds={['1.35', '500', '3.6']}
                />                
                <PreLiveMarkets
                  time="22:50"
                  teamHome="Dortmund"
                  teamAway="Wolfsburg"
                  odds={['1.55', '5123', '3.6']}
                /> 
                <PreLiveMarkets />
                <PreLiveMarkets />
                <Betslip />
              </div>
            </div>
          </div>          
        </div>
      </div>
    </>
  );
}

export default App;
