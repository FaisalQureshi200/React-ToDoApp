import React from 'react'
import {MDBIcon, MDBTable, MDBTableBody} from 'mdbreact'
import './AddItem.css'
export default class AddItem extends React.Component{
    
    
    render(){
        var item=this.props.item
        var text=item.text
        return <MDBTable  responsiveXl>
            
            <MDBTableBody >
            
            {text} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            
            <MDBIcon far icon="trash-alt" className="red-text "  onClick={this.props.handleDelete.bind(null,item.id)} />
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <input  checked={item.done} onChange={this.props.handleDone.bind(null,item.id)} type='checkbox' size='sm'/>
           
            </MDBTableBody></MDBTable>
           
            
           
       
       
    }
}