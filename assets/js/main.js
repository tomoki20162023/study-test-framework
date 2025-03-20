$(() => {
	console.debug("start.");
	$("#test").on("click", t);
});

function t() {
	console.debug("begin t().");
	console.debug("ends  t().");
}

console.debug("loaded.");
