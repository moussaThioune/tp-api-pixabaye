import React, { Component } from "react";
import axios from "axios";
import GalleryItem from "./GalleryItem";
class GalleryDetail extends Component{
    constructor(props){
        super(props);
         this.state = {
            hit:null
         }
    }
    getHits(id){
        let url="https://pixabay.com/api/?key=16213469-5c60b69f4cca57f4a4845db8a&id="+id
    
         axios.get(url).then((resp)=>{
     
        this.setState({
          hit: resp.data.hits[0],
  
        })
         }).catch((err=>{
           console.log(err);
         }))
      }

       componentDidMount(){
            this.getHits(this.props.match.params.id);
       }
    render(){
        if(this.state.hit!=null)
        return(
            <div>
                <GalleryItem hit={this.state.hit}/>
            </div>
        );
        else{

            return <div></div>
        }
    }
}
export default GalleryDetail