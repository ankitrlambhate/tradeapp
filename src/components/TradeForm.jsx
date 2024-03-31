import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { Button, TextField, Typography } from "@mui/material";

const TradeForm = () =>{
    
    const [tradeData, setTradeData] = useState({
        stock_name:"",
        listing_price:"",
        type:"",
        price_per_unit:"",
        trade_data_time:""
    });

    const [trades, setTrades] = useState([]);

    useEffect(() => {
        fetchAllTrades();
    },[]);

    const fetchAllTrades = async () => {
        try{
            const response = await axios.get("http://localhost:8080/trade/getAllTrades");
            setTrades(response.data);
        } catch(error){
            console.error("error fetching trades: ", error);
        }
    };

    const handleChange = (e) =>{
        const {name, value} =e.target;
        setTradeData({...tradeData, [name]: value});

    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const currentDate = new Date().toISOString();
        try{
            const response = await axios.post(`http://localhost:8080/trade/saveTradeDetails`, tradeData);
            console.log(response.data);
        } catch (error){
            console.error("error saving trade details: ", error);
        }
    };

    const handleUpdate = async (stock_name) => {
        try{
            const response = await axios.put(`http://localhost:8080/trade/updateTrade/${stock_name}`, tradeData);
            console.log(response.data);
            fetchAllTrades();
        } catch (error){
            console.error("error updating trade details: ", error);
        }
    };

    const handleDelete = async (stock_name) => {
        try{
            const response = await axios.delete(`http://localhost:8080/trade/deleteTrade/${stock_name}`);
            console.log(response.data)
            fetchAllTrades();
        } catch(error){
            console.error("error deleting trade details: ", error)
        }
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <TextField name="stock_name" placeholder="Stock Name" value={tradeData.stockName} onChange={handleChange} variant="outlined" /> <div />
            <TextField name="listing_price" placeholder="Listing Price" value={tradeData.listingPrice} onChange={handleChange} variant="outlined" /> <div />
            <TextField name="type" placeholder="Buy/Sell" value={tradeData.type} onChange={handleChange} variant="outlined" /> <div />
            <TextField name="price_per_unit" placeholder="Price Per Unit" value={tradeData.pricePerUnit} onChange={handleChange} variant="outlined" /> <div />
            <Button type="submit" variant="contained">Save</Button>
        </form>
        <Typography variant="h6">Trade Details</Typography>
        <ul>
            {trades.map((trade) =>(
                <li key={trade.stock_name}>
                    {trade.stock_name} - {trade.listing_price} - {trade.type} -{" "}
            {trade.price_per_unit} - {trade.trade_date_time}
                <Button onClick={() => handleUpdate(trade.stock_name)}>Update</Button>
                <Button onClick={() => handleDelete(trade.stock_name)}>Delete</Button>
                </li>
            ))}
        </ul>
        </div>
    );
};

export default TradeForm;