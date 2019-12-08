import React from 'react';
import './App.css';
import Card from './components/card/Card'
import Navbar from './components/navbar/navbar'

const App = () => {

  const youtube_api = [{
    channel_name: 'garasijogi',
    title: 'Create Navbar',
    view: '20k',
    time: '38 minutes',
    duration: '2:40'
  },
  {
    channel_name: 'garasi',
    title: 'Be a Smart People',
    view: '2k',
    time: '3 minutes',
    duration: '22:40'
  },
  {
    channel_name: 'jogi',
    title: 'Bucin Terooos',
    view: '43k',
    time: '15 minutes',
    duration: '26:20'
  },
  {
    channel_name: 'Rumah UX',
    title: 'Create Portfolio',
    view: '120k',
    time: '10 minutes',
    duration: '28:04'
  },
  {
    channel_name: 'Rumah Coding',
    title: 'Nothing have to be created',
    view: '5k',
    time: '8 minutes',
    duration: '1:40'
  }];

  return (
    <div className='app'>
      <Navbar />
      <div className="container">
        <Card />
        {youtube_api.map(item => (
          <Card title={item.title} channelName={item.channel_name} view={item.view} time={item.time} duration={item.duration} />
        ))}
      </div>

    </div>
  );
}

export default App;