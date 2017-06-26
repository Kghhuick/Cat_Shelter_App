import React from "react";


class CatHead extends React.Component {
 render(){
   return(
     <tr>
            <td>{this.props.name}</td>
             <td>{this.props.age}</td>
        </tr>


   )
 }
}




export default CatHead;
