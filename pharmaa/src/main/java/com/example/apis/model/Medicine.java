package com.example.apis.model;

import java.time.LocalDate;

public class Medicine {

    private int id;
    private String name;
    private int price;
    private int quantity;
    private LocalDate expiryDate;
    private String company;

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public int getPrice() { return price; }
    public void setPrice(int price) { this.price = price; }

    public int getQuantity() { return quantity; }
    public void setQuantity(int quantity) { this.quantity = quantity; }

    public LocalDate getExpiryDate() { return expiryDate; }
    public void setExpiryDate(LocalDate expiryDate) { this.expiryDate = expiryDate; }

    public String getCompany() { return company; }
    public void setCompany(String company) { this.company = company; }
}
