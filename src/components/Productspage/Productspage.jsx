import React, { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner"; // Importing spinner
import "./Productspage.css";

const Productspage = (props) => {
    const { viewfilter, sortOption } = props; // Get sortOption from props

    // States
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [loading, setLoading] = useState(true); // Loading state


    // Fetch products from API
    const fetchProducts = async (category = "all") => {
        setLoading(true); // Start loading
        let url = "https://fakestoreapi.com/products";
        if (category !== "all") {
            url = `https://fakestoreapi.com/products/category/${category}`;
        }
        const res = await fetch(url);
        const data = await res.json();
        setProducts(data);
        setLoading(false); // Stop loading
    };

    const handleviewfiltermobile = () => {
        setviewfiltermobile((prev) => !prev)
    }
    // Fetch categories from API
    const fetchCategories = async () => {
        const res = await fetch("https://fakestoreapi.com/products/categories");
        const data = await res.json();
        setCategories(data);
    };

    // Fetch products on initial load
    useEffect(() => {
        fetchProducts();
        fetchCategories();
    }, []);

    // Handle category change

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        fetchProducts(category);
    };

    // Sorting logic
    const sortProducts = (products) => {
        let sortedProducts = [...products];
        switch (sortOption) {
            case "low-to-high":
                sortedProducts.sort((a, b) => a.price - b.price);
                break;
            case "high-to-low":
                sortedProducts.sort((a, b) => b.price - a.price);
                break;
            case "popular":

                sortedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
                break;

            default:
                break;
        }
        return sortedProducts;
    };

    // Apply sorting to products array
    const sortedProducts = sortProducts(products);

    return (
        <div className="product-listing">
            {/* Sidebar for filters */}
            <div className={`filters ${!viewfilter ? "viewfilters" : "hidefilters"}`}>
                <h3>Categories</h3>
                <ul>
                    <li
                        className={selectedCategory === "all" ? "active" : ""}
                        onClick={() => handleCategoryChange("all")}
                    >
                        All Products
                    </li>
                    {categories.map((category) => (
                        <li
                            key={category}
                            className={selectedCategory === category ? "active" : ""}
                            onClick={() => handleCategoryChange(category)}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Product grid or loader */}
            <div className="product-grid">
                {loading ? (
                    <div className="loader-container">
                        <TailSpin
                            height="80"
                            width="80"
                            color="#4fa94d"
                            ariaLabel="tail-spin-loading"
                            radius="1"
                            visible={true}
                        />
                    </div>
                ) : (
                    sortedProducts.length > 0 ? (
                        sortedProducts.map((product) => (
                            <div className="product-card" key={product.id}>
                                <img src={product.image} alt={product.title} />
                                <div className="titleprice">
                                    <h4>{product.title}</h4>
                                    <p>{product.price} USD</p>
                                </div>

                            </div>
                        ))
                    ) : (
                        <p>No products found</p>
                    )
                )}
            </div>
        </div>
    );
};

export default Productspage;
