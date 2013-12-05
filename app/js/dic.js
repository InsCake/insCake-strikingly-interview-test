function readDic() { //加载字典--------------------------------------------------------
	$.ajax({
		url: "dictionary/allWords.txt",
		type: 'GET',
		dataType: 'text',
		success: function (data) {
			dic = data.split("\r\n");
		}
	});
};

//全局变量-----------------------------------------------------------------------------
var dic, //字典样本
	charFreqArr, nWordsArr, charFreqArr, theChar;

//事件注册 - 获取书本
$('#readDic').on('click', function () {
	var wordsAllArr = readDic();
});



function bestChar(word, isGuessing) {
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
	if (isGuessing == 0) { //新的单词来了，要进行n个字母的识别 和 响应的字典子集生成
		charFreqArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //新的单词来了，要将旧的字频数组复位
		nWordsArr = getNWordsArr(wordStr, dic), //得到n个字母的所有单词数组
		charFreqArr = getCharFreqArr(nWordsArr), //得到n个字母的单词的字频数组
		theChar = getTheChar(charFreqArr); //得到候选字母
	} else if (isGuessing == 1) { //还没猜完的单词又来了
		reg = new RegExp('[A-Z]');
		if (！reg.test(wordStr)) { //没有猜对还T_T
			theChar = getTheChar(charFreqArr); //得到候选字母
		} else { //至少有猜对了的呢
			alert('不能含有字母');
		}
	}
	return theChar;
};


//---分支逻辑1：获取n个字母的单词中最高几率出现的那个她！---------------------------------------------------------------------

function getNWordsArr(wordStr, wordsAllArr) { //根据word字符串长度和wordsAllArr返回n个长度的nWordsArr
	var wordSize = wordStr.length,
		nWordsArr = [];

	for (var i = 0; i < wordsAllArr.length; i++) {
		if (wordsAllArr[i].length == wordSize) {
			nWordsArr.push(wordsAllArr[i]);
		}
	}
	return nWordsArr;
};

function getCharFreqArr(nWordsArr) { //根据nWordsArr返回字母出现率charFreqArr
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


//---分支逻辑2：获取n个字母的单词中除了已知位置之外最高最高几率出现的那个她！---------------------------------------------------



//---合并上面分支逻辑：根据charFreqArr，返回最高频字母，并将其清零，表示已猜过！-----------------------------------------------

function getTheChar(charFreqArr) { //根据charFreqArr，返回最高频字母，并将其清零，表示已猜过
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