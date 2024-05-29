package com.example.demo.controller;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.DTO.QuestionDTO;
import com.example.demo.DTO.QuestionDTOfull;
import com.example.demo.service.QuestionService;

@RestController
public class QuestionController {
    final String route = "/Question";
    @Autowired
    QuestionService questionService;
    
    @GetMapping(route + "/getAll")
    public List<QuestionDTO> findAll() {
        return questionService.findAll();
    }

    @GetMapping(route + "/{id}") 
    public QuestionDTO get(@PathVariable int id) { 
        QuestionDTO entity = questionService.findByRoll(id);
        return entity; 
    } 

    @GetMapping(route + "/temp/{id}") 
    public List<QuestionDTO> getbyExamid(@PathVariable int id) { 
        List<QuestionDTO> entity = questionService.getQuestionListUsingExamID(id);
        return entity; 
    } 


    @PostMapping(route + "/save")
    public ResponseEntity<?> saveDi(@RequestBody QuestionDTOfull dto) {
        questionService.addNew(dto);

        return new ResponseEntity<>(null, HttpStatus.valueOf(201));

    }

    @PostMapping(route + "/savemul")
    public ResponseEntity<?> saveDiMul(@RequestBody Set<QuestionDTOfull> dto) {
        for(QuestionDTOfull qOfull: dto)
            questionService.addNew(qOfull);

        return new ResponseEntity<>(null, HttpStatus.valueOf(201));

    }

    @PutMapping(route + "/update")
    public ResponseEntity<?> updateDi(@RequestBody QuestionDTO dto, @PathVariable int id) {
        questionService.update(dto);

        return new ResponseEntity<>(null, HttpStatus.valueOf(303));
    }

    @DeleteMapping(route + "/xoa")
    public ResponseEntity<?> xoa(@PathVariable int id) {
        questionService.xoaDi(id);

        return new ResponseEntity<>(null, HttpStatus.valueOf(204));
    }

}
