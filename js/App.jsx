import React from 'react';
import SearchBar from "./SearchBar.jsx";
import CatTable from "./CatTable.jsx";




const kitti =[
 {category: "male", age: "4", likesKids: true, name: "Fidel Catstro"},
 {category: "male", age: "9", likesKids: true, name: "Hairy Potter"},
 {category: "male", age: "2", likesKids: false, name: "Grumpy"},
 {category: "female", age: "1", likesKids: true, name: "Jude Paw"},
 {category: "female", age: "2", likesKids: false, name: "Lucifurr"},
 {category: "female", age: "3", likesKids: true, name: "Meowly Cyrus"}
];

console.log(kitti);


class App extends React.Component {
   constructor(props){
     super(props);

    this.state = {
      kitties : kitti,
      name : "Search"
    }


}

 handleText = (event) => {
   this.setState({name:	event.target.value});
   

}

handleButton = ()=> {
  const array = [];
  this.state.kitties.map(e => {
    if(e.likesKids === true){
       array.push(e);

     }
});
   this.setState({
     kitties:array
   });
}

  render(){
   return(
     <div>
       <SearchBar text={this.handleText} click={this.handleButton} name={this.state.name}  />
       <CatTable kitties={this.state.kitties} />

     </div>
   );



  }



 }

 export default App;
