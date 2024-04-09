document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const visible_container = Array.from(document.querySelectorAll('[data-container="article-frame"]')) // Replace with your selector
            .filter(item => item.offsetParent !== null);
        const text_container = visible_container[0];
        console.log("triggered", anchor.getAttribute('href').substring(1));
        e.preventDefault();
        const block = document.getElementById(anchor.getAttribute('href').substring(1));
        if (block) {
            console.log(text_container, block);
            text_container.scrollTop = block.offsetTop;
        }
    });
});