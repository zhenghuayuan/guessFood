export let calcuZu = function(n){
		/***
		* 计算任三公式
		*/
		// @param 选择的个数
		n = (n-2)*(n-1)*n/6;
		return n;
	}
	
export let randomNoRepeat = function(leng, start, end){
		/***
		* 随机不重复数字
		*/ 
		// @param 随机个数，起始值，终点值
		// 返回一个数组
		var arr = [];
		while(arr.length < leng){
			var i = rand(start, end)
			arr.indexOf(i) == -1 && arr.push(i);
		}
		return arr;
	}

function rand(start, end){
	// @param 包括起始值 和 终点值
	// 返回一个数字
	// rand(end-start)+start 范围值随机加限定的最小值
	// 判断end是否大于start
	if (start > end) {var i = 0;i = start;start = end;end = i;};
	return Math.floor(Math.random()*(end-start+1))+start;
}