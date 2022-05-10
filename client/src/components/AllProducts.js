import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AllProducts = () => {

    const [products, setProducts] = useState([]);

    //To get all Products
    useEffect( () => {

        axios.get("http://localhost:8000/api/products")
            .then(res => {
                setProducts(res.data);
            })
            .catch(error => console.log(error));

    }, [])

    return (
        <div>
            <h1>All Products</h1>
            <Link className="btn btn-success" to="/new">NewProduct</Link>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => (
                            <tr key={index}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                                <td>
                                    <Link className="btn btn-primary" to={`/product/${product._id}`}>Details</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )

}

export default AllProducts;