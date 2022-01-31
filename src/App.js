import {
  BrowserRouter,
  Switch,
  Route} from "react-router-dom"
import "./App.css"

const App=()=>{
    const design=(
      <div className="main">
        <div className="inside">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
                <h1>This is home Home Page</h1>
          </Route>
          <Route exact path="/images">
            <h1>This is Image</h1>
          </Route>
          <Route exact path="/blogs">
            <h1>This is Blog</h1>
          </Route>
          <Route exact path="/about-us">
            <h1>This is About Us</h1>
          </Route>
          <Route exact path="/connect">
            <h1>This is Connect</h1>
          </Route>
        </Switch>
      </BrowserRouter>
        </div>
      </div>
    );

    return design;
}

export default App