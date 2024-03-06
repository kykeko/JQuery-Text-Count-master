/*!
 * JQuery text count
 * ========
 * Home:		http://hungtcs.oschina.io/hungzeblog
 * Git:			https://git.oschina.net/hungtcs/JQuery-Text-Count.git
 *				https://github.com/hungtcs/JQuery-Text-Count.git
 * Author:		Hungze
 * Email:		hungtcs@163.com
 * Date:		July 7 ,2106
 */
(function($){
	$.fn.countText = function(option){
		if(!option){ console.error("Required configuration parameters."); return false; };
		if(!option.tipEle){ console.error("Required configuration parameters: tipEle"); return false; };
		if(!option.maxNum){ console.error("Required configuration parameters: maxNum"); return false; };
		if(!option.tipClass){ option.tipClass = "text-count-tip"; };
		if(!option.fullTipData){ option.fullTipData = "data-text-count-full"; };
		if(!option.fullTipClass){ option.fullTipClass = "text-count-tip-full"; };
		if(!option.tipLabel){ option.tipLabel = "span" };
		if(!option.tipText){ option.tipText = "您还可以输入{{remainderLen}}个字"; };
		if(!option.fullTipText){ option.fullTipText = "已超出{{overflowLen}}个字"; };
		
		var doCount = function(){
			// 字数
			var len = $(this).val().length;
			// 还可以输入的字数
			var remainderLen = (option.maxNum-len > 0) ? option.maxNum-len : 0;
			// 超出的字数
			var overflowLen = (len-option.maxNum > 0) ? len-option.maxNum : 0;
			// 提示标签
			var ele = $("<"+option.tipLabel+">");
			ele.addClass(option.tipClass);
			if(len <= option.maxNum){
				ele.attr(option.fullTipData ,false);
				var tipText = option.tipText.replace(/{{\s*remainderLen\s*}}/,remainderLen).replace(/{{\s*overflowLen\s*}}/,overflowLen);
				ele.html(tipText);
				option.tipEle.html(ele);
			}else{
				ele.addClass(option.fullTipClass);
				ele.attr(option.fullTipData ,true);
				var fullTipText = option.fullTipText.replace(/{{\s*remainderLen\s*}}/,remainderLen).replace(/{{\s*overflowLen\s*}}/,overflowLen);
				ele.html(fullTipText);
				option.tipEle.html(ele);
			}
		};
		$(this).bind('keyup change', doCount);
		return this;
	};
})(jQuery);



























