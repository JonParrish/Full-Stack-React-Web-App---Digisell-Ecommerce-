package com.example.payment_service_ds.model;

import com.mongodb.lang.NonNull;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.Size;


@Document(collection = "payment")
public class Payment {

    @Id
    private String _id;

    @NonNull
    @Size(min = 3, max = 15, message = "name must be at least 3 characters!")
    private String first_name;

    @NonNull
    @Min(3)
    @Max(15)
    private String last_name;

    @NonNull
    private String billing_address;

    @NonNull
    private String state;

    @NonNull
    @Min(5)
    @Max(7)
    private String zip_code;

    @NonNull
    private String card_num;

    @NonNull
    private String expiration_date;

    @NonNull
    @Min(3)
    @Max(3)
    private String cvv_code;

    public Payment(String _id, @NonNull String first_name, @NonNull String last_name, @NonNull String billing_address, @NonNull String state, @NonNull String zip_code, @NonNull String card_num, @NonNull String expiration_date, @NonNull String cvv_code) {
        this._id = _id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.billing_address = billing_address;
        this.state = state;
        this.zip_code = zip_code;
        this.card_num = card_num;
        this.expiration_date = expiration_date;
        this.cvv_code = cvv_code;
    }

    public Payment() {
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public void setFirst_name(@NonNull String first_name) {
        this.first_name = first_name;
    }

    public void setLast_name(@NonNull String last_name) {
        this.last_name = last_name;
    }

    public void setBilling_address(@NonNull String billing_address) {
        this.billing_address = billing_address;
    }

    public void setState(@NonNull String state) {
        this.state = state;
    }

    public void setZip_code(@NonNull String zip_code) {
        this.zip_code = zip_code;
    }

    public void setCard_num(@NonNull String card_num) {
        this.card_num = card_num;
    }

    public void setExpiration_date(@NonNull String expiration_date) {
        this.expiration_date = expiration_date;
    }

    public void setCvv_code(@NonNull String cvv_code) {
        this.cvv_code = cvv_code;
    }

    @NonNull
    public String get_id() {
        return _id;
    }
    @NonNull
    public String getFirst_name() {
        return first_name;
    }
    @NonNull
    public String getLast_name() {
        return last_name;
    }
    @NonNull
    public String getBilling_address() {
        return billing_address;
    }
    @NonNull
    public String getState() {
        return state;
    }
    @NonNull
    public String getZip_code() {
        return zip_code;
    }
    @NonNull
    public String getCard_num() {
        return card_num;
    }
    @NonNull
    public String getExpiration_date() {
        return expiration_date;
    }
    @NonNull
    public String getCvv_code() {
        return cvv_code;
    }
}
