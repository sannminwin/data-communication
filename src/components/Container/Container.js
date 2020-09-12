import React, { useState } from 'react';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';

const Container = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const toggleLogin = (state) => {
        setIsLoggedIn(state);
    }
    const user = {
        name: "Michael",
        profileUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRIJw9ySHbAVA-uoPm3ewvMErusrZ6x4AY5OQ&usqp=CAU"
    }
    console.log(isLoggedIn);
    return (
        <div>
            <Header 
                user={user} 
                loggedIn={isLoggedIn}
                toggleLogin={toggleLogin}/>
            <Content />
            <Footer />
        </div>
    )
}

export default Container;