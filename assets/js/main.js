$(() => {
	console.debug("start.");
	$("#test").on("click", t);
});

function t() {
	console.debug("begin t().");

	let testList = [test_simple_tester];
	let results = [];

	testList.forEach(test => results.push(test()));
	console.info("Results:", results.map(result => (result ? "O" : "X")).join(" "));

	console.debug("ends  t().");
}

console.debug("loaded.");
