package com.example.demo.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.DTO.User_ExamDTO;
import com.example.demo.DTO.User_ExamDTOnoObj;
import com.example.demo.ex.myException;
import com.example.demo.model.User_Exam;
import com.example.demo.model.User_Exam_Key;
import com.example.demo.repository.User_ExamRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class User_ExamService {
    @Autowired
    User_ExamRepository user_ExamRepository;

    @Autowired
    UserService userService;

    @Autowired
    ExamService examService;

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
    
    public User_ExamDTO findByKey(User_Exam_Key key) {
        User_Exam entity = user_ExamRepository.findById(key)
                .orElseThrow(() -> new myException("khong tim thay!"));

        return toDto(entity);
    }

    public void xoaDi(User_Exam_Key key) {
        User_Exam entity = user_ExamRepository.findById(key)
                .orElseThrow(() -> new myException("khong tim thay!"));
            user_ExamRepository.delete(entity);
    }

    public void addNew(User_ExamDTOnoObj check) {
        User_ExamDTO dto = new User_ExamDTO();
        BeanUtils.copyProperties(check, dto);
        User_Exam_Key id = new User_Exam_Key();
        id.setExam_id(check.getExam_id());
        id.setUser_id(check.getUser_id());
        dto.setId(id);
        if (user_ExamRepository.findById(dto.getId()).isEmpty()){
            User_Exam entity = new User_Exam();
            BeanUtils.copyProperties(dto, entity);
            entity.setExam(examService.toEntity(examService.findByRoll(check.getExam_id())));
            entity.setUser(userService.toEntity(userService.findByRoll(check.getUser_id())));

            user_ExamRepository.save(entity);
        }else throw new myException("da co!");

    }

    public void update(User_ExamDTO dto) {
        Optional<User_Exam> op = user_ExamRepository.findById(dto.getId());

        User_Exam entity = op.get();
        BeanUtils.copyProperties(dto, entity);
        user_ExamRepository.save(entity);
    }

    public void updatenoObj(User_ExamDTOnoObj check) {
        User_ExamDTO dto = new User_ExamDTO();
        BeanUtils.copyProperties(check, dto);
        User_Exam_Key id = new User_Exam_Key();
        id.setExam_id(check.getExam_id());
        id.setUser_id(check.getUser_id());
        dto.setId(id);
        
        Optional<User_Exam> op = user_ExamRepository.findById(dto.getId());

        User_Exam entity = op.get();
        BeanUtils.copyProperties(dto, entity);
        entity.setExam(examService.toEntity(examService.findByRoll(check.getExam_id())));
        entity.setUser(userService.toEntity(userService.findByRoll(check.getUser_id())));
        user_ExamRepository.save(entity);
    }

}
