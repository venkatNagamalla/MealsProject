import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Search from './components/Search'
import Favourite from './components/Favourite'
import "./App.css";

const App = () => (
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/search" element={<Search/>}/>
        <Route exact path="/favourite" element={<Favourite/>}/>
    </Routes>
);

export default App;
