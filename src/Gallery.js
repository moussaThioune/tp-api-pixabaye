import React, { Component } from "react";
import axios from 'axios'
import GalleryItem from "./GalleryItem";
import SeachForm from "./SearchForm";
export class Gallery extends Component{
  constructor(props){
    super(props);
    this.state={
      hits:[],
      currentPage:1,
      pageSize:10,
      currentKeyword:'',
      totalPages:1,
      pages:[]
    }
  }
  componentDidMount(){
    //this.getHits();
  }
  getHits(keyword){
    let url="https://pixabay.com/api/?key=16213469-5c60b69f4cca57f4a4845db8a&q="

    + keyword+"&page=" + this.state.currentPage
    +"per_page="+this.state.pageSize;
     axios.get(url).then((resp)=>{
   let totalP=(resp.data.totalHits%this.state.pageSize===0)
   ?resp.data.totalHits/this.state.pageSize:1+ resp.data.totalHits%this.state.pageSize
    this.setState({
      hits: resp.data.hits,
      totalPages: totalP,
      pages: new Array(totalP).fill(0),
      currentKeyword: keyword
    })
     }).catch((err=>{
       console.log(err);
     }))
  }

  
 search=(keyword)=>{
   this.getHits(keyword)
   //e.preventDefault();
 }
 goToPage =(page)=>{
   this.setState({
     currentPage:page
   }, ()=>{
    this.getHits(this.state.currentKeyword);
   });
 
 }

  render(){

    return(
      <div>
        <SeachForm onSearch={this.search}/>

        <div className="row">
          {
            this.state.hits.map(hit=>
              <GalleryItem hit={hit} details={false}/>
       
            )
          }
        </div>
        <div>
          <ul className="nav nav-pills">
              {
                this.state.pages.map((v, index)=>
                <li key={index}>
                  <button  className={this.state.currentPage==index+1? 'btn btn-primary' : 'btn btn-link' }
                   onClick={()=>this.goToPage(index+1)}>{index+1}</button>
                </li>
                )
              }
         
          </ul>
        </div>
      </div>
    );
  }
}
export default Gallery