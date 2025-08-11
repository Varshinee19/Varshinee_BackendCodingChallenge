package com.hexaware.cricket.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hexaware.cricket.dto.PlayerDto;
import com.hexaware.cricket.entity.Player;
import com.hexaware.cricket.exception.PlayerNotFoundException;
import com.hexaware.cricket.repository.CricketRepository;
@Service
public class PlayerServiceImpl implements IPlayerService {
	@Autowired
	CricketRepository repo;

	@Override
	public Player addPlayer(PlayerDto dto) {
		// TODO Auto-generated method stub
		Player player=new Player();
		player.setPlayerName(dto.getPlayerName());
		player.setJerseyNumber(dto.getJerseyNumber());
		player.setRole(dto.getRole());
		player.setMatchesPlayed(dto.getMatchesPlayed());
		player.setTeamName(dto.getTeamName());
		player.setState(dto.getState());
		player.setDescription(dto.getDescription());
		return repo.save(player);
	}

	@Override
	public Player updatePlayer(Integer playerID,PlayerDto dto) throws PlayerNotFoundException {
		// TODO Auto-generated method stub
		Player play=repo.findById(playerID).orElseThrow(()->new PlayerNotFoundException("Player doesnt exist"));
		play.setPlayerName(dto.getPlayerName());
		play.setJerseyNumber(dto.getJerseyNumber());
		play.setRole(dto.getRole());
		play.setMatchesPlayed(dto.getMatchesPlayed());
		play.setTeamName(dto.getTeamName());
		play.setState(dto.getState());
		play.setDescription(dto.getDescription());
		return repo.save(play);
	}

	@Override
	public List<Player> getAll() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

	@Override
	public Player getById(Integer playerId) throws PlayerNotFoundException {
		// TODO Auto-generated method stub
		return repo.findById(playerId).orElseThrow(()-> new PlayerNotFoundException("Player doesnt exist"));
	}

	@Override
	public String deletePlayer(Integer playerId) {
		// TODO Auto-generated method stub
		repo.deleteById(playerId);
		return "Deleted successfully";
	}

	@Override
	public List<Player> displayPlayer() {
		// TODO Auto-generated method stub
		return repo.displayPlayer();
	}

}
