# Provide the Service

You must make the `HeroService` available to the dependency injection system before Angular can *inject* it into the `HeroesComponent` by registering a *provider*. A provider is something that can create or deliver a service; in this case, it instantiates the `HeroService` class to provide the service.

To make sure that the `HeroService` can provide this service, register it with the *injector*, which is the object that is responsible for choosing and injecting the provider where the app requires it.

By default, the Angular CLI command `ng generate service` registers a provider with the *root injector* for your service by including provider metadata, that is `providedIn: 'root'` in the `@Injectable()` decorator.

```typescript

      @Injectable({  providedIn: 'root', })    
```

When you provide the service at the root level, Angular creates a single, shared instance of `HeroService` and injects into any class that asks for it. Registering the provider in the `@Injectable` metadata also allows Angular to optimize an app by removing the service if it turns out not to be used after all.

# HttpClient 

All `HttpClient` methods return an RxJS `Observable` of something.

HTTP is a request/response protocol. You make a request, it returns a single response.

In general, an observable *can* return multiple values over time. An observable from `HttpClient` always emits a single value and then completes, never to emit again.

This particular `HttpClient.get()` call returns an `Observable<Hero[]>`; that is, "*an observable of hero arrays*". In practice, it will only return a single hero array.

### `HttpClient.get()` returns response data

`HttpClient.get()` returns the body of the response as an untyped JSON object by default. Applying the optional type specifier, `<Hero[]>` , adds TypeScript capabilities, which reduce errors during compile time.

The server's data API determines the shape of the JSON data. The *Tour of Heroes* data API returns the hero data as an array.



# Observable

1. **Observables are lazy**
   You could think of lazy observables as newsletters. For each subscriber a  new newsletter is created. They are then only send to those people, and  not to anyone else.

2. **Observables can have multiple values over time**
   Now if you keep that subscription to the newsletter open, you will get a  new one every once and a while. The sender decides when you get it but  all you have to do is just wait until it comes straight into your inbox.

3.  **Observables are cancelable.** 

    If you don’t want your newsletter anymore, you unsubscribe. With  **promises** this is different, you can’t cancel a promise. If the promise  is handed to you, the process that will produce that promise’s  resolution is already underway, and you generally don’t have access to  prevent that promise’s resolution from executing.



**Pull**

When pulling, the data consumer  decides when it get’s data from the data producer. The producer is  unaware of when data will be delivered to the consumer.

**Push**

Promises are the most common way of push in JavaScript today. A promise (the  producer) delivers a resolved value to registered callbacks (the  consumers), but unlike functions, it is the promise which is in charge  of determining precisely when that value is “pushed” to the callbacks.

Observables are a new way of pushing data in JavaScript. An observable is a  Producer of multiple values, “pushing” them to subscribers.

## Creating an observable yourself

```javascript
import { Observable } from "rxjs/Observable"

// create observable
const simpleObservable = new Observable((observer) => {
    
    // observable execution
    observer.next("bla bla bla")
    observer.complete()
})

// subscribe to the observable
simpleObservable.subscribe()

// dispose the observable
simpleObservable.unsubscribe()
```

**Subscribing to observables
**Remember,  observables are lazy. If you don’t subscribe nothing is going to happen. It’s good to know that when you subscribe to an observer, each call of `subscribe()` will trigger it’s own independent execution for that given observer.

On the parameter that was given when creating the observable there are  three functions available to send data to the subscribers of the  observable:

- “next”: sends any value such as Numbers, Arrays or objects to it’s subscribers.
- “error”: sends a Javascript error or exception
- “complete”: does not send any value.

Calls of the next are the most common as they actually deliver the data  to it’s subscribers. During observable execution there can be an  infinite calls to the `observer.next()`, however when `observer.error()` or `observer.complete()` is called, the execution stops and no more data will be delivered to the subscribers.

**Disposing observables
**Because observable execution can run for an infinite amount of time, we need a  way to stop it from executing. Since each execution is run for every  subscriber it’s important to not keep subscriptions open for subscribers that don’t need data anymore, as that would mean a waste of memory and  computing power.

When you subscribe to an observable, you get back a subscription, which represents the ongoing execution. Just call `unsubscribe()`to cancel the execution.