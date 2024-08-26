const CustomEvent = require('./custom-event');

const event = new CustomEvent();

event.on('click', () => {
    console.log("Event Clicked 1");
})

event.on('click', () => {
    console.log("Event Clicked 2");
})

event.on('hover', () => {
    console.log("Event Hovered");
})

event.trigger('click');
event.trigger('hover');
event.off('hover');
event.trigger('hover');