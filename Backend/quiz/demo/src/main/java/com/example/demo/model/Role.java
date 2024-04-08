package com.example.demo.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Getter
@Setter
@Entity
@Table(name = "role")
@ToString
public class Role {
    @Id
    @Column(name = "role_id")
    private Integer role_id;

    @Column(name="role_name")
    private String role_name;
    
}
