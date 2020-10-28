import React from 'react';
import './listitem.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function Listitems(props) {
    const Items = props.Items;
    const listItems = Items.map(item => 
        {
            return <div className="list" key="item.key">
                <p>{item.text}</p>
                <span>
                    <FontAwesomeIcon className="faicons" icons='sign-in-alt'/>
                </span>
            </div>
        })
    return(
        <div>{listItems}</div>
    )
}

export default Listitems;