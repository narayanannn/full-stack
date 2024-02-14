package com.party.sathiya.config;


import static com.party.sathiya.Enum.Role.*;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.party.sathiya.Models.User;
import com.party.sathiya.Repository.UserRepository;

import lombok.RequiredArgsConstructor;
@Component
@RequiredArgsConstructor
// @SuppressWarnings("null")
public class UserCLI implements CommandLineRunner{

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    @Override
    public void run(String... args) throws Exception {
        if(userRepository.count()>0)
        return;
        var user=User.builder()
            .name("ATCHAYA_S")
            .email("atchayaachu@gmail.com")
            .password(passwordEncoder.encode("atchaya@123"))
            .role(ADMIN)
            .build();
        userRepository.save(user);

    }

}