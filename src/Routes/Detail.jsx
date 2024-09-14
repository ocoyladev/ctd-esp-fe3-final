import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  const url = "https://jsonplaceholder.typicode.com/users/" + id;

  useEffect(() => {
    axios(url).then((res) => {
      console.log (res.data)
      setDetail(res.data)
    })
  },[]);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>{detail.name}</td>
          <td>{detail.email}</td>
          <td>{detail.phone}</td>
          <td>{detail.website}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Detail