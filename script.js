function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active-page'));

    // Remove active status from all buttons
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Show selected page
    document.getElementById(pageId).classList.add('active-page');

    // Highlight button in navbar corresponding to pageId
    const activeBtn = Array.from(document.querySelectorAll('.nav-btn')).find(
        btn => btn.getAttribute('onclick') === `showPage('${pageId}')`
    );
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}