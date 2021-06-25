package com.example.payment_service_ds.data;

import com.example.payment_service_ds.model.Payment;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PaymentDataInterface extends MongoRepository<Payment, String> {}
