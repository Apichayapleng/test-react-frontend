# 03 - ES2015+

# 3.1

You are tasked to measure the processing time for a request and publish the measurement to a tracker.

Definitions of Data Type used in code example.
```
Middleware {
    preProcess {
        register() {} // register a callback that will be called when request is about to be processed.
    }
    postProcess {
        register() {} // register a callback that will be called when response is about to be sent.
    }
}

Timer {
    mark() {} // mark a point in time
    measure() {} // measure duration from when mark() is called to when measure() is called in ms.
}

req : HTTP Request (is immutable, cannot be modified)
res : HTTP Response (is immutable, cannot be modified)
```


Code Example
```
Middleware.preProcess.register((req, ctx) => {
    ctx.timer = timer.mark()
})
```

```
Middleware.postProcess.register((res, ctx) => {
    Tracker.trackProcessingTime(ctx.timer.measure())
})
```

Can you spot the problem ?

# 3.2

You are tasked to update the implementation of a function `findMax` to allow finding maximum of at most 5 numbers.  
Given that `findMax` is used throught the project WITHOUT type system.

Current Implementation

```
function findMax(a, b) {
    return Math.max(a, b)
}
```

Updated use cases

```
findMax(1, 2) // 2
findMax(1, 2, -1) // 2
findMax(1, 3, 4, 0) // 4
findMax(0, -1, -2, 0, -2) // 0
```