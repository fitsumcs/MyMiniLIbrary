// Exposing code in a safe manner 
(function(global,$)
{

    var Greet = function(firstname, lastname, language) {

            return new Greet.init(firstname, lastname, language);
       }

     Greet.prototype = {  };  

     Greet.init = function(firstname, lastname, language)
     {
        var self = this;

        // Making a default value 
        self.firstname = firstname || '';
        self.lastname = lastname || '';
        self.language = language || 'en';


     }

     Greet.init.prototype = Greet.prototype;
     
     global.Greet = global.G$ = Greet;

}
)(window,$);