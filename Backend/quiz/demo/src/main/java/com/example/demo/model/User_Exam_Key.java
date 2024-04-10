package com.example.demo.model;

import java.io.Serializable;

import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

public class User_Exam_Key implements Serializable {
    private static final long serialVersionUID = 1L;

    @ManyToOne
    @JoinColumn(name = "exam_id")
    private int exam_id;
    
    @ManyToOne
    @JoinColumn(name = "user_id")
    private int user_id;
}
