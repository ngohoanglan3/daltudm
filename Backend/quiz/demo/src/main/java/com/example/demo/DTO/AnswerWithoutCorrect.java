package com.example.demo.DTO;

import com.example.demo.model.Question;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class AnswerWithoutCorrect {
    private Integer answer_id;

    private int options;

    private String description;
    
    private Question question;

}
