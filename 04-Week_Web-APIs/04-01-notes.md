# Web APIs

## Interface 

An interface is a point of connection / communication between two systems. This could be a doorknob that allows a human to interface with a door.
It could be a vehicle that has a steering wheel, shifter and pedals. In software, an interface is usually a set of methods that a type may implement.

## API

Application Programming Interface

This just means there is other code we can use from our own code. _web APIs_ allow Javascript to _reach out_ to the world, the browser, and interact with things
such as `fetch` data.

When we get to `node` we realize that our _Javascript_ isn't running in the same 'world' anymore so there is no browser, or DOM. _STILL_ Node tries to provide similar APIs. Node
has finally added support for `fetch` and commondJS modules, no more `require()`.
