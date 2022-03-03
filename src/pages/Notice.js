import React from "react";
import "./Checkout.css";

 import { Table,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
 import { Route, Link } from "react-router-dom";
import Write from "./Write";


function Notice() {


  return (
      <>
      <h1>공지사항 입니다.</h1>

      <Table striped bordered hover>
          <thead>
          <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
          </tr>
          </thead>
          <tbody>
          <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
          </tr>
          <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
          </tr>
          <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
          </tr>
          </tbody>
      </Table>


      </>
  );
}

export default Notice;
