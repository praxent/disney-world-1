import React, { useEffect, useState } from "react";
import styled from "styled-components";

import axios from "axios";

import space220Restaurant from "../assets/img/Space-220-Restaurant.jpeg";

const Activity2Base = ({ className }) => {
  const [menuData, setData] = useState([]);
  const [moonRocks, setMoonRocksCount] = useState();

  const getMenuData = async () => {
    try {
      const data = axios.get(`http://localhost:4000/space_220`);
      return data 
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
  const purchaseHandle = (item) => {
    let updatedMenu = menuData.map((menuItem) => {
      if (menuItem.id === item.id) {
          return { ...menuItem, quantity: item.quantity - 1 }
      }
      return menuItem
    })
    setData(updatedMenu)
  }

  useEffect(() => {
    getMenuData().then(res => {
      setData(res.data);
    })
  }, []);

  return (
    <div className="epcot">
      <div className={`${className}__container`}>
        Hello from Activity 2 Epcot
        <div className={`${className}__epcot-img-container`}>
          <img className={`${className}__epcot-img`} />
        </div>
        <div className={`${className}__epcot-table-container`}>
          <table>
            <thead>
              <tr>
              <th>Product</th>
              <th>Description</th>
              <th>For</th>
              <th>Qty</th>
              </tr>
            </thead>
            <tbody>
              {menuData.map(item => {
                return (
                  <tr key={item.id}>
                    {item.quantity ? (
                      <>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.type}</td>
                    <td>{item.quantity}</td>
                    <td><button onClick={() => purchaseHandle(item)}>Buy</button></td>
                    </>
                    ) : null }
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const Activity2 = styled(Activity2Base)`
  &__container {
    color: red;
    max-width: 900px;
    margin: 0 auto;
  }

  &__epcot-img-container {
    position: relative;
    &:before {
      width: 100%;
      height: 100%;
      display: block;
    }
    & > img {
      content: url(${space220Restaurant});
      display: block;
      width: 100%;
      cursor: pointer;
    }
  }
`;

export default Activity2;
