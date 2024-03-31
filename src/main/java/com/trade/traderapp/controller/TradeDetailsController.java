package com.trade.traderapp.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.trade.traderapp.entity.TradeDetails;
import com.trade.traderapp.service.TradeDetailsService;



@Controller
@RequestMapping("/trade")
@CrossOrigin(origins = "http://localhost:3000")
public class TradeDetailsController {

	private TradeDetailsService tradeDetailsService;

	public TradeDetailsController(TradeDetailsService tradeDetailsService) {
		this.tradeDetailsService = tradeDetailsService;
	}
	
	@PostMapping(path = "/saveTradeDetails")
	@ResponseBody
	public TradeDetails saveTradeDetails(@RequestBody TradeDetails tradeDetails) {
		return tradeDetailsService.saveTradeDetails(tradeDetails);
	}
	
	@GetMapping(path = "/getAllTrades")
	@ResponseBody
	public List<TradeDetails> getAllTrades() {
		return tradeDetailsService.getAllTrades();
	}
	
	@GetMapping(path = "/getByName/{stock_name}")
	@ResponseBody
	public Optional<TradeDetails> getTradeDetails(@PathVariable String stock_name) {
		return tradeDetailsService.getTradeDetails(stock_name);
	}
	
	@PutMapping(path = "/updateTrade/{stock_name}")
	@ResponseBody
	public void updateTrade(@RequestBody TradeDetails updatedTradeDetails, @PathVariable String stock_name) {
		tradeDetailsService.updateByName(stock_name, updatedTradeDetails);
	}
	
	@DeleteMapping(path = "/deleteTrade/{stock_name}")
	@ResponseBody
	public String deleteTrade(@PathVariable String stock_name) {
		tradeDetailsService.deleteByName(stock_name);
		return stock_name+" has been deleted";
	}
}
