This is the README documentation for TradeApp

Pre-requisites:
  JDK 21
  Eclipse IDE (to import the backend code)  
  Visual Studio code 
  ReactJs
  MySQL (with username = root, password = root and database name = db_trade)

This Repository consists of two branches:
  * backend
  * frontend

The backend Repository consists of the backend code of the app. The backend code was written in java using spring boot and hibernate. The endpoints for the projects are as follows:

For TradeDetails Table -

  1. /trade/saveTradeDetails - This endpoint saves the trades data into the database.
  2. /trade/getAllTrades - This endpoint retrieves all the trades available in the database.
  3. /trade/getByName/{stock_name} - This endpoint retrieves the details of an individual trade based on the stock name.
  4. /trade/updateTrade/{stock_name} - This endpoint is used to update a pre-existing trade.
  5. /trade/deleteTrade/{stock_name} - This endpoint deletes a specific trade based on stock name.

For OrderMaster Table -

  1. /order/saveOrder - This endpoint save the order details in the database.
  2. /order/getAllOrders - This endpoits is used to retrieve all the data fron the order_details table.
