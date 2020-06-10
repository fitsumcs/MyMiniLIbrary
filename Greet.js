// Exposing code in a safe manner 
(function(global,$)
{

    // 'new' an object is created without using the keyword 
    var Greet = function(firstname, lastname, language) {

            return new Greet.init(firstname, lastname, language);
       }

    // All the varibales are hidden within the scope of the IIFE and never directly accessible
       var langs = ['en', 'am']   

     // informal greetings
       var greetings = 
    {
         en: 'Hi There ', 
         am: 'Endate Nek '

    };

     // formal greetings
    var formalGreeting = {
        en: "Greetings", 
        am: "Selam Leant Yehune"

    };

    // logger messages
    var loged = {
        en: "Loggin In", 
        am: "Tedergwale"

    };

     // prototype holds methods (to save memory space) 
    Greet.prototype = {  
            
        // 'this' refers to the calling object at execution time  
        fullName: function()
          {
              return this.firstname + ' ' + this.lastname;
          },
          // check that is a valid language
            // references the externally inaccessible 'supportedLangs' within the closure
          validateLan : function()
          {
              if(langs.indexOf(this.language) === -1) 
              {
                 throw "Invalid Language";
              }
          },
          // retrieve messages from object by referring to properties using [] syntax
          informalGreeting: function()
          {
             return greetings[this.language] + ' ' + this.firstname + '!';
          },
          formalGreeting: function()
          {
             return formalGreeting[this.language] + ', ' + this.fullName();
          },
          // chainable methods return their own containing object
          greet: function(formal)
          {
            var message; 
            // if undefined or null it will be coerced to 'false'
            if(formal)
            {
                message = this.formalGreeting();
            }
            else{
                message = this.informalGreeting();
            }

            if(console)
            {
                console.log(message);
            }
              // 'this' refers to the calling object at execution time
            // makes the method chainable
             return this;


          },
          log:function()
          {
              if(console)
              {
                  console.log(loged[this.language] + ':' + this.fullName());
              }
              // make chainable
                return this;
            },
            setLanguage: function(lang)
            {
                // set the language
                this.language = lang;
                // validate
                this.validateLan();
                // make chainable
                return this;
            },
            HTMLGreeting: function(selector, formal)
            {
                
             if(!$)
             {
                 throw "Jquery not loaded ...";
             }
             if(!selector)
             {
                 throw "Missing Jquery Selector...";
             }
             var msg;
             if(formal)
             {
                 msg = this.formalGreeting();
             }
             else{
                 msg = this.informalGreeting();
             }
                
             $(selector).html(msg)

              return this;

            },
           





     };  

      // the actual object is created here, allowing us to 'new' an object without calling 'new'
     Greet.init = function(firstname, lastname, language)
     {
        var self = this;

        // Making a default value 
        self.firstname = firstname || '';
        self.lastname = lastname || '';
        self.language = language || 'en';


     }
// trick borrowed from jQuery so we don't have to use the 'new' keyword
     Greet.init.prototype = Greet.prototype;
 // attach our Greetr to the global object, and provide a shorthand '$G' for ease our poor fingers
     global.Greet = global.G$ = Greet;

}
)(window,$);