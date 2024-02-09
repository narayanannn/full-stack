package com.bec.brit.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bec.brit.model.Users;

public interface UserRepository extends JpaRepository <Users, String>{

    Optional<Users> findByEmail(String email);

}
