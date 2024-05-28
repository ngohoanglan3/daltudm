package com.example.demo.service;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.example.demo.DTO.UserDTO;
import com.example.demo.DTO.UserLogin;
import com.example.demo.security.*;

import java.util.HashSet;
import java.util.Set;

@Service
@AllArgsConstructor
public class AuthService {

    private AuthenticationManager authenticationManager;

    private JwtTokenProvider jwtTokenProvider;

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