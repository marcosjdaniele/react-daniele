import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { gFetch } from "../utils/gFetch.js";

const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();

  useEffect(() => {
    if (categoriaId) {
      gFetch()
        .then((resp) =>
          setProducts(resp.filter((prod) => prod.categoria === categoriaId))
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      gFetch()
        .then((resp) => setProducts(resp))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [categoriaId]);

  console.log(categoriaId);

  return loading ? (
    <h2>Cargando...</h2>
  ) : (
    <div>
      <h1>Se te hace agua la boca?..</h1>
      {products.map((obj) => (
        <div key={obj.id} className="card w-50 mt-2">
          <Link to={`/detail/${obj.id}`}>
            <div className="card-header">{obj.name}</div>
            <div className="card-body">
              <center>
                <img src={obj.foto} className="w-50px" />
              </center>
            </div>
            <div className="card-footer">
              categoria: {obj.categoria}
              precio : {obj.price}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemDetailContainer;
