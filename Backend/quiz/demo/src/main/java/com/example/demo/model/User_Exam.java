package com.example.demo.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.Table;

@Getter
@Setter
@Entity
@Table(name = "user_exam")
@ToString
@IdClass(User_Exam_Key.class)
public class User_Exam {
    @Column(name = "exam_id")
    @Id
    private int exam_id;

    @Id
    @Column(name = "user_id")
    private int user_id;

    @Column(name = "score")
    private int score;
}
