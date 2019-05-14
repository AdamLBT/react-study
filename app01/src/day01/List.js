import React from 'react';
import './List.css'

function List(props){
    // alert(JSON.stringify(props));
    let {data} = props;
    return (
        <ul className="list">
            {
                data.map((item,index) => <li key={index}>{item}</li>)
                /*
                data.map(function(item){
                    return <li>{item}</li>
                })
                */
            }
        </ul>
    );
}
export default List;