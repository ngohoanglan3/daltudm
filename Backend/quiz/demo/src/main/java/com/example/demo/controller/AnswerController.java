package com.example.demo.controller;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.DTO.AnswerDTO;
import com.example.demo.service.AnswerService;

@RestController
public class AnswerController {
    final String route = "/Answer";
    @Autowired
    AnswerService answerService;
    
    @GetMapping(route + "/getAll")
    public List<AnswerDTO> findAll() {
        return answerService.findAll();
    }

    @GetMapping(route + "/{id}") 
    public AnswerDTO get(@PathVariable int id) { 
        AnswerDTO entity = answerService.findByRoll(id);
        return entity; 
    } 

    @PostMapping(route + "/save")
    public ResponseEntity<?> saveDi(@RequestBody AnswerDTO dto) {
        answerService.addNew(dto);

        return new ResponseEntity<>(null, HttpStatus.valueOf(201));

    }

    public ResponseEntity<?> savemultiple(@RequestBody Set<AnswerDTO> dto) {
        for (AnswerDTO answerDTO : dto) {
            answerService.addNew(answerDTO);
        }

        return new ResponseEntity<>(null, HttpStatus.valueOf(201));

    }

    @PutMapping(route + "/update")
    public ResponseEntity<?> updateDi(@RequestBody AnswerDTO dto, @PathVariable int id) {
        answerService.update(dto);

        return new ResponseEntity<>(null, HttpStatus.valueOf(303));
    }

    @DeleteMapping(route + "/xoa")
    public ResponseEntity<?> xoa(@PathVariable int id) {
        answerService.xoaDi(id);

        return new ResponseEntity<>(null, HttpStatus.valueOf(204));
    }

}
