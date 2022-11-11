import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

const ItemDetail = () => {
  const { productId } = useParams();
  console.log(productId);
  return (
    <div>
      <ItemDetail />
    </div>
  );
};

export default ItemDetail;
