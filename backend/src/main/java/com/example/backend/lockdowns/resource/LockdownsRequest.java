package com.example.backend.lockdowns.resource;

public class LockdownsRequest {

    private String name;

    private String email;

    private String cellNumber;

    private String dateOfDiagnostic;

    private String dateOfLockdown;

    private String placeOfCovid;

    private String nameOfVaccine;

    private String numberOfPeople;

    private String symptoms;

    public LockdownsRequest() {
    }

    public LockdownsRequest(String name, String email, String cellNumber, String dateOfDiagnostic, String dateOfLockdown, String placeOfCovid, String nameOfVaccine, String numberOfPeople, String symptoms) {
        this.name = name;
        this.email = email;
        this.cellNumber = cellNumber;
        this.dateOfDiagnostic = dateOfDiagnostic;
        this.dateOfLockdown = dateOfLockdown;
        this.placeOfCovid = placeOfCovid;
        this.nameOfVaccine = nameOfVaccine;
        this.numberOfPeople = numberOfPeople;
        this.symptoms = symptoms;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCellNumber() {
        return cellNumber;
    }

    public void setCellNumber(String cellNumber) {
        this.cellNumber = cellNumber;
    }

    public String getDateOfDiagnostic() {
        return dateOfDiagnostic;
    }

    public void setDateOfDiagnostic(String dateOfDiagnostic) {
        this.dateOfDiagnostic = dateOfDiagnostic;
    }

    public String getDateOfLockdown() {
        return dateOfLockdown;
    }

    public void setDateOfLockdown(String dateOfLockdown) {
        this.dateOfLockdown = dateOfLockdown;
    }

    public String getPlaceOfCovid() {
        return placeOfCovid;
    }

    public void setPlaceOfCovid(String placeOfCovid) {
        this.placeOfCovid = placeOfCovid;
    }

    public String getNameOfVaccine() {
        return nameOfVaccine;
    }

    public void setNameOfVaccine(String nameOfVaccine) {
        this.nameOfVaccine = nameOfVaccine;
    }

    public String getNumberOfPeople() {
        return numberOfPeople;
    }

    public void setNumberOfPeople(String numberOfPeople) {
        this.numberOfPeople = numberOfPeople;
    }

    public String getSymptoms() {
        return symptoms;
    }

    public void setSymptoms(String symptoms) {
        this.symptoms = symptoms;
    }
}
