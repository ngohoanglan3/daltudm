package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.DTO.JwtAuthResponse;
import com.example.demo.DTO.UserDTO;
import com.example.demo.model.Role;
import com.example.demo.service.AuthService;
import com.example.demo.service.UserService;


@RestController
public class UserController {
    private AuthService authService;
    final String route = "/User";
    @Autowired
    UserService userService;
    
    @GetMapping(route + "/getAll")
    public List<UserDTO> findAll() {
        return userService.findAll();
    }

    @GetMapping(route + "/getByRole")
    public List<UserDTO> findRole(@RequestBody Role role) {
        return userService.findByRole(role);
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

    @GetMapping(route + "/login")
    public ResponseEntity<JwtAuthResponse> login(@RequestParam UserDTO loginDto) {
        String token = authService.login(loginDto);

        JwtAuthResponse jwtAuthResponse = new JwtAuthResponse();
        jwtAuthResponse.setAccessToken(token);

        return new ResponseEntity<>(jwtAuthResponse, HttpStatus.OK);
    }
    

}
