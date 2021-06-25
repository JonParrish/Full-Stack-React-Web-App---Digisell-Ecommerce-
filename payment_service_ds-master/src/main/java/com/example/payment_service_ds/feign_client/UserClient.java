package com.example.payment_service_ds.feign_client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Component
@FeignClient(url ="http://localhost:8888", name = "Carts")
public interface UserClient {
    // fixing
    @GetMapping("/carts")
    public List<Cart_Feign> getCarts();

    @GetMapping("/carts/id")
    public Cart_Feign viewById(@RequestParam String id);
}
