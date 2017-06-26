import React from "react";



class CategoryRow extends React.Component {
  render(){
    return(
       <tbody>
        <tr>
           <th colSpan="2">{this.props.category}</th>
        </tr>

      
      </tbody>





    );
  }
}

export default CategoryRow;
