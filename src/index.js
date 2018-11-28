import React from "react";
import ReactDOM from "react-dom";
import Player from "./components/player";

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loaded: false,
            statsType: 'PTS',
            playersPts: {
                "resource": "wnbaseasonstats",
                "parameters": {
                    "LeagueID": "10",
                    "Season": "2018",
                    "SeasonType": "Regular Season",
                    "StatCategory": "PTS",
                    "PlayerPosition": null,
                    "PlayerExperience": null,
                    "Conference": null,
                    "Location": null,
                    "Outcome": null,
                    "SeasonSegment": null,
                    "LastNGames": null,
                    "LastNDays": null,
                    "Month": null,
                    "VsTeamID": null,
                    "StarterBench": null,
                    "DaysRest": null,
                    "TopX": 10
                },
                "resultSets": [
                    {
                        "name": "WNBAPlayerSeasonStats",
                        "headers": [
                            "LEAGUE_ID",
                            "SEASON_ID",
                            "PLAYER_ID",
                            "PLAYER_NAME",
                            "TEAM_ID",
                            "TEAM_CITY",
                            "TEAM_NAME",
                            "TEAM_ABBREVIATION",
                            "PLAYER_POSITION",
                            "PLAYER_JERSEY_NUM",
                            "GAMES_PLAYED",
                            "MIN",
                            "PTS",
                            "FGM",
                            "FGA",
                            "FG_PCT",
                            "FG3M",
                            "FG3A",
                            "FG3_PCT",
                            "FTM",
                            "FTA",
                            "FT_PCT",
                            "OREB",
                            "DREB",
                            "REB",
                            "AST",
                            "STL",
                            "BLK",
                            "TOV",
                            "PF",
                            "DBL_DBL",
                            "TPL_DBL",
                            "RANK"
                        ],
                        "rowSet": [
                            [
                                "10",
                                "22018",
                                202633,
                                "Liz Cambage",
                                1611661321,
                                "Dallas",
                                "Wings",
                                "DAL",
                                "C",
                                "8",
                                32,
                                29.5,
                                23,
                                8.7,
                                14.8,
                                0.589,
                                0.4,
                                1.2,
                                0.324,
                                5.3,
                                7.2,
                                0.738,
                                2.3,
                                7.3,
                                9.7,
                                2.3,
                                0.47,
                                1.69,
                                2.78,
                                2.78,
                                0.47,
                                0,
                                1
                            ],
                            [
                                "10",
                                "22018",
                                1627668,
                                "Breanna Stewart",
                                1611661328,
                                "Seattle",
                                "Storm",
                                "SEA",
                                "F",
                                "30",
                                34,
                                31.6,
                                21.8,
                                7.9,
                                15,
                                0.529,
                                1.8,
                                4.3,
                                0.415,
                                4.1,
                                5.1,
                                0.82,
                                1.1,
                                7.2,
                                8.4,
                                2.5,
                                1.35,
                                1.44,
                                1.79,
                                2.03,
                                0.26,
                                0,
                                2
                            ],
                            [
                                "10",
                                "22018",
                                100940,
                                "Diana Taurasi",
                                1611661317,
                                "Phoenix",
                                "Mercury",
                                "PHO",
                                "G",
                                "3",
                                33,
                                30,
                                20.7,
                                6.1,
                                13.7,
                                0.446,
                                3.2,
                                8.4,
                                0.383,
                                5.2,
                                5.6,
                                0.925,
                                0.1,
                                3.4,
                                3.5,
                                5.3,
                                0.91,
                                0.24,
                                2.58,
                                3.03,
                                0.06,
                                0,
                                3
                            ],
                            [
                                "10",
                                "22018",
                                1628932,
                                "A'ja Wilson",
                                1611661319,
                                "Las Vegas",
                                "Aces",
                                "LVA",
                                "F",
                                "22",
                                33,
                                30.6,
                                20.7,
                                7.4,
                                16.1,
                                0.462,
                                0,
                                0,
                                0,
                                5.8,
                                7.5,
                                0.774,
                                2,
                                6,
                                8,
                                2.2,
                                0.82,
                                1.67,
                                1.39,
                                2.06,
                                0.3,
                                0,
                                3
                            ],
                            [
                                "10",
                                "22018",
                                203399,
                                "Elena Delle Donne",
                                1611661322,
                                "Washington",
                                "Mystics",
                                "WAS",
                                "F-G",
                                "11",
                                29,
                                32.2,
                                20.7,
                                7.6,
                                15.6,
                                0.488,
                                1.7,
                                4.2,
                                0.405,
                                3.8,
                                4.3,
                                0.887,
                                1.5,
                                5.8,
                                7.2,
                                2.3,
                                0.9,
                                1.38,
                                0.9,
                                1.69,
                                0.28,
                                0,
                                5
                            ],
                            [
                                "10",
                                "22018",
                                203398,
                                "Brittney Griner",
                                1611661317,
                                "Phoenix",
                                "Mercury",
                                "PHO",
                                "C",
                                "42",
                                34,
                                32.6,
                                20.5,
                                7.8,
                                14.4,
                                0.544,
                                0,
                                0.1,
                                0.25,
                                4.8,
                                6,
                                0.8,
                                1.9,
                                5.9,
                                7.7,
                                2.1,
                                0.5,
                                2.56,
                                2.35,
                                3.24,
                                0.29,
                                0,
                                6
                            ],
                            [
                                "10",
                                "22018",
                                202250,
                                "Tina Charles",
                                1611661313,
                                "New York",
                                "Liberty",
                                "NYL",
                                "C",
                                "31",
                                33,
                                33,
                                19.7,
                                8,
                                16.8,
                                0.473,
                                0.9,
                                2.9,
                                0.326,
                                2.8,
                                3.7,
                                0.77,
                                1.9,
                                5.1,
                                7,
                                2.7,
                                0.73,
                                0.61,
                                2.82,
                                2.55,
                                0.21,
                                0,
                                7
                            ],
                            [
                                "10",
                                "22018",
                                203825,
                                "Kayla McBride",
                                1611661319,
                                "Las Vegas",
                                "Aces",
                                "LVA",
                                "G",
                                "21",
                                31,
                                32.3,
                                18.2,
                                6.4,
                                14.2,
                                0.449,
                                1.5,
                                3.9,
                                0.393,
                                3.9,
                                4.3,
                                0.917,
                                0.8,
                                3.1,
                                3.9,
                                3.5,
                                1.06,
                                0.13,
                                2.03,
                                1.06,
                                0.03,
                                0,
                                8
                            ],
                            [
                                "10",
                                "22018",
                                202632,
                                "Maya Moore",
                                1611661324,
                                "Minnesota",
                                "Lynx",
                                "MIN",
                                "F",
                                "23",
                                34,
                                31.8,
                                18,
                                6.6,
                                15.5,
                                0.423,
                                1.9,
                                5.3,
                                0.365,
                                2.9,
                                3.5,
                                0.833,
                                1.4,
                                3.7,
                                5.1,
                                2.6,
                                1.68,
                                0.35,
                                1.76,
                                1.82,
                                0,
                                0,
                                9
                            ],
                            [
                                "10",
                                "22018",
                                203400,
                                "Skylar Diggins-Smith",
                                1611661321,
                                "Dallas",
                                "Wings",
                                "DAL",
                                "G",
                                "4",
                                32,
                                34.1,
                                17.9,
                                5.8,
                                14.4,
                                0.403,
                                1.6,
                                5.4,
                                0.297,
                                4.7,
                                5.6,
                                0.839,
                                0.7,
                                2.7,
                                3.3,
                                6.2,
                                1.41,
                                0.53,
                                2.53,
                                2.28,
                                0.09,
                                0,
                                10
                            ]
                        ]
                    }
                ]
            },
            playersReb: {
                "resource": "wnbaseasonstats",
                "parameters": {
                    "LeagueID": "10",
                    "Season": "2018",
                    "SeasonType": "Regular Season",
                    "StatCategory": "REB",
                    "PlayerPosition": null,
                    "PlayerExperience": null,
                    "Conference": null,
                    "Location": null,
                    "Outcome": null,
                    "SeasonSegment": null,
                    "LastNGames": null,
                    "LastNDays": null,
                    "Month": null,
                    "VsTeamID": null,
                    "StarterBench": null,
                    "DaysRest": null,
                    "TopX": 10
                },
                "resultSets": [{
                    "name": "WNBAPlayerSeasonStats",
                    "headers": ["LEAGUE_ID", "SEASON_ID", "PLAYER_ID", "PLAYER_NAME", "TEAM_ID", "TEAM_CITY", "TEAM_NAME", "TEAM_ABBREVIATION", "PLAYER_POSITION", "PLAYER_JERSEY_NUM", "GAMES_PLAYED", "MIN", "PTS", "FGM", "FGA", "FG_PCT", "FG3M", "FG3A", "FG3_PCT", "FTM", "FTA", "FT_PCT", "OREB", "DREB", "REB", "AST", "STL", "BLK", "TOV", "PF", "DBL_DBL", "TPL_DBL", "RANK"],
                    "rowSet": [["10", "22018", 201480, "Sylvia Fowles", 1611661324, "Minnesota", "Lynx", "MIN", "C", "34", 34, 32.00000000000000000, 17.700000, 7.000000, 11.300000, 0.619000, 0.000000, 0.000000, 0.000000, 3.800000, 5.000000, 0.757000, 3.600000, 8.300000, 11.900000, 2.200000, 1.440000, 1.240000, 3.030000, 3.030000, 0.650000, 0.000000, 1], ["10", "22018", 202633, "Liz Cambage", 1611661321, "Dallas", "Wings", "DAL", "C", "8", 32, 29.50000000000000000, 23.000000, 8.700000, 14.800000, 0.589000, 0.400000, 1.200000, 0.324000, 5.300000, 7.200000, 0.738000, 2.300000, 7.300000, 9.700000, 2.300000, 0.470000, 1.690000, 2.780000, 2.780000, 0.470000, 0.000000, 2], ["10", "22018", 1627668, "Breanna Stewart", 1611661328, "Seattle", "Storm", "SEA", "F", "30", 34, 31.60000000000000000, 21.800000, 7.900000, 15.000000, 0.529000, 1.800000, 4.300000, 0.415000, 4.100000, 5.100000, 0.820000, 1.100000, 7.200000, 8.400000, 2.500000, 1.350000, 1.440000, 1.790000, 2.030000, 0.260000, 0.000000, 3], ["10", "22018", 201496, "Candace Parker", 1611661320, "Los Angeles", "Sparks", "LAS", "F-C", "3", 31, 30.60000000000000000, 17.900000, 6.400000, 13.500000, 0.471000, 1.300000, 3.800000, 0.345000, 3.800000, 4.700000, 0.808000, 1.600000, 6.500000, 8.200000, 4.700000, 1.230000, 1.060000, 2.970000, 2.100000, 0.420000, 0.000000, 4], ["10", "22018", 203826, "Alyssa Thomas", 1611661323, "Connecticut", "Sun", "CON", "F", "25", 24, 30.60000000000000000, 10.300000, 4.100000, 8.800000, 0.464000, 0.000000, 0.000000, 0.000000, 2.200000, 4.000000, 0.547000, 2.000000, 6.200000, 8.100000, 4.200000, 1.170000, 0.420000, 2.000000, 2.880000, 0.250000, 0.000000, 5], ["10", "22018", 1628932, "A'ja Wilson", 1611661319, "Las Vegas", "Aces", "LVA", "F", "22", 33, 30.60000000000000000, 20.700000, 7.400000, 16.100000, 0.462000, 0.000000, 0.000000, 0.000000, 5.800000, 7.500000, 0.774000, 2.000000, 6.000000, 8.000000, 2.200000, 0.820000, 1.670000, 1.390000, 2.060000, 0.300000, 0.000000, 6], ["10", "22018", 202638, "Jessica Breland", 1611661330, "Atlanta", "Dream", "ATL", "F", "51", 34, 26.40000000000000000, 8.300000, 3.600000, 8.500000, 0.428000, 0.000000, 0.000000, 0.000000, 1.000000, 1.300000, 0.750000, 1.700000, 6.200000, 7.900000, 2.000000, 1.150000, 1.910000, 1.710000, 2.530000, 0.060000, 0.000000, 7], ["10", "22018", 203398, "Brittney Griner", 1611661317, "Phoenix", "Mercury", "PHO", "C", "42", 34, 32.60000000000000000, 20.500000, 7.800000, 14.400000, 0.544000, 0.000000, 0.100000, 0.250000, 4.800000, 6.000000, 0.800000, 1.900000, 5.900000, 7.700000, 2.100000, 0.500000, 2.560000, 2.350000, 3.240000, 0.290000, 0.000000, 8], ["10", "22018", 203823, "Chiney Ogwumike", 1611661323, "Connecticut", "Sun", "CON", "F", "13", 31, 25.50000000000000000, 14.400000, 5.700000, 9.400000, 0.603000, 0.000000, 0.100000, 0.500000, 3.000000, 3.800000, 0.797000, 2.700000, 4.600000, 7.300000, 1.000000, 1.160000, 0.610000, 1.650000, 3.420000, 0.230000, 0.000000, 9], ["10", "22018", 203399, "Elena Delle Donne", 1611661322, "Washington", "Mystics", "WAS", "F-G", "11", 29, 32.20000000000000000, 20.700000, 7.600000, 15.600000, 0.488000, 1.700000, 4.200000, 0.405000, 3.800000, 4.300000, 0.887000, 1.500000, 5.800000, 7.200000, 2.300000, 0.900000, 1.380000, 0.900000, 1.690000, 0.280000, 0.000000, 10]]
                }]
            },
            playersAst: {
                "resource": "wnbaseasonstats",
                "parameters": {
                    "LeagueID": "10",
                    "Season": "2018",
                    "SeasonType": "Regular Season",
                    "StatCategory": "AST",
                    "PlayerPosition": null,
                    "PlayerExperience": null,
                    "Conference": null,
                    "Location": null,
                    "Outcome": null,
                    "SeasonSegment": null,
                    "LastNGames": null,
                    "LastNDays": null,
                    "Month": null,
                    "VsTeamID": null,
                    "StarterBench": null,
                    "DaysRest": null,
                    "TopX": 10
                },
                "resultSets": [
                    {
                        "name": "WNBAPlayerSeasonStats",
                        "headers": [
                            "LEAGUE_ID",
                            "SEASON_ID",
                            "PLAYER_ID",
                            "PLAYER_NAME",
                            "TEAM_ID",
                            "TEAM_CITY",
                            "TEAM_NAME",
                            "TEAM_ABBREVIATION",
                            "PLAYER_POSITION",
                            "PLAYER_JERSEY_NUM",
                            "GAMES_PLAYED",
                            "MIN",
                            "PTS",
                            "FGM",
                            "FGA",
                            "FG_PCT",
                            "FG3M",
                            "FG3A",
                            "FG3_PCT",
                            "FTM",
                            "FTA",
                            "FT_PCT",
                            "OREB",
                            "DREB",
                            "REB",
                            "AST",
                            "STL",
                            "BLK",
                            "TOV",
                            "PF",
                            "DBL_DBL",
                            "TPL_DBL",
                            "RANK"
                        ],
                        "rowSet": [
                            [
                                "10",
                                "22018",
                                202664,
                                "Courtney Vandersloot",
                                1611661329,
                                "Chicago",
                                "Sky",
                                "CHI",
                                "G",
                                "22",
                                30,
                                31.8,
                                12.5,
                                4.5,
                                9.3,
                                0.489,
                                1.5,
                                3.8,
                                0.398,
                                1.9,
                                2.3,
                                0.826,
                                0.5,
                                3.2,
                                3.7,
                                8.6,
                                1.33,
                                0.57,
                                3.47,
                                2.07,
                                0.3,
                                0.03,
                                1
                            ],
                            [
                                "10",
                                "22018",
                                100720,
                                "Sue Bird",
                                1611661328,
                                "Seattle",
                                "Storm",
                                "SEA",
                                "G",
                                "10",
                                31,
                                26.6,
                                10.1,
                                3.7,
                                8,
                                0.466,
                                1.9,
                                4.3,
                                0.448,
                                0.8,
                                0.9,
                                0.828,
                                0.2,
                                1.6,
                                1.7,
                                7.1,
                                1.13,
                                0.06,
                                1.9,
                                1.23,
                                0.16,
                                0,
                                2
                            ],
                            [
                                "10",
                                "22018",
                                203400,
                                "Skylar Diggins-Smith",
                                1611661321,
                                "Dallas",
                                "Wings",
                                "DAL",
                                "G",
                                "4",
                                32,
                                34.1,
                                17.9,
                                5.8,
                                14.4,
                                0.403,
                                1.6,
                                5.4,
                                0.297,
                                4.7,
                                5.6,
                                0.839,
                                0.7,
                                2.7,
                                3.3,
                                6.2,
                                1.41,
                                0.53,
                                2.53,
                                2.28,
                                0.09,
                                0,
                                3
                            ],
                            [
                                "10",
                                "22018",
                                100940,
                                "Diana Taurasi",
                                1611661317,
                                "Phoenix",
                                "Mercury",
                                "PHO",
                                "G",
                                "3",
                                33,
                                30,
                                20.7,
                                6.1,
                                13.7,
                                0.446,
                                3.2,
                                8.4,
                                0.383,
                                5.2,
                                5.6,
                                0.925,
                                0.1,
                                3.4,
                                3.5,
                                5.3,
                                0.91,
                                0.24,
                                2.58,
                                3.03,
                                0.06,
                                0,
                                4
                            ],
                            [
                                "10",
                                "22018",
                                204327,
                                "Brittany Boyd",
                                1611661313,
                                "New York",
                                "Liberty",
                                "NYL",
                                "G",
                                "15",
                                30,
                                20.4,
                                6.4,
                                2.3,
                                5.6,
                                0.414,
                                0.3,
                                0.9,
                                0.37,
                                1.4,
                                1.8,
                                0.774,
                                0.3,
                                3.6,
                                3.9,
                                5.3,
                                1.23,
                                0.1,
                                2.7,
                                2.4,
                                0.03,
                                0,
                                5
                            ],
                            [
                                "10",
                                "22018",
                                203833,
                                "Chelsea Gray",
                                1611661320,
                                "Los Angeles",
                                "Sparks",
                                "LAS",
                                "G",
                                "12",
                                34,
                                32.7,
                                14.9,
                                5.7,
                                11.7,
                                0.484,
                                1.1,
                                2.9,
                                0.392,
                                2.4,
                                2.9,
                                0.835,
                                0.5,
                                2.9,
                                3.4,
                                5.1,
                                1.41,
                                0.18,
                                2.32,
                                1.91,
                                0,
                                0,
                                6
                            ],
                            [
                                "10",
                                "22018",
                                202662,
                                "Jasmine Thomas",
                                1611661323,
                                "Connecticut",
                                "Sun",
                                "CON",
                                "G",
                                "5",
                                34,
                                28.1,
                                12.9,
                                4.7,
                                11.8,
                                0.398,
                                1.4,
                                4.4,
                                0.311,
                                2.1,
                                2.4,
                                0.855,
                                0.8,
                                2.5,
                                3.3,
                                4.8,
                                1.09,
                                0.24,
                                2.5,
                                2.06,
                                0,
                                0,
                                7
                            ],
                            [
                                "10",
                                "22018",
                                201496,
                                "Candace Parker",
                                1611661320,
                                "Los Angeles",
                                "Sparks",
                                "LAS",
                                "F-C",
                                "3",
                                31,
                                30.6,
                                17.9,
                                6.4,
                                13.5,
                                0.471,
                                1.3,
                                3.8,
                                0.345,
                                3.8,
                                4.7,
                                0.808,
                                1.6,
                                6.5,
                                8.2,
                                4.7,
                                1.23,
                                1.06,
                                2.97,
                                2.1,
                                0.42,
                                0,
                                8
                            ],
                            [
                                "10",
                                "22018",
                                204333,
                                "Natasha Cloud",
                                1611661322,
                                "Washington",
                                "Mystics",
                                "WAS",
                                "G",
                                "9",
                                27,
                                26.5,
                                8.6,
                                3.3,
                                7.6,
                                0.436,
                                1.2,
                                3.1,
                                0.386,
                                0.8,
                                1,
                                0.778,
                                0.2,
                                3,
                                3.2,
                                4.6,
                                0.78,
                                0.15,
                                1.67,
                                2,
                                0.04,
                                0,
                                9
                            ],
                            [
                                "10",
                                "22018",
                                201911,
                                "Kristi Toliver",
                                1611661322,
                                "Washington",
                                "Mystics",
                                "WAS",
                                "G",
                                "20",
                                33,
                                32.9,
                                13.9,
                                4.5,
                                10.4,
                                0.433,
                                2.2,
                                6.1,
                                0.36,
                                2.7,
                                2.9,
                                0.918,
                                0.2,
                                2.2,
                                2.3,
                                4.4,
                                1.21,
                                0.03,
                                2.18,
                                1.64,
                                0,
                                0,
                                10
                            ]
                        ]
                    }
                ]
            }
        };
        this.setData();
    }

    setData = () =>{
        const jsonKeys = ['playersPts', 'playersReb', 'playersAst'];
        for (var i in jsonKeys) {
            this.setPlayersStats(jsonKeys[i]);
        }
    }

    componentWillUnmount(){

    }

    componentDidMount(){
        this.setState({loaded: true});
    }

    setPlayersStats = (statsKey) =>{
        let playersArray = [];
        for (let playerKey in this.state[statsKey].resultSets[0].rowSet) {
            var playerObj = {};
            this.state[statsKey].resultSets[0].headers.forEach((key, i) => playerObj[key] = this.state[statsKey].resultSets[0].rowSet[playerKey][i]);
            playersArray.push(playerObj);
        }
        this.state[statsKey.slice(-3).toUpperCase()] = playersArray;
    }

    getPlayersStats = (statsKey) =>{
        return this.state[statsKey];
    }

    setCat = (cat) =>{
        console.log(cat);
        this.setState({statsType: cat});
    }

    getCurrentCat(){
        return this.state.statsType;
    }

    render(){
        return (
            <div>
                {!this.state.loaded ? <div>Loading...</div> :
                    <div className={'side-rail-container side-rail-container_style_has-ad'}>
                        <header className={'side-rail__header'}>
                            <h2 className={'side-rail__title'}>2018 Regular Season Leaders</h2>
                        </header>
                        <div className={'small-12 columns stat__btn-container'}>
                            <div style={{display: 'inline-block'}}>
                                <a href="#" className={'btn btn-traditional active'}>Traditional</a>
                                <a href="#" className={'btn btn-advanced'}>Advanced</a>
                            </div>
                        </div>
                        <div className="side-rail__league-leaders-wrap side-rail__league-leaders-wrap_data_traditional">
                            <ul className="tabs tabs_style_ranking" data-tab="" role="tablist">
                                <li className="tab-title" role="presentation">
                                    <a role="tab" tabIndex="0" aria-selected="true"
                                       onClick={() =>{
                                           this.setCat('PTS')
                                       }}>Points</a>
                                </li>
                                <li className="tab-title" role="tabIndex">
                                    <a role="tab" tabIndex="-1" aria-selected="false"
                                       aria-controls="panel2-2" onClick={() =>{
                                        this.setCat('REB')
                                    }}>Rebounds</a>
                                </li>
                                <li className="tab-title" role="presentation">
                                    <a role="tab" tabIndex="-1" aria-selected="false"
                                       aria-controls="panel2-3" onClick={() =>{
                                        this.setCat('AST')
                                    }}>Assists</a>
                                </li>
                            </ul>
                            <div>
                                {this.state[this.getCurrentCat()].length === 0 ? <div></div> :
                                    <div>
                                        {this.state[this.getCurrentCat()].map((object, i) => <Player listID={i}
                                                                                                     cat={this.getCurrentCat()} {...object}
                                                                                                     key={i}/>)}
                                    </div>
                                }
                            </div>
                            <div className="side-rail__league-leaders league-leaders tabs-content">

                                <section role="tabpanel" aria-hidden="false"
                                         className="league-leaders__category-section content active"
                                         id="panel2-1">

                                    <wnba-league-leaders show="10" footer="true" data-stat="PTS" data-flat="true">
                                        <wnba-league-leaders-list data-show="{{ show }}" data-stat="{{ stat }}"
                                                                  data-footer="{{ footer }}" data-players="players"
                                                                  data-flat="{{ flat }}"></wnba-league-leaders-list>
                                    </wnba-league-leaders>
                                </section>

                                <section role="tabpanel" aria-hidden="true"
                                         className="league-leaders__category-section content"
                                         id="panel2-2" tabIndex="-1">
                                    <wnba-league-leaders show="10" footer="true" data-stat="REB"
                                                         data-flat="true"></wnba-league-leaders>
                                </section>

                                <section role="tabpanel" aria-hidden="true"
                                         className="league-leaders__category-section content"
                                         id="panel2-3" tabIndex="-1">
                                    <wnba-league-leaders show="10" footer="true" data-stat="AST"
                                                         data-flat="true"></wnba-league-leaders>
                                </section>

                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

const rootElement = document.getElementById("leaders");
ReactDOM.render(<App/>, rootElement);
