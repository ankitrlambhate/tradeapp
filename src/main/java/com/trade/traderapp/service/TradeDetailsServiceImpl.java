package com.trade.traderapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.trade.traderapp.entity.TradeDetails;
import com.trade.traderapp.jpa.TradeDetailsJPA;

@Service
public class TradeDetailsServiceImpl implements TradeDetailsService {

	private TradeDetailsJPA tradeDetailsJPA;

	public TradeDetailsServiceImpl(TradeDetailsJPA tradeDetailsJPA) {
		this.tradeDetailsJPA = tradeDetailsJPA;
	}

	@Override
	public TradeDetails saveTradeDetails(TradeDetails tradeDetails) {
		// TODO Auto-generated method stub
		return tradeDetailsJPA.save(tradeDetails);
	}

	@Override
	public List<TradeDetails> getAllTrades() {
		// TODO Auto-generated method stub
		return tradeDetailsJPA.findAll();
	}

	@Override
	public void deleteByName(String stock_name) {
		// TODO Auto-generated method stub
		tradeDetailsJPA.deleteById(stock_name);
	}

	@Override
	public void updateByName(String stock_name, TradeDetails updatedTradeDetails) {
		// TODO Auto-generated method stub
		TradeDetails existingTradeDetails = tradeDetailsJPA.findById(stock_name).orElseThrow(() -> new RuntimeException("Trade not found with stock name"+ stock_name));
		existingTradeDetails.setListing_price(updatedTradeDetails.getListing_price());
		existingTradeDetails.setPrice_per_unit(updatedTradeDetails.getPrice_per_unit());
		existingTradeDetails.setStock_name(updatedTradeDetails.getStock_name());
		existingTradeDetails.setType(updatedTradeDetails.getType());
		tradeDetailsJPA.save(existingTradeDetails);
	}

	@Override
	public Optional<TradeDetails> getTradeDetails(String stock_name) {
		// TODO Auto-generated method stub
		return tradeDetailsJPA.findById(stock_name);
	}
	
}
