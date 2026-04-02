const Monitor = (() => {
    const endpoints = [
        { name: "Global Auth", url: "auth.api.com" },
        { name: "Content Delivery", url: "cdn.nexus.net" },
        { name: "User DB", url: "db.primary.local" },
        { name: "Payment Gateway", url: "pay.secure.io" }
    ];

    const UI = {
        grid: document.querySelector('#main-monitor')
    };

    const updateUI = () => {
        UI.grid.innerHTML = endpoints.map(end => `
            <article class="api-card">
                <header>
                    <h3>${end.name}</h3>
                    <code>${end.url}</code>
                </header>
                <div class="ping-display">${Math.floor(Math.random() * 50) + 10}ms</div>
                <footer>
                    <span class="status-dot"></span> Active
                </footer>
            </article>
        `).join('');
    };

    const init = () => {
        // Initial render after a fake load
        setTimeout(() => {
            updateUI();
            // Refresh stats every 5 seconds
            setInterval(updateUI, 5000);
        }, 1000);
        
        // Event Delegation for card clicks
        UI.grid.addEventListener('click', (e) => {
            const card = e.target.closest('.api-card');
            if (card) {
                console.log(`Inspecting details for: ${card.querySelector('h3').innerText}`);
            }
        });
    };

    return { init };
})();

document.addEventListener('DOMContentLoaded', Monitor.init);
