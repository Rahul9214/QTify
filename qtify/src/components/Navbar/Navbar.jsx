//import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import SearchBar from "../SearchBar/SearchBar";

const Navbar=()=>{
    return (
        <nav className={styles.navbar}> 
        <div>
        <Logo />
        </div>
            <SearchBar placeholder="Search an album of your choice"/>
            <Button text="Give Feedback"/>
        </nav>
    )
}

export default Navbar;