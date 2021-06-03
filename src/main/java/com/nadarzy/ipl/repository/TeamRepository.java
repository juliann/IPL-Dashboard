package com.nadarzy.ipl.repository;

import com.nadarzy.ipl.model.Team;
import org.springframework.data.repository.CrudRepository;

public interface TeamRepository extends CrudRepository<Team, Long> {

    Team findByTeamName(String teamName);

}
