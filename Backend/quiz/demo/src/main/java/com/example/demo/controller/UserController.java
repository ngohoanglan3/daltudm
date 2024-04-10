package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.DTO.UserDTO;
import com.example.demo.service.UserService;

@RestController
public class UserController {
    final String route = "/User";
    @Autowired
    UserService userService;
    
    @GetMapping(route + "/getAll")
    public List<UserDTO> findAll() {
        return userService.findAll();
    }

    @GetMapping(route + "/{id}") 
    public UserDTO get(@PathVariable int id) { 
        UserDTO entity = userService.findByRoll(id);
        return entity; 
    } 

    @PostMapping(route + "/save")
    public ResponseEntity<?> saveDi(@RequestBody UserDTO dto) {
        userService.addNew(dto);

        return new ResponseEntity<>(null, HttpStatus.valueOf(201));

    }

    @PutMapping(route + "/update")
    public ResponseEntity<?> updateDi(@RequestBody UserDTO dto, @PathVariable int id) {
        userService.update(dto);

        return new ResponseEntity<>(null, HttpStatus.valueOf(303));
    }

    @DeleteMapping(route + "/xoa")
    public ResponseEntity<?> xoa(@PathVariable int id) {
        userService.xoaDi(id);

        return new ResponseEntity<>(null, HttpStatus.valueOf(204));
    }

}
