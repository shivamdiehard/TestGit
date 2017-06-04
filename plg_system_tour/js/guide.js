var tour = {
    id: 'hello-hopscotch',
    steps: [
        {
            target: 'toolbar',
            title: 'Welcome to Hopscotch!',
            content: 'Hey there! This is an example Hopscotch tour. There will be plenty of time to read documentation and sample code, but let\'s just take some time to see how Hopscotch actually works.',
            placement: 'bottom'
        }
    ]
};/*,
    addClickListener = function(el, fn) {
        if (el.addEventListener) {
            el.addEventListener('click', fn, false);
        }
        else {
            el.attachEvent('onclick', fn);
        }
    },
    init = function() {
        var startBtnId = 'startTourBtn',
            calloutId = 'startTourCallout',
            mgr = hopscotch.getCalloutManager(),
            state = hopscotch.getState();

        addClickListener(document.getElementById(startBtnId), function() {
            alert("Hello! I am an alert box!!");
            if (!hopscotch.isActive) {
                alert("Hello! I am an alert box!!");
                mgr.removeAllCallouts();
                hopscotch.startTour(tour);
            }
        });
    };

init();*/
hopscotch.startTour(tour);