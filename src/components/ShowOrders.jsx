import { useEffect, useState } from "react"
import Pagination from "react-js-pagination";
import "./ShowOrders.css"
import axios from "axios";

export default function ShowOrders() {
    
    const [orders, setOrders] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const orderPerPage = 5;

    useEffect(() => {
        fetchOrders();
    },[]);

    const fetchOrders = () =>{
        axios.get("http://localhost:8080/order/getAllOrders")
            .then(response => {
                setOrders(response.data);
            })
            .catch(error => {
                console.error("Error fetching orders: ", error)
            });
    };

    // Logic for displaying curent orders
    const indexOfLastOrder = currentPage * orderPerPage;
    const indexOfFirstOrder = indexOfLastOrder - orderPerPage;
    const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

    // Change page
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="show-orders">
            <h2 className="orders-heading"> </h2>
            <ul className="order-list">
                {currentOrders.map((order) =>(
                    <li key={order.id} className="order-item">
                        <div className="order-info">
                            <div><strong>Stock Name: </strong> {order.stock_name} </div>
                            <div><strong>Price Per Unit</strong> {order.price_per_unit} </div>
                            <div><strong>Quantity: </strong> {order.quantity}</div>
                            <div><strong>Status: </strong> {order.status}</div>
                            <div><strong>Listing Price: </strong> {order.listing_price}</div>
                            <div><strong>Trade Date Time: </strong> {order.trade_data_time}</div>
                            <div><strong>Type: </strong> {order.type} </div>
                        </div>
                    </li>
                ))}
            </ul>
            <Pagination
                activePage={currentPage}
                itemsCountPerPage={orderPerPage}
                totalItemsCount={orders.length}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
                itemClass="page-item"
                linkClass="page-link"
                prevPageText="Previous"
                nextPageText="Next"
                handleFirstLastPages
                hideDisabled
                className="pagination"
            />
        </div>
    );
}