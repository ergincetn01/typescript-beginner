import "./App.css";
// import {  } from "react-router";
import Layout, { Content, Header } from "antd/lib/layout/layout";
import Navbar from "./Components/Menu/NavBar";
import { Home } from "./Components/Menu/Home";
import { createBrowserHistory } from "history";
import { Page2 } from "./Components/Menu/Page2";
import { BrowserRouter  as Router, Switch,Route, Link} from "react-router-dom";
import Page3 from "./Components/Menu/Page3";

const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    <div className="App">
      <Layout>
        <Header>
          <Navbar />
        </Header>
        <Content>
          <Router>
            {/* this block hinders links and renders working  synchronized.
             */}
          </Router>
          <Route strict path="/home" component={Home} />
          <Route exact path="/page2" component={Page2} />
          <Route exact path="/page3" component={Page3} />
        </Content>
      </Layout>
    </div>
  );
};

export default App;
