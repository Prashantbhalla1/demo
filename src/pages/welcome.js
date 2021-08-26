import { Link,Route } from "react-router-dom"

const Welcome=()=>{
    return (<>
        <h1>The Product Page</h1><li><Link to="/product/user">pp</Link></li>
        <Route path="/product/user">Hellow User</Route>
        <li><Link to="/product/p1">p1</Link></li>
        <li><Link to="/product/p2">p2</Link></li>
        </>
    )
}
export default Welcome;