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
public class UserDTOnoObj {
    private Integer user_id;

    private String role_name;
    
    private int roleid;

    private String name;

    private int gender;

    private String email;

    private String password;

    private String username;
    
}