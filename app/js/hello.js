var secret;
$('#start').on('click', function () {
	$.post("http://strikingly-interview-test.herokuapp.com/guess/process", {
		"action": "initiateGame",
		"userId": "m.saihomi@gmail.com"
	}, function (data, status) {
		if (data.status == "200") {
			secret = data.secret;
			nextWord();
		}
	});
});

function nextWord() {
	$.post("http://strikingly-interview-test.herokuapp.com/guess/process", {
		"action": "nextWord",
		"userId": "m.saihomi@gmail.com",
		"secret": secret
	}, function (data, status) {
		guessWord((bestChar(data.word, 0)).toUpperCase());
	});
}

function guessWord(_char) {
	$.post("http://strikingly-interview-test.herokuapp.com/guess/process", {
		"action": "guessWord",
		"userId": "m.saihomi@gmail.com",
		"secret": secret,
		"guess": _char
	}, function (data, status) {
		console.log(data.data.numberOfWordsTried + '/' + _char);
		if (data.data.numberOfGuessAllowedForThisWord == 0) {
			if (data.data.numberOfWordsTried == 80) {
				getTestResults();
			} else {
				nextWord();
			}
		} else {
			guessWord(bestChar(data.word, 1).toUpperCase());
		}
	});
}

function getTestResults() {
	$.post("http://strikingly-interview-test.herokuapp.com/guess/process", {
		"action": "getTestResults",
		"userId": "m.saihomi@gmail.com",
		"secret": secret
	}, function (data, status) {
		console.log(data.message);
		console.log('numberOfCorrectWords:' + data.data.numberOfCorrectWords);
		console.log('numberOfWrongGuesses' + data.data.numberOfWrongGuesses);
		console.log('totalScore' + data.data.totalScore);
		var isSubmitTestResult = prompt('submitTestResults');
		if (isSubmitTestResult == 1) {
			submitTestResults(isSubmitTestResult);
		}
	});
}

function submitTestResults(isSubmitTestResult) {
	$.post("http://strikingly-interview-test.herokuapp.com/guess/process", {
		"action": 'submitTestResults',
		"userId": "m.saihomi@gmail.com",
		"secret": secret
	}, function (data, status) {
		console.log(data.message);
		console.log('numberOfCorrectWords:' + data.data.numberOfCorrectWords);
		console.log('numberOfWrongGuesses' + data.data.dateTime);
		console.log('totalScore' + data.data.totalScore);
	});
}