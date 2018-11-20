import React from 'react';

const ListItem = (props) => {
    return <div className={'cardItemVacancies'}>
                <p className={'employer-logo'}>
                    {props.employer.logo_urls ? <img src={props.employer.logo_urls[90]} alt={"Company Logo"} /> : 'No logo' }
                </p>
                <p className={'vacancy-name'}>
                    Вакансия: <span className="vacancy-text">{props.name}</span>
                </p>
                <p className={'employer-name'}>
                    Компания: {props.employer.name}
                </p>
                <p className={'salary-min'}>
                    Зарплата от: {props.salary && props.salary.from ? props.salary.from : '---'}
                </p>
                <p className={'salary-max'}>
                    Зарплата до: {props.salary && props.salary.to ? props.salary.to : '---'}
                </p>
                <p className={'vacancy-city'}>
                    Город: {props.address && props.address.city ? props.address.city : '---' }
                </p>
           </div>
}

export default ListItem;