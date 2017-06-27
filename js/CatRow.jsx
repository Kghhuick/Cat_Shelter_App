import React from "react";


class CatHead extends React.Component {
 render(){
   return(
        <div>
         <tr>
            <td>{this.props.name}</td>
             <td>{this.props.age}</td>
         </tr>
       </div>

   )
 }
}




export default CatHead;
