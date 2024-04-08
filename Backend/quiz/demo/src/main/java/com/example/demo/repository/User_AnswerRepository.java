package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.User_Answer;
import com.example.demo.model.User_Answer_Key;

@Repository
public interface User_AnswerRepository extends JpaRepository<User_Answer, User_Answer_Key> {

}
