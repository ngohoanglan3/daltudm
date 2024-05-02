package com.example.demo.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;
import jakarta.persistence.Table;

@Getter
@Setter
@Entity
@Table(name = "user_answer")
@ToString
public class User_Answer {
    @EmbeddedId
    User_Answer_Key id;
        
    @ManyToOne
    @MapsId("user_id")
    @JoinColumn(name = "user_id")
    User user;

    @ManyToOne
    @MapsId("question_id")
    @JoinColumn(name = "question_id")
    Question question;

    @Column(name="option_choose")
    private int option_choose;

    @Column(name="is_correct")
    private boolean is_correct;
    
}
