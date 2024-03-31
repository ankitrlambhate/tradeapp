package com.trade.traderapp.service;

import java.util.List;

import com.trade.traderapp.entity.OrderMaster;

public interface OrderMasterService {

	OrderMaster saveOrder(OrderMaster order);

	List<OrderMaster> getAllOrders();

}
