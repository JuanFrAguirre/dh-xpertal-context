import { useParams } from "react-router-dom";

export const Products = () => <h1>Productos</h1>;

export const Product = () => {
  let { id, subId } = useParams();
  return (
    <h4>
      Producto {id} {subId}
    </h4>
  );
};
