import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Provider } from 'react-redux';
import store from '../store';
import queryString from 'query-string';

import Posts from '../components/Posts';
import PostForm from '../components/PostForm';


class Home extends Component {
  componentWillMount() {
    const { params } = this.props.match;
    const values = queryString.parse(this.props.location.search);

    console.log(params);
    console.log(values);
  }
  
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <PostForm />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
  
}

export default Home;