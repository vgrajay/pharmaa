package com.example.apis.controller;

import com.example.apis.model.Medicine;
import com.example.apis.service.PharmacyService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/pharma")
@CrossOrigin
public class PharmacyController {

    private final PharmacyService service;

    public PharmacyController(PharmacyService service) {
        this.service = service;
    }

    // PUBLIC
    @GetMapping("/all")
    public List<Medicine> getAll() {
        return service.getAllMedicines();
    }

    // ADMIN – ADD (EXPIRED BLOCKED)
    @PostMapping("/add")
    public ResponseEntity<String> add(@RequestBody Medicine medicine) {

        if (medicine.getExpiryDate().isBefore(LocalDate.now())) {
            return ResponseEntity
                    .badRequest()
                    .body("Expired medicine cannot be added");
        }

        service.addMedicine(medicine);
        return ResponseEntity.ok("Medicine added successfully");
    }

    // ADMIN – DELETE
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> delete(@PathVariable int id) {
        boolean removed = service.removeMedicineById(id);

        if (removed) {
            return ResponseEntity.ok("Medicine deleted");
        }
        return ResponseEntity.status(404).body("Medicine not found");
    }

    // ADMIN – EXPIRED
    @GetMapping("/expired")
    public List<Medicine> expired() {
        return service.getExpiredMedicines();
    }
}
