package com.example.demo.DTO;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class UserDTO {
    private Integer user_id;

    private String role_name;

    private String name;

    private int gender;

    private String email;

    private String password;
    
}
