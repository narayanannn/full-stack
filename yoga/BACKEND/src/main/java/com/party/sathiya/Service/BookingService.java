package com.party.sathiya.Service;

import java.util.List;

import com.party.sathiya.Models.Booking;
import com.party.sathiya.dto.request.BookingRequest;
import com.party.sathiya.dto.response.BookingResponse;

public interface BookingService {
    BookingResponse createBooking(BookingRequest request);
    List<Booking> getAllBookings();

}
