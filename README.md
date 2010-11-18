lazyquery - a lazy loader written specifically for jQuery
=========================================================


What's the problem?
-------------------

Are you tired of having to synchronously download and parse jQuery on every page of your site (causing a visible pag lag)?  Me too!  Especially when using Firebug in strict mode with the development version of jQuery, you can see a large blocking of the UI thread while having to parse 179 KB of JavaScript.

What does this do?
------------------

Enter lazyquery!  It provides the `$` and `jQuery` globals to queue `function`s until an asynchronous copy of jQuery is loaded.

How do I use this?
------------------

Well, actually you probably shouldn't have to change much at all, but it depends on how you're using jQuery.  If you're wrapping all DOM needed operations in `$()` or `$(document).ready()`, like this:

    <script>
        
        $(function () {
            // do something awesome with jQuery when the DOM is ready!
        });

        $(document).ready(function () {
            // I'm old-school but safer!
        });
        
    </script>

you're already done!  Just change the source of the script from jQuery to your copy of lazyquery.js or lazyquery.min.js.  


But what if I want to do something before the DOM is ready?
-----------------------------------------------------------

Well, this is a good question.  I've considered putting jQuery's [ajax](https://github.com/jquery/jquery/blob/master/src/ajax.js) or [core](https://github.com/jquery/jquery/blob/master/src/core.js) into lazyquery, but they're kinda big and duplicate code and I'm ... well lazy.  I also figured you'd probably be able to wait for the asynchronous copy to be available before you use `$.ajax` or `$.each` (in the spirit of progressive enhancement), but let me know if this is not the case.

What if I want to use my own version of jQuery, not Google's?
-------------------------------------------------------------

All you have to do to change where lazyquery looks for jQuery is change 1 variable!

    <script>
        
        // change this before the end of the document!
        $.jqueryurl = '/my/copy/of/jquery.js';

        $(function () {
            // do something awesome with jQuery when the DOM is ready!
        });
        
    </script>

What if I want to use jQuery plug-ins that require $.extend or $.fn?
--------------------------------------------------------------------

I'm working on this.