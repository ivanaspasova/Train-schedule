$(document).ready(function() {
    var config = {
        apiKey: 'AIzaSyC7ogsusWtoQjVBR70hXCL-cNB4Dnuv7zU',
        authDomain: 'trainschedule-e79f8.firebaseapp.com',
        databaseURL: 'https://trainschedule-e79f8.firebaseio.com',
        projectId: 'trainschedule-e79f8',
        storageBucket: 'trainschedule-e79f8.appspot.com',
        messagingSenderId: '215953350852'
    }
    firebase.initializeApp(config)
    var database = firebase.database()

    $('#savetrain').on('click', function(event) {
        event.preventDefault()
        var trainname = $('#trainname').val()
        var destination = $('#destination').val()
        var firsttraintime = $('#firsttraintime').val()
        var frequency = $('#frequency').val()

        var usersInput = {
            trainname: trainname,
            destination: destination,
            firsttraintime: firsttraintime,
            frequency: frequency
        }
        console.log(usersInput)

        database.ref().push(usersInput)
            // you can find the user's input in the Console
    })
})