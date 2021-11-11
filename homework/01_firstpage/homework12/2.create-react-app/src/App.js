import React from 'react'
import './App.css';
import { Footer } from './components/footer/Footer';
import {Header} from "./components/header/Header";
import {Sidebar} from "./components/sidebar/Sidebar";
// import {Comments} from "./form/comments/Comments";
import {Card} from "./components/card/Card";


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className='body'>
          <div className={'sidebar-container'}>
            <Sidebar/>
          </div>
          
          <div className='card'>
            <Card/>
          </div>
          {/* <div className='content'>
            <Comments/>
          </div> */}
        </div>
        <div className='footer'>
            <Footer/>
          </div>
      </div>
    );
  }
}

export default App;