import React, { useState, useEffect } from "react";
import './table.css'
import axios from 'axios';


const baseUrl = 'https://localhost:44324/api/';
function Historial(props) {
  const [data, setData] = useState([]);

  const peticionGet = async () => {
    await axios.get(baseUrl + `GetHistorial`)
      .then(response => {
        setData(response.data);
        console.log(response.data);
      })
  }

  useEffect(() => {
    peticionGet();
  }, []);


  return (
    <div>
      <h4>Historial Realizado se compone de {data.length} registros</h4>
      <input type="text" placeholder="Buscar Pais"></input>
      <table>
        <thead>
          <tr>
            <th>Nombre Ciudad</th>
            <th>Información historial</th>
          </tr>
        </thead>
        <tbody>
          {data.map(product => (
            <tr key={product.IDHistorial}>
              <td>{product.nombciudad}</td>
              <td>{product.info}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

}

export default Historial;