;(function(
  
  if( Function.prototype.memorize ) return;

  Function.prototype.memorize = function( memoryLength ) {

    var fn = this, cache = {};

    memoryLength = memoryLength || 1000; // memory should longer than 0

    function memosizeFn() {

      var args = [].slice.call( arguments ),
          len  = args.length,
          i    = 0;

      var keyArr    = [], 
          keyStr    = '',
          cacheKeys = [];

      for( ; i < len; i++ ) {

        var arg = args[ i ],
            type = typeof arg;

        if( type !== 'string' && type !== 'number' ) {
          throw new TypeError( 'The memorize function can only handle with arguments type of Number or String.' );
        }

        keyArr.push( type === 'string' ? 's_' + arg : 'n_' + arg );
      
      }

      keyStr = keyArr.join( ',' );
      cacheKeys = Object.keys( cache );

      if( cacheKeys.indexOf( keyStr ) !== -1 ) {

        console.log( 'Cached result.' );
        return cache[ keyStr ];
      
      } else {

        if( cacheKeys.length >= memoryLength ) {
          delete cache[ cacheKeys[ length - 1 ] ];
        }

        cache[ keyStr ] = fn.apply( fn, args );
        
        return cache[ keyStr ];
      
      }

    }

    return memosizeFn;

  }
))();
