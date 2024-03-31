import axios from "axios";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function AddTrade() {
    let history = useHistory()

    const [trade, setTrade] = useState({
        stock_name:"",
        listing_price:"",
        type:"",
        price_per_unit:""
    });

    // Deconstruct trade object
    const {stock_name, listing_price, type, price_per_unit} = trade;

    const onInputChange = (e) => {
        setTrade({...trade, [e.target.name]: e.target.value});
    }

    // to prevent default url
    const onSubmit = async (e) => {
        e.preventDefault();

        // Set the current date and time
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString();

        // Update the trade object with the current date and time
        const updatedTrade ={
            ...trade,
            trade_data_time: formattedDate
        }


        await axios.post("http://localhost:8080/trade/saveTradeDetails", updatedTrade);
        history.push("/")
    };
 
    return(
        <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
        <div className="border rounded p-4 mt-4 shadow-lg" style={{ maxWidth: "500px", width: "80%" }}>
            <h2 className="text-center mb-4">Add Trade</h2>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="stockName" className="form-label">Stock Name</label>
                    <input 
                        type="text"
                        className="form-control glowing-border"
                        id="stockName"
                        name="stock_name"
                        value={stock_name}
                        onChange={(e) => onInputChange(e)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="listingPrice" className="form-label">Listing Price</label>
                    <input 
                        type="text"
                        className="form-control glowing-border"
                        id="listingPrice"
                        name="listing_price"
                        value={listing_price}
                        onChange={(e) => onInputChange(e)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="type" className="form-label">Type (Buy/Sell)</label>
                    <input 
                        type="text"
                        className="form-control glowing-border"
                        id="type"
                        name="type"
                        value={type}
                        onChange={(e) => onInputChange(e)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="pricePerUnit" className="form-label">Price Per Unit</label>
                    <input 
                        type="text"
                        className="form-control glowing-border"
                        id="pricePerUnit"
                        name="price_per_unit"
                        value={price_per_unit}
                        onChange={(e) => onInputChange(e)}
                        required
                    />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link className="btn btn-danger mt-2" to="/">Cancel</Link>
                </div>
            </form>
        </div>
    </div>
    );
}
