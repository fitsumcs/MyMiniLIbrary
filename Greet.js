// Exposing code in a safe manner 
(function(global,$)
{

    var Greet = function(firstname, lastname, language) {

            return new Greet.init(firstname, lastname, language);
       }

    var langs = ['en', 'am']   

    var greetings = 
    {
         en: 'Hi There ', 
         am: 'Endate Nek '

    };

    var formalGreeting = {
        en: "Greetings", 
        am: "Selam Leant Yehune"

    };
    var loged = {
        en: "Loggin In", 
        am: "Tedergwale"

    };

     Greet.prototype = {  
            
          fullName: function()
          {
              return this.firstname + ' ' + this.lastname;
          },
          validateLan : function()
          {
              if(langs.indexOf(this.language) === -1) 
              {
                 throw "Invalid Language";
              }
          },
          informalGreeting: function()
          {
             return greetings[this.language] + ' ' + this.firstname + '!';
          },
          formalGreeting: function()
          {
             return formalGreeting[this.language] + ', ' + this.fullName();
          },
          greet: function(formal)
          {
            var message; 
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
              
             return this;


          },
          log:function()
          {
              if(console)
              {
                  console.log(loged[this.language] + ':' + this.fullName());
              }
                return this;
            },
            setLanguage: function(lang)
            {
                this.language = lang;
                this.validateLan();
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