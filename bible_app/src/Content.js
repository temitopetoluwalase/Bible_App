import React from 'react';
import './Content.css';

function Content(props) {
    const Items = props.Items;
    const Content = Items.map(item => 
        {
            return <div className="lists" value={item} key={item.toString()}>
                <textarea type="text" className="form-control">{item.content}</textarea>
            </div>
        })
    return(
        <div>{Content}</div>
    )
}

export default Content;