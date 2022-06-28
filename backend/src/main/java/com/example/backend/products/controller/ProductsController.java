package com.example.backend.products.controller;


import com.example.backend.products.repository.ProductsRepository;
import com.example.backend.products.model.Products;
import com.example.backend.products.resource.ProductsRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProductsController {

    private final ProductsRepository productsRepository;

    public ProductsController(ProductsRepository productsRepository) {

        this.productsRepository = productsRepository;
    }

    @GetMapping("/product")
    public ResponseEntity<List<Products>> getAllProducts() {
        return ResponseEntity.ok(this.productsRepository.findAll());
    }

    @PostMapping("/product")
    public ResponseEntity<Products> createProduct(@RequestBody ProductsRequest productsRequest) {

        Products products = new Products();
        products.setName(productsRequest.getName());
        products.setDescription(productsRequest.getDescription());

        return ResponseEntity.status(201).body(this.productsRepository.save(products));
    }
}
