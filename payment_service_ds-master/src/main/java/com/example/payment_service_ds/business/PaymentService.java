package com.example.payment_service_ds.business;

import com.example.payment_service_ds.controller.PaymentController;
import com.example.payment_service_ds.data.PaymentDataInterface;
import com.example.payment_service_ds.feign_client.Cart_Feign;
import com.example.payment_service_ds.model.Payment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class PaymentService {

    @Autowired
    private PaymentDataInterface paymentRepo;

    public PaymentService(PaymentDataInterface paymentRepo){
        this.paymentRepo = paymentRepo;
    }//clean this!!!

    public Payment save(Payment payment){
        return paymentRepo.save(payment);
    }

    public void checkOut(Payment payment)
    {
        if(check_card(payment) == false)
        {
            throw new IllegalArgumentException("Use a valid number");
        }
        else
        {
            save(payment);
        }
    }

    @Autowired
    PaymentController payment;
    // Gets a list of all of the carts from the database and then searches it for the one with a matching id
    public Cart_Feign cartById(String id)
    {
        List<Cart_Feign> listOfCarts = payment.getCarts();

        for(int i = 0; i < listOfCarts.size(); i++)
        {
            if(listOfCarts.get(i).get_id() == id) {
                return listOfCarts.get(i);
            }
        }
        return null;
    }

    //validate the credit card number
    public Boolean check_card(Payment payment) {
        String regex = "^(?:(?<visa>4[0-9]{12}(?:[0-9]{3})?)|" +
                    "(?<mastercard>5[1-5][0-9]{14})|" +
                    "(?<discover>6(?:011|5[0-9]{2})[0-9]{12}))";

        Pattern pattern = Pattern.compile(regex);

        String card = payment.getCard_num().replaceAll("-","");
        Matcher matcher = pattern.matcher(card);

        return matcher.matches();

    }


}
