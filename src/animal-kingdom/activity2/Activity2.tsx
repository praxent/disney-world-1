import React, { useState, useEffect } from 'react';
import styled from "styled-components";

const Styles = styled.div`
  .container {
    max-width: 900px;
    margin: 0 auto;
  }

  h1 {
    text-align: center;
  }
  
  .table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }
  
  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
  
  tr:nth-child(even) {
    background-color: #dddddd;
  }
`;

function Activity2() {

  const [rainforest_menu, setMenu] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    getData();

    // I use async/await to fetch this data
    async function getData() {
      const response = await fetch("http://localhost:4000/rainforest_cafe");
      const data = await response.json();

      // store the data into our menu variable
      setMenu(data);
    }
  }, []);


  const sellItem = (id: number) => {
    let updatedMenu = rainforest_menu.map(item =>
      {
        if (item.id == id){
          return {...item, quantity: item.quantity - 1};
        }
        return item;
      });
    setMenu(updatedMenu);
  }

  return (
    <Styles>
      <div className="container">
        <h1>Rain Forest Cafe</h1>

        {/* display menu from the API */}
        {rainforest_menu && (
          <div>
            <table>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Type</th>
                <th colSpan="2">Quantity</th>
              </tr>

              {/* loop over the menu */}
              {rainforest_menu.map((menu) => (
                <tr key={menu.id}>
                  <td>{menu.name}</td>
                  <td>{menu.description}</td>
                  <td>{menu.type}</td>
                  <td>{menu.quantity}</td>
                  <td>{menu.quantity > 0 ? <button className="buttonMenu" onClick={() => sellItem(menu.id)}>Sell</button> : ''}</td>
                </tr>
              ))}
            </table>
          </div>
        )}
      </div>
    </Styles>
  )
}

export default Activity2