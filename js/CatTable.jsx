import React from 'react';
import CatRow from "./CategoryRow.jsx";
import CatHead from "./CatRow.jsx";

class CatTable extends React.Component {
  render() {

    const male = this.props.kitties.filter(cat => {
      return cat.category === 'male';
    });
    const female = this.props.kitties.filter(cat => {
      return cat.category === "female";

    });

    const elam = male.map(cat => {
      return (
        <tr key={cat.name}>
          <div className="width turquoise">
          <td>{cat.name}</td>
          <td>{cat.age}</td>
        </div>
        </tr>
      );
    });

    const elamef = female.map(cat => {
      return (

        <tr key={cat.name} >
          <div className="width turquoise">
          <td>{cat.name}</td>
          <td>{cat.age}</td>
        </div> 
        </tr>

      );

    });
    return (
     <div className=" blue wide">
      <table>
         <thead>

          <CatHead  name="NAME" age="AGE" />

           <h3 className ="green wide">
          <CatRow category="male"/> </h3>

          {elam}
         <h3 className="green wide">
          <CatRow category="female"/>
        </h3>
          {elamef}

        </thead>

      </table>
    </div>
    );
  }

}

export default CatTable;
