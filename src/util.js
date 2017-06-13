export function calcuZu(n){
		/***
		* 计算组合数
		*/
		// @param 选择的个数
		n = (n-2)*(n-1)*n/6;
		return n;
	}
	
export function randomNoRepeat(leng, start, end){
		/***
		* 随机不重复数字
		*/ 
		// @param 随机个数，起始值，终点值
		// 返回一个数组
		var arr = [];
		while(arr.length < leng){
			var i = rand(start, end)
			arr.indexOf(i) == -1 && arr.push(i)
		}
		return arr;
	}

export function rand(start, end){
	// @param 包括起始值 和 终点值
	// 返回一个数字
	// rand(end-start)+start 范围值随机加限定的最小值
	// 判断end是否大于start
	if (start > end) {var i = 0;i = start;start = end;end = i;}
	return Math.floor(Math.random()*(end-start+1))+start
}
export function mapFood(foodItems, options){
	options = JSON.parse(options || '[]')
	var res = foodItems.filter(item=>{
		var is = false
		options.forEach(opt=>{
			if(opt == item.classname) is = true 
		})
		return is 
	})
	return JSON.parse(JSON.stringify(res))
}

export function format(ms, fmt) {
	var dateObj = new Date(Number(ms))
	// 时间格式化
	// format(+new Date(), 'yyyy-MM-dd hh:mm:ss') ==> 2006-07-02 08:09:04.423 
	// format(1202452662111, 'yyyy-M-d h:m:s.S')  ==> 2006-7-2 8:9:4.18 
	var obj = {
		"M+": dateObj.getMonth() + 1, //月份 
		"d+": dateObj.getDate(), //日 
		"h+": dateObj.getHours(), //小时 
		"m+": dateObj.getMinutes(), //分 
		"s+": dateObj.getSeconds(), //秒 
		"q+": Math.floor((dateObj.getMonth() + 3) / 3), //季度 
		"S": dateObj.getMilliseconds() //毫秒 
	};
	if (/(y+)/.test(fmt)){
		fmt = fmt.replace(RegExp.$1, (dateObj.getFullYear() + "").substr(4 - RegExp.$1.length));
	}
	for (var i in obj){
		if (new RegExp("(" + i + ")").test(fmt)){
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (obj[i]) : (("00" + obj[i]).substr(("" + obj[i]).length)))
		}
	}
	return fmt;
}