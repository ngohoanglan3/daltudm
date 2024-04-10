package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.DTO.User_AnswerDTO;
import com.example.demo.model.User_Answer_Key;
import com.example.demo.service.User_AnswerService;

@RestController
public class User_AnswerController {
    final String route = "/User_Answer";
    @Autowired
    User_AnswerService user_AnswerService;
    
    @GetMapping(route + "/getAll")
    public List<User_AnswerDTO> findAll() {
        return user_AnswerService.findAll();
    }

    @GetMapping(route + "/{id}") 
    public User_AnswerDTO get(@RequestBody User_Answer_Key id) { 
        User_AnswerDTO entity = user_AnswerService.findByKey(id);
        return entity; 
    } 

    @PostMapping(route + "/save")
    public ResponseEntity<?> saveDi(@RequestBody User_AnswerDTO dto) {
        user_AnswerService.addNew(dto);

        return new ResponseEntity<>(null, HttpStatus.valueOf(201));

    }

    @PutMapping(route + "/update")
    public ResponseEntity<?> updateDi(@RequestBody User_AnswerDTO dto) {
        user_AnswerService.update(dto);

        return new ResponseEntity<>(null, HttpStatus.valueOf(303));
    }

    @DeleteMapping(route + "/xoa")
    public ResponseEntity<?> xoa(@RequestBody User_Answer_Key id) {
        user_AnswerService.xoaDi(id);

        return new ResponseEntity<>(null, HttpStatus.valueOf(204));
    }

}
