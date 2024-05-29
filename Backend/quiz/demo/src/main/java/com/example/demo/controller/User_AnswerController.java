package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.DTO.QuestionDTO;
import com.example.demo.DTO.User_AnswerDTO;
import com.example.demo.DTO.User_Answer_Cross;
import com.example.demo.DTO.User_ExamDTO;
import com.example.demo.model.User_Answer_Key;
import com.example.demo.service.User_AnswerService;

@RestController
public class User_AnswerController {
    final String route = "/User_Submit";
    @Autowired
    User_AnswerService user_AnswerService;

    QuestionController questionController;
    User_ExamController user_ExamController;
    
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
    public ResponseEntity<?> saveDi(@RequestBody List<User_Answer_Cross> cross) {
        int questioncorrect = 0;
        for (User_Answer_Cross user_Answer_Cross : cross) {
            User_AnswerDTO ss = user_AnswerService.findByCross(user_Answer_Cross);
            user_AnswerService.addNewByCross(user_Answer_Cross);
            if (ss.is_correct()) {
                questioncorrect += 1;
            }
        }
        User_AnswerDTO temp = user_AnswerService.findByCross(cross.getFirst());
        int hmm = temp.getQuestion().getExam().getExam_id();
        List<QuestionDTO> lDtos = questionController.getbyExamid(hmm);
        int numbofquest = lDtos.size();
        float score = 10 * (questioncorrect / numbofquest);
        User_ExamDTO aa = new User_ExamDTO();
        aa.setScore(score);
        aa.setUser(temp.getUser());
        aa.setExam(temp.getQuestion().getExam());
        user_ExamController.saveDi(aa);

        return new ResponseEntity<>(null, HttpStatus.valueOf(201));

    }
    

    @PutMapping(route + "/update")
    public ResponseEntity<?> updateDi(@RequestBody List<User_Answer_Cross> cross) {
        for (User_Answer_Cross user_Answer_Cross : cross) {
            user_AnswerService.tryaddNew(user_Answer_Cross);
        }

        return new ResponseEntity<>(null, HttpStatus.valueOf(303));
    }

    @DeleteMapping(route + "/xoa")
    public ResponseEntity<?> xoa(@RequestBody User_Answer_Key id) {
        user_AnswerService.xoaDi(id);

        return new ResponseEntity<>(null, HttpStatus.valueOf(204));
    }

}
