package com.trade.traderapp.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.trade.traderapp.entity.OrderMaster;
import com.trade.traderapp.service.OrderMasterService;

@Controller
@RequestMapping("/order")
@CrossOrigin(origins = "http://localhost:3000")
public class OrderMasterController {
	
	private OrderMasterService orderMasterService;
	
	public OrderMasterController(OrderMasterService orderMasterService) {
		super();
		this.orderMasterService = orderMasterService;
	}
	
	@PostMapping(path = "/saveOrder")
	@ResponseBody
	public OrderMaster saveOrder(@RequestBody OrderMaster order) {
		return orderMasterService.saveOrder(order);
	}
	
	@GetMapping(path = "/getAllOrders")
	@ResponseBody
	public List<OrderMaster> getAllOrders(){
		return orderMasterService.getAllOrders();
	}
	
}
