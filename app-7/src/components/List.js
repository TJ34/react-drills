import React from 'react';
import Todo from './Todo';

export default function List(props) {
    let list = props.tasks.map((element, i) => {
        return (
           <p key={i}>{element}</p>
        )
    })

    return (
        <div>
            {list}
        </div>
    )
}