function CheckUpdateMovie() {
	var title = document.getElementById("title");
	var director = document.getElementById("director");
	var actor = document.getElementById("actor");
	var genre = document.getElementById("genre");
	var rating = document.getElementById("rating");
	var runningTime = document.getElementById("runningTime");
	var country = document.getElementById("country");
	var releaseDate = document.getElementById("releaseDate");
	var fileName = document.getElementById("fileName");

	// ì ëª© ì²´í¬
	if (title.value.length == 0) {
		alert("ð« [ì ëª©] ð«\nìµì 1ì ì´ì ìë ¥í´ì£¼ì¸ì");
		title.select();
		title.focus();
		return false;
	}

	// ê°ë ì²´í¬
	if (director.value.length == 0) {
		alert("ð« [ê°ë] ð«\nìµì 1ì ì´ì ìë ¥í´ì£¼ì¸ì");
		director.select();
		director.focus();
		return false;
	}

	// ë°°ì° ì²´í¬
	if (!check(/^[ê°-í£a-zA-Z\s]+, [ê°-í£a-zA-Z\s]+, [ê°-í£a-zA-Z\s]+$/, actor, "ð« [ë°°ì°] ð«\nì´ 3ëªì ìë ¥í´ì£¼ì¸ì\nêµ¬ë¶ìë ', 'ë¥¼ ì¬ì©í´ì£¼ì¸ì"))
		return false;

	// ì¥ë¥´ ì²´í¬
	if (genre.selectedIndex == 0) {
		alert("ð« [ì¥ë¥´] ð«\ní ê°ì§ë¥¼ ì íí´ì£¼ì¸ì");
		return false;
	}
	
	// ìì ë±ê¸ ì²´í¬
	if (rating.selectedIndex == 0) {
		alert("ð« [ìì ë±ê¸] ð«\ní ê°ì§ë¥¼ ì íí´ì£¼ì¸ì");
		return false;
	}
	
	// ìì ìê° ì²´í¬
	if (runningTime.value.length == 0) {
		alert("ð« [ìì ìê°] ð«\nìµì 1ë¶ ì´ì ìë ¥í´ì£¼ì¸ì");
		runningTime.select();
		runningTime.focus();
		return false;
	}
	
	// ì ì êµ­ê° ì²´í¬
	if (country.value.length == 0) {
		alert("ð« [ì ì êµ­ê°] ð«\nìµì 1ì ì´ì ìë ¥í´ì£¼ì¸ì");
		country.select();
		country.focus();
		return false;
	}
	
	// ê°ë´ì¼ ì²´í¬
	if (releaseDate.value.length == 0) {
		alert("ð« [ê°ë´ì¼] ð«\në ì§ë¥¼ ì íí´ì£¼ì¸ì");
		releaseDate.select();
		releaseDate.focus();
		return false;
	}
	
	// ì´ë¯¸ì§ ì²´í¬
	if (fileName.value.length == 0) {
		alert("ð« [ì´ë¯¸ì§] ð«\níì¼ì ì íí´ì£¼ì¸ì");
		fileName.select();
		fileName.focus();
		return false;
	}

	function check(regExp, e, msg) {
		if (regExp.test(e.value)) {
			return true;
		}
		alert(msg);
		e.select();
		e.focus();
		return false;
	}

	document.updateMovieForm.submit();
}