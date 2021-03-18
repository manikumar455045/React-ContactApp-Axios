import React from 'react'
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import {IUsers} from "../Models/Users";

interface IProps{

}
interface IState{
user : IUsers
}

class ContactApp extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props);
        this.state = {
            user : {} as IUsers
        }
    }

    receiveUser = (user : IUsers) => {
        this.setState({
            user : user
        })
    }

    render() : React.ReactNode{
        return (
            <React.Fragment>
                <div className="container">
                    <h2>Contact App</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium adipisci amet delectus dolor et in incidunt laboriosam, mollitia omnis praesentium quos repellat reprehenderit suscipit vel veniam veritatis vitae. Modi.</p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <ContactList receiveUser = {this.receiveUser}/>
                        </div>
                        <div className="col-md-4">
                            <ContactDetail user = {this.state.user}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}
export default ContactApp;