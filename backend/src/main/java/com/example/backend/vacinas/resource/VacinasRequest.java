package com.example.backend.vacinas.resource;

public class VacinasRequest {

    private String vacina;

    private Object paises;

    public VacinasRequest() {

    }

    public VacinasRequest(String vacina, Object paises) {
        this.vacina = vacina;
        this.paises = paises;
    }

    public String getVacina() {
        return vacina;
    }

    public void setVacina(String vacina) {
        this.vacina = vacina;
    }

    public Object getPaises() {
        return paises;
    }

    public void setPaises(Object paises) {
        this.paises = paises;
    }
}
