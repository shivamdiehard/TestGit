(function ($) {
    $(document).ready(function() {

        var btn= '<button class="btn btn-sm btn-outline-primary" id="startTourBtnh"><span class="icon-trash"></span>Tour-Boot</button>';
        $('#toolbar').append(btn);

        var tour = new Tour({
            storage : false
        });

        tour.addSteps([
            {
                element: "#container-collapse",
                placement: "bottom",
                title: "Welcome to our landing page!",
                content: "This tour will guide you through some of the features we'd like to point out."
            }
            // {
            //     element: ".two",
            //     placement: "bottom",
            //     title: "Main navigation",
            //     content: "Here are the sections of this page, easily laid out."
            // },

        ]);
        // var tour = {
        //     id: 'hello-hopscotch',
        //     steps: [
        //         {
        //             target: '#toolbar',
        //             title: 'Welcome to Hopscotch!',
        //             content: 'Hey there! This is an example Hopscotch tour. There will be plenty of time to read documentation and sample code, but let\'s just take some time to see how Hopscotch actually works.',
        //             placement: 'bottom',
        //             arrowOffset: 60
        //         }
        //     ]
        // };
        //
        $("#startTourBtnh").click(function(){
alert("in alert box")
            tour.start();
            e.preventDefault();


        });
    });

}(jQuery));