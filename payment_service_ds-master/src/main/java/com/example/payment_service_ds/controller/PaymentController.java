package com.example.payment_service_ds.controller;

import com.example.payment_service_ds.business.PaymentService;
import com.example.payment_service_ds.data.PaymentDataInterface;
import com.example.payment_service_ds.feign_client.Cart_Feign;
import com.example.payment_service_ds.feign_client.UserClient;
import com.example.payment_service_ds.model.Payment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin
@RestController
@EnableFeignClients
@RequestMapping(value = "/payment")
public class PaymentController
{
    @Autowired
    private final PaymentService paymentService;

    @Autowired
    private UserClient client;

    @GetMapping("/findAllCarts")
    public List<Cart_Feign> getCarts()
    {
        return client.getCarts();
    }

    @GetMapping("/findById")
    public Cart_Feign getCartById(String id)
    {
        return client.viewById(id);
    }

    public PaymentController(PaymentService productService){
        this.paymentService = productService;
    }//clean this !!!


    @Autowired
    private PaymentDataInterface paymentRepo;

    @RequestMapping(value="/save", method=RequestMethod.PUT)
    public Payment save(@RequestBody Payment payment){

        //paymentService.checkOut(payment);
        return paymentRepo.save(payment);
    }

}
