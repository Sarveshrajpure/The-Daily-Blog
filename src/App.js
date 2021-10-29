import { Switch, Route, BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import Home from "./Home";
import CreateBlog from "./Home/components/CreateBlog";
import RouteGuard from "./RouteGuard";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/createBlog" component={RouteGuard(CreateBlog)} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
