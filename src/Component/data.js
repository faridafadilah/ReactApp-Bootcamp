import { faker } from '@faker-js/faker'; // Mengimport faker untuk image random
// Data Array 

const dataArray =  [
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

export default dataArray;