package com.trade.traderapp.service;

import java.util.List;
import java.util.Optional;

import com.trade.traderapp.entity.TradeDetails;

import jakarta.transaction.Transactional;

public interface TradeDetailsService {

	@Transactional
	TradeDetails saveTradeDetails(TradeDetails tradeDetails);

	List<TradeDetails> getAllTrades();

	void deleteByName(String stock_name);

	void updateByName(String stock_name, TradeDetails updatedTradeDetails);

	Optional<TradeDetails> getTradeDetails(String stock_name);	
	
}
