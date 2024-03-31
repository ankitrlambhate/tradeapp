import { Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import SaveOrder from "../components/SaveOrder";


export default function Home(){
    const [trades, setTrades] = useState([]);

    useEffect(() => {
        loadTrades();
    },[]);

    const loadTrades = async () => {
        const result = await axios.get("http://localhost:8080/trade/getAllTrades");
        setTrades(result.data);
    };

    const deleteTrade = async (stock_name) => {
        await axios.delete(`http://localhost:8080/trade/deleteTrade/${stock_name}`);
        loadTrades();
    };

    return (
        <div className="container">
            <div className="py-4">
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">Trade Name</th>
                            <th scope="col">Listing Price</th>
                            <th scope="col">Type (Buy/Sell)</th>
                            <th scope="col">Trade Data Time</th>
                            <th scope="col">Price Per Unit</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trades.map((trade) => (
                            <tr>
                                <th scope="row" key={trade.stock_name}>
                                    {trade.stock_name}
                                </th>
                                <td>{trade.listing_price}</td>
                                <td>{trade.type}</td>
                                <td>{trade.trade_data_time}</td>
                                <td>{trade.price_per_unit}</td>
                                <td>
                                    <Link
                                        className="btn btn-outline-primary mx-2"
                                        to={`updateTrade/${trade.stock_name}`}
                                    >
                                        Update
                                    </Link>
                                </td>
                                <td>
                                    <Button
                                        className="btn btn-danger mx-2"
                                        onClick={() => deleteTrade(trade.stock_name)}
                                    >
                                        Delete
                                    </Button>
                                </td>
                                <td>
                                <Link
                                        className="btn btn-success mx-2"
                                        to={`/saveOrder?stock_name=${trade.stock_name}`}
                                    >
                                        Create Order
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}