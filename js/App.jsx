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


handleButton = () => {
  const array=[];
  this.state.kitties.map(e =>{
    if(e.likesKids == true){
      array.push(e);
    }
  });
  this.setState({
    kitties : array
  })

}

 handleText = (e) => {
   this.setState({
     name: e.target.value
});

   }





  render(){


        this.state.kitties.filter(cat => {
         if(this.state.name.length > 0 && cat.name===this.state.name) {
             console.log("mamy kota w bazie danych");

            }
        });


   return(
     <div className ="yellow maxWide">
       <SearchBar  text={this.handleText} click={this.handleButton} name={this.state.name}  />
       <CatTable  kitties={this.state.kitties}  />

     </div>
   );



  }



 }

 export default App;
