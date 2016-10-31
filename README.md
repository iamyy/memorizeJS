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