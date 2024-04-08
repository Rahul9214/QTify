import styles from "./App.module.css";
// import React, { component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { useState , useEffect } from "react";
import { fetchTopAlbums, fetchNewAlbums, fetchSongs} from "./api/api";
import Section from './components/Section/Section';
import FilterSection from "./components/FilterSection/FilterSection";


function App() {
  const [topAlbumData, setTopAlbumData] = useState([]);
  const [newAlbumData, setNewAlbumData] = useState([]);

  const [filteredDataValues, setFilteredDataValues] = useState([""]);
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState(0);

  const generateSongsData = (value) => {
    let songData = newAlbumData[0].songs;
    let key;
    if (value === 0) {
      setFilteredDataValues(songData);
      return;
    } else if (value === 1) {
      key = "rock";
    } else if (value === 2) {
      key = "pop";
    } else if (value === 3) {
      key = "jazz";
    } else if (value === 4) {
      key = "blues";
    }

    const data = songData.filter((item) => {
      return item.genre.key === key;
    })
    setFilteredDataValues(data);
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
    generateSongsData(newValue);
  }

  const handleToggle = () => {
    setToggle(!toggle);
  }

  const filteredData = (val) => {
    generateSongsData(val);
  }

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

  const generateFilterSongs = async () => {
    try {
      const newAlbumData = await fetchSongs();
      // setNewAlbumSongs(newAlbumData);
      setFilteredDataValues(newAlbumData);
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  useEffect(() => {
    // eslint-disable-next-line
  }, [value]);

    useEffect(() => {
      generateTopAlbum();
      generateNewAlbum();
      generateFilterSongs();
    }, []); 

    return (
      <div>
        <Navbar />
        <Hero />
        <div className={styles.sectionWrapper}> 
           <Section data = {topAlbumData} title="Top Albums" type="album" /> 
           <Section data = {newAlbumData} title="New Albums" type="album" />
           <FilterSection data = {newAlbumData} title="Songs" type="songFilter" filteredData={filteredData}
           filteredDataValues={filteredDataValues} value={value} handleChange={handleChange} handleToggle={handleToggle}/>
      </div>
    </div>
    );
  }

export default App;
