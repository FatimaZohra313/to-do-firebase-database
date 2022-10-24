import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Login from "../screen/login";
import Signup from "../screen/signup";
import Todo from "../screen/todo";

function AppRouter(){
    return(
        <>

        <Router>
            <Routes>
                <Route path="login" element={<Login/>}/>
                <Route path="/" element={<Signup/>}/>
                <Route path="todo" element={<Todo/>}/>
            </Routes>
        </Router>
        
        
        
        
        
        
        </>
    )
}

export default AppRouter;