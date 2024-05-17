package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.DTO.AnswerDTO;
import com.example.demo.DTO.QuestionDTO;
import com.example.demo.ex.myException;
import com.example.demo.model.Answer;
import com.example.demo.repository.AnswerRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class AnswerService {
    @Autowired
    AnswerRepository answerRepository;

    QuestionService qService;

    public List<AnswerDTO> findAll(){
        return answerRepository.findAll()
                .stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }

    private AnswerDTO toDto(Answer entity) {
        AnswerDTO dto = new AnswerDTO();
        BeanUtils.copyProperties(entity, dto);
        return dto;
    }
    

    public AnswerDTO findByRoll(int roll) {
        Answer entity = answerRepository.findById(roll)
                .orElseThrow(() -> new myException("khong tim thay Answer voi so roll " + roll));

        return toDto(entity);
    }

    public List<AnswerDTO> getQuestionListUsingExamID(int examid) {
        List<QuestionDTO> ques = qService.getQuestionListUsingExamID(examid);
        if (ques.isEmpty() || ques == null) {
            return null;
        }
        List<AnswerDTO> ListofQuestion = findAll();
        List<AnswerDTO> ActualList = new ArrayList<>();
        for (QuestionDTO questi : ques) {
            for (AnswerDTO answersss : ListofQuestion) {
                if(questi.getQuestion_id() == answersss.getQuestion().getQuestion_id()){
                    ActualList.add(answersss);
                }
            }
        }
        return ActualList;
    }

    public void xoaDi(int roll) {
        Answer entity = answerRepository.findById(roll)
                .orElseThrow(() -> new myException("khong tim thay Answer voi so roll " + roll));
                answerRepository.delete(entity);
    }

    public void addNew(AnswerDTO dto) {
        if (answerRepository.findById(dto.getAnswer_id()).isEmpty()){
            Answer entity = new Answer();
            BeanUtils.copyProperties(dto, entity);

            answerRepository.save(entity);
        }else throw new myException("da co Answer voi roll " + dto.getAnswer_id());

    }

    public void update(AnswerDTO dto) {
        Optional<Answer> op = answerRepository.findById(dto.getAnswer_id());

        Answer entity = op.get();
        BeanUtils.copyProperties(dto, entity);
        answerRepository.save(entity);
    }
}
