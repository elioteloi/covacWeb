package com.example.backend.paises.controller;

import com.example.backend.paises.model.Paises;
import com.example.backend.paises.repository.PaisesRepository;
import com.example.backend.paises.resource.PaisesRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PaisesController {

    private final PaisesRepository paisesRepository;


    public PaisesController(PaisesRepository paisesRepository) {
        this.paisesRepository = paisesRepository;
    }

    @GetMapping("/pais")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<List<Paises>> getAllPais() {
        return ResponseEntity.ok(this.paisesRepository.findAll());
    }

    @PostMapping("/pais")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Paises> createpais(@RequestBody PaisesRequest paisesRequest) {

        Paises paises = new Paises();
        paises.setPais(paisesRequest.getPais());
        paises.setVacinas(paisesRequest.getVacinas());

        return ResponseEntity.status(201).body(this.paisesRepository.save(paises));
    }
}
