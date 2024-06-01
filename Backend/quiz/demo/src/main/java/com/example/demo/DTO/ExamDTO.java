package com.example.demo.DTO;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;
import java.util.Set;

import com.example.demo.model.Question;

@Getter
@Setter
@ToString
public class ExamDTO {
    private Integer exam_id;

    private String name;

    private LocalDateTime time_test;

    private String description;

    private int test_time;

    private Set<Question> qSet;

}
