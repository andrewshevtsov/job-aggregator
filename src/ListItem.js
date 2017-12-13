import React from 'react';

const ListItem = (props) => {
    return <h4>{props.name}
               {props.employer.logo_urls ? <img src={props.employer.logo_urls[90]} /> : 'SOME DATA DOES NOT EXIST' }
               {props.employer.name}
               {/*{props.salary.from ? props.salary.from : 'SALARY DOES NOT EXIST'}*/}
           </h4>
}

export default ListItem;