package com.zs.digisell_products.business;

import com.zs.digisell_products.data.ProductDataInterface;
import com.zs.digisell_products.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductDataInterface productRepo;

    public ProductService(ProductDataInterface productRepo){
        this.productRepo = productRepo;
    }//clean this!!!

    public List<Product> findAll(){
        return productRepo.findAll();
    }

    public Optional<Product> findById(String id){
        return productRepo.findById(id);
    }

    public Product save(Product product){
        return productRepo.save(product);
    }

    public void deleteById(String Id){
        productRepo.deleteById(Id);
    }
}
