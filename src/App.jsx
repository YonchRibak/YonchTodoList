import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { firebase } from "./firebase";
import Home from "./Home";
import Navbar from "./NavBar";
import AddTask from "./AddTask";
import AddCollaborators from "./AddCollaborators";
import { useEffect, useState } from "react";
import { db } from "./firebase";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
firebase();

function App() {
  // const [collaborators, setCollaborators] = useState([]);
  // const colCollabRef = collection(db, "Collaborators");

  // useEffect(() => {
  //   const getCollabs = async () => {
  //     const data = await getDocs(colCollabRef);
  //     console.log(data);
  //   };

  //   getCollabs();
  // }, []);
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/AddTask" element={<AddTask />}></Route>
            <Route
              path="/AddCollaborators"
              element={<AddCollaborators />}
            ></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
