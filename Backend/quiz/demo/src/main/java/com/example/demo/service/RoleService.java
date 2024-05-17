package com.example.demo.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.DTO.RoleDTO;
import com.example.demo.ex.myException;
import com.example.demo.model.Role;
import com.example.demo.repository.RoleRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class RoleService {
    @Autowired
    RoleRepository roleRepository;

    public List<RoleDTO> findAll(){
        return roleRepository.findAll()
                .stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }

    private RoleDTO toDto(Role entity) {
        RoleDTO dto = new RoleDTO();
        BeanUtils.copyProperties(entity, dto);
        return dto;
    }
    

    public RoleDTO findByRoll(int roll) {
        Role entity = roleRepository.findById(roll)
                .orElseThrow(() -> new myException("khong tim thay Role voi so roll " + roll));

        return toDto(entity);
    }

    public void xoaDi(int roll) {
        Role entity = roleRepository.findById(roll)
                .orElseThrow(() -> new myException("khong tim thay Role voi so roll " + roll));
        roleRepository.delete(entity);
    }

    public void addNew(RoleDTO dto) {
        if (roleRepository.findById(dto.getRole_id()).isEmpty()){
            Role entity = new Role();
            BeanUtils.copyProperties(dto, entity);

            roleRepository.save(entity);
        }else throw new myException("da co Role voi roll " + dto.getRole_id());

    }

    public void update(RoleDTO dto) {
        Optional<Role> op = roleRepository.findById(dto.getRole_id());

        Role entity = op.get();
        BeanUtils.copyProperties(dto, entity);
        roleRepository.save(entity);
    }
}
