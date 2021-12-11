import './App.css';
import Tasks from './pages/Tasks';

import Home from './pages/Home';
import Contact from './pages/About';

import { Routes, Route } from "react-router-dom"
import Navbar from './Navbar';
import TaskDetails from './pages/TaskDetails';
import Users from './pages/Users';
import UserDetails from './pages/UserDetails';
import Comments from './pages/Comments';

function App() {
  return (
    <div className="App">
      {/* <Tasks /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Contact />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/users" element={<Users />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/tasks/:taskid" element={<TaskDetails />} />
        <Route path="/users/:userid" element={<UserDetails />} />
      </Routes>
    </div>
  );
}

export default App;
