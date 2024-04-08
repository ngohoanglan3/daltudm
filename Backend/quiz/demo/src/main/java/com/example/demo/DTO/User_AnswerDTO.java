package com.example.demo.DTO;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class User_AnswerDTO {
    private int exam_id;

    private int question_id;

    private int option_choose;

    private boolean is_correct;
    
}
