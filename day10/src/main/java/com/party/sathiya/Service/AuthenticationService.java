

package com.party.sathiya.Service;

import com.party.sathiya.dto.request.LoginRequest;
import com.party.sathiya.dto.request.RegisterRequest;
import com.party.sathiya.dto.response.LoginResponse;
import com.party.sathiya.dto.response.RegisterResponse;

public interface AuthenticationService {
  RegisterResponse register(RegisterRequest request);

  LoginResponse login(LoginRequest request);
}
