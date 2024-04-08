package com.example.demo.service;

import java.util.List;
// import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.DTO.User_ExamDTO;
// import com.example.demo.ex.myException;
import com.example.demo.model.User_Exam;
import com.example.demo.repository.User_ExamRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class User_ExamService {
    @Autowired
    User_ExamRepository user_ExamRepository;

    public List<User_ExamDTO> findAll(){
        return user_ExamRepository.findAll()
                .stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }

    private User_ExamDTO toDto(User_Exam entity) {
        User_ExamDTO dto = new User_ExamDTO();
        BeanUtils.copyProperties(entity, dto);
        return dto;
    }
    

}
