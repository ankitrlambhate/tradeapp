package com.trade.traderapp.jpa;

import org.springframework.data.jpa.repository.JpaRepository;

import com.trade.traderapp.entity.OrderMaster;

public interface OrderMasterJPA extends JpaRepository<OrderMaster, Integer> {

}
