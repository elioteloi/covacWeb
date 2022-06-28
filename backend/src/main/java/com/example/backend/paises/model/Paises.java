package com.example.backend.paises.model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("paises")
public class Paises {

    @Id
    private String id;

    private String pais;

    private Object vacinas;

    public Paises() {
    }

    public Paises(String pais, Object vacinas) {
        this.pais = pais;
        this.vacinas = vacinas;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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
