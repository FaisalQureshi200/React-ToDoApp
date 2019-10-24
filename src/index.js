import React  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DisplayItem from './DisplayItem'
import rand from 'random-key'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import { MDBInput,MDBContainer,MDBBtn,MDBCard,MDBCardBody,  MDBCardHeader } from 'mdbreact';




class App extends React.Component{
  constructor() {
    super()
    this.state = {text: '',error:'',
  items:[]}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleDone = this.handleDone.bind(this)
    this.handleComplete=this.handleComplete.bind(this)
}
handleComplete(e){
  var newItems=this.state.items.filter((item)=>{return !item.done})
  this.setState({items:newItems})

}
handleDone=idtextDone=>{
  var _items=this.state.items
  var item=_items.filter((item)=>{
      return item.id === idtextDone
  })[0]
  item.done = !item.done
  this.setState({items:_items})
}
handleDelete=idtextDelete=>{
  var newItems=this.state.items.filter((item)=>{

     return item.id !== idtextDelete
  })
  this.setState({items:newItems})
}


handleSubmit=e=>{
 
  e.preventDefault()
 
   
  var text=this.state.text
  
  
   var error=""
   if(text===''){
     error="invalid Input"
   }
   if(error){
     this.setState({error})
     
   }
  
 
  
  else{
  
      var newItems = this.state.items.concat({text: text, id:rand.generate(), done: false})
      this.setState({text: '', items: newItems})
      this.setState({error:''})
  }

}
handleChange=e=>{
  this.setState({text:e.target.value})
}


    render(){
        return(
            <MDBContainer className="todo-app" >
               
            <MDBCard  className="card">
            <MDBCardHeader color="blue-grey" align="center" >Todo-App</MDBCardHeader>
              <MDBCardBody>
              <form    onSubmit={this.handleSubmit}  >
              
              <MDBInput type="text"
                 background onChange={this.handleChange} label="Add Todo" value={this.state.text} required />
               <div style={{color:'red'}}>{this.state.error}</div>
 
               <br/>
              <MDBBtn className="button"  onClick={this.handleSubmit} color="cyan">Add Todo</MDBBtn>
             
              </form>
              <br/>
              <p>All:{this.state.items.length}   |
                    Active:   {this.state.items.filter((item)=>{return !item.done}).length}  |
                  Complete:{this.state.items.filter((item)=>{return item.done}).length}  |
                    <a href='#section' onClick={this.handleComplete}> ClearComplete</a>

                </p>
                
                  <DisplayItem
                handleDone={this.handleDone}
                    handleDelete={this.handleDelete} 
                   items={this.state.items}/>
              
               
               
              </MDBCardBody>
              
            </MDBCard>
           
          </MDBContainer>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));



