package com.example.demo.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Getter
@Setter
@Entity
@Table(name = "user_exam")
@ToString
public class User_Exam {
    @EmbeddedId
    private User_Exam_Key id;

    @Column(name = "score")
    private int score;
}
