package com.example.demo.controller;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.example.demo.DTO.ExamDTO;
import com.example.demo.DTO.ExamOnlyDTO;
import com.example.demo.DTO.QuestionDTOfull;
import com.example.demo.service.AnswerService;
import com.example.demo.service.ExamService;
import com.example.demo.service.QuestionService;

@RestController
public class ExamController {
    final String route = "/Exam";
    @Autowired
    ExamService examService;

    @Autowired
    QuestionService questionService;

    @Autowired
    AnswerService AnswerService;
    
    @GetMapping(route + "/getAll")
    public List<ExamDTO> findAll() {
        return examService.findAll();
    }

    @GetMapping(route + "/getAllNoQue")
    public List<ExamOnlyDTO> findAllNoQue() {
        return examService.findAllNoQue();
    }

    @GetMapping(route + "/{id}") 
    public ExamOnlyDTO get(@PathVariable int id) { 
        ExamOnlyDTO entity = examService.findByRollWithoutQuestion(id);
        return entity; 
    } 
    
    @PreAuthorize("hasRole('GV')")
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
