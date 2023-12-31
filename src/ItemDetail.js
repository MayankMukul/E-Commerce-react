import { useParams } from "react-router-dom"; 

function ItemDetail() {
    const { item_id } = useParams();
    console.log(item_id)
    return ( 
        <>
        <h1>This is a item Page.</h1>
        </>
     );
}

export default ItemDetail;