import React from 'react';
import { faker } from '@faker-js/faker'; // Import faker for image random

// menggunakan Comment dengan Semantic UI
function Comment(props) {
    return (
       <div className='ui container comments'>
        <div className='comment'>
            <a href='/' className='avatar'>
                <img alt='avatar' src={props.image} />
            </a>
            <div className='content'>
                <a href='/' className='author'>
                    {props.name}
                </a>
                <div className='metadata'>
                    <span className='date'>{props.date}</span>
                </div>
                <div className='text'>{props.content}</div>
            </div>
        </div>
       </div>
    );
}

// Pemanggilan Komponen
function App() {
    return (
        <>
            <Comment image={faker.image.avatar()} name="Farida" date="Today at 08:00PM" content="Why React JS?" />
            <Comment image={faker.image.avatar()} name="Fadilah" date="Today at 09:00PM" content="React JS for Front-End is good!" />
            <Comment image={faker.image.avatar()} name="Tiara" date="Today at 10:00PM" content="Nice" />
        </>
    );
}


export default App;