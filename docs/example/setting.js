//GETパラメータの取得
//参考）http://so-zou.jp/web-app/tech/programming/javascript/sample/get.htm
//値の取り方例）
//	var param = getParameter();
//		title =param['title'];
//		url =param['url'];



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
