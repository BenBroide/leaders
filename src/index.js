import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";

import TabNavigation from "./components/tabNavigation"
import Player from "./components/player";

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loaded: false,
            statsType: 'PTS',
            stats: [],
        }
        ;
        this.sortBy = this.sortBy.bind(this);
        this.getCurrentCat = this.getCurrentCat.bind(this);
        this.fetchData();

    }

    fetchData = (cat = 'PTS') =>{
        axios.get(`/wp-json/wp/v2/posts`)
            .then((response) =>{

                var data = [];
                response.data.map( playerObject  => {
                    var objUppercase = Object.keys(playerObject).reduce((n, k) => (n[k.toUpperCase()] = playerObject[k], n), {});
                    data.push(objUppercase);
                });
                this.setState({stats: data, loaded: true});
            })
            .catch((error) =>{
                console.log(error);
            });
    }

    componentWillUnmount(){

    }

    componentDidMount(){

    }

    sortBy = (cat) =>{
        let playerStats = this.state.stats;
        playerStats.sort((b, a) => a[cat].localeCompare(b[cat]));
        this.setState({stats: playerStats, statsType: cat});
    }

    getCurrentCat(){
        return this.state.statsType;
    }

    activeTabLinkStyle = () =>{
        let style = {
            background: 'transparent',
            borderBottom: '3px solid #e75300',
            color: '#fff'
        }
        return style;
    };

    leadersStats = () =>{
        return <div>
            {this.state.stats.length === 0 ? <div></div> :
                <div>
                    {this.state.stats.map((object, i) => <Player listID={i}
                                                                 cat={this.getCurrentCat()} {...object}
                                                                 key={i}/>)}
                </div>
            }
        </div>
    }

    header = () =>{
        return <div>
            <header className={'side-rail__header'}>
                <h2 className={'side-rail__title'}>2018 Regular Season Leaders</h2>
            </header>
            <div className={'small-12 columns stat__btn-container'}>
                <div style={{display: 'inline-block'}}>
                    <a href="#" className={'btn btn-traditional active'}>Traditional</a>
                    <a href="#" className={'btn btn-advanced'}>Advanced</a>
                </div>
            </div>
        </div>
    }


    render(){
        return (
            <div>
                <ReactPlaceholder type='media' showLoadingAnimation={true} rows={20} ready={this.state.loaded}>
                    <div className={'side-rail-container side-rail-container_style_has-ad'}>
                        {this.header()}
                        <div className="side-rail__league-leaders-wrap side-rail__league-leaders-wrap_data_traditional">
                            <TabNavigation sortBy={this.sortBy} getCurrentCat={this.getCurrentCat}/>
                            {this.leadersStats()}
                        </div>
                    </div>
                </ReactPlaceholder>


            </div>
        );
    }
}

const rootElement = document.getElementById("leaders");
ReactDOM.render(<App/>, rootElement);
