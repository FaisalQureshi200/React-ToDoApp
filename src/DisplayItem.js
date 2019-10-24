import React from 'react'
import AddItem from './AddItem'

export default class DisplayItem extends React.Component{
    render(){
        return(
            <ul>
                {
                    this.props.items.map((item,i)=>{
                       return <AddItem key={item.id}
                             handleDone={this.props.handleDone}
                            handleDelete={this.props.handleDelete.bind(null,item.id)}
                       item={item}/>

                    })
                }
            </ul>
        )
    }
}