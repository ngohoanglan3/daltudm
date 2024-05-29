package com.example.demo.controller;

import java.time.Instant;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.DTO.User_ExamDTO;
import com.example.demo.model.User_Exam_Key;
import com.example.demo.service.User_ExamService;

@RestController
public class User_ExamController {
    final String route = "/User_Exam";
    @Autowired
    User_ExamService user_ExamService;
    
    @GetMapping(route + "/getAll")
    public List<User_ExamDTO> findAll() {
        return user_ExamService.findAll();
    }

    @GetMapping(route + "/{id}") 
    public User_ExamDTO get(@RequestBody User_Exam_Key id) { 
        User_ExamDTO entity = user_ExamService.findByKey(id);
        return entity; 
    } 

    @PostMapping({route + "/save", route + "/begin"})
    public ResponseEntity<?> saveDi(User_ExamDTO dto) {
        user_ExamService.addNew(dto);

        return new ResponseEntity<>(null, HttpStatus.valueOf(201));

    }

    @PutMapping(route + "/update")
    public ResponseEntity<?> updateDi(@RequestBody User_ExamDTO dto) {
        user_ExamService.update(dto);

        return new ResponseEntity<>(null, HttpStatus.valueOf(303));
    }

    @DeleteMapping(route + "/xoa")
    public ResponseEntity<?> xoa(@RequestBody User_Exam_Key id) {
        user_ExamService.xoaDi(id);

        return new ResponseEntity<>(null, HttpStatus.valueOf(204));
    }

}
