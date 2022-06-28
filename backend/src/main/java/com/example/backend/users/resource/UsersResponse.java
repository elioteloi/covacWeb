package com.example.backend.users.resource;

public class UsersResponse {

    private String response;

    public UsersResponse() {

    }

    public UsersResponse(String response) {
        this.response = response;
    }

    public String getResponse() {
        return response;
    }

    public void setResponse(String response) {

        this.response = response;
    }
}
