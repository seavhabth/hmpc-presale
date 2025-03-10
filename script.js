// Countdown Timer
const countDownDate = new Date("Jan 1, 2025 00:00:00").getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = 
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "PRESALE LIVE!";
    }
}, 1000);

// Buy Button Interaction
document.getElementById("buyButton").addEventListener("click", function() {
    alert("🚀 Connecting to presale contract... (fake interaction)");
    // Add actual Web3 integration here
});
