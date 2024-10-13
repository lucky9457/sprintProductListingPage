import Navbar from "../Navbar/Navbar";


import React, { useCallback, useState } from 'react'
import "./Home.css"


import Productspage from "../Productspage/Productspage";

const Home = () => {
    const [sortOption, setSortOption] = useState("low-to-high");
    const [filterview, setfilterview] = useState(false)


    const handlehidefilter = () => {
        setfilterview((prev) => !prev)

    }


    const handleSortChange = (event) => {
        setSortOption(event.target.value);  // Update the selected sort option
    };

    return (
        <div className="home">
            <Navbar />
            <div className="TaglineContainer">
                <h1 className="deschead">DISCOVER OUR PRODUCTS</h1>
                <p className="descpara">Discover our premium products, <br />expertly crafted for quality, style, and functionality to elevate your everyday life.</p>
            </div>
            <div className="filterheadsection">
                <div className="filtertabhide">
                    <p>3425 ITEMS</p>
                    <p onClick={handlehidefilter} className="hidefilter">{filterview ? "SHOW FILTERS" : "HIDE FILTERS"} </p>
                </div>
                <button onClick={handlehidefilter} className="filterbutton">Filter</button>
                <select value={sortOption} onChange={handleSortChange} className="selectbar">
                    <option value="low-to-high">Price: low to high</option>
                    <option value="high-to-low">Price: high to low</option>

                </select>



            </div>
            <div className="filterandproductssection">
                {/*<Filtertab />
                <MainFilter />*/}
                <Productspage viewfilter={filterview} sortOption={sortOption} />
            </div>




        </div>
    )
}

export default Home
