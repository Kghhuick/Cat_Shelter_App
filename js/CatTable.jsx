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
          <td>{cat.name}</td>
          <td>{cat.age}</td>
        </tr>
      );
    });

    const elamef = female.map(cat => {
      return (
        <tr key={cat.name}>
          <td>{cat.name}</td>
          <td>{cat.age}</td>
        </tr>
      );

    });
    return (

      <table>
        <thead>

          <CatHead name="NAME" age="AGE" />
          <br/>
          <CatRow category="male"/> {elam}

          <CatRow category="female"/> {elamef}

        </thead>

      </table>

    );
  }

}

export default CatTable;
