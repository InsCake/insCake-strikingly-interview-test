var dic,
	charFreqArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	nWordsArr, charFreqArr, theChar;
//事件注册 - 获取书本
$('#readDic').on('click', function () {
	var wordsAllArr = readDic();
});

//获取第一个值
function sendTheChar(word, flag) {
	//	var wordStr = "******",
	//		reg = new RegExp('[A-Z]');
	//	
	//	if (reg.test(wordStr)) {
	//		alert('不能含有字母');
	//	} else {
	//		var nWordsArr = getNWordsArr(wordStr, dic),
	//			charFreqArr = getCharFreqArr(wordStr, nWordsArr),
	//			theChar = getTheChar(charFreqArr); //得到候选字母
	//		alert(theChar);
	//	}
	var wordStr = word;
	if (flag == 0) {
		charFreqArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		nWordsArr = getNWordsArr(wordStr, dic),
		charFreqArr = getCharFreqArr(wordStr, nWordsArr),
		theChar = getTheChar(charFreqArr); //得到候选字母
	} else if (flag == 1) {
		theChar = getTheChar(charFreqArr); //得到候选字母
	}
	return theChar;
};





//-1-字典文件阅读，并执行-2-方法
function readDic() {
	$.ajax({
		url: "dictionary/allWords.txt",
		type: 'GET',
		dataType: 'text',
		success: function (data) {
			dic = data.split("\r\n");
		}
	});
};

//-2-根据word字符串长度和wordsAllArr返回n个长度的nWordsArr，执行-3-方法
function getNWordsArr(wordStr, wordsAllArr) {
	var wordSize = wordStr.length,
		nWordsArr = [];

	for (var i = 0; i < wordsAllArr.length; i++) {
		if (wordsAllArr[i].length == wordSize) {
			nWordsArr.push(wordsAllArr[i]);
		}
	}
	return nWordsArr;
};

//-3-根据nWordsArr返回字母出现率charFreqArr
function getCharFreqArr(wordStr, nWordsArr) {
	for (var i = 0; i < nWordsArr.length; i++) {
		for (var j = 0; j < 4; j++) {
			switch (nWordsArr[i].substring(j, j + 1)) {
			case "a":
				charFreqArr[0]++;
				break;
			case "b":
				charFreqArr[1]++;
				break;
			case "c":
				charFreqArr[2]++;
				break;
			case "d":
				charFreqArr[3]++;
				break;
			case "e":
				charFreqArr[4]++;
				break;
			case "f":
				charFreqArr[5]++;
				break;
			case "g":
				charFreqArr[6]++;
				break;
			case "h":
				charFreqArr[7]++;
				break;
			case "i":
				charFreqArr[8]++;
				break;
			case "j":
				charFreqArr[9]++;
				break;
			case "k":
				charFreqArr[10]++;
				break;
			case "l":
				charFreqArr[11]++;
				break;
			case "m":
				charFreqArr[12]++;
				break;
			case "n":
				charFreqArr[13]++;
				break;
			case "o":
				charFreqArr[14]++;
				break;
			case "p":
				charFreqArr[15]++;
				break;
			case "q":
				charFreqArr[16]++;
				break;
			case "r":
				charFreqArr[17]++;
				break;
			case "s":
				charFreqArr[18]++;
				break;
			case "t":
				charFreqArr[19]++;
				break;
			case "u":
				charFreqArr[20]++;
				break;
			case "v":
				charFreqArr[21]++;
				break;
			case "w":
				charFreqArr[22]++;
				break;
			case "x":
				charFreqArr[23]++;
				break;
			case "y":
				charFreqArr[24]++;
				break;
			case "z":
				charFreqArr[25]++;
				break;
			}
		}
	}
	return charFreqArr;
};

//-4-根据charFreqArr，返回最高频字母，并将其清零，表示已猜过
function getTheChar(charFreqArr) {
	/*function sortNumber(a, b) {
		return b - a;
	};
	charFreqArr.sort(sortNumber);//排序
	
	var theChar = charFreqArr[0];
	charFreqArr[0] = -1;
	return theChar;*/
	var chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
		theCharIndex = 0;
	for (var i = 0; i < 25; i++) {
		if (charFreqArr[i] >= charFreqArr[theCharIndex]) {
			theCharIndex = i;
		}
	}

	var theChar = chars[theCharIndex];
	charFreqArr[theCharIndex] = -1;
	return theChar;
};