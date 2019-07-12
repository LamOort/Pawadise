import React, { Component } from 'react';
import callApi from '../../utils/callApi';

class ProfilePage extends Component {
    componentDidMount(){
        callApi('users/me','GET',null).then(res=>{
            console.log(res);            
        })
    }
    render() {
        return (
            <div>
                <h1>this is profile page</h1>
            </div>
        );
    }
}

export default ProfilePage;