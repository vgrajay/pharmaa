package com.example.apis.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin
public class AdminController {

    @GetMapping("/login")
    public ResponseEntity<String> login(
            @RequestParam String u,
            @RequestParam String p) {

        if ("admin".equals(u) && "admin123".equals(p)) {
            return ResponseEntity.ok("OK");
        }
        return ResponseEntity.status(401).body("Invalid login");
    }
}
