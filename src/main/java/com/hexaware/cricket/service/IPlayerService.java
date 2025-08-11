package com.hexaware.cricket.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.hexaware.cricket.dto.PlayerDto;
import com.hexaware.cricket.entity.Player;
import com.hexaware.cricket.exception.PlayerNotFoundException;
@Service
public interface IPlayerService {
	public Player addPlayer(PlayerDto dto);
	public Player updatePlayer(Integer playerId,PlayerDto dto)throws PlayerNotFoundException;
	public List<Player> getAll();
	public Player getById(Integer playerID)throws PlayerNotFoundException;
	public String deletePlayer(Integer playerId);
	List<Player> displayPlayer();

}
