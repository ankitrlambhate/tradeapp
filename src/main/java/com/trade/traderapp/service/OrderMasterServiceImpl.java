package com.trade.traderapp.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.trade.traderapp.entity.OrderMaster;
import com.trade.traderapp.jpa.OrderMasterJPA;

@Service
public class OrderMasterServiceImpl implements OrderMasterService{

	private OrderMasterJPA orderMasterJPA;
	
	public OrderMasterServiceImpl(OrderMasterJPA orderMasterJPA) {
		super();
		this.orderMasterJPA = orderMasterJPA;
	}
	
	@Override
	public OrderMaster saveOrder(OrderMaster order) {
		// TODO Auto-generated method stub
		return orderMasterJPA.save(order);
	}

	@Override
	public List<OrderMaster> getAllOrders() {
		// TODO Auto-generated method stub
		return orderMasterJPA.findAll();
	}

}
