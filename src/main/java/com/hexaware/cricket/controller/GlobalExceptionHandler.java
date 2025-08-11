package com.hexaware.cricket.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.hexaware.cricket.exception.PlayerNotFoundException;

@RestControllerAdvice
public class GlobalExceptionHandler {
	@ExceptionHandler(PlayerNotFoundException.class)
	@ResponseStatus(code=HttpStatus.BAD_REQUEST)
	public String handlePlayerNotFound() {
		return "Player does not exist";
		
	}

}
