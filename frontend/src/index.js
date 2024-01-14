import * as React from "react"
import * as ReactDOM from "react-dom"
import { Provider } from "react-redux"
import thunkMiddleware from "redux-thunk"
import { createStore, applyMiddleware } from "redux"
import { hot } from "react-hot-loader"
import { composeWithDevTools } from '@redux-devtools/extension';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Containers/Home"
import RecipePage from "./Containers/RecipePage"
import reducers from "./reducers"

const composeEnhancers = composeWithDevTools({});

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

const Root = () => (
    <Provider store={store}>
      <Router>
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/recipes/:id" element={<RecipePage title='Recipe'/>}/>
        </Routes>
      </Router>
    </Provider>
)

const HotRoot = hot(module)(Root)

ReactDOM.render(<HotRoot />, document.getElementById("home"))
