package com.example.backend.users.repository;

import com.example.backend.users.model.Users;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepository extends MongoRepository<Users, String> {

    Users findByUsername(String username);
}

