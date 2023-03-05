
import './ListItem.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Listitem(props) {
    const Items = props.items;
    const ListItems = Items.map((item) => {
        return<div className='List' key="item.key">
            <p>
                <input type="text" id={item.key} value={item.text}
                    onChange={
                        (e) => { props.setUpdate(e.target.value, item.key) }
                    }
                />
                <span> <FontAwesomeIcon icon="fa-solid fa-trash"
                    onClick={() => props.deleteItem(item.key)} />
                </span>
            </p>
        </div>

                })
    return <div>{ListItems}</div>

}

export default Listitem;

