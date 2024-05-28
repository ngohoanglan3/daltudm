package com.example.demo.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

// import com.fasterxml.jackson.annotation.*;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Getter
@Setter
@Entity
@Table(name = "user")
@ToString
public class User {
    @Id
    @Column(name = "user_id")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer user_id;

    @ManyToOne
    @JoinColumn(name="role_id", nullable=false)
    @JsonBackReference
    private Role role;

    @Column(name="name")
    private String name;

    @Column(name="gender")
    private int gender;

    @Column(name="email")
    private String email;

    @Column(name="password")
    private String password;

    @Column(name="username")
    private String username;
    
    @OneToMany(mappedBy = "user")
    Set<User_Exam> exams;
    
    @OneToMany(mappedBy = "user")
    Set<User_Answer> answers;

}
