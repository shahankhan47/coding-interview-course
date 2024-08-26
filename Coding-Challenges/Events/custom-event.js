class CustomEvent {
    constructor() {
        this.events = {};
    }

    /**Register an event handler */
    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = []
        }
        this.events[eventName].push(callback);
    }

    /**Trigger an event handler */
    trigger(eventName) {
        if (!this.events[eventName]) {
            console.log(`Event: ${eventName} doesn't exist`);
            return;
        }

        for (let callback of this.events[eventName]) {
            callback();
        }
    }

    /**Remove all event handlers */
    off(eventName) {
        delete this.events[eventName];
    }
}

module.exports = CustomEvent;