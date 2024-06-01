package com.example.demo.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.DTO.ExamDTO;
import com.example.demo.DTO.ExamOnlyDTO;
import com.example.demo.ex.myException;
import com.example.demo.model.Exam;
import com.example.demo.repository.ExamRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class ExamService {
    @Autowired
    ExamRepository examRepository;

    public List<ExamDTO> findAll(){
        return examRepository.findAll()
                .stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }


    public List<ExamOnlyDTO> findAllNoQue(){
        return examRepository.findAll()
                .stream()
                .map(this::toDtoNoQuestion)
                .collect(Collectors.toList());
    }

    private ExamDTO toDto(Exam entity) {
        ExamDTO dto = new ExamDTO();
        BeanUtils.copyProperties(entity, dto);
        return dto;
    }

    private ExamOnlyDTO toDtoNoQuestion(Exam entity) {
        ExamOnlyDTO dto = new ExamOnlyDTO();
        BeanUtils.copyProperties(entity, dto);
        return dto;
    }
    

    public ExamDTO findByRoll(int roll) {
        Exam entity = examRepository.findById(roll)
                .orElseThrow(() -> new myException("khong tim thay Exam voi so roll " + roll));

        return toDto(entity);
    }
    

    public ExamOnlyDTO findByRollWithoutQuestion(int roll) {
        Exam entity = examRepository.findById(roll)
                .orElseThrow(() -> new myException("khong tim thay Exam voi so roll " + roll));

        return toDtoNoQuestion(entity);
    }

    public void xoaDi(int roll) {
        Exam entity = examRepository.findById(roll)
                .orElseThrow(() -> new myException("khong tim thay Exam voi so roll " + roll));
                examRepository.delete(entity);
    }

    public void addNew(ExamDTO dto) {
        if (examRepository.findById(dto.getExam_id()).isEmpty()){
            Exam entity = new Exam();
            BeanUtils.copyProperties(dto, entity);

            examRepository.save(entity);
        }else throw new myException("da co Exam voi roll " + dto.getExam_id());

    }

    public void update(ExamDTO dto) {
        Optional<Exam> op = examRepository.findById(dto.getExam_id());

        Exam entity = op.get();
        BeanUtils.copyProperties(dto, entity);
        examRepository.save(entity);
    }
}
