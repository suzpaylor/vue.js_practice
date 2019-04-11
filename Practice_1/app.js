const helloWorld = new Vue({
    el: '#helloVue', //element which element to attach html to
    data: {
        //the data is an object define which data to connect
        title: "HELLO WORLD!!!!!",
        message: "This is my first vue template!"
    }
});

//pass in an object

const example = new Vue({
    el: '#example', //element which element to attach html to
    data: {
        //the data is an object define which data to connect
        title: "Dude",
        message: "Hello cat person",
        name: "Suzanne",
        img: {
            src:'https://placeimg.com/200/200/animals',
            alt: 'Place holder image'
        }
    }
});

//pass in an object