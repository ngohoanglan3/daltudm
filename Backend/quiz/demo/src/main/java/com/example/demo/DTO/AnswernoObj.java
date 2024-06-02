package com.example.demo.DTO;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class AnswernoObj {
    private Integer answer_id;

    private int options;

    private String description;

    private boolean is_correct;
    
    private int question_id;

}
