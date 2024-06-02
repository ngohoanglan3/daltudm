package com.example.demo.model;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Getter;
import lombok.Setter;

@Embeddable
@Setter
@Getter
public class User_Answer_Key implements Serializable{
    @Column(name = "user_id")
    private int user_id;

    @Column(name = "question_id")
    private int question_id;

    public User_Answer_Key(int user_id, int question_id){
        this.user_id = user_id;
        this.question_id = question_id;
    }

    public User_Answer_Key() {
        //TODO Auto-generated constructor stub
    }

}
