package com.example.demo.model;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
@Embeddable
public class User_Exam_Key implements Serializable {
    public User_Exam_Key(int exam_id, int user_id) {
        this.exam_id = exam_id;
        this.user_id = user_id;
    }

    private static final long serialVersionUID = 1L;

    @Column(name = "exam_id")
    private int exam_id;
    
    @Column(name = "user_id")
    private int user_id;
}
