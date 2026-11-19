/*
 * yuga.js 0.3.0 - 優雅なWeb制作のためのJS
 *
 * Copyright (c) 2007 Kyosuke Nakamura (kyosuke.jp)
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Since:     2006-10-30
 * Modified:  2007-06-18
 *
 * jQuery 1.1.2
 * ThickBox 3
 * Interface 1.2 (Effects scroll)
 */

var yuga = {
	// imageのプリローダー
	preloader: {
		loadedImages: [],
		load: function (url){
			var img = this.loadedImages;
			var l = img.length;
			img[l] = new Image();
			img[l].src = url;
		}
	},
	// URIを解析したオブジェクトを返すfunction
	URI: function(s){
		this.originalPath = s;
		
		//絶対パスを取得
		this.getAbsolutePath = function(path){
			var img = new Image();
			img.src = path;
			path = img.src;
			img.src = '#';
			return path;
		};
	
		this.absolutePath = this.getAbsolutePath(s);
	
		//同じ文書にリンクしているかどうか
		this.isSelfLink = (this.absolutePath == location.href);
	
		//絶対パスを分解
		var a = this.absolutePath.split('://');
		this.schema = a[0];
		var d = a[1].split('/');
		this.host = d.shift();
		var f = d.pop();
		this.dirs = d;
		this.file = f.split('?')[0].split('#')[0];
		var fn = this.file.split('.');
		this.fileExtension = (fn.length == 1) ? '' : fn.pop();
		this.fileName = fn.join('.');
		var fq = f.split('?');
		this.query = (fq[1]) ? fq[1].split('#')[0] : '';
		var ff = f.split('#');
		this.fragment = (ff[1]) ? ff[1].split('?')[0] : '';	
	}
};

$(function(){
	
	//class="btn"はロールオーバーを設定（src属性を_on付きのものに差し替える）
	$('.btn').each(function(){
		this.originalSrc = $(this).attr('src');
		this.rolloverSrc = this.originalSrc.replace(/(\.gif|\.jpg|\.png)/, "_on$1");
		yuga.preloader.load(this.rolloverSrc);
	}).hover(function(){
		$(this).attr('src',this.rolloverSrc);
	},function(){
		$(this).attr('src',this.originalSrc);
	});

	//外部リンクは別ウインドウを設定
	$('a[@href^="http://"]').click(function(){
		window.open(this.href, '_blank');
		return false;
	}).addClass('externalLink');

	//ページ内リンクはするするアニメーション(interface.js利用)
	//$("body").ScrollToAnchors(500);
	
	//画像へ直リンクするとthickboxで表示(thickbox.js利用)
	//tb_init('a[@href$=".jpg"], a[@href$=".gif"], a[@href$=".gif"]');

});
