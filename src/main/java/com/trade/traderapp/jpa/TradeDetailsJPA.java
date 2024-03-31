package com.trade.traderapp.jpa;

import org.springframework.data.jpa.repository.JpaRepository;

import com.trade.traderapp.entity.TradeDetails;

public interface TradeDetailsJPA extends JpaRepository<TradeDetails, String>{
	
}
