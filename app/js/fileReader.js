$(function () {
	$.get("dictionary/allWords.txt", function (data, status) {
		var arrALL = data.split("\r\n");
		var arrNChar = [];
		var charQuantity = {
			'a': 0,
			'b': 0,
			'c': 0,
			'd': 0,
			'e': 0,
			'f': 0,
			'g': 0,
			'h': 0,
			'i': 0,
			'j': 0,
			'k': 0,
			'l': 0,
			'm': 0,
			'n': 0,
			'o': 0,
			'p': 0,
			'q': 0,
			'r': 0,
			's': 0,
			't': 0,
			'u': 0,
			'v': 0,
			'w': 0,
			'x': 0,
			'y': 0,
			'z': 0,
		};
		for (var i = 0; i < arrALL.length; i++) {
			if (arrALL[i].length == 4) {
				arrNChar.push(arrALL[i]);
			}
		}
		alert(arrNChar.length);
		for (i = 0; i < arrNChar.length; i++) {
			for (var j = 0; j < 4; j++) {
				switch (arrNChar[i].substring(j, j + 1)) {
				case "a":
					charQuantity.a ++;
					break;
				case "b":
					charQuantity.b ++;;
					break;
				case "c":
					charQuantity.c ++;;
					break;
				case "d":
					charQuantity.d ++;;
					break;
				case "e":
					charQuantity.e ++;;
					break;
				case "f":
					charQuantity.f ++;;
					break;
				case "g":
					charQuantity.g ++;;
					break;
				case "h":
					charQuantity.h ++;;
					break;
				case "i":
					charQuantity.i ++;;
					break;
				case "j":
					charQuantity.j ++;;
					break;
				case "k":
					charQuantity.l ++;;
					break;
				case "l":
					charQuantity.l ++;;
					break;
				case "m":
					charQuantity.m ++;;
					break;
				case "n":
					charQuantity.n ++;;
					break;
				case "o":
					charQuantity.o ++;;
					break;
				case "p":
					charQuantity.p ++;;
					break;
				case "q":
					charQuantity.q ++;;
					break;
				case "r":
					charQuantity.r ++;;
					break;
				case "s":
					charQuantity.s ++;;
					break;
				case "t":
					charQuantity.t ++;;
					break;
				case "u":
					charQuantity.u ++;;
					break;
				case "v":
					charQuantity.v ++;;
					break;
				case "w":
					charQuantity.w ++;;
					break;
				case "x":
					charQuantity.x ++;
					break;
				case "y":
					charQuantity.y ++;
					break;
				case "z":
					charQuantity.z ++;
					break;
				}
			}
		}
		console.log('a:' + charQuantity.a);
		console.log('b:' + charQuantity.b);
		console.log('c:' + charQuantity.c);
		console.log('d:' + charQuantity.d);
		console.log('e:' + charQuantity.e);
		console.log('f:' + charQuantity.f);
		console.log('g:' + charQuantity.g);
		console.log('h:' + charQuantity.h);
		console.log('i:' + charQuantity.i);
		console.log('j:' + charQuantity.j);
		console.log('k:' + charQuantity.k);
		console.log('l:' + charQuantity.l);
		console.log('m:' + charQuantity.m);
		console.log('n:' + charQuantity.n);
		console.log('o:' + charQuantity.o);
		console.log('p:' + charQuantity.p);
		console.log('q:' + charQuantity.q);
		console.log('r:' + charQuantity.r);
		console.log('s:' + charQuantity.s);
		console.log('t:' + charQuantity.t);
		console.log('u:' + charQuantity.u);
		console.log('v:' + charQuantity.v);
		console.log('w:' + charQuantity.w);
		console.log('x:' + charQuantity.x);
		console.log('y:' + charQuantity.y);
		console.log('z:' + charQuantity.z);
		
		
	});
});