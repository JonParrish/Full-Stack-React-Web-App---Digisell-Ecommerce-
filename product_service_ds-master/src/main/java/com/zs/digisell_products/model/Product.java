package com.zs.digisell_products.model;

import com.mongodb.lang.NonNull;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "products")
public class Product {

    @Id
    private String _id;

    @NonNull
    private String productName;

    @NonNull
    private String productDescription;

    @NonNull
    private String productPrice;

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    @NonNull
    public String getProductName() {
        return productName;
    }

    public void setProductName(@NonNull String productName) {
        this.productName = productName;
    }

    @NonNull
    public String getProductDescription() {
        return productDescription;
    }

    public void setProductDescription(@NonNull String productDescription) {
        this.productDescription = productDescription;
    }

    @NonNull
    public String getProductPrice() {
        return productPrice;
    }

    public void setProductPrice(@NonNull String productPrice) {
        this.productPrice = productPrice;
    }

    public Product(String _id, @NonNull String productName, @NonNull String productDescription, @NonNull String productPrice) {
        this._id = _id;
        this.productName = productName;
        this.productDescription = productDescription;
        this.productPrice = productPrice;
    }

    public Product() {}
}
