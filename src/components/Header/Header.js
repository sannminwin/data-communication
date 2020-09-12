import React from 'react';

const Header = (props) => {
    console.log(props);
    const { user,  loggedIn, toggleLogin } = props;

    const setLogin = () => {
        toggleLogin(true);
        // alert('logging out')
    }
    return (
        <div style={{border: '1px solid grey', padding: '16px'}}> 
        <span> <img width="32px" src={user.profileUrl} /></span>
        <span> {user.name} </span>

        {(loggedIn &&
            <button onClick={() => toggleLogin(false)} style={{float: 'right', cursor: 'pointer'}}>
            Logout
            </button>
        )}

        {(!loggedIn &&
            <button onClick={() => toggleLogin(true)} style={{float: 'right', cursor: 'pointer'}}>
            Login
        </button>
        )}
        </div>
    )
}

export default Header;