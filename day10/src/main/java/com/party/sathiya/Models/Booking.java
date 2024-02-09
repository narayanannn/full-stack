package com.party.sathiya.Models;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder

@AllArgsConstructor
@Entity
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookingId;
    private Integer no_of_guest;
    // private Integer noOfPersons;
    private String eventType;
    private Long userId;
    private Long venueId;   
    private Date ondate;
    private String occasion;
    private Integer paymentStatus; 

    public Date getOndate() {
        return ondate;
    }

    public void setOndate(Date ondate) {
        this.ondate = ondate;
    } 

   

    public Booking() {
        super();
    }

    public void setBookingId(Long bookingId) {
        this.bookingId = bookingId;
    }

    public void setNoOfPersons(Integer no_of_guest) {
        this.no_of_guest = no_of_guest;
    }

    // public void setSubmissionDate(Date submissionDate) {
    //     this.submissionDate = submissionDate;
    // }

    public void setEventType(String eventType) {
        this.eventType = eventType;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public void setVenueId(Long venueId) {
        this.venueId = venueId;
    }

    public void setPaymentStatus(Integer paymentStatus) {
        this.paymentStatus = paymentStatus;
    }

    public Long getBookingId() {
        return bookingId;
    }

    // public Integer getno_of_guest() {
    //     return no_of_guest;
    // }

    // public Date getSubmissionDate() {
    //     return submissionDate;
    // }

    public String getEventType() {
        return eventType;
    }

    public Long getUserId() {
        return userId;
    }

    public Long getVenueId() {
        return venueId;
    }

    public Integer getPaymentStatus() {
        return paymentStatus;
    }


}