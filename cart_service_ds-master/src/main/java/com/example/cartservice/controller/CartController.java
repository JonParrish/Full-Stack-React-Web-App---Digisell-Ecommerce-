package com.example.cartservice.controller;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.cartservice.business.CartService;
import com.example.cartservice.model.Cart;


@CrossOrigin
@RestController
@RequestMapping(value = "/carts")
public class CartController {

    @Autowired
    private final CartService shoppingCartService;

    public CartController(CartService shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
    }

    @RequestMapping(value = "", method = RequestMethod.GET)
    public List<Cart> getAll() {
        return shoppingCartService.findAll();
    }

    @RequestMapping(value = "/id", method=RequestMethod.GET)
    public Cart viewById(String id) {

        return shoppingCartService.findById(id);
    }

    @RequestMapping(value="/save", method=RequestMethod.PUT)
    public Cart save(@RequestBody Cart shoppingCart) {
        return shoppingCartService.save(shoppingCart);
    }

    @RequestMapping(value="/delete", method=RequestMethod.DELETE)
    public void deleteById(@RequestBody Map<String, String> json){
        String _id = json.get("_id");
        shoppingCartService.deleteById(_id);
    }
}
