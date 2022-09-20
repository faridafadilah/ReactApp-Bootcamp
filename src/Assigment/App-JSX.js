import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Mengimport Bootstrap
import './App.css'; // Mengimport File Css

// Function Input untuk menerima nilai dari App
function Input(props) {
    return (
        <div>
            <h5>
                Nama : {props.name}
            </h5>
            <h5>
                Pekerjaan : {props.job}
            </h5>
            <hr />
        </div>
    );
}

function App() {
    return (
        <>
        {/* Memanggil Function Input */}
            <Input name="Farida" job="Programmer" />
            <Input name="Dini" job="Doctor" />
            <Input name="Tiara" job="Casir" />
        </>
    );
}


export default App;