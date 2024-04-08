// import React from "react";
import styles from "./SearchBar.module.css";
import searchicon from "../../assets/searchicon.svg";


const SearchBar = () => {
    return (
        <form className={styles.wrapper}>
          <div >
              <input type="text" className={styles.search} placeholder="Search an album of your choice" />
          </div>
          <div>
              <button className={styles.searchButton} type="submit" >
                 <img src={searchicon} alt="search icon" />
              </button>
          </div>
        </form>
    )
}

export default SearchBar;