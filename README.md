lazyquery - a lazy loader written specifically for jQuery
=========================================================


What does this do?
------------------

Are you tired of having to synchronously download and parse jQuery on every page of your site (causing a visible pag lag)?  Me too!  Especially when you have something like Firebug or are using the development version of jQuery (+150Kb).

Enter lazyquery!  It provides the `$` and `jQuery` globals and a way to queue `function`s until an asynchronous copy of jQuery is loaded.

How do I use this?
------------------

Well, actually you probably shouldn't have to change much at all, but it depends on how you're using jQuery.  If you're wrapping all DOM needed operations in `$()` or `$(document).ready()`, like this:

    <script>
        
        $(function () {
            // do something awesome with jQuery when the DOM is ready!
        });
        
    </script>

you're already done!  Just change the source of the script from jQuery to your copy of lazyquery.js or lazyquery.min.js.  


But what if I want to do something before the DOM is ready?
-----------------------------------------------------------

Well, this is a good question.  I've considered pulling the xhr module from jQuery to be put into this seed file, but also figured you'd probably be able to wait for an async copy to be available before you use `$.ajax` and it's derivatives.