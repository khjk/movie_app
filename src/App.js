import React from 'react';
import axios from "axios";
import Movie from "./Movie"
//클래스 컴포넌트 (React컴포넌트로부터 확장한 App컴포넌트)
class App extends React.Component{
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
    return <section class="container">
      {isLoading ? (
          <div class="loader">
            <span class="loader_text">Loading...</span>
          </div> 
       ) : (
          <div class="movies">
            {movies.map(movie => (
                <Movie 
                  key={movie.id}
                  id={movie.id} 
                  year={movie.year} 
                  title={movie.title} 
                  summary={movie.summary} 
                  poster={movie.medium_cover_image} />
             ))}
          </div>
       )}
    </section>
  }
}
export default App;
