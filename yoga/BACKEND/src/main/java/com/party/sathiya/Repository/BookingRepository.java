package com.party.sathiya.Repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.party.sathiya.Models.Booking;

public interface BookingRepository extends JpaRepository<Booking, Long> {

}

