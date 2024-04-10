package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.DTO.ExamDTO;
import com.example.demo.service.ExamService;

@RestController
public class ExamController {
    final String route = "/Exam";
    @Autowired
    ExamService examService;
    
    @GetMapping(route + "/getAll")
    public List<ExamDTO> findAll() {
        return examService.findAll();
    }

    @GetMapping(route + "/{id}") 
    public ExamDTO get(@PathVariable int id) { 
        ExamDTO entity = examService.findByRoll(id);
        return entity; 
    } 

    @PostMapping(route + "/save")
    public ResponseEntity<?> saveDi(@RequestBody ExamDTO dto) {
        examService.addNew(dto);

        return new ResponseEntity<>(null, HttpStatus.valueOf(201));

    }

    @PutMapping(route + "/update")
    public ResponseEntity<?> updateDi(@RequestBody ExamDTO dto, @PathVariable int id) {
        examService.update(dto);

        return new ResponseEntity<>(null, HttpStatus.valueOf(303));
    }

    @DeleteMapping(route + "/xoa")
    public ResponseEntity<?> xoa(@PathVariable int id) {
        examService.xoaDi(id);

        return new ResponseEntity<>(null, HttpStatus.valueOf(204));
    }

}
