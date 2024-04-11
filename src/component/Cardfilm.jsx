import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { getMovieList, searchMovie } from './api';

function Cardfilm() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
      setIsLoading(false);
    });
  }, []);

  const search = async (q) => {
    setSearchQuery(q);
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovies(query.results);
    } else {
      getMovieList().then((result) => {
        setPopularMovies(result);
      });
    }
  };

  const popularMovieList = () => {
    return popularMovies.map((movie, i) => (
      <Card className="mb-3" key={i} style={{ width: '11.2rem', display: 'inline-block', backgroundColor: 'transparent', border:'none'}}>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
        <Card.Body style={{ color:'white' }}>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.release_date}</Card.Text>
        </Card.Body>
      </Card>
    ));
  };
  
  return (
    <div>
      <Navbar expand="lg" className="bg-transparent fixed-top">
        <Container fluid >
          <Navbar.Brand href="" className="text-white" id="home">VITTO MOVIE</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className="bg-white" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link href="home" className="text-white">Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid className="mt-5">
        <Form className="d-flex mb-3 justify-content-center">
          <Form.Control
            type="search"
            value={searchQuery}
            onChange={({ target }) => search(target.value)}
            placeholder="Cari Film Kesayangan"
            className="Movie-Seacrh me-2"
            aria-label="Search"
            style={{ width: '71rem' }}
          />
        </Form>
      </Container>
      <Container fluid className="Movie-container">
        <h4 className="d-flex mb-3 justify-content-start ps-4"> <b>|</b> Most Popular</h4>
        {isLoading ? (
          <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
            <h1>Loading...</h1>
          </div>
        ) : (
          <div className="d-flex flex-wrap justify-content-center pt-2 gap-3 bg-transparent">
            {popularMovieList()}
          </div>
        )}
      </Container>
    </div>
  );
}

export default Cardfilm;
