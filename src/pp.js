import { useParams } from "react-router-dom";

const ProductD=()=>{
const param=useParams();
return (
<>
<h1>Product Details</h1>
<p> {param.productid }  </p>
</>
)

}
export default ProductD;