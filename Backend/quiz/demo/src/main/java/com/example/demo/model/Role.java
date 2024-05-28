package com.example.demo.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Set;

import com.fasterxml.jackson.annotation.*;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Getter
@Setter
@Entity
@Table(name = "role")
public class Role {
    @Id
    @Column(name = "role_id")
    private Integer role_id;

    @Column(name="role_name")
    private String role_name;
    
    @JsonBackReference
    @OneToMany(mappedBy="role")
    private Set<User> users;
}
