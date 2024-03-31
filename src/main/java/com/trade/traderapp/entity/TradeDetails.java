package com.trade.traderapp.entity;

import java.util.Date;

import org.hibernate.annotations.CreationTimestamp;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "trade_details")
public class TradeDetails {
	
	@Id
	private String stock_name;
	@CreationTimestamp
	@Temporal(TemporalType.TIMESTAMP)
	private Date trade_data_time;
	private double listing_price;
	private String type;
	private double price_per_unit;
	
	public Date getTrade_data_time() {
		return trade_data_time;
	}
	
	public void setTrade_data_time(Date trade_data_time) {
		this.trade_data_time = trade_data_time;
	}
	
	public String getStock_name() {
		return stock_name;
	}
	
	public void setStock_name(String stock_name) {
		this.stock_name = stock_name;
	}
	
	public double getListing_price() {
		return listing_price;
	}
	
	public void setListing_price(double listing_price) {
		this.listing_price = listing_price;
	}
	
	public String getType() {
		return type;
	}
	
	public void setType(String type) {
		this.type = type;
	}
	
	public double getPrice_per_unit() {
		return price_per_unit;
	}
	
	public void setPrice_per_unit(double price_per_unit) {
		this.price_per_unit = price_per_unit;
	}
	
	public TradeDetails(Date trade_data_time, String stock_name, double listing_price, String type,
			double price_per_unit) {
		super();
		this.trade_data_time = trade_data_time;
		this.stock_name = stock_name;
		this.listing_price = listing_price;
		this.type = type;
		this.price_per_unit = price_per_unit;
	}
	
	public TradeDetails() {
		super();
	}
	
	@Override
	public String toString() {
		return "TradeDetails [trade_data_time=" + trade_data_time + ", stock_name=" + stock_name + ", listing_price="
				+ listing_price + ", type=" + type + ", price_per_unit=" + price_per_unit + "]";
	}
	
}
