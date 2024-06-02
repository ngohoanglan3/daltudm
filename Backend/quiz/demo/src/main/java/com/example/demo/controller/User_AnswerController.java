package com.example.demo.controller;

import java.time.Instant;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.DTO.QuestionDTO;
import com.example.demo.DTO.User_AnswerDTO;
import com.example.demo.DTO.User_Answer_Cross;
import com.example.demo.DTO.User_ExamDTO;
import com.example.demo.model.User_Answer_Key;
import com.example.demo.model.User_Exam_Key;
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

    @PostMapping("/submit")
    public ResponseEntity<?> saveDi(@RequestBody(required=false) List<User_Answer_Cross> cross) {
        int questioncorrect = 0;
        User_AnswerDTO temp;
        if(!cross.isEmpty())
        {
            for (User_Answer_Cross user_Answer_Cross : cross) {
                User_AnswerDTO ss = user_AnswerService.findByCross(user_Answer_Cross);
                user_AnswerService.addNewByCross(user_Answer_Cross);
                if (ss.is_correct()) {
                    questioncorrect += 1;
                }
            }
            temp = user_AnswerService.findByCross(cross.getFirst());
        }
        else{
            temp = user_AnswerService.findByCross(cross.getFirst());
        }
        int hmm = temp.getQuestion().getExam().getExam_id();
        List<QuestionDTO> lDtos = questionController.getbyExamid(hmm);
        int numbofquest = lDtos.size();
        float score = 10 * (questioncorrect / numbofquest);
        User_ExamDTO aa = new User_ExamDTO();
        User_Exam_Key key = new User_Exam_Key(temp.getQuestion().getQuestion_id(), temp.getUser().getUser_id()); 
        aa.setScore(score);
        aa.setId(key);
        aa.setValid_test(false);
        aa.setEnd_time(Instant.now());
        user_ExamController.submitTest(aa);

        return new ResponseEntity<>(null, HttpStatus.valueOf(201));

    }

    @PostMapping(route + "/saveProgress")
    public ResponseEntity<?> saveinProgress(@RequestBody List<User_Answer_Cross> cross) {
        for (User_Answer_Cross user_Answer_Cross : cross) {
            user_AnswerService.updateProgress(user_Answer_Cross);
        }

        return new ResponseEntity<>(null, HttpStatus.valueOf(201));

    }
    

    @PutMapping(route + "/update")
    public ResponseEntity<?> updateDi(@RequestBody List<User_Answer_Cross> cross) {
        for (User_Answer_Cross user_Answer_Cross : cross) {
            user_AnswerService.addNewByCross(user_Answer_Cross);
        }

        return new ResponseEntity<>(null, HttpStatus.valueOf(303));
    }

    @DeleteMapping(route + "/xoa")
    public ResponseEntity<?> xoa(@RequestBody User_Answer_Key id) {
        user_AnswerService.xoaDi(id);

        return new ResponseEntity<>(null, HttpStatus.valueOf(204));
    }

}
