package com.example.demo.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
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

    @Column(name="description")
    private String description;

    @ManyToOne
    @JoinColumn(name="exam_id", nullable=false)
    @JsonIgnore
    private Exam exam;

    @OneToMany(mappedBy="question")
    private Set<Answer> aSet;

}
