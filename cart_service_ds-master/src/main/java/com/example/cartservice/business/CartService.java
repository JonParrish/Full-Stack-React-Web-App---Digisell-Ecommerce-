package com.example.cartservice.business;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.cartservice.data.CartDataInterface;
import com.example.cartservice.model.Cart;


@Service
public class CartService {

    @Autowired
    private CartDataInterface shoppingCartRepo;

    public CartService(CartDataInterface shoppingCartRepo) {
        this.shoppingCartRepo = shoppingCartRepo;
    }

    public List<Cart> findAll(){
        return shoppingCartRepo.findAll();
    }

    public Cart findById(String id){
        return shoppingCartRepo.findById(id).orElse(null);
    }

    public  Cart save(Cart shoppingCart) {
        return shoppingCartRepo.save(shoppingCart);
    }

    public void deleteById(String Id){
        shoppingCartRepo.deleteById(Id);
    }

}
