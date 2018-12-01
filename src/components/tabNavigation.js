import React from 'react';


const TabNavigation = ( props ) =>{
      return <div>
        <ul className="tabs tabs_style_ranking" data-tab="" role="tablist">
            <li className={ props.getCurrentCat() === 'PTS' ? 'tab-title active' : 'tab-title'}
                role="presentation">
                <a role="tab" tabIndex="0" aria-selected="true"
                   onClick={() =>{
                       props.sortBy('PTS')
                   }}>Points</a>
            </li>
            <li className={props.getCurrentCat() === 'REB' ? 'tab-title active' : 'tab-title'}
                role="tabIndex">
                <a role="tab" tabIndex="-1" aria-selected="false"
                   aria-controls="panel2-2" onClick={() =>{
                    props.sortBy('REB')
                }}>Rebounds</a>
            </li>
            <li className={props.getCurrentCat() === 'AST' ? 'tab-title active' : 'tab-title'}
                role="presentation">
                <a role="tab" tabIndex="-1" aria-selected="false"
                   aria-controls="panel2-3" onClick={() =>{
                    props.sortBy('AST')
                }}>Assists</a>
            </li>
        </ul>
    </div>

};
export default TabNavigation;