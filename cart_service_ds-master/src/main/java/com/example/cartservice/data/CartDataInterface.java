package com.example.cartservice.data;
import com.example.cartservice.model.Cart;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface CartDataInterface extends MongoRepository<Cart, String> {}

