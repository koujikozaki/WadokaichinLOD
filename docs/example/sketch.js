function setup() {  
  var myCanvas = createCanvas(300, 200);
  myCanvas.parent('myContainer');
  
}

var param = getParameter();
var w1n = param['w1n'];
var w1w = param['w1w'];
var w1s = param['w1s'];
var w2n = param['w2n'];
var w2e = param['w2e'];
var w2s = param['w2s'];


function draw() {
/*var param = getParameter();
var w1n = param['w1n'];
var w1w = param['w1w'];
var w1s = param['w1s'];
var w2n = param['w2n'];
var w2e = param['w2e'];
var w2s = param['w2s'];
*/
/*var w1n = '肉'; //param['w1n'];
var w1w = '両'; //param['w1w'];
var w1s = '指'; //param['w1s'];
var w2n = '種'; //param['w2n'];
var w2e = '葉'; //param['w2e'];
var w2s = '子'; //param['w2s'];
*/

var x = 10;
var y = 30;
var fw = 32;
var fa = 20;
var fb = 46;

textSize(fw);
text(w1n, x+fw+fa+4, y);
textSize(fa);
text('↓', x+fw+fa+4+(fw-fa)/2, y+fa);
textSize(fb);
text('□', x+fw+fa+4+(fw-fb)/2, y+fa+fb-8);
textSize(fw);
text(w1w, x, (y+y+fa*2+fw+fb-8)/2-2);
textSize(fa);
text('→', x+fw*1, (y+y+fa*2+fw+fb-8)/2-6);
textSize(fa);
text('↓', x+fw+fa+4+(fw-fa)/2, y+fa*2+fb-8);
textSize(fw);
text(w1s, x+fw+fa+4, y+fa*2+fw+fb-8);

textSize(fa);
text('→', x+fw+fa+(fw-fb)/2+fb, (y+y+fa*2+fw+fb-8)/2-6);

textSize(fb);
text('□', x+fw+fa+(fw-fb)/2+fb+fa-4, y+fa+fb-8);

textSize(fw);
text(w2n, x+fw+fa+fb+fa-4, y);
textSize(fa);
text('↓', x+fw+fa+fb+fa-4+(fw-fa)/2 , y+fa);

textSize(fa);
text('↓', x+fw+fa+fb+fa-4+(fw-fa)/2, y+fa*2+fb-8);
textSize(fw);
text(w2s, x+fw+fa+fb+fa-4, y+fa*2+fw+fb-8);

textSize(fa);
text('→', x+fw+fa+(fw-fb)/2+fb*2-8+fa, (y+y+fa*2+fw+fb-8)/2-6);

textSize(fw);
text(w2e, x+fw+fa+(fw-fb)/2+fb*2-8+fa*2, (y+y+fa*2+fw+fb-8)/2-2);

}


function getParameter()
{
    var result = {};
    if( 1 < window.location.search.length )
    {
        var query = window.location.search.substring( 1 );

        var parameters = query.split( '&' );

        for( var i = 0; i < parameters.length; i++ )
        {
            var element = parameters[ i ].split( '=' );

            var paramName = decodeURIComponent( element[ 0 ] );
            var paramValue = decodeURIComponent( element[ 1 ] );

            result[ paramName ] = paramValue;
        }
    }
    return result;
}


