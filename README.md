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
## Notes

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

#### 2. Avoid too much memory usage:

``` javascript
whatever = whatever.memorize( 1000 ); // The max length of cached results will be limited to 1000.
```

## TODO

- Unit test.

- Support more types of arguments.
