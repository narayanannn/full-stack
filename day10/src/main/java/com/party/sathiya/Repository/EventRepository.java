package com.party.sathiya.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.party.sathiya.Models.Event;

public interface EventRepository extends JpaRepository<Event,Long> 
    {

    }


