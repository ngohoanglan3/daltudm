package com.example.demo.DTO;

import com.example.demo.model.User_Answer_Key;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class User_AnswerDTO {
    private User_Answer_Key id;

    private int option_choose;

    private boolean is_correct;
    
}
