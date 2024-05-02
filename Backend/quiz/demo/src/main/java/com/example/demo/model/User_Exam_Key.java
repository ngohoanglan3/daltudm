package com.example.demo.model;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
@Embeddable
public class User_Exam_Key implements Serializable {
    private static final long serialVersionUID = 1L;

    @Column(name = "exam_id")
    private int exam_id;
    
    @Column(name = "user_id")
    private int user_id;
}
