import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Resume from './Resume';
import Resume2 from './Resume2';
import ResumeViewer from './ResumeViewer';
import ResumeNav from './ResumeNav';
// import Home from './Home';
// import Create from './Create';
// import BlogDetails from './BlogDetails';
// import NotFound from './NotFound';

function App() {

  return (
    // Wrap our entire application within the Router component
    <Router>
      <div className="App">
        <Navbar />
        <ResumeViewer />
        {/* <div className="content">
          <Switch>
            <Route exact path="/">
              <ResumeViewer />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/messages">
              <Messages />
            </Route>
            <Route path="/createMessage">
              <CreateMessage />
            </Route>
            <Route path="/messages/:id">
              <MessageDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>         
        </div> */}
      </div>
    </Router>
  );
}

export default App;
