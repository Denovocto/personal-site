let footerFocusToggle = document.querySelector("#footer-focus-toggle");

footerFocusToggle.addEventListener("change", () => {
	handleFooterFocusToggle(footerFocusToggle.checked);
});

function handleFooterFocusToggle(checked) {
	if (checked) {
		scrollToFooter();
	} else {
		scrollToTop();
	}
}

function scrollToFooter() {
	window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}

function scrollToTop() {
	window.scrollTo({ top: 0, behavior: "smooth" });
}
