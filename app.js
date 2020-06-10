var g = G$('firstname', 'lastname');
g.greet().setLanguage('am').greet(true);

// let's use our object on the click of the login button
$('#login').click(function() {
   
    // create a new 'Greetr' object (let's pretend we know the name from the login)
    var loginGrtr = G$('Fitsum', 'Alemu');
    
     // hide the login on the screen
    $('#logindiv').hide();
    
     // fire off an HTML greeting, passing the '#greeting' as the selector and the chosen language, and log the welcome as well
    loginGrtr.setLanguage($('#lang').val()). HTMLGreeting('#greeting', true).log();
    
});