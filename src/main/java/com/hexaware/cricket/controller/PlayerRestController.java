package com.hexaware.cricket.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hexaware.cricket.dto.PlayerDto;
import com.hexaware.cricket.entity.Player;
import com.hexaware.cricket.exception.PlayerNotFoundException;
import com.hexaware.cricket.service.IPlayerService;

@RestController
@RequestMapping("/api/player")
public class PlayerRestController {
	@Autowired
	IPlayerService service;
	@PostMapping("/add")
	public Player addPlayer(@RequestBody PlayerDto dto) {
		return service.addPlayer(dto);
	}
	@PutMapping("/update/{playerId}")
	public Player updatePlayer(@PathVariable Integer playerId,@RequestBody PlayerDto dto) throws PlayerNotFoundException {
		return service.updatePlayer(playerId,dto);
		
	}
	@GetMapping("/getAll")
	public List<Player> getAll(){
		return service.getAll();
	}
	@GetMapping("/getById/{playerId}")
	public Player getById(@PathVariable Integer playerId) throws PlayerNotFoundException {
		return service.getById(playerId);
	}
	@DeleteMapping("delete/{playerId}")
	public String deletePlayer(@PathVariable Integer playerId) {
		service.deletePlayer(playerId);
		return "Player deleted successfully ";
	}
	

}
