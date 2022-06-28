package com.example.backend.paises.repository;

import com.example.backend.paises.model.Paises;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PaisesRepository extends MongoRepository<Paises, String> {
}
