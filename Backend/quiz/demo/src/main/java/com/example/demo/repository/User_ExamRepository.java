package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.User_Exam;
import com.example.demo.model.User_Exam_Key;

@Repository
public interface User_ExamRepository extends JpaRepository<User_Exam, User_Exam_Key> {

}
