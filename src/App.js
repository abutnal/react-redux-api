import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';

import Posts from './components/Posts';
import PostForm from './components/Postform';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>

        <div >
<marquee direction="left">
<h2>AB UTNAL, 8722222996 </h2>
</marquee>
<div className="App">
          <PostForm />
          <hr />
          <Posts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
