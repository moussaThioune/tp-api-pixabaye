import React, { Component } from "react";
import {Link} from 'react-router-dom';
class GalleryItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="col-md-4 mt-3" key={this.props.hit.id}>
            <div className="card">
              <div className="card-header">{this.props.hit.tags} {this.props.hit.webformatWidth}x{this.props.hit.webformatHeight}</div>
                <div className="card-body">
                    {
                        (this.props.details===false)?
                        <img className="card-img" 
                       style={{marginBottom:'5'}}height={200} src={this.props.hit.webformatURL} alt="hit image"/>
                      :<img className="card-img" 
                      style={{marginBottom:'5'}}height={200} src={this.props.hit.webformatURL} alt="hit image"/>
                 
                    }
                </div>
                <div>
                <div className="m-2">
                      <Link className="btn btn-success" to ={'/GalleryDetail/' + this.props.hit.id}> Gallery Detail</Link>
                 </div>
                </div>
              </div>
            </div>
        )
    }
}
export default GalleryItem