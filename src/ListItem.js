import React from 'react';

const ListItem = (props) => {
    return <h4>{props.name}
               {props.employer.logo_urls ? <img src={props.employer.logo_urls[90]} alt={"logo of company"} /> : 'SOME DATA DOES NOT EXIST' }
               {props.employer.name}
               {props.salary ? props.salary.from : 'No information on salary'}
           </h4>
}

export default ListItem;