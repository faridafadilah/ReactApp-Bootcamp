import React from "react";

class Clock extends React.Component {
    constructor(props){
        super(props);
        // Menginisialisasikan Waktu Saat ini
        this.state = {
            date: new Date()
        }
    }
    //Method LifeCycle yang berjalan ketika komponen sudah di render 
    // Menjalankan Method tick()
    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
            1000
        );
    }
    //Method LifeCycle untuk Menghapus Interval sebelumnya
    componentWillUnmount() {
        clearInterval(this.timerId);
    }
    //Method tick() ini untuk Memberikan waktu yang baru
    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                {/* Menampilkan Time Waktu */}
                <h1>Time:  {this.state.date.toLocaleTimeString()}.</h1>
            </div>
        )
    }
}

export default Clock;