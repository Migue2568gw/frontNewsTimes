import React, { useState, useEffect } from "react";
import './Home.css'
import axios from 'axios';


const baseUrl = 'https://localhost:44324/api/';
function Historial(props) {
  const [data, setData] = useState([]);

  const peticionGet = async () => {
    await axios.get(baseUrl + `GetGeneralRespuesta`+`/Paris`)
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
        <div >
      <h4>Estado del tiempo </h4>
      <table>
        <thead>
          <tr>
            <th>Npmbre Ciudad</th>
            <th>Temperatura</th>
            <th>Humedad</th>
            <th>Presion</th>
          </tr>
        </thead>
        <tbody>
          {/* {data.map(time => (
            <tr key={time.EstadoTiempo}>
              <td>{time.name}</td>
              <td>{time.temp}</td>
              <td>{time.humidity}</td>
              <td>{time.pressure}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
    <div >
      <h4>Noticia</h4>
    
    </div>
    </div>
  );

}

export default Historial;