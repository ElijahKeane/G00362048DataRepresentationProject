import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MangaCard from './MangaCard';

class ShowMangaList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mangas: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/Api/manga')
      .then(res => {
        this.setState({
          mangas: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowMangaList');
      })
  };


  render() {
    const mangas = this.state.mangas;
    console.log("PrintManga: " + mangas);
    let mangaList;

    if(!mangas) {
      mangaList = "there is no manga record!";
    } else {
      mangaList = mangas.map((manga, k) =>
        <MangaCard manga={manga} key={k} />
      );
    }

    return (
      <div className="ShowMangaList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Manga List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-manga" className="btn btn-outline-warning float-right">
                + Add New Manga
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {mangaList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowMangaList;