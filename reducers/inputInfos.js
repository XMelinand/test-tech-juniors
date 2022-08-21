export default function (inputInfos = {}, action) {
    var inputInfosCopy;
	if (action.type == "submit") {
		console.log("added?", action.firstName);
		var inputInfosCopy = { firstName: action.firstName, lastName: action.lastName };
		return inputInfosCopy;
	} else {
		return inputInfos;
	}
}
