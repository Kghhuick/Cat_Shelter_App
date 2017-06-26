import React from 'react';


class SearchBar extends React.Component {




  render(){
    return(
      <div>
      <input onChange={this.props.text} value={this.props.name} />
    <br />
      <button type="checkbox" onClick={this.props.click} > </button> Only show cats that like kids

      </div> 
    )

  }






}







export default SearchBar;
