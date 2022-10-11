import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Pricingg from "./components/Pricingg";
import AssignmentMarks from "./components/AssignmentMarks";
import Phonebar from "./components/Phonebar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className="text-5xl font-bold underline">Hi I am big Text</h1>

      <Pricingg></Pricingg>
      <AssignmentMarks></AssignmentMarks>
      <Phonebar></Phonebar>
    </div>
  );
}

export default App;
