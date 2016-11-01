# memorizeJS
Make your pure function memorizable. 😊


## Sample

``` javascript
function add( a, b ) {
  return a + b;
}

add = add.memorize();

add( 1, 2 ); // first call, remember the result;

add( 1, 2 ); // second call, cached!

```
## Note

#### 1. Since the result was cached in a hash map, the memorizable function will return the reference of the result. So, it is an implementation of singleton pattern:

``` javascript
function whatever( val ) {
   return {
     val : val
   }
}

whatever = whatever.memorize();

var firstTimeResult = whatever( 'test' );

var secondTimeResult = whatever( 'test' );

// And this expression will be true: firstTimeResult === secondTimeResult

```

## TODO

- Unit test.

- Support more types of arguments.
