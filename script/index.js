window.addEventListener('DOMContentLoaded', function () {
    var alertElement = document.getElementById('alert-border-3');
    alertElement.classList.add('fade-in', 'show');

    setTimeout(function () {
        alertElement.classList.remove('fade-in');
        alertElement.classList.add('fade-out');
        setTimeout(function () {
            alertElement.remove();
        }, 500);
    }, 6300);
});

// //RCR
// document.addEventListener('DOMContentLoaded', function () {
//     document.addEventListener('contextmenu', function (event) {
//         event.preventDefault();
//     });
// });

// //DMR win&Max
// document.addEventListener('keydown', function (e) {
//     // Disable F12 key (developer tools)
//     if (e.keyCode === 123) {
//         e.preventDefault();
//     }
//     // Disable Ctrl+Shift+I and Ctrl+Shift+J (developer tools) for Windows
//     if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) {
//         e.preventDefault();
//     }
//     // Disable Command+Option+I and Command+Option+J (developer tools) for macOS
//     if (e.metaKey && e.altKey && (e.keyCode === 73 || e.keyCode === 74)) {
//         e.preventDefault();
//     }
//     // Disable Ctrl+U (view source) for Windows
//     if (e.ctrlKey && e.keyCode === 85) {
//         e.preventDefault();
//     }
//     // Disable Command+Option+U (view source) for macOS
//     if (e.metaKey && e.altKey && e.keyCode === 85) {
//         e.preventDefault();
//     }
// });

// //SSR
// document.addEventListener('keyup', function (e) {
//     if (e.key === 'PrintScreen') {
//         navigator.clipboard.writeText('');
//         alert('Screenshots are not allowed on this page.');
//     }
// });

// //Ctr+P RES. win&Mac
// document.addEventListener('keydown', function (e) {
//     // Check for Ctrl+P on Windows and Command+P on macOS
//     if ((e.ctrlKey && e.key === 'p') || (e.metaKey && e.key === 'p')) {
//         e.preventDefault();
//         alert('Printing is disabled on this page.');
//     }
// });
