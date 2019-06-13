import React from 'react';

const ListItem = (props) => {
    return (
        <div className={'cardItemVacancies'}>
            <div className={'vacancy-inner'}>
                <div className={'employer-logo'}>
                    {props.employer.logo_urls ? <img src={props.employer.logo_urls[90]} alt={"Company Logo"} /> : 'No logo'}
                </div>
                <div className={'vacancy-name'}>
                    Вакансия: <span className="vacancy-text">{props.name}</span>
                </div>
                <div className={'employer-name'}>
                    Компания: {props.employer.name}
                </div>
                <div className={'salary-min'}>
                    Зарплата от: {props.salary && props.salary.from ? props.salary.from : '---'}
                </div>
                <div className={'salary-max'}>
                    Зарплата до: {props.salary && props.salary.to ? props.salary.to : '---'}
                </div>
                <div className={'vacancy-city'}>
                    Город: {props.address && props.address.city ? props.address.city : '---'}
                </div>
            </div>
        </div>
    );
}

export default ListItem;