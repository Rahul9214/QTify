import "./App.css";
// import React, { component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { useState , useEffect } from "react";
import { fetchTopAlbums, fetchNewAlbums} from "./api/api";
import Section from './components/Section/Section';


function App() {
  const [topAlbumData, setTopAlbumData] = useState([]);
  const [newAlbumData, setNewAlbumData] = useState([]);

  const generateTopAlbum = async () => {
    try {
      const topAlbumSongs = await fetchTopAlbums();
      setTopAlbumData(topAlbumSongs);
    } catch(err) {
      console.log(err);
    }
  }

  const generateNewAlbum = async () => {
    try {
      const newAlbumData = await fetchNewAlbums();
      setNewAlbumData(newAlbumData);
    } catch(err) {
      console.log(err);
    }
  }

    useEffect(() => {
      generateTopAlbum();
      generateNewAlbum();
    }, []); 

    return (
      <div>
        <Navbar />
        <Hero />
        <div className="sectionWrapper"> 
           <Section data = {topAlbumData} title="Top Albums" type="album" /> 
           <Section data = {newAlbumData} title="New Albums" type="album" />
      </div>
    </div>
    );
  }

export default App;
