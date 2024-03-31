import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

export default function UpdateTrade() {
    let history = useHistory();

    const {stock_name} = useParams();

    const [trade, setTrade] = useState({
        listing_price:"",
        type:"",
        trade_data_time:"",
        price_per_unit:""
    });

    // Deconstructing customer object
    const{listing_price, type, trade_data_time, price_per_unit} = trade;

    const onInputChange=(e) =>{
        setTrade({...trade,[e.target.name]: e.target.value});
    };

    useEffect(() =>{
        loadTrades();
    },[]);

    // to prevent default url
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/trade/updateTrade/${stock_name}`, trade)
        history.push("/")
    };

    // get current customer data
    const loadTrades = async () => {
        try{
            const response = await axios.get(`http://localhost:8080/trade/getByName/${stock_name}`)
            setTrade(prevState => ({
                ...prevState,
                stock_name: response.data.stock_name,
                listing_price: response.data.listing_price,
                type: response.data.type,
                trade_data_time: response.data.trade_data_time,
                price_per_unit: response.data.price_per_unit
            }));
        }catch(error){
            console.error("Error loading Trade", error);
        }        
    }

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
                        <label htmlFor="tradeDateTime" className="form-label">Trade Date Time</label>
                        <input 
                            type="text"
                            className="form-control glowing-border"
                            id="tradeDateTime"
                            name="trade_data_time"
                            value={trade_data_time}
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
                        <Link className="btn btn-danger" to="/">Cancel</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}