package com.example.backend.vacinas.repository;

import com.example.backend.vacinas.model.Vacinas;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface VacinasRepository extends MongoRepository<Vacinas, String> {
}
