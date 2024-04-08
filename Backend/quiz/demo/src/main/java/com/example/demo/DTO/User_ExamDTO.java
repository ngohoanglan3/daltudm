package com.example.demo.DTO;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class User_ExamDTO {
    private int exam_id;

    private int question_id;

    private int score;
}
