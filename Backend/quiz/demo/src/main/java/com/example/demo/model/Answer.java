package com.example.demo.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Getter
@Setter
@Entity
@Table(name = "answer")
@ToString
public class Answer {
    @Id
    @Column(name = "answer_id")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer answer_id;

    @Column(name="options")
    private int options;

    @Column(name="description")
    private String description;

    @Column(name="is_correct")
    @JsonIgnore
    private boolean is_correct;
    
    @ManyToOne
    @JoinColumn(name="question_id", nullable=false)
    @JsonIgnore
    private Question question;

}
