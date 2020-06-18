import React from "react";

class Detail extends React.Component{
    componentDidMount(){
        const { location, history } = this.props;
        if(location.state === undefined){
            history.push("/"); //홈으로 리다이렉트
        }
    }
    render(){
       const { location } = this.props;
       if(location.state){
            return <span>{location.state.title}</span>;
       }else{
            return null;
       }
    }
}

export default Detail;