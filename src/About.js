import React, { Component } from 'react'

export class About extends Component {
  constructor(props){
    super(props);
    this.state={
      skillValue:'',
      title:'Keep your smile',
      contact:{name:"Ousmane Sonk", profile:"data:image/jpeg;base64,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",email:'sonko@pdts.sn'},
      skills:[
        {id:1, skill:'developpeur Mobile'},
        {id:2, skill:'Administrateur systeme'},
        {id:3, skill:'Administrateur base de donné'}

      ]
    }
  }
  setSkill =(e)=>{
     this.setState({
       skillValue:e.target.value,
      
     })
  }
  addSkill =(e)=>{
    e.preventDefault()
     let skill ={
       //incrementer le id dans le tableau
       id:[...this.state.skills].pop().id+1,
       skill:this.state.skillValue
       
       //skill prend la nouvelle valeure saisie
      
     }
     this.setState({
       //ici skill est la nouvell valeure ajouté dans le tableau skills
       skills:[...this.state.skills,skill]
      
     
     })
  }
    //Supprimer un skill via cette fonction onDelete()

  onDelete=(skill)=>{
    // Trouver la valeur de l'index à supprimer
    let index=this.state.skills.indexOf(skill);
    // On crée un nouveau tableau
    let listSkills=[...this.state.skills];
    listSkills.splice(index,1); // splice() permet de supprimer un élément du tableau
    this.setState({
      //mettre à jours le state
      skills:listSkills
    })
  }
  render() {
    return (
      <div>
 <div style={{marginRight: "850px"}} className="card">
  <div>
    <div className='card-header text-center'>
      <label>{this.state.title}</label></div>
    <div className='row p-3'>
      <div className='col col-auto'>
      <img  width={200}   src={this.state.contact.profile}/>
      </div>
         <div className='col'>
            <ul className='list-group'>
              <li className='list-group-item'>{this.state.contact.name}</li>
              <li className='list-group-item'>{this.state.contact.email}</li>
            </ul>
         </div>
    </div>
  </div>
</div>
     <div style={{marginRight: "850px"}}  className='card mt-2'>
        <div className='card-header'>Skils:{this.state.skillValue}</div>
        <div className='card-body'>
   
       <form className='form' onSubmit={this.addSkill}>
         <div className='row'>
           <label for="exampleInputEmail1" 
           className="form-label">Add a Skill
           </label>
           <div className='col'>
           <input  type="text"   
            className="form-control" 
            value={this.state.skillValue} 
            onChange={this.setSkill}
            placeholder='enter your skil'>
           </input>
           </div>
           <div className='col-auto'>
           <button  type="submit" className="btn btn-success ">Add</button>
           </div>
           </div>
      </form>
    
         <table className='table'>
           <thead>
           <tr>
             <th>ID</th> <th>Skill</th>
           </tr>
           </thead>
           <tbody>
           
           {
           this.state.skills.map((data, index)=>
           <tr key={data.id}>
             <td>{data.id}</td>
             <td>{data.skill}</td>
             <td>
               <button className='btn btn-danger' onClick={()=>this.onDelete()}>X</button>
             </td>
          </tr>
           ) }
           </tbody>
         </table>
        </div>
       </div>   
      </div>
    )
  }
}

export default About