console.log("index.js is complete");

var video = videojs("vid1",{
  plugins: {
    abLoopPlugin: {
      start: 0      //in seconds - defaults to 0
      // ,end:55     //in seconds. Set to  false to loop to end of video. Defaults to false
      ,enabled:false      //defaults to false
      ,loopIfBeforeStart:false //allow video to play normally before the loop section? defaults to true
      ,loopIfAfterEnd:true  // defaults to true
      ,pauseAfterLooping: false       //if true, after looping video will pause. Defaults to false
      ,pauseBeforeLooping: false      //if true, before looping video will pause. Defaults to false
      ,createButtons: true    //defaults to true
    }
  }
});

$("#next-button").click(function() {
  var time = video.currentTime();
  $("body").append("<p>" + time + "</p>")
})

$("#next-button1").click(function() {
  video.currentTime(60);
})

$("#next-button2").click(function() {
  video.currentTime(70);
})

$("#next-button3").click(function() {
  video.abLoopPlugin.setStart(video.currentTime());
})

$("#next-button4").click(function() {
  video.abLoopPlugin.setEnd(video.currentTime());
})

$("#next-button5").click(function() {
  video.abLoopPlugin.toggle();
})


// video.abLoopPlugin.onLoopCallBack = function(api,player){
//   var opts = api.getOptions();
//   console.log("Looping back to %s sec on %s",opts.start, player.currentSrc() );
//   api.setOptions({'pauseAfterLoop': true}); 
// };