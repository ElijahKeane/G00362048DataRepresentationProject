import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

//format for Update manga
class UpdateMangaInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      initial_release_date: '',
      author: '',
      illustrator: '',
      total_volume_count: '',
      number_owned: ''
    };
  }

  componentDidMount() {
     console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/Api/manga/'+this.props.match.params.id)
      .then(res => {
        this.setState({
          title: res.data.title,
          initial_release_date: res.data.initial_release_date,
          author: res.data.author,
          illustrator: res.data.illustrator,
          total_volume_count: res.data.total_volume_count,
          number_owned: res.data.number_owned,
          rating: res.data.rating
        })
      })
      .catch(err => {
        console.log("Error from UpdateMangaInfo");
      })
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      initial_release_date: this.state.initial_release_date,
      author: this.state.author,
      illustrator: this.state.illustrator,
      total_volume_count: this.state.total_volume_count,
      number_owned: this.state.number_owned,
      rating: this.state.rating
    };

    axios
      .put('http://localhost:8082/Api/manga/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-manga/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdateMangaInfo!");
      })
  };


  render() {
    return (
      <div className="UpdateMangaInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Manga List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Manga</h1>
              <p className="lead text-center">
                  Update Manga's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="title">Title</label>
              <input
                type='text'
                placeholder='Title of the Manga'
                name='title'
                className='form-control'
                value={this.state.title}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="initial_release_date">Initial Release Date</label>
              <input
                type='text'
                placeholder='Initial Release Date'
                name='initial release date'
                className='form-control'
                value={this.state.initial_release_date}
                onChange={this.onChange}
              />
            </div>
            <div className='form-group'>
            <label htmlFor="author">Author</label>
              <input
                type='text'
                placeholder='Author'
                name='author'
                className='form-control'
                value={this.state.author}
                onChange={this.onChange}
              />
            </div>
            <div className='form-group'>
            <label htmlFor="illustrator">Illustrator</label>
              <input
                type='text'
                placeholder='Illustrator'
                name='illustrator'
                className='form-control'
                value={this.state.illustrator}
                onChange={this.onChange}
              />
            </div>
            <div className='form-group'>
            <label htmlFor="total_volume_count">Total Volume Count</label>
              <input
                type='date'
                placeholder='total_volume_count'
                name='total_volume_count'
                className='form-control'
                value={this.state.total_volume_count}
                onChange={this.onChange}
              />
            </div>
            <div className='form-group'>
            <label htmlFor="number_owned">Number Owned</label>
              <input
                type='text'
                placeholder='Number owned of this Manga'
                name='number_owned'
                className='form-control'
                value={this.state.number_owned}
                onChange={this.onChange}
              />
            </div>
            <div className='form-group'>
            <label htmlFor="rating">Rating</label>
              <input
                type='text'
                placeholder='Rating'
                name='rating'
                className='form-control'
                value={this.state.rating}
                onChange={this.onChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Manga</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateMangaInfo;