package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Answer;
import com.example.demo.model.Question;

import java.util.List;


@Repository
public interface AnswerRepository extends JpaRepository<Answer, Integer> {
    List<Answer> findByQuestion(Question question);

    Answer findByOptionsAndQuestion(int option, Question question);
}
