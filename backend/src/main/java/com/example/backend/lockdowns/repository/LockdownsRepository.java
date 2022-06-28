package com.example.backend.lockdowns.repository;

import com.example.backend.lockdowns.model.Lockdowns;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface LockdownsRepository extends MongoRepository<Lockdowns, String> {
}
