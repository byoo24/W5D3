function sermonsJumpToIndex() {
    const sermonIndex = document.querySelector('#sermons-index');
    sermonIndex.scrollIntoView({ block: "start" });
}


if (document.readyState === 'loading') {  // Loading hasn't finished yet
    document.addEventListener('DOMContentLoaded', sermonsJumpToIndex);
} else {  // `DOMContentLoaded` has already fired
    sermonsJumpToIndex();
}