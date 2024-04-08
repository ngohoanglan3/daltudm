package com.example.demo.service;

import java.util.List;
// import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.DTO.User_AnswerDTO;
// import com.example.demo.ex.myException;
import com.example.demo.model.User_Answer;
import com.example.demo.repository.User_AnswerRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class User_AnswerService {
    @Autowired
    User_AnswerRepository user_AnswerRepository;

    public List<User_AnswerDTO> findAll(){
        return user_AnswerRepository.findAll()
                .stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }

    private User_AnswerDTO toDto(User_Answer entity) {
        User_AnswerDTO dto = new User_AnswerDTO();
        BeanUtils.copyProperties(entity, dto);
        return dto;
    }
}