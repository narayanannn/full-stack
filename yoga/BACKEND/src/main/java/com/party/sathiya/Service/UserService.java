package com.party.sathiya.Service;

import com.party.sathiya.dto.response.BasicResponse;
import com.party.sathiya.dto.response.UserResponse;

public interface UserService {

    BasicResponse<UserResponse> getAllUser();

}
