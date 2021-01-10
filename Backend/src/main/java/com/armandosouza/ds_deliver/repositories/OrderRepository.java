package com.armandosouza.ds_deliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.armandosouza.ds_deliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {
	
}
