package com.example.demo.DTO;

import java.util.Set;

import com.example.demo.model.Role;
import com.example.demo.model.User_Answer;
import com.example.demo.model.User_Exam;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class UserDTO {
    private Integer user_id;

    private String role_name;
    
    private Role role;

    private String name;

    private int gender;

    private String email;

    private String password;

    Set<User_Exam> exams;
    
    Set<User_Answer> answers;
    
}
