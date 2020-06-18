import React from 'react';
import axios from "axios";
import Movie from "../components/Movie"
import "./Home.css"

//클래스 컴포넌트 (React컴포넌트로부터 확장한 App컴포넌트)
class Home extends React.Component{
  state  = {
    isLoading: true,
    movies : []
  };
  getMovies = async() => { //data.data.movies -> movies
    const {
      data: {
         data : {movies}
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading:false }) //movies : movies (state 수정)
  }
  componentDidMount(){ //render하면 호출되는 life cycle method
    this.getMovies();
  }
  render(){
    const {isLoading, movies} = this.state;
    return <section className="container">
      {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div> 
       ) : (
          <div className="movies">
            {movies.map(movie => (
                <Movie 
                  key={movie.id}
                  id={movie.id} 
                  year={movie.year} 
                  title={movie.title} 
                  summary={movie.summary} 
                  poster={movie.medium_cover_image}
                  genres={movie.genres} />
             ))}
          </div>
       )}
    </section>
  }
}
export default Home;
