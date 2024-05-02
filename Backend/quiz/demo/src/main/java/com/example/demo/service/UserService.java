package com.example.demo.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.DTO.UserDTO;
import com.example.demo.ex.myException;
import com.example.demo.model.Role;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class UserService {
    @Autowired
    UserRepository userRepository;

    public List<UserDTO> findAll(){
        return userRepository.findAll()
                .stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }

    private UserDTO toDto(User entity) {
        UserDTO dto = new UserDTO();
        BeanUtils.copyProperties(entity, dto);
        return dto;
    }
    

    public UserDTO findByRoll(int roll) {
        User entity = userRepository.findById(roll)
                .orElseThrow(() -> new myException("khong tim thay User voi so roll " + roll));

        return toDto(entity);
    }

    public List<UserDTO> findByRole(Role role) {
        return userRepository.findByRole(role)
                .stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }

    public void xoaDi(int roll) {
        User entity = userRepository.findById(roll)
                .orElseThrow(() -> new myException("khong tim thay User voi so roll " + roll));
                userRepository.delete(entity);
    }

    public void addNew(UserDTO dto) {
        if (userRepository.findById(dto.getUser_id()).isEmpty()){
            User entity = new User();
            BeanUtils.copyProperties(dto, entity);

            userRepository.save(entity);
        }else throw new myException("da co User voi roll " + dto.getUser_id());

    }

    public void update(UserDTO dto) {
        Optional<User> op = userRepository.findById(dto.getUser_id());

        User entity = op.get();
        BeanUtils.copyProperties(dto, entity);
        userRepository.save(entity);
    }
}
