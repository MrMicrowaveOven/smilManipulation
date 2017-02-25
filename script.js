window.streams = [];
window.playlists = [];
window.videos = [];

function AddStream() {
  //Collect data
  var streamName = document.getElementById("streamName").value;

  //Make XML object and add it to body
  var streamXML = '<stream name="' + streamName + '"></stream>';
  var stream = document.createTextNode(streamXML);
  document.getElementById("streams").appendChild(stream);
  document.getElementById("streams").appendChild(document.createElement("br"));

  //Saves to global array
  window.streams.push(streamName);

  //Adds stream to playlist dropdown menu
  var option = document.createElement("option");
  option.setAttribute("value", streamName);
  option.innerHTML = streamName;
  document.getElementById("playlistStream").appendChild(option);

  //Add stream to userView as a div
  var streamView = document.createElement("div");
  streamView.setAttribute("class", "streamView");
  streamView.innerHTML = streamName;
  document.getElementById("streamsView").appendChild(streamView);
}

function AddPlaylist() {
  //Collect data
  var playlistName = document.getElementById("playlistName").value;
  var playlistStream = document.getElementById("playlistStream").value;
  var repeat = document.getElementById("repeat").checked;
  var timeToPlay = document.getElementById("dateTime").value;

  //Make XML object
  var playlistXML = '<playlist name="' + playlistName
                  + '" playOnStream="' + playlistStream
                  + '" repeat="' + repeat
                  + '" scheduled="' + timeToPlay + '">';
  var playlist = document.createTextNode(playlistXML);

  //Put XML object into a div with id equal to playlistName
  var playlistDiv = document.createElement("div");
  playlistDiv.setAttribute("id", playlistName);
  document.getElementById("playlists").appendChild(playlistDiv);
  playlistDiv.appendChild(playlist);
  playlistDiv.appendChild(document.createElement("br"));

  //Add a div for videos in the playlist
  var vidsDiv = document.createElement("div");
  vidsDiv.setAttribute("id", playlistName + "Vids");
  vidsDiv.setAttribute("class", "videos");
  playlistDiv.appendChild(vidsDiv);

  //Close the playlist node
  var playlistClose = document.createTextNode("</playlist>");
  playlistDiv.appendChild(playlistClose);
  playlistDiv.appendChild(document.createElement("br"));
  playlistDiv.appendChild(document.createElement("br"));

  //Add playlist to video dropdown menu
  var option = document.createElement("option");
  option.setAttribute("value", playlistName);
  option.innerHTML = playlistName;
  document.getElementById("vidPlaylist").appendChild(option);

  //Add playlist to global array
  window.playlists.push(playlistName);

  //Add playlist to userView as a div
  var playlistView = document.createElement("div");
  playlistView.setAttribute("id", playlistName + "View");
  playlistView.setAttribute("class", "playlistView");
  playlistView.innerHTML = playlistName;
  playlistView.appendChild(document.createElement("br"));
  document.getElementById("playlistsView").appendChild(playlistView);
}

function AddVideo() {
  //Collect data
  var vidPlaylist = document.getElementById("vidPlaylist").value;
  var source = document.getElementById("source").value;
  var start = document.getElementById("start").value;
  var length = document.getElementById("length").value;
  var playlistDiv = document.getElementById(vidPlaylist + "Vids");

  //Make XML node and add to playlistDiv
  var vidXML = '<video src="' + source
              + '" start="' + start
              + '" length="' + length + '">';
  var playlist = document.createTextNode(vidXML);
  playlistDiv.appendChild(playlist);

  //Add video close to HTML node
  var videoClose = document.createTextNode("</video>");
  playlistDiv.appendChild(videoClose);
  playlistDiv.appendChild(document.createElement("br"));

  //Add video to corresponding playlist in userView
  var playlistView = document.getElementById(vidPlaylist + "View");
  var videoView = document.createElement("div");
  videoView.innerHTML = source;
  videoView.setAttribute("class", "videoView");
  playlistView.appendChild(videoView);
}
