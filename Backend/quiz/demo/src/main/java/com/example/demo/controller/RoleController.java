package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.DTO.RoleDTO;
import com.example.demo.service.RoleService;

@RestController
public class RoleController {
    final String route = "/Role";
    @Autowired
    RoleService roleService;
    
    @GetMapping(route + "/getAll")
    public List<RoleDTO> findAll() {
        return roleService.findAll();
    }

    @GetMapping(route + "/{id}") 
    public RoleDTO get(@PathVariable int id) { 
        RoleDTO entity = roleService.findByRoll(id);
        return entity; 
    } 

    @PostMapping(route + "/save")
    public ResponseEntity<?> saveDi(@RequestBody RoleDTO dto) {
        roleService.addNew(dto);

        return new ResponseEntity<>(null, HttpStatus.valueOf(201));

    }

    @PutMapping(route + "/update")
    public ResponseEntity<?> updateDi(@RequestBody RoleDTO dto, @PathVariable int id) {
        roleService.update(dto);

        return new ResponseEntity<>(null, HttpStatus.valueOf(303));
    }

    @DeleteMapping(route + "/xoa")
    public ResponseEntity<?> xoa(@PathVariable int id) {
        roleService.xoaDi(id);

        return new ResponseEntity<>(null, HttpStatus.valueOf(204));
    }

}
