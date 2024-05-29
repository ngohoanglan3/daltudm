package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.example.demo.DTO.JwtAuthResponse;
import com.example.demo.DTO.UserDTO;
import com.example.demo.DTO.UserLogin;
import com.example.demo.model.Role;
import com.example.demo.service.AuthService;
import com.example.demo.service.RoleService;
import com.example.demo.service.UserService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
public class UserController {
    private AuthService authService;
    final String route = "/User";
    @Autowired
    UserService userService;

    @Autowired
    RoleService roleService;
    
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

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PostMapping(route + "/save")
    public ResponseEntity<?> saveDi(@RequestBody UserDTO dto) {
        userService.addNew(dto);

        return new ResponseEntity<>(null, HttpStatus.valueOf(201));

    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PutMapping(route + "/update")
    public ResponseEntity<?> updateDi(@RequestBody UserDTO dto, @PathVariable int id) {
        userService.update(dto);

        return new ResponseEntity<>(null, HttpStatus.valueOf(303));
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @DeleteMapping(route + "/xoa")
    public ResponseEntity<?> xoa(@PathVariable int id) {
        userService.xoaDi(id);

        return new ResponseEntity<>(null, HttpStatus.valueOf(204));
    }
    @PostMapping(route + "/Login")
    public ResponseEntity<JwtAuthResponse> login(@RequestBody UserLogin loginDto) {
        String token = authService.login(loginDto);

        JwtAuthResponse jwtAuthResponse = new JwtAuthResponse();
        jwtAuthResponse.setAccessToken(token);
        jwtAuthResponse.setResult(true);
        jwtAuthResponse.setRole(roleService.findByname(authService.getRole(loginDto)));

        return new ResponseEntity<>(jwtAuthResponse, HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping(route + "/admin")
    public ResponseEntity<String> helloAdmin(){
        return ResponseEntity.ok("Hello Admin");
    }
    

}
