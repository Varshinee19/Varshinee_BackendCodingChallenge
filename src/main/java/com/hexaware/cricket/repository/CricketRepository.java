package com.hexaware.cricket.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hexaware.cricket.entity.Player;
@Repository
public interface CricketRepository extends JpaRepository<Player,Integer> {
	@Query(value = "Select p from Player p where p.role in ('AllRounder', 'WicketKeeper') order by p.role asc")
            List<Player> displayPlayer();

}
