import React from "react";
import "./Detail.css";

class Detail extends React.Component{
    componentDidMount(){
        const { location, history } = this.props;
        if(location.state === undefined){
            history.push("/"); //홈으로 리다이렉트
        }
    }
    render(){
       const { location : {state}} = this.props;
       if(state){
        console.log(state.genres);
            return (
            <div className="movie">
                <img src={state.poster} alt={state.title} title={state.title}/>
                <div className="movie_data">
                    <h3 className="movie_title">{state.title}</h3>
                    <h5 className="movie_year">{state.year}</h5>
                    <ul className="movie_genres">
                        {(state.genres).map( (genre, order) => (
                            <li key={order} className="genres_genre">{genre}</li> 
                        ))}
                    </ul>
                    <p className="movie_summary">{state.summary}</p>
                </div>
            </div>
            );
        }else{
            return null;
       }
    }
}

export default Detail;