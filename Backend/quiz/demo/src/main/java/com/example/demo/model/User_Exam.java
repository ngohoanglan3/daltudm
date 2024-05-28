package com.example.demo.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;
import jakarta.persistence.Table;

@Getter
@Setter
@Entity
@Table(name = "user_exam")
@ToString
public class User_Exam {
    @EmbeddedId
    User_Exam_Key id;
    
    @ManyToOne
    @MapsId("user_id")
    @JoinColumn(name = "user_id")
    User user;

    @ManyToOne
    @MapsId("exam_id")
    @JoinColumn(name = "exam_id")
    Exam exam;

    @Column(name = "score")
    private float score;
}