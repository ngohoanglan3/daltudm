package com.example.demo.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.DTO.AnswernoObj;
import com.example.demo.DTO.QuestionDTO;
import com.example.demo.DTO.QuestionDTOmini;
import com.example.demo.DTO.QuestionDTOnoObj;
import com.example.demo.ex.myException;
import com.example.demo.model.Answer;
import com.example.demo.model.Exam;
import com.example.demo.model.Question;
import com.example.demo.repository.AnswerRepository;
import com.example.demo.repository.ExamRepository;
import com.example.demo.repository.QuestionRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class QuestionService {
    @Autowired
    QuestionRepository questionRepository;

    @Autowired
    ExamRepository examRepository;

    @Autowired
    ExamService examService;

    @Autowired
    AnswerRepository answerRepository;

    public List<QuestionDTO> findAll(){
        return questionRepository.findAll()
                .stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }

    public List<QuestionDTOmini> findAllMini(){
        List<QuestionDTOmini> list = questionRepository.findAll()
        .stream()
        .map(this::toDtoMini)
        .collect(Collectors.toList());
        for (QuestionDTOmini questionDTOmini : list) {
            Question quest = questionRepository.findById(questionDTOmini.getQuestion_id())
                .orElseThrow(() -> new myException("khong tim thay Question voi so roll " + questionDTOmini.getQuestion_id()));
            questionDTOmini.setASet(quest.getASet().stream().map(this::toDtoMini2).collect(Collectors.toSet()));
        }
        return list;
    }

    private AnswernoObj toDtoMini2(Answer entity) {
        AnswernoObj dto = new AnswernoObj();
        BeanUtils.copyProperties(entity, dto);
        dto.setQuestion_id(entity.getQuestion().getQuestion_id());
        return dto;
    }

    private QuestionDTO toDto(Question entity) {
        QuestionDTO dto = new QuestionDTO();
        BeanUtils.copyProperties(entity, dto);
        return dto;
    }

    private QuestionDTOmini toDtoMini(Question entity) {
        QuestionDTOmini dto = new QuestionDTOmini();
        BeanUtils.copyProperties(entity, dto);
        return dto;
    }

    public Question toEntity(QuestionDTO entity) {
        Question dto = new Question();
        BeanUtils.copyProperties(entity, dto);
        return dto;
    }
    

    public QuestionDTO findByRoll(int roll) {
        Question entity = questionRepository.findById(roll)
                .orElseThrow(() -> new myException("khong tim thay Question voi so roll " + roll));

        return toDto(entity);
    }

    public Question getQuestion(int roll) {
        Question entity = questionRepository.findById(roll)
                .orElseThrow(() -> new myException("khong tim thay Question voi so roll " + roll));

        return entity;
    }

    public List<QuestionDTO> getQuestionListUsingExamID(int examid) {
        Optional<Exam> temp = examRepository.findById(examid);
        if(temp.isEmpty()) {
            return null;
        }
        Exam exam = temp.get();
        List<QuestionDTO> ListofQuestion = questionRepository.findByExam(exam)
        .stream().map(this::toDto).collect(Collectors.toList());
        return ListofQuestion;
    }

    public void xoaDi(int roll) {
        Question entity = questionRepository.findById(roll)
                .orElseThrow(() -> new myException("khong tim thay Question voi so roll " + roll));
                questionRepository.delete(entity);
    }

    public void addNew(QuestionDTOmini dto) {
        if (questionRepository.findById(dto.getQuestion_id()).isEmpty()){
            Question entity = new Question();
            BeanUtils.copyProperties(dto, entity);

            questionRepository.save(entity);
        }else throw new myException("da co Question voi roll " + dto.getQuestion_id());

    }

    public void addNewnoObj(QuestionDTOnoObj dto) {
        if (questionRepository.findById(dto.getQuestion_id()).isEmpty()){
            Question entity = new Question();
            BeanUtils.copyProperties(dto, entity);
            entity.setExam(examService.toEntity(examService.findByRoll(dto.getExam_id())));

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
