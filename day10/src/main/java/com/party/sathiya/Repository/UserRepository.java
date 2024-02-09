package com.party.sathiya.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.party.sathiya.Models.User;

import java.util.Optional;
public interface UserRepository extends JpaRepository<User,String>{
    Optional <User> findByEmail(String username);
}
