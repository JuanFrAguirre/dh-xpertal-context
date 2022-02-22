import axios from "axios";
import { useEffect, useState, useRef } from "react";
import SubMain1 from "./SubMain1";

let url = "https://jsonplaceholder.typicode.com/users";

function Main(props) {
  const [username, setUsername] = useState("Aaron");
  const [data, setData] = useState([]);

  const titulo = useRef();

  const bienvenida = () => {
    setUsername("Diego");
    titulo.current.style.color = "blue";
  };

  const modificarNombre = () => {
    props.modificarNombreSecreto("Aaron");
  };

  useEffect(() => {
    console.log("me acabo de montar");
    axios.get(url).then((res) => {
      const people = res.data;
      console.log(people);
      // this.setState({ data: data });
      setData(res.data);
      console.log(data);
    });
    // .then(() => console.log(data));
  }, []);

  useEffect(() => {
    console.log(titulo);
  }, []);

  return (
    <>
      {props.nombreSecreto ? (
        <>
          <h1>{props.nombreSecreto}</h1>
          <button onClick={modificarNombre}>
            Cambiar Nombre Secreto por Aaron
          </button>
        </>
      ) : (
        <h1 ref={titulo}>Bienvenido, {username}</h1>
      )}
      <button onClick={bienvenida}>Click Me</button>
      {data.map((user, i) => (
        <p key={i}>{user.email}</p>
      ))}

      <SubMain1 />
    </>
  );
}

export default Main;
