package com.example.backend.paises.resource;

public class PaisesRequest {

    private String pais;

    private Object vacinas;

    public PaisesRequest() {
    }

    public PaisesRequest(String pais, Object vacinas) {
        this.pais = pais;
        this.vacinas = vacinas;
    }

    public String getPais() {
        return pais;
    }

    public void setPais(String pais) {
        this.pais = pais;
    }

    public Object getVacinas() {
        return vacinas;
    }

    public void setVacinas(Object vacinas) {
        this.vacinas = vacinas;
    }
}
