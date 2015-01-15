var censored = ["word1", "word2", "word3"];
var customCensored = [];

function censorStr(Str){
	for (i in censored){
		Str = Str.replace(censored[i], "!!!censored!!!");
	}
	for (i in customCensored){
		Str = Str.replace(customCensored[i], "!!!censored!!!");
	}
	return Str;
}

function addCensored(newWord){
	customCensored.push(newWord);
}

function getCensored(){
	return censored.concat(customCensored);
}

exports.censorStr = censorStr;
exports.addCensored = addCensored;
exports.getCensored = getCensored;
