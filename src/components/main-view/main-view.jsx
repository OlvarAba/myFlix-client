import React from 'react';
import axios from 'axios';

import { LoginView} from '../login-view/login-view';
import { RegistrationView } from '../registration-view/registration-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';



export class MainView extends React.Component {

  constructor(){
    super();
    this.state = {
      movies: [],
      selectedMovie: null,
      user: null
    };
  }

  componentDidMount(){
    axios.get('https://mantiflix.herokuapp.com/movies')
      .then(response => {
        this.setState({
          movies: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

 
  setSelectedMovie(movie) {
    this.setState({
      selectedMovie: movie
    });
  }

 
  onRegistration(register) {
    this.setState({
      register,
    });
  }

  onLoggedIn(user) {
    this.setState({
      user
    });
  }

  render() {
    const { movies, selectedMovie, user, registered } = this.state;

    if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;

    if (!registered) return <RegistrationView onRegistration={(register) => this.onRegistration(register)} />;

    if (movies.length === 0) return <div className="main-view"></div>;

    return (
      <div className="main-view">
        {selectedMovie
          ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
          : movies.map(movie => (
            <MovieCard key={movie._id} movie={newSelectedMovie} onMovieClick={(movie) => { this.setSelectedMovie(newSelectedMovie) }}/>
          ))
        }
      </div>
    );
  }

}

export default MainView


