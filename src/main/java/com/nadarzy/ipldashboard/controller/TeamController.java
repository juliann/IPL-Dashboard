package com.nadarzy.ipldashboard.controller;

import com.nadarzy.ipldashboard.model.Match;
import com.nadarzy.ipldashboard.model.Team;
import com.nadarzy.ipldashboard.repository.MatchRepository;
import com.nadarzy.ipldashboard.repository.TeamRepository;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TeamController {

    private TeamRepository teamRepository;
    private MatchRepository matchRepository;

    public TeamController(TeamRepository teamRepository,MatchRepository matchRepository) {
        this.teamRepository = teamRepository;
        this.matchRepository = matchRepository;
    }

    @GetMapping("/team/{teamName}")
    public Team getTeam(@PathVariable String teamName){
        Team team= this.teamRepository.findByTeamName(teamName);

        team.setMatches(this.matchRepository.findLatestMatchesByTeam(teamName, 4));
        return team;
    }
}
