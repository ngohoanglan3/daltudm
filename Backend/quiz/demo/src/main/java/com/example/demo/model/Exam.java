package com.example.demo.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;
import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Getter
@Setter
@Entity
@Table(name = "exam")
@ToString

public class Exam {
    @Id
    @Column(name = "exam_id")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer exam_id;

    @Column(name="name")
    private String name;

    @Column(name="time_test")
    private LocalDateTime time_test;

    @Column(name="description")
    private String description;

    @OneToMany(mappedBy="exam")
    private Set<User_Exam> users;

    @OneToMany(mappedBy="exam")
    private Set<Question> qSet;
    
}