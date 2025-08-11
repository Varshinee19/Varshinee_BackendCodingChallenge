package com.hexaware.cricket.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class PlayerDto {
	
	private int playerId;
	@NotBlank(message="Player name cannot be empty")
	private String playerName;
	@NotNull
	@Min(1)
	private int jerseyNumber;
	@NotNull(message="Role must be specified")
	private String role;
	@NotNull
	@Min(1)
	private int matchesPlayed;
	@NotEmpty(message="Team name should be filled")
	private String teamName;
	@NotBlank(message="Specify player's country")
	private String state;
	@NotEmpty
	private String description;

}
