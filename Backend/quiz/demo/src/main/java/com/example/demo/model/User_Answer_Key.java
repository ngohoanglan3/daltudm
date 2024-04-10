package com.example.demo.model;

import java.io.Serializable;

import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

public class User_Answer_Key implements Serializable{
    @ManyToOne
    @JoinColumn(name = "user_id")
    private int user_id;

    @ManyToOne
    @JoinColumn(name = "question_id")
    private int question_id;

}
