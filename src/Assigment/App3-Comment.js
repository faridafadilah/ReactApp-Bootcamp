import React from 'react';
import { faker } from '@faker-js/faker'; // Mengimport faker untuk image random

// Komponen Comment untuk Tampilan Comment menggunakan Semantic UI
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

// Data Array 
const data =  [
        {
            image: faker.image.avatar(),
            name: "Farida",
            date: "Today at 08:00PM",
            content: "Why React JS?"
        },
        {
            image: faker.image.avatar(),
            name: "Fadilah",
            date: "Today at 09:00PM",
            content: "React JS for Front-End is good!"
        },
        {
            image: faker.image.avatar(),
            name: "Dini",
            date: "Today at 10:00PM",
            content: "Nice"
        },
    ];

function App() {
    return (
        <>
        {/* Looping data props */}
            {data.map((e)=>{
                return (
                <Comment image={e.image} name={e.name} date={e.date} content={e.content}/>
                );
            })}
        </>
    );
}


export default App;