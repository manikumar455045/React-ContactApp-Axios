import React from 'react'
import {IUsers} from "../Models/Users";

interface IProps{
user : IUsers
}
interface IState{

}

class ContactDetail extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props);
        this.state = {

        }
    }

    render() : React.ReactNode{
        let {user} = this.props;
        return (
            <React.Fragment>{
                Object.keys(user).length > 0 &&
                <div className="card">
                    <div className="card-header bg-dark p-5"></div>
                    <div className="card-body text-center">
                        <img src={user.picture.large} className="img-thumbnail rounded-circle contact-img" alt=""/>
                        <div className="list-group mt-2">
                            <div className="list-group-item">Name : {user.name.title} {user.name.first} {user.name.last}</div>
                            <div className="list-group-item">Gender : {user.gender}</div>
                            <div className="list-group-item">Username : {user.login.username}</div>
                            <div className="list-group-item">Age : {user.dob.age}</div>
                            <div className="list-group-item">Phone Number : {user.phone}</div>
                        </div>
                    </div>
                </div>
            }
            </React.Fragment>
        );
    }

}
export default ContactDetail;