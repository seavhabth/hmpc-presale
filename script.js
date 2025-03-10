// Price Chart
const ctx = document.getElementById('priceChart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'DOGEM Price',
            data: [0.001, 0.0025, 0.0018, 0.003, 0.004, 0.005],
            borderColor: '#4ecdc4',
            tension: 0.4
        }]
    }
});

// Real-time Price Ticker
function updatePrice() {
    const priceChange = (Math.random() - 0.5) * 20;
    const newPrice = 0.0001 * (1 + priceChange/100);
    const ticker = document.getElementById('priceTicker');
    ticker.innerHTML = `LIVE PRICE: $${newPrice.toFixed(4)} ` + 
                       `<span style="color: ${priceChange >= 0 ? '#4ecdc4' : '#ff6b6b'}">` +
                       `${priceChange.toFixed(1)}%</span>`;
}
setInterval(updatePrice, 3000);

// Enhanced Wallet Connection
let isConnected = false;
let currentAccount = null;

const connectWallet = async () => {
    if (window.ethereum) {
        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            currentAccount = accounts[0];
            isConnected = true;
            updateWalletStatus();
            initPurchaseInterface();
        } catch (error) {
            console.error(error);
        }
    } else {
        alert("Please install MetaMask!");
    }
};

function updateWalletStatus() {
    const statusElement = document.getElementById('walletStatus');
    statusElement.textContent = isConnected ? 
        `🟢 Connected: ${currentAccount.substring(0, 6)}...` : 
        '🔴 Not Connected';
    statusElement.style.background = isConnected ? '#4ecdc4' : '#ff6b6b';
}

// Purchase Functionality
function initPurchaseInterface() {
    const buySection = document.createElement('div');
    buySection.innerHTML = `
        <div class="purchase-interface">
            <h3>Buy DOGEM</h3>
            <input type="number" id="ethAmount" placeholder="ETH amount">
            <button onclick="executePurchase()">Buy Now</button>
            <p>Est. DOGEM: <span id="estimation">0</span></p>
        </div>
    `;
    document.main.appendChild(buySection);
}

async function executePurchase() {
    const ethAmount = document.getElementById('ethAmount').value;
    if (!ethAmount || ethAmount <= 0) return;
    
    // Simulated purchase flow
    try {
        const rate = await getCurrentRate(); // Replace with actual contract call
        const tokens = ethAmount * rate;
        alert(`Successfully purchased ${tokens.toFixed(2)} DOGEM!`);
    } catch (error) {
        console.error('Purchase failed:', error);
    }
}

// Replace with actual contract interaction
async function getCurrentRate() {
    return 10000; // 1 ETH = 10,000 DOGEM
}

// Initialize
document.getElementById('buyButton').addEventListener('click', connectWallet);
