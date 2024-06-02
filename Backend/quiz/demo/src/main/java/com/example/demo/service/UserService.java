package com.example.demo.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.security.core.Authentication;

import com.example.demo.DTO.UserDTO;
import com.example.demo.DTO.UserDTOnoObj;
import com.example.demo.DTO.UserLogin;
import com.example.demo.ex.myException;
import com.example.demo.model.Role;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.security.JwtTokenProvider;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class UserService {
    @Autowired
    UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;
    
    private AuthenticationManager authenticationManager;

    @Autowired
    JwtTokenProvider jwtTokenProvider;

    @Autowired
    RoleService roleService;

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
    

    public User getUser(int roll) {
        User entity = userRepository.findById(roll)
                .orElseThrow(() -> new myException("khong tim thay User voi so roll " + roll));

        return entity;
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
        if (userRepository.findByUsername(dto.getUsername()) == null)
        {
            User entity = new User();
            BeanUtils.copyProperties(dto, entity);
            entity.setPassword(passwordEncoder.encode(dto.getPassword()));

            userRepository.save(entity);
        }else throw new myException("User bi trung ten!");

    }

    public void addNewNoExtraObj(UserDTOnoObj dto) {
        if (userRepository.findByUsername(dto.getUsername()) == null)
        {
            User entity = new User();
            BeanUtils.copyProperties(dto, entity);
            entity.setRole(roleService.toEntity(roleService.findByRoll(dto.getRoleid())));
            entity.setPassword(passwordEncoder.encode(dto.getPassword()));

            userRepository.save(entity);
        }else throw new myException("User bi trung ten!");

    }

    public void update(UserDTOnoObj dto) {
        Optional<User> op = userRepository.findById(dto.getUser_id());

        User entity = op.get();
        BeanUtils.copyProperties(dto, entity);
        entity.setRole(roleService.toEntity(roleService.findByRoll(dto.getRoleid())));
        entity.setPassword(passwordEncoder.encode(dto.getPassword()));
        userRepository.save(entity);
    }
    
    
    public String login(UserLogin loginDto) {

        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                loginDto.getUsername(),
                loginDto.getPassword()
        ));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = jwtTokenProvider.generateToken(authentication);

        return token;
    }
}

