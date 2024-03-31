package com.trade.traderapp.entity;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "order_details")
public class OrderMaster {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String stock_name;
	
	private int quantity;
	
	private double price_per_unit;
	
	private String type;
	
	private double listing_price;
	
	private String status = "created";
	
	@CreationTimestamp
	@Temporal(TemporalType.TIMESTAMP)
	private LocalDateTime trade_data_time;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getStock_name() {
		return stock_name;
	}

	public void setStock_name(String stock_name) {
		this.stock_name = stock_name;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public double getPrice_per_unit() {
		return price_per_unit;
	}

	public void setPrice_per_unit(double price_per_unit) {
		this.price_per_unit = price_per_unit;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public double getListing_price() {
		return listing_price;
	}

	public void setListing_price(double listing_price) {
		this.listing_price = listing_price;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public LocalDateTime getTrade_data_time() {
		return trade_data_time;
	}

	public void setTrade_data_time(LocalDateTime trade_data_time) {
		this.trade_data_time = trade_data_time;
	}

	public OrderMaster(int id, String stock_name, int quantity, double price_per_unit, String type, double listing_price,
			String status) {
		super();
		this.id = id;
		this.stock_name = stock_name;
		this.quantity = quantity;
		this.price_per_unit = price_per_unit;
		this.type = type;
		this.listing_price = listing_price;
		this.status = status;
		}

	public OrderMaster() {
		super();
	}

	@Override
	public String toString() {
		return "OrderMaster [id =" + id + ", stock_name=" + stock_name + ", quantity=" + quantity + ", price_per_unit=" + price_per_unit
				+ ", type=" + type + ", listing_price=" + listing_price + ", status=" + status + ", trade_data_time="
				+ trade_data_time + "]";
	}

}
