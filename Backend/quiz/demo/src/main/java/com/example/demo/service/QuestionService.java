package com.example.demo.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.DTO.QuestionDTO;
import com.example.demo.ex.myException;
import com.example.demo.model.Question;
import com.example.demo.repository.QuestionRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class QuestionService {
    @Autowired
    QuestionRepository questionRepository;

    public List<QuestionDTO> findAll(){
        return questionRepository.findAll()
                .stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }

    private QuestionDTO toDto(Question entity) {
        QuestionDTO dto = new QuestionDTO();
        BeanUtils.copyProperties(entity, dto);
        return dto;
    }
    

    public QuestionDTO findByRoll(int roll) {
        Question entity = questionRepository.findById(roll)
                .orElseThrow(() -> new myException("khong tim thay Question voi so roll " + roll));

        return toDto(entity);
    }

    public void xoaDi(int roll) {
        Question entity = questionRepository.findById(roll)
                .orElseThrow(() -> new myException("khong tim thay Question voi so roll " + roll));
                questionRepository.delete(entity);
    }

    public void addNew(QuestionDTO dto) {
        if (questionRepository.findById(dto.getQuestion_id()).isEmpty()){
            Question entity = new Question();
            BeanUtils.copyProperties(dto, entity);

            questionRepository.save(entity);
        }else throw new myException("da co Question voi roll " + dto.getQuestion_id());

    }

    public void update(QuestionDTO dto) {
        Optional<Question> op = questionRepository.findById(dto.getQuestion_id());

        Question entity = op.get();
        BeanUtils.copyProperties(dto, entity);
        questionRepository.save(entity);
    }
}
