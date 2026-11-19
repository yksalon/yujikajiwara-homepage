// 読み込むフィードのURLを指定
var urls = new Array("http://www.blogger.com/feeds/8205022633870048028/posts/default");

google.load("feeds", "1");
 
function initialize() {
	// id属性の値がfeedの要素内にフィードを書き出す
	var container = document.getElementById("feed");
		for (var n = 0; n < urls.length;n++ ) {
			var feed = new google.feeds.Feed(urls[n]);
			// 読み込むフィードの数を指定
			feed.setNumEntries(4);
	  
			feed.load(function(result) {
				if (!result.error) {
					for (var i = 0; i < result.feed.entries.length; i++) {
						var entry = result.feed.entries[i];
						var dd = new Date(entry.publishedDate); // now
						// 日時の日本語表記化
						var yearNum = dd.getYear();
						if (yearNum < 2000) yearNum += 1900;
						var date = yearNum + "年"+(dd.getMonth()+1)+"月"+dd.getDate()+"日";
						container.innerHTML += "<dt><a href='" + entry.link + "'>" + entry.title + "<¥/a><¥/dt>";
						container.innerHTML += "<dd>" + date + "<¥/dd>";
					}
				}
			});
		}
}

google.setOnLoadCallback(initialize);
