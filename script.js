document.addEventListener('contextmenu', event => event.preventDefault());
function rickroll(){ 
var html = `
  <h1>You have claimed your prize!</h1>
  <br>
  <!--In Case the video does not load we will lead them to the rickroll link-->
  <video src='nothing.mp4' autoplay><a src="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Link to prize</a></video>
<br>
Just so you know, You have no controls over this video! Not unless you exit the page...
`;
document.getElementById('Button').innerHTML = html;
document.getElementById('Button').disabled = true;
}