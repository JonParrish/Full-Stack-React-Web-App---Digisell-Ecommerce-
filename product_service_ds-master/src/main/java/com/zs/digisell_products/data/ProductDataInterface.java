package com.zs.digisell_products.data;

import com.zs.digisell_products.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProductDataInterface extends MongoRepository<Product, String> {}
