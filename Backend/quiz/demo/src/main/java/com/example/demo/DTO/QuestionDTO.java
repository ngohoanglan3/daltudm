package com.example.demo.DTO;

import java.util.Set;

import com.example.demo.model.Answer;
import com.example.demo.model.Exam;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class QuestionDTO {
    private Integer question_id;

    private int exam_id;

    private String description;

    // private Exam exam;

    private Set<Answer> aSet;

}
