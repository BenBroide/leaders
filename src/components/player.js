import React from 'react';
import Style from 'style-it';

const Player = ({ listID, cat , PLAYER_NAME, TEAM_ABBREVIATION, PLAYER_POSITION, PLAYER_JERSEY_NUM, PLAYER_ID, RANK, PTS, REB, AST }) =>{
    const positionKeys = {C: 'CENTER', F: 'FRONT', G: 'GUARD'};
    let rankStyle = {
        color: '#999',
        display: 'inline-block',
        float: 'left',
        fontSize: '1.75rem',
        fontWeight: 'normal',
        lineHeight: '1',
        margin: '1.25rem 15px 0 -15px'
    };

    let statsValue = '';
    switch ( cat ) {
        case 'PTS' :
            statsValue = PTS;
            break;
        case 'REB':
            statsValue = REB;
            break;
        case 'AST':
            statsValue = AST;
    }

    return <div className="player-stat-card player-stats-list__player-stat-card">
        <a href={`https://www.wnba.com/player/${PLAYER_NAME.toLowerCase().replace(' ', '-')}`}>
            <Style>
                {`
                                .player-stat-card__player-info:before {
                                    color: #999;
                                    content: '';
                                    counter-increment: rank;
                                    display: inline-block;
                                    float: left;
                                    font-size: 1.75rem;
                                    font-weight: normal;
                                    line-height: 1;
                                    margin: 1rem 15px 0px -15px;
                                    padding-left: 20px;
                                }
                             `}
                <div className="player-info player-stat-card__player-info">
                    <div style={rankStyle}>{listID+1}</div>
                    <div className="player-info__headshot">
                    <span className="headshot_shape_roundlet">


<div className="player-headshot">
                                <img className="player-headshot__image"
                                     src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/wnba/${PLAYER_ID}.png`}/>
                            </div>

                    </span>
                    </div>
                    <div className="player-info__name">{PLAYER_NAME}</div>
                    <span className="player-info__team">{TEAM_ABBREVIATION}</span>
                    <span className="player-info__position">{positionKeys[PLAYER_POSITION]}</span>
                    <span className="player-info__number">{PLAYER_JERSEY_NUM}</span>
                </div>
            </Style>


            <div className="player-stat-card__stat">{statsValue}</div>
        </a>
    </div>

};
export default Player;