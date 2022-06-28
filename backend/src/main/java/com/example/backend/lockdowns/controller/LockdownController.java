package com.example.backend.lockdowns.controller;


import com.example.backend.lockdowns.model.Lockdowns;
import com.example.backend.lockdowns.repository.LockdownsRepository;
import com.example.backend.lockdowns.resource.LockdownsRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class LockdownController {

    private final LockdownsRepository lockdownsRepository;

    public LockdownController(LockdownsRepository lockdownsRepository) {
        this.lockdownsRepository = lockdownsRepository;
    }

    @GetMapping("/lockdown")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<List<Lockdowns>> getAllLockdowns() {
        return ResponseEntity.ok(this.lockdownsRepository.findAll());
    }

    @PostMapping("/lockdown")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Lockdowns> createLockdowns(@RequestBody LockdownsRequest lockdownsRequest) {

        Lockdowns lockdowns = new Lockdowns();

        lockdowns.setName(lockdownsRequest.getName());
        lockdowns.setEmail(lockdownsRequest.getEmail());
        lockdowns.setCellNumber(lockdownsRequest.getCellNumber());
        lockdowns.setDateOfDiagnostic(lockdownsRequest.getDateOfDiagnostic());
        lockdowns.setDateOfLockdown(lockdownsRequest.getDateOfLockdown());
        lockdowns.setPlaceOfCovid(lockdownsRequest.getPlaceOfCovid());
        lockdowns.setNameOfVaccine(lockdownsRequest.getNameOfVaccine());
        lockdowns.setNumberOfPeople(lockdownsRequest.getNumberOfPeople());
        lockdowns.setSymptoms(lockdownsRequest.getSymptoms());

        return ResponseEntity.status(201).body(this.lockdownsRepository.save(lockdowns));
    }
}
