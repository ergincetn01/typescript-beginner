import "./App.css";
import { Route, Router, Switch } from "react-router";
import Layout, { Content, Header } from "antd/lib/layout/layout";
import Navbar from "./Components/Menu/NavBar";
import { Home } from "./Components/Menu/Home";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    <div className="App">
      <Layout>
        <Header>
          <Navbar />
        </Header>
        <Content>
          <Router history={history}>
            <Route exact path="/home" component={Home} />
          </Router>
          <h1>Reacttttt</h1>
        </Content>
      </Layout>
    </div>
  );
};

export default App;
