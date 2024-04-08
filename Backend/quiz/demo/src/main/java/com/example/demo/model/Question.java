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
@Table(name = "question")
@ToString
public class Question {
    @Id
    @Column(name = "question_id")
    private Integer question_id;

    @Column(name="exam_id")
    private int exam_id;

    @Column(name="description")
    private String description;

}
