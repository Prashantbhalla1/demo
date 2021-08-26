import { Route } from "react-router-dom";
import Welcome from './pages/welcome'
import Header from './header'
import ProductD from './pp.js'
const App=()=>{
  return (
<div>
<Header/>
<Route path="/product" exact>
<Welcome/>

</Route>
<Route path="/product/:productid">
<ProductD></ProductD>

</Route>
</div>
  )

}

export default App;
