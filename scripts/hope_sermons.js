document.addEventListener('DOMContentLoaded', () => {
    const sermonIndex = document.querySelector('#sermons-index');
    if (sermonIndex) {
        sermonIndex.scrollIntoView({ block: "start" });
    }
});
