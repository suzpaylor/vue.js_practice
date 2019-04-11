const book = new Vue({
    el: '#book',
    data: {
        title: 'The Sirens of Titan',
        author: 'Kurt Vonnegut',
        summary: 'This is a summary of the Sirens of Titan.',
        showDetail: false
    }
});

//click even triggors a method - then vue hides or shows the details based
//on true or false
//showDetail...
//organize different types of your code!
//events in vue - accept JS expressions, you can actually place it into the click
//directive