import React from 'react'
import Navigation from './Navigation';
import { Navigate } from 'react-router-dom';
import { EmailList } from '../features/emaillist/EmailList';
import { Addemail } from '../features/addemail/AddNewEmail';

const Welcome = ({ data }) => {

    if (data.length == 0) {
        return < Navigate to="/" />
    }

    return (
        <div>
            <Navigation />
            <section className="welcome welcome--wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            {data.map((user, index) => {
                                return (
                                    <div className="userData" key={index}>
                                        <h1>{`Hi, greeting ${user.fullname} :)`}</h1>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <EmailList />
                    <Addemail />
                </div>
            </section>
        </div>
    )
}

export default Welcome