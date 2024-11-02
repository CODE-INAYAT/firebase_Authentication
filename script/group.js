document.addEventListener('DOMContentLoaded', function () {
    var loadingOverlay = document.getElementById('loading');
    var successOverlay = document.getElementById('success');
    var okButton = document.getElementById('okButton');

    var links = document.querySelectorAll('#card a');
    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            showLoadingOverlay();

            // Simulate a 3-second delay
            setTimeout(function () {
                hideLoadingOverlay();
                window.location.href = event.target.getAttribute('href');
                showSuccessOverlay();
            }, 3000);
        });
    });

    okButton.addEventListener('click', function () {
        hideSuccessOverlay();
    });

    function showLoadingOverlay() {
        loadingOverlay.style.display = 'flex';
    }

    function hideLoadingOverlay() {
        loadingOverlay.style.display = 'none';
    }

    function showSuccessOverlay() {
        successOverlay.style.display = 'flex';
    }

    function hideSuccessOverlay() {
        successOverlay.style.display = 'none';
    }
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
