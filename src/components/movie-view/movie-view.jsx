import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Button, Card } from 'react-bootstrap';

import './movie-view.scss';


export class MovieView extends React.Component {

  keypressCallback(event) {
    console.log(event.key);
  }

  componentDidMount() {
    document.addEventListener('keypress', this.keypressCallback);
  }

  


  render() {
    const { movie, onBackClick } = this.props;

    return (
      <Card className="movie-view">
        <Card.Header>
          <Card.Img variant="top" src={movie.ImagePath} />
        </Card.Header>
        <Card.Body className="movie-view-title">
          <h1>{movie.Title}</h1>
        </Card.Body>
        <Card.Body>
          <h4>Genre</h4>
          <Link to={`/genres/${movie.Genre.Name}`}>
            <h4 className="genre-link link">{movie.Genre.Name}</h4>
          </Link>
        </Card.Body>
        <Card.Body>
          <h4>Director</h4>
          <Link to={`/directors/${movie.Director.Name}`}>
            <h4 className="director-link link">{movie.Director.Name}</h4>
          </Link>
        </Card.Body>
        <Card.Body>
          <h4>Description:</h4>
          {movie.Description}
        </Card.Body>

        <Card.Footer>
          <Button
            className="movie-view-button"
            onClick={() => {
              onBackClick();
            }}
          >
            Back
          </Button>
        </Card.Footer>
      </Card>
    );
  }
}


MovieView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
    }),
    Actors: PropTypes.array.isRequired,
    ImagePath: PropTypes.string.isRequired
  }).isRequired,
};