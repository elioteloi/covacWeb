package com.example.backend.products.repository;

import com.example.backend.products.model.Products;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProductsRepository extends MongoRepository<Products, String> {
}
