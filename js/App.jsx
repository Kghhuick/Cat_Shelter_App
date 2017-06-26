import React from 'react';
import SearchBar from "./SearchBar.jsx";
import CatTable from "./CatTable.jsx";







 class App extends React.Component {
  render(){
   return(
     <div>
       <SearchBar />
       <CatTable kitties={this.props.kitties} />

     </div>
   );



  }



 }

 export default App;
