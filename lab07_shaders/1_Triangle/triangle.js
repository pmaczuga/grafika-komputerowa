var gl;
var points;
window.onload = function init()
{
    var canvas = document.getElementById( "gl-canvas" );
    gl = WebGLUtils.setupWebGL( canvas );
    if ( !gl ) { alert( "WebGL isn't available" );
 }
var vertices = new Float32Array([-1, -1, 0, 1, 1, -1]);
 //  Konfigurujemy WebGL
gl.viewport( 0, 0, canvas.width, canvas.height );
gl.clearColor( 1.0, 1.0, 1.0, 1.0 );
//  �adujemy shadery 
   var program = initShaders( gl, "vertex-shader", "fragment-shader" );
   	gl.useProgram( program );
 
   // Inicjujemy bufory i �adujemy dane do GPU
   var bufferId = gl.createBuffer();
   gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
   gl.bufferData( gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW );
// Kojarzymy zmienne shadera z danymi bufora i rysujemy
 var vP = gl.getAttribLocation( program, "vPosition" );
 gl.vertexAttribPointer( vP, 2, gl.FLOAT, false, 0, 0 );
 gl.enableVertexAttribArray( vP ); 
 render();
};
function render() 
{
    gl.clear( gl.COLOR_BUFFER_BIT );
    gl.drawArrays( gl.TRIANGLES, 0, 3 );
}
