import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateManga from './components/CreateManga';
import ShowMangaList from './components/ShowMangaList';
import MangaDetails from './components/MangaDetails';
import UpdateMangaInfo from './components/UpdateMangaInfo';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ShowMangaList} />
          <Route path='/create-manga' component={CreateManga} />
          <Route path='/edit-manga/:id' component={UpdateMangaInfo} />
          <Route path='/show-manga/:id' component={MangaDetails} />
        </div>
      </Router>
    );
  }
}

export default App;
