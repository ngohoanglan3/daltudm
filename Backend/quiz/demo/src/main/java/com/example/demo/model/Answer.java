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
@Table(name = "answer")
@ToString
public class Answer {
    @Id
    @Column(name = "answer_id")
    private Integer answer_id;

    @Column(name="user_id")
    private int user_id;

    @Column(name="options")
    private int options;

    @Column(name="description")
    private String description;

    @Column(name="is_correct")
    private boolean is_correct;

}
