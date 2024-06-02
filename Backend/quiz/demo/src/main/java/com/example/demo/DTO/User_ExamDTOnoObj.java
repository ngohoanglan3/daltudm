package com.example.demo.DTO;

import java.time.Instant;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class User_ExamDTOnoObj {
    private int user_id;

    private int exam_id;

    private float score;

    private Instant start_time;

    private Instant end_time;

    private boolean valid_test;
}
