import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

//format for createmanga
class CreateManga extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      initial_release_date:'',
      author:'',
      illustrator:'',
      total_volume_count:'',
      number_owned:'',
      rating:''
    };
  }

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
      .post('http://localhost:8082/Api/manga', data)
      .then(res => {
        this.setState({
          title: '',
          initial_release_date:'',
          author:'',
          illustrator:'',
          total_volume_count:'',
          number_owned:'',
          rating:''
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateManga!");
      })
  };
//set up of the layout of the different pieces of information for create manga
  render() {
    return (
      <div className="CreateManga">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Manga List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add manga</h1>
              <p className="lead text-center">
                  Create new manga
              </p>
                  
              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
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
                  <input
                    type='text'
                    placeholder='Initial Release Date of the manga'
                    name='initial release date'
                    className='form-control'
                    value={this.state.initial_release_date}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
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
                  <input
                    type='text'
                    placeholder='Illustrator'
                    name='Illustrator'
                    className='form-control'
                    value={this.state.illustrator}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
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
                  <input
                    type='text'
                    placeholder='number of volumes owned'
                    name='number_owned'
                    className='form-control'
                    value={this.state.number_owned}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Rating'
                    name='Rating'
                    className='form-control'
                    value={this.rating}
                    onChange={this.onChange}
                  />
                </div>


                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateManga;