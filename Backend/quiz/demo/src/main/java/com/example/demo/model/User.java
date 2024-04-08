package com.example.demo.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Getter
@Setter
@Entity
@Table(name = "user")
@ToString
public class User {
    @Id
    @Column(name = "user_id")
    private Integer user_id;

    @Column(name="role_name")
    private String role_name;

    @Column(name="name")
    private String name;

    @Column(name="gender")
    private int gender;

    @Column(name="email")
    private String email;

    @Column(name="password")
    private String password;
    
}
