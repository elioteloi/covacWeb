package com.example.backend.users.services;

import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;



public class JwtFilterRequest extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

       String authorizationHeader = request.getHeader("Authorization");
       String username = null;
       String password = null;

       if(authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
          String jwtToken = authorizationHeader.substring(7);
       }
    }
}
