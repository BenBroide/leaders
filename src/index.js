import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Player from "./components/player";

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loaded: false,
            statsType: 'PTS',
            playersPts: {},
            playersReb: {},
            playersAst: {},
            PTS: [],
            REB: [],
            AST: [],
        }
        ;
        this.fetchData();

    }

    fetchData = ( cat = 'PTS' ) => {
        
        axios.get(`/wp-json/wnba/v1/stats?cat=${cat}`)
            .then( (response) => {
                console.log(response);

                if( cat === 'PTS' ){
                    this.state.playersPts = response.data ;
                }
                if( cat === 'REB' ){
                    //this.state. = response.data ;
                    this.setState( { playersReb : response.data });
                }
                if( cat === 'AST' ){
                    //this.state.playersAst = response.data ;
                    this.setState( { playersAst : response.data });
                }
                this.setData( cat );
                this.setState ( {loaded : true } );
            })
            .catch( (error) => {
                console.log(error);
            });
    }

    setData = (cat ) =>{
        const jsonKeys = { PTS : 'playersPts', REB : 'playersReb', AST: 'playersAst' };
        this.setPlayersStats(jsonKeys[cat]);
    }

    componentWillUnmount(){

    }

    componentDidMount(){
        //this.setState({loaded: true});
    }

    setPlayersStats = (statsKey) =>{
        let playersArray = [];
        for (let playerKey in this.state[statsKey].resultSets[0].rowSet) {
            var playerObj = {};
            this.state[statsKey].resultSets[0].headers.forEach((key, i) => playerObj[key] = this.state[statsKey].resultSets[0].rowSet[playerKey][i]);
            playersArray.push(playerObj);
        }
        let cat = statsKey.slice(-3).toUpperCase();
        if( 'PTS' == cat ){
            this.state[cat] = playersArray;
        } else {
            this.setState({ [cat] : playersArray });
        }

    }

    getPlayersStats = (statsKey) =>{
        return this.state[statsKey];
    }

    setCat = (cat) =>{
        this.setState({statsType: cat});
        this.fetchData( cat );
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
