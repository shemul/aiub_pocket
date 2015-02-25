function alertDismissed() {
		     navigator.app.exitApp();
}

function loadNotice () {
	if(navigator.connection.type == Connection.NONE)
	{
		
		navigator.notification.alert(
		"No Internet connectivity",  // message
		alertDismissed,         // callback
		'Network issue',            // title
		'Close'                  // buttonName
		);
		
	}

	$.jGFeed("http://www.aiub.edu/activities/notices/feed/",
	  function(feeds){
	    // Check for errors
	    if(!feeds){
	      // there was an error
	     // console.log('errr');
	      return false;
	    }
	    // do whatever you want with feeds here
	    document.getElementById('aiub_notice').innerHTML="";
	    for(var i=0; i<feeds.entries.length; i++){
	      var entry = feeds.entries[i];
	      //console.log(entry);
	      // Entry title
	      
	      document.getElementById('aiub_notice').innerHTML += 
	      "<a class='item item-icon-left' href='" + entry.link + "'><i class='icon ion-document-text'></i>" + entry.title.slice(0,30) + 
	      "<p>"+entry.publishedDate.slice(0,26) + "</p></a>"			
	    }
	}, 10);

}

function checkConnection() {
        var networkState = navigator.connection.type;

        var states = {};
        states[Connection.UNKNOWN]  = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI]     = 'WiFi connection';
        states[Connection.CELL_2G]  = 'Cell 2G connection';
        states[Connection.CELL_3G]  = 'Cell 3G connection';
        states[Connection.CELL_4G]  = 'Cell 4G connection';
        states[Connection.CELL]     = 'Cell generic connection';
        states[Connection.NONE]     = 'No network connection';

        alert('Connection type: ' + states[networkState]);
    }
