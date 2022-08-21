export default function (specs = {}, action) {
	if (action.type == "ageSubmit") {
		var userSpecs = {age:action.age, gender:action.gender}
		return userSpecs;
	} else {
		return specs;
	}
}
