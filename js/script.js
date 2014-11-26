$(document).on("click", "#get_lectio_url", function () {
	if ( $("#lectio_url").val().length > 0 ) {
		var url = $("#lectio_url").val().replace("https://", "").replace("www.", "").replace("http://", "");
		var pattern = /lectio.dk\/lectio\/(.*)\/SkemaNy\.aspx\?type=elev&elevid=(.*)/i;
		var patternAlternative = /lectio.dk\/lectio\/(.*)\/SkemaNy\.aspx\?type=elev&elevid=(.*)&week=(.*)/i;
		var result = pattern.exec(url);
		var resultAlternative = patternAlternative.exec(url);
		var calendar_url = "";

		if ( result != null ) {
			calendar_url = "http://unical.illution.dk/lectio/" + result[1] + "/" + result[2];
		} else if ( resultAlternative != null ) {
			calendar_url = "http://unical.illution.dk/lectio/" + resultAlternative[1] + "/" + resultAlternative[2];
		}

		if ( calendar_url != "" ) {
			$("#calendar_url").html("<p style='color:green;'>Insert this link into your Calendar: " + calendar_url + "</p>");
		} else {
			$("#calendar_url").html("<p style='color:red;'>Sorry invalid link!</p>");
		}
	} else {
		$("#calendar_url").html("<p>Your result will appear here!</p>");
	}
});