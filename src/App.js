import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import  './App.scss'
function App() {
  return (
    <Router>
      <div className="container">
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/movie:imdbID" element={<MovieDetails />} />
          <Route element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
