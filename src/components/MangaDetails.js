import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class MangaDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      manga: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/Api/manga/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-MangaDetails-API-response: " + res.data);
        this.setState({
          manga: res.data
        })
      })
      .catch(err => {
        console.log("Error from MangaDetails");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('http://localhost:8082/Api/manga/'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form MangaDetails_deleteClick");
      })
  };


  render() {

    const manga = this.state.manga;
    let MangaItem = <div>
      <table className="table table-hover table-dark">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Title</td>
            <td>{ manga.title }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Author</td>
            <td>{ manga.author }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Illustrator</td>
            <td>{ manga.illustrator }</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Initial release date</td>
            <td>{ manga.initial_release_date }</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Total volume count</td>
            <td>{ manga.total_volume_count }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Number Owned</td>
            <td>{ manga.number_owned }</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>rating</td>
            <td>{ manga.rating }</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="MangaDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Manga List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Manga's Record</h1>
              <p className="lead text-center">
                  View Manga's Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { MangaItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,manga._id)}>Delete Manga</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-manga/${manga._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Manga
              </Link>
              <br />
            </div>

          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Manga</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Manga</button> */}

        </div>
      </div>
    );
  }
}

export default MangaDetails;