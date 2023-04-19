import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
const RestaurantList = () => {
  const [item, setItem] = useState([]);

  async function getApi() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await response.json();
    setItem(json);
  }
  useEffect(() => {
    getApi();
  }, []);
  console.log(item);
  return (
    <>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <td>Sr No</td>
            <td>Address</td>
            <td>Geo Lat</td>
            <td>Geo Lng</td>
            <td>Street</td>
            <td>Suite</td>
            <td>Zip Code</td>
            <td>Company Name</td>
            <td>CatchPhrase</td>
            <td>Name</td>
            <td>Email</td>
            <td>Name</td>
            <td>Phone</td>
            <td>User Name</td>
            <td>Website</td>
          </tr>
        </thead>
        <tbody>
          {item.map((items, i) => (
            <tr>
              {/* <td key={i}>{items.i} </td> */}
              <td>{items.id} </td>
              <td> {items.address.city} </td>
              <td> {items.address.geo.lat} </td>
              <td> {items.address.geo.lng} </td>
              <td> {items.address.street} </td>
              <td> {items.address.suite} </td>
              <td> {items.address.zipcode} </td>
              <td> {items.company.bs} </td>
              <td> {items.company.catchPhrase} </td>
              <td> {items.company.name} </td>
              <td> {items.email} </td>
              <td> {items.name} </td>
              <td> {items.phone} </td>
              <td> {items.username} </td>
              <td> {items.website} </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default RestaurantList;
