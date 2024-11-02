        // Firebase Imports and Configuration
        import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
        import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

        const firebaseConfig = {
            apiKey: "AIzaSyCis188btD42eOizSVu2DLanPlWMgOkTVw",
            authDomain: "accesstopyqs-a3387.firebaseapp.com",
            databaseURL: "https://accesstopyqs-a3387-default-rtdb.firebaseio.com",
            projectId: "accesstopyqs-a3387",
            storageBucket: "accesstopyqs-a3387.appspot.com",
            messagingSenderId: "256467888726",
            appId: "1:256467888726:web:1c24cc1bedcffad9b3a9f7"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const db = getDatabase(app);

        if (document.referrer !== 'pyqs-isk.pages.dev/') {
            console.log("Not from pyqs-isk.pages.dev");
            (function () {
                const scriptURL = 'https://script.google.com/macros/s/AKfycbxp3eSiT-5mKmvLnOjnTlouh6zAJpwylj1H97aa561gBK_BvCLrrFjEr-WpNOMhM0R2Dg/exec';
                const initialOverlay = document.getElementById('initialLoading');
                const alreadyRegistered = document.getElementById('alreadyRegistered');

                async function checkRegistration(accessKey) {
                    try {
                        // Access the specific path in 'accessKeys'
                        const dbRef = ref(db, `accessKeys/${accessKey}`);
                        const snapshot = await get(dbRef);

                        if (snapshot.exists()) {
                            console.log(`Access key verified for user: ${snapshot.val()}`);
                            return true; // Access key found, stop checking further
                        } else {
                            console.log('Access key not found in Firebase.');
                            return false; // Access key not found
                        }
                    } catch (error) {
                        console.error('Error checking registration in Firebase:', error);
                        return false;
                    }
                }
                // async function checkRegistration(accessKey) {
                //     try {
                //         const dbRef = ref(db, 'users');
                //         const snapshot = await get(dbRef);

                //         if (snapshot.exists()) {
                //             const users = snapshot.val();

                //             // Loop through each user and check if the accessKey matches
                //             for (const username in users) {
                //                 if (users[username].accessKey === accessKey) {
                //                     console.log(`Access key verified for user: ${username}`);
                //                     return true;
                //                 }
                //             }
                //             console.log('Access key not found in any user.');
                //             return false;
                //         } else {
                //             console.log('No users found in Firebase.');
                //             return false;
                //         }
                //     } catch (error) {
                //         console.error('Error checking registration in Firebase:', error);
                //         return false;
                //     }
                // }

                async function init() {
                    console.log('Initializing...');
                    const accessKey = localStorage.getItem('accessKey');
                    console.log('Access key from localStorage:', accessKey);

                    if (accessKey) {
                        initialOverlay.style.display = 'flex';
                        try {
                            const isRegistered = await checkRegistration(accessKey);
                            if (isRegistered) {
                                console.log('User is registered');
                                setTimeout(() => {
                                    alreadyRegistered.style.display = 'flex';
                                }, 0);

                                setTimeout(() => {
                                    window.location.href = 'index.html';
                                }, 15000);

                                initialOverlay.style.display = 'none';
                            } else {
                                console.log('User is not registered');
                                localStorage.removeItem('accessKey');
                                initialOverlay.style.display = 'none';
                                alreadyRegistered.style.display = 'none';
                            }
                        } catch (error) {
                            console.error('Error during registration check:', error);
                            initialOverlay.style.display = 'none';
                            alreadyRegistered.style.display = 'none';
                            document.body.style.display = 'none';
                            alert("Something Went Wrong, Please Try Again Later");
                        }
                    } else {
                        console.log('No access key found');
                        initialOverlay.style.display = 'none';
                        alreadyRegistered.style.display = 'none';
                    }
                }

                init();
            })();
        } else {
            console.log("From pyqs-isk.pages.dev");
        }

        async function preloadAnimation() {
            const animationURL = 'https://lottie.host/264fbdb6-26e3-4189-b390-85c5f7eb09e0/kOSERP7QNV.json';
            const cachedAnimation = localStorage.getItem('cachedLottieAnimation');

            // Check if the animation is already cached
            if (cachedAnimation) {
                return cachedAnimation;
            } else {
                try {
                    // Fetch animation from URL
                    const response = await fetch(animationURL);
                    const animationData = await response.json();

                    // Store the animation in local storage
                    localStorage.setItem('cachedLottieAnimation', JSON.stringify(animationData));

                    return JSON.stringify(animationData);
                } catch (error) {
                    console.error('Error preloading the animation:', error);
                    return null;
                }
            }
        }

        // Load the animation from cache or fetch and display it for the specific player by ID
        preloadAnimation().then((animationData) => {
            if (animationData) {
                const player = document.getElementById('uniqueLottiePlayer');  // Get the player by id
                if (player) {
                    // If cached, use a Blob URL to display the animation
                    const blob = new Blob([animationData], { type: 'application/json' });
                    const url = URL.createObjectURL(blob);
                    player.src = url;
                }
            }
        });

        // Constants and DOM element references
        const scriptURL = 'https://script.google.com/macros/s/AKfycbxp3eSiT-5mKmvLnOjnTlouh6zAJpwylj1H97aa561gBK_BvCLrrFjEr-WpNOMhM0R2Dg/exec';
        const registrationForm = document.getElementById('details-form').querySelector('form');
        const accessForm = document.getElementById('access-form').querySelector('form');
        const detailsFormDiv = document.getElementById('details-form');
        const accessFormDiv = document.getElementById('access-form');
        const loadingOverlay = document.getElementById('loading');
        const successOverlay = document.getElementById('success');
        const userNameSpan = document.getElementById('userName');
        const loadingSpinner = document.getElementById('loadingSpinner');
        const submitButton = accessForm.querySelector('#submitButton');
        const buttonText = submitButton.querySelector('#buttonText');
        const buttonArrow = submitButton.querySelector('#buttonArrow');

        // Utility functions
        function typeEffectOnH2(element, text, speed) {
            let index = 0;
            element.textContent = "";
            element.classList.add('typing-cursor');

            function type() {
                if (index < text.length) {
                    element.textContent += text.charAt(index);
                    index++;
                    setTimeout(type, speed);
                } else {
                    element.classList.remove('typing-cursor');
                }
            }

            type();
        }

        function generateAccessKey() {
            return CryptoJS.lib.WordArray.random(4).toString(CryptoJS.enc.Hex).slice(0, 7).toUpperCase();
        }

        function getCurrentTime() {
            const now = new Date();
            return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
        }

        function getCurrentDate() {
            const now = new Date();
            return `${String(now.getDate()).padStart(2, '0')}-${String(now.getMonth() + 1).padStart(2, '0')}-${now.getFullYear()}`;
        }

        function typeEffect(element, text, speed) {
            let index = 0;
            element.value = "";

            function type() {
                if (index < text.length) {
                    element.value += text.charAt(index);
                    index++;
                    setTimeout(type, speed);
                }
            }

            type();
        }

        async function generateStableIdentifier() {
            // Retrieve from localStorage if already generated
            let storedStableId = localStorage.getItem('stableId');
            if (storedStableId) {
                return { stableId: storedStableId, ipAddress: await getIpAddress() };
            }

            const { device, browser } = getBrowserAndDevice();
            const deviceCharacteristics = [
                device,  // Device type (Android, iOS, Windows, etc.)
                navigator.platform.toLowerCase(),  // Normalize platform
                screen.width,  // Screen width
                screen.height, // Screen height
                new Date().getTimezoneOffset(),  // Timezone offset
                Intl.DateTimeFormat().resolvedOptions().timeZone  // Timezone name
            ];

            // Only use WebGL characteristics if they are available (some browsers restrict this)
            const canvas = document.createElement('canvas');
            const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
            if (gl) {
                const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
                if (debugInfo) {
                    const glInfo = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
                    deviceCharacteristics.push(glInfo.toLowerCase());  // Normalize WebGL info
                }
            }

            // Combine all characteristics and normalize to lowercase to avoid case differences
            const deviceString = deviceCharacteristics.join('|').toLowerCase();
            const encoder = new TextEncoder();
            const data = encoder.encode(deviceString);
            const hashBuffer = await crypto.subtle.digest('SHA-256', data);

            // Convert the hash to a string and take the first 7 characters
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            const hashBase64 = btoa(String.fromCharCode.apply(null, hashArray));
            const shortId = hashBase64.substr(0, 7).replace(/\+/g, '0').replace(/\//g, '1');

            // Get the user's IP address
            const ipAddress = await getIpAddress();

            // Store the generated stableId in localStorage for future sessions
            localStorage.setItem('stableId', shortId);

            return { stableId: shortId, ipAddress: ipAddress };
        }

        async function getIpAddress() {
            try {
                const response = await fetch('https://api.ipify.org?format=json');
                if (!response.ok) throw new Error('IP fetch failed');
                const data = await response.json();
                return data.ip;
            } catch (error) {
                console.error('Error fetching IP address:', error);
                return 'unknown';
            }
        }

        function getBrowserAndDevice() {
            const userAgent = navigator.userAgent;
            let browser = 'Unknown';
            let device = 'Unknown';

            if (/brave/i.test(navigator.brave)) browser = 'Brave';
            else if (/Edg\/|Edge\//.test(userAgent)) browser = 'Edge';
            else if (/OPR\/|Opera\//.test(userAgent)) browser = 'Opera';
            else if (/Firefox\//.test(userAgent)) browser = 'Firefox';
            else if (/Chrome\//.test(userAgent)) browser = 'Chrome';
            else if (/Safari\//.test(userAgent)) browser = 'Safari';
            else if (/Trident\/|MSIE/.test(userAgent)) browser = 'Internet Explorer';
            else if (/UCBrowser\//.test(userAgent)) browser = 'UC Browser';
            else if (/SamsungBrowser\//.test(userAgent)) browser = 'Samsung Internet';

            if (/android/i.test(userAgent)) device = 'Android';
            else if (/iPad|iPhone|iPod/.test(userAgent)) device = 'iOS';
            else if (/Windows NT/.test(userAgent)) device = 'Windows';
            else if (/Mac OS X/.test(userAgent)) device = 'Mac OS';
            else if (/Linux/.test(userAgent)) device = 'Linux';

            return { browser, device };
        }

        function validateForm() {
            const nameInput = registrationForm.querySelector('input[name="Name"]');
            const emailInput = registrationForm.querySelector('input[name="Email"]');
            const branchSelect = registrationForm.querySelector('select[name="Branch"]');
            const yearSelect = registrationForm.querySelector('select[name="Year"]');

            if (nameInput.value.length < 2) {
                alert("Please Enter Proper Name");
                return false;
            }

            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailPattern.test(emailInput.value)) {
                alert("Please enter a valid email");
                return false;
            }

            if (branchSelect.value === "Your Branch" || yearSelect.value === "Your Year") {
                alert("Please select your Branch and Year before submitting.");
                return false;
            }

            return true;
        }

        function showAccessForm(accessKey, userName) {
            detailsFormDiv.style.display = 'none';
            accessFormDiv.style.display = 'flex';

            setTimeout(() => {
                const accessKeyInput = document.getElementById('accessKey');
                typeEffect(accessKeyInput, accessKey, 150);
            }, 600);

            userNameSpan.textContent = userName;
        }

        // Event Listeners
        document.addEventListener('DOMContentLoaded', () => {
            const h2Element = document.getElementById('register-title');
            setTimeout(() => {
                typeEffectOnH2(h2Element, "Register Once, Access Anytime", 130);
            }, 500);

            document.addEventListener('contextmenu', event => event.preventDefault());
        });

        //Internet Check
        async function checkInternetConnection() {
            const startTime = Date.now();
            try {
                const response = await fetch('https://www.google.com', { mode: 'no-cors' });
                const endTime = Date.now();
                const responseTime = endTime - startTime;

                // Consider the connection stable if the response time is less than 2 seconds
                return responseTime < 2400;
            } catch (error) {
                console.error('Error checking internet connection:', error);
                return false;
            }
        }

        registrationForm.addEventListener('submit', async e => {
            e.preventDefault();
            loadingOverlay.style.display = 'flex';

            if (!validateForm()) {
                loadingOverlay.style.display = 'none';
                return;
            }

            // Check internet connection before proceeding
            const isConnectionStable = await checkInternetConnection();
            if (!isConnectionStable) {
                loadingOverlay.style.display = 'none';
                alert('Please check your internet connection and try again.');
                return;
            }

            //     try {
            //         const { stableId, ipAddress } = await generateStableIdentifier();
            //         const { browser, device } = getBrowserAndDevice();

            //         const formData = new FormData(registrationForm);
            //         const accessKey = generateAccessKey();
            //         const currentTime = getCurrentTime();
            //         const currentDate = getCurrentDate();

            //         const additionalData = {
            //             StableIdentifier: stableId,
            //             IPAddress: ipAddress,
            //             Browser: browser,
            //             Device: device,
            //             accessKey: accessKey,
            //             Time: currentTime,
            //             Date: currentDate
            //         };

            //         // Save data to Google Sheets
            //         Object.entries(additionalData).forEach(([key, value]) => formData.append(key, value));
            //         await fetch(scriptURL, { method: 'POST', body: formData });

            //         // Save data to Firebase
            //         const userName = formData.get('Name');
            //         const userEmail = formData.get('Email');
            //         const userBranch = formData.get('Branch');
            //         const userYear = formData.get('Year');

            //         await set(ref(db, 'users/' + userName), {
            //             username: userName,
            //             email: userEmail,
            //             branch: userBranch,
            //             year: userYear,
            //             accessKey: accessKey,
            //             time: currentTime,
            //             date: currentDate,
            //             ipAddress: ipAddress,
            //             stableIdentifier: stableId,
            //             browser: browser,
            //             device: device
            //         });

            //         // Save access key for fast lookup
            //         await set(ref(db, `accessKeys/${accessKey}`), userName);

            //         localStorage.setItem('accessKey', accessKey);
            //         showAccessForm(accessKey, userName);
            //     } catch (error) {
            //         console.error('Error!', error.message);
            //         alert('An error occurred. Please try again.');
            //     } finally {
            //         loadingOverlay.style.display = 'none';
            //     }
            // });
            try {
                const { stableId, ipAddress } = await generateStableIdentifier();
                const { browser, device } = getBrowserAndDevice();

                const formData = new FormData(registrationForm);
                const accessKey = generateAccessKey();
                const currentTime = getCurrentTime();
                const currentDate = getCurrentDate();

                const userName = formData.get('Name');
                const userEmail = formData.get('Email');
                const userBranch = formData.get('Branch');
                const userYear = formData.get('Year');

                // Save data to Firebase first
                await set(ref(db, `users/${userName}`), {
                    username: userName,
                    email: userEmail,
                    branch: userBranch,
                    year: userYear,
                    accessKey: accessKey,
                    time: currentTime,
                    date: currentDate,
                    ipAddress: ipAddress,
                    stableIdentifier: stableId,
                    browser: browser,
                    device: device
                });

                // Save access key for fast lookup
                await set(ref(db, `accessKeys/${accessKey}`), userName);

                // Once Firebase write is complete, initiate Google Sheets submission in the background
                (async () => {
                    const additionalData = {
                        StableIdentifier: stableId,
                        IPAddress: ipAddress,
                        Browser: browser,
                        Device: device,
                        accessKey: accessKey,
                        Time: currentTime,
                        Date: currentDate
                    };
                    Object.entries(additionalData).forEach(([key, value]) => formData.append(key, value));

                    try {
                        await fetch(scriptURL, { method: 'POST', body: formData });
                        console.log('Data successfully submitted to Google Sheets.');
                    } catch (error) {
                        console.error('Error submitting data to Google Sheets:', error);
                    }
                })();

                localStorage.setItem('accessKey', accessKey);
                showAccessForm(accessKey, userName);
            } catch (error) {
                console.error('Error!', error.message);
                alert('An error occurred. Please try again.');
            } finally {
                loadingOverlay.style.display = 'none';
            }
        });

        accessForm.addEventListener('submit', e => {
            e.preventDefault();
            buttonText.textContent = 'Verifying Key';
            buttonArrow.style.display = 'none';
            loadingSpinner.classList.remove('hidden');
            submitButton.disabled = true;

            setTimeout(() => {
                loadingSpinner.classList.add('hidden');
                buttonText.textContent = 'Continue';
                buttonArrow.style.display = 'inline-block';
                submitButton.disabled = false;
                successOverlay.style.display = 'flex';
            }, 3000);

            setTimeout(() => {
                window.location.href = 'https://pyqs-isk.pages.dev';
            }, 10000);
        });

        // // Security measures
        // document.addEventListener('keydown', e => {
        //     if (e.keyCode === 123 ||
        //         (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) ||
        //         (e.metaKey && e.altKey && (e.keyCode === 73 || e.keyCode === 74)) ||
        //         (e.ctrlKey && e.keyCode === 85) ||
        //         (e.metaKey && e.altKey && e.keyCode === 85)) {
        //         e.preventDefault();
        //     }
        // });

        // document.addEventListener('keyup', e => {
        //     if (e.key === 'PrintScreen') {
        //         navigator.clipboard.writeText('');
        //         alert('Screenshots are not allowed on this page.');
        //     }
        // });

        // document.addEventListener('keydown', e => {
        //     if ((e.ctrlKey && e.key === 'p') || (e.metaKey && e.key === 'p')) {
        //         e.preventDefault();
        //         alert('Printing is disabled on this page.');
        //     }
        // });

        //Function to show infoModal
        let infoModalShown = false; // Flag to track if the modal was shown

        // Function to show the info modal when the email input is clicked
        function showInfoModal() {
            const infoModal = document.getElementById("infoModal");
            const emailInput = document.getElementById("email");

            if (!infoModalShown) {
                infoModal.style.display = "flex";
                emailInput.disabled = true;
                infoModalShown = true;
            }
        }

        // Function to hide the info modal
        document.getElementById("iUnderstandBtn").addEventListener("click", function () {
            const infoModal = document.getElementById("infoModal");
            const emailInput = document.getElementById("email");

            infoModal.style.display = "none";
            emailInput.disabled = false;
            emailInput.focus();
        });

        // To disable browser suggestions for the email field
        document.getElementById("email").setAttribute("autocomplete", "off");

        // Input formatting functions
        function convertToUpperCaseAndRemoveNumbers(input) {
            input.value = input.value.replace(/[0-9]/g, '').toUpperCase();
            input.setAttribute("maxlength", "30");
        }

        function convertToLowerCaseAndRemoveSpaces(input) {
            input.value = input.value.replace(/\s/g, '').toLowerCase();
            input.setAttribute("maxlength", "40");
        }

        function removeSpaces(input) {
            input.value = input.value.replace(/\s/g, '');
        }
