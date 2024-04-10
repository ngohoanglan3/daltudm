package com.example.demo.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.IdClass;
import jakarta.persistence.Table;

@Getter
@Setter
@Entity
@Table(name = "user_answer")
@ToString
@IdClass(User_Answer_Key.class)
public class User_Answer {
    @EmbeddedId
    private User_Answer_Key id;

    @Column(name="option_choose")
    private int option_choose;

    @Column(name="is_correct")
    private boolean is_correct;
    
}
