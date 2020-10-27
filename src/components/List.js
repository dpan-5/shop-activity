import React from "react";

function List(props) {
  return (
    <ul className="list-group">
      {/* {props.groceries.map(grocery => (
        <li key={grocery.id} className="list-group-item">{grocery.name}</li>
      ))} */}
 
      {props.groceries.filter(grocery => grocery.purchased).map(grocery => (
        <li key={grocery.id} className="list-group-item">{grocery.name}</li>
      ))}
    </ul>
  );
}

export default List;
