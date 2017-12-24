import React from 'react';

const ListItem = (props) => {
    return <div className={'cardItemVacancies'}>
                <h4>
                    <span className={'vacanci-name'}>
                        {props.name}
                    </span>
                    <span className={'employer-logo'}>
                        {props.employer.logo_urls ? <img src={props.employer.logo_urls[90]} alt={"logo of company"} /> : 'No information on logo' }
                    </span>
                    <span className={'employer-name'}>
                        {props.employer.name}
                    </span>
                    <span className={'salary'}>
                        {props.salary && props.salary.from ? props.salary.from : '---'}
                    </span>
                    <span className={'salary'}>
                        {props.salary && props.salary.to ? props.salary.to : '---'}
                    </span>
                </h4>
           </div>
}

export default ListItem;