package com.example.backend.users.services;

import com.example.backend.users.model.Users;
import com.example.backend.users.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class UsersServices implements UserDetailsService {

    @Autowired
    private UsersRepository usersRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Users foundedUsers = usersRepository.findByUsername(username);
        if (foundedUsers == null)
            return null;
        String name = foundedUsers.getUsername();
        String password = foundedUsers.getPassword();
        return new org.springframework.security.core.userdetails.User(name, password, new ArrayList<>());
    }
}
