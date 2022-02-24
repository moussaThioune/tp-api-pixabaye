import React, { Component } from 'react'

export class SeachForm extends Component{
    constructor(){
        super()
        this.state={
            keyWorldValue:''
        }
    }
    setKeyword=(e)=>{
        this.setState({
            keyWorldValue:e.target.value
        })
      }
      doSearch=(e)=>{
          e.preventDefault();
            this.props.onSearch(this.state.keyWorldValue);
      }
    render(){
        return(
         <form onSubmit={this.doSearch}>
            <div>{this.state.keyWorldValue}</div>
          <div className="row m-2 p-3">
              <div className="col">
               <input type="text" className="form-control"
               value={this.state.currentKeyword}
               onChange={this.setKeyword}
               placeholder="Taper un nom de ville"/>
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-success">Chercher</button>
              </div>
          </div>
        </form>
        )
    }
}
export default SeachForm