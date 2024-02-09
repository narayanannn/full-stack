package com.party.sathiya.Service;

import java.util.List;

import com.party.sathiya.Models.Event;
import com.party.sathiya.dto.request.EventRequest;
import com.party.sathiya.dto.response.EventResponse;

public interface EventService{
EventResponse createEvent(EventRequest request);
List<Event> getAllEvents();
EventResponse deleteEvent(Long Id);
    EventResponse updateEvent(Long Id,EventRequest request);
}
