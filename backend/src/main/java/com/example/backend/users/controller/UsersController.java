package com.example.backend.users.controller;


import com.example.backend.users.resource.UsersRequest;
import com.example.backend.users.resource.UsersResponse;
import com.example.backend.users.model.Users;
import com.example.backend.users.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UsersController {

    @Autowired
    private UsersRepository usersRepository;


    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/subs")
    @CrossOrigin(origins = "http://localhost:3000")
    private ResponseEntity<?> subscribeClient(@RequestBody UsersRequest authenticationRequest) {

        String username = authenticationRequest.getUsername();
        String email = authenticationRequest.getEmail();
        String password = authenticationRequest.getPassword();
        String vaccine = authenticationRequest.getVaccine();
        Users users = new Users();
        users.setUsername(username);
        users.setEmail(email);
        users.setPassword(password);
        users.setVaccine(vaccine);
        try {
            usersRepository.save(users);
        } catch (Exception e) {
            return ResponseEntity.ok(new UsersResponse("error during client subscription " + username));
        }
        return ResponseEntity.ok(new UsersResponse("Successful subscription for client " + username));
    }


    @PostMapping("/auth")
    @CrossOrigin(origins = "http://localhost:3000")
    private ResponseEntity<?> authenticateClient(@RequestBody UsersRequest authenticationRequest) {

        String username = authenticationRequest.getUsername();
        String password = authenticationRequest.getPassword();

        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));

        } catch (Exception e) {
            return ResponseEntity.ok(new UsersResponse("Error during client Authentication " + username));
        }
        return ResponseEntity.ok(new UsersResponse("Successful Authentication for client " + username));

    }
}
