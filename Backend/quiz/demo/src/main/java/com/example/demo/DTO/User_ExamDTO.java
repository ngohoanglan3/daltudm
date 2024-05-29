package com.example.demo.DTO;

import java.time.Instant;

import com.example.demo.model.Exam;
import com.example.demo.model.User;
import com.example.demo.model.User_Exam_Key;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class User_ExamDTO {
    private User_Exam_Key id;

    private float score;

    private Instant start_time;

    private Instant end_time;

    private boolean valid_test;

    User user;

    Exam exam;
}
