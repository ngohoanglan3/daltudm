package com.example.demo.DTO;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
public class ExamDTO {
    private Integer exam_id;

    private String name;

    private LocalDateTime time_test;

    private String description;

}
