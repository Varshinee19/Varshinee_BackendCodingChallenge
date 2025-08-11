package com.hexaware.cricket.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Player {
    @Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int playerId;
	private String playerName;
	@Column(unique=true)
	private int jerseyNumber;
	private String role;
	private int matchesPlayed;
	private String teamName;
	private String state;
	private String description;
	
	public Player() {
		super();
	}

	public Player(int playerId, String playerName, int jerseyNumber, String role, int matchesPlayed, String teamName,
			String state,String description) {
		super();
		this.playerId = playerId;
		this.playerName = playerName;
		this.jerseyNumber = jerseyNumber;
		this.role = role;
		this.matchesPlayed = matchesPlayed;
		this.teamName = teamName;
		this.state = state;
		this.description=description;
	}

	public int getPlayerId() {
		return playerId;
	}

	public String getPlayerName() {
		return playerName;
	}

	public void setPlayerName(String playerName) {
		this.playerName = playerName;
	}

	public int getJerseyNumber() {
		return jerseyNumber;
	}

	public void setJerseyNumber(int jerseyNumber) {
		this.jerseyNumber = jerseyNumber;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public int getMatchesPlayed() {
		return matchesPlayed;
	}

	public void setMatchesPlayed(int matchesPlayed) {
		this.matchesPlayed = matchesPlayed;
	}

	public String getTeamName() {
		return teamName;
	}

	public void setTeamName(String teamName) {
		this.teamName = teamName;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	@Override
	public String toString() {
		return "Player [playerId=" + playerId + ", playerName=" + playerName + ", jerseyNumber=" + jerseyNumber
				+ ", role=" + role + ", matchesPlayed=" + matchesPlayed + ", teamName=" + teamName + ", state=" + state
				+ ", description=" + description + "]";
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public void setPlayerId(int playerId) {
		this.playerId = playerId;
	}

	
	
	
	
	

}
