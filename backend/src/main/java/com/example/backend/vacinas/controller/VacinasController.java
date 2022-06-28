package com.example.backend.vacinas.controller;


import com.example.backend.vacinas.model.Vacinas;
import com.example.backend.vacinas.repository.VacinasRepository;
import com.example.backend.vacinas.resource.VacinasRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class VacinasController {

    private final VacinasRepository vacinasRepository;


    public VacinasController(VacinasRepository vacinasRepository) {

        this.vacinasRepository = vacinasRepository;
    }

    @GetMapping("/vacina")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<List<Vacinas>> getAllVacinas() {
        return ResponseEntity.ok(this.vacinasRepository.findAll());
    }

    @PostMapping("/vacina")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Vacinas> createVacinas(@RequestBody VacinasRequest vacinasRequest) {

        Vacinas vacinas = new Vacinas();
        vacinas.setVacina(vacinasRequest.getVacina());
        vacinas.setPaises(vacinasRequest.getPaises());

        return ResponseEntity.status(201).body(this.vacinasRepository.save(vacinas));
    }
}
