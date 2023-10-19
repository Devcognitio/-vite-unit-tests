

interface Event {
    name: string; 
    callback: Function;
    opt_scope: any;
}

export const EventDispatcher: { [key: string]: any} = {

    addEventListener: function (name: string, callback: Function, opt_scope: any) {

        if(!this.events){
            this.events = [];
        }

        (this.events as Array<Event>).push({
            name,
            callback,
            opt_scope,
        });

    },
    dispatchEvent: function (name: string) {

        (this.events as Array<Event>).forEach((event) => {
            if(event.name === name){
                event.callback.bind(event.opt_scope)();
            }
        });

    },
    removeEventListener: function (name: string, callback: Function) {
        this.events =( this.events as Array<Event>).filter((event)=> !(event.name === name && event.callback === callback));
    },
    hasListenerFor: function( name: string ) {
        return (this.events as Array<Event>).some((event: Event)=> event.name === name);
    },
    hasCallbackFor: function(name: string, callback: Function){
        return (this.events as Array<Event>).some((event: Event)=> event.name === name && event.callback === callback);

    },
    mixin: function (obj: any) {

        for (const key in EventDispatcher) {
            obj[key] = EventDispatcher[key]; 
        }

    }
}