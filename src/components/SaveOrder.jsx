import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";

export default function SaveOrder() {
    
    const history = useHistory();

    // State to hold trade data
    const [trade, setTrade]= useState(null);

    // State to hold quantity
    const [quantity, setQuantity] = useState(1);

    // Extracting query parameter from URL
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const stock_name = searchParams.get("stock_name");

    useEffect(() => {
        if(stock_name){
            // Fetch trade data based on stock_name
            axios.get(`http://localhost:8080/trade/getByName/${stock_name}`)
                .then(response => {
                    setTrade(response.data);
                })
            .catch(error =>{
                console.error("Error fetching trade: ", error)
            });
        }
    },[stock_name]);

    function handleSubmit(event){
        event.preventDefault();

        // Retrieve the quantity from the form input
        const quantityValue = parseInt(quantity, 10);
        if(isNaN(quantityValue) || quantityValue<= 0){
            alert("Please enter a valid quantity.")
            return;
        }

        // Prepare order data
        const orderData={
            stock_name: trade.stock_name,
            quantity: quantityValue,
            type: trade.type,
            listing_price: trade.listing_price,
            price_per_unit: trade.price_per_unit
        };

        // Saving the order using orderData
        axios.post("http://localhost:8080/order/saveOrder", orderData)
        .then(response =>{
            console.log("Order placed successfully: ", response.data);
            history.push('/showOrders');
        })
        .catch(error =>{
            console.error("Error placing order: ", error);
        });
    }

    return (
        <div className="py-4">
            {trade && (
                <div>
                    <h2>Create Order</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group row">
                            <label className="col-sm-3">Stock Name:</label>
                            <div className="col-sm-6">
                            <input
                                type="text"
                                className="form-control"
                                value={trade.stock_name}
                                readOnly
                            />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3">Listing Price:</label>
                            <div className="col-sm-6">
                            <input
                                type="text"
                                className="form-control"
                                value={trade.listing_price}
                                readOnly
                            />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3">Type:</label>
                            <div className="col-sm-6">
                            <input
                                type="text"
                                className="form-control"
                                value={trade.type}
                                readOnly
                            />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3">Trade Data Time:</label>
                            <div className="col-sm-6">
                            <input
                                type="text"
                                className="form-control"
                                value={trade.trade_data_time}
                                readOnly
                            />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3">Price Per Unit:</label>
                            <div className="col-sm-6">
                            <input
                                type="text"
                                className="form-control"
                                value={trade.price_per_unit}
                                readOnly
                            />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3">Quantity:</label>
                            <div className="col-sm-6">
                            <input
                                type="number"
                                className="form-control"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                min="1"
                                required
                            />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-success">
                            Confirm Order
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}