package com.example.backend.vacinas.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("vacinas")
public class Vacinas {

    @Id
    private String id;

    private String vacina;

    private Object paises;

    public Vacinas() {

    }

    public Vacinas(String vacina, Object paises) {
        this.vacina = vacina;
        this.paises = paises;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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
