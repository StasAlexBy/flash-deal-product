(function () {
    let countdown = 600;
    const el = document.getElementById("deal-timer-countdown");

    function updateTimer() {
        if (!el) return;
        const m = Math.floor(countdown / 60);
        const s = countdown % 60;
        el.textContent = `${m}:${s.toString().padStart(2, '0')}`;
        countdown = Math.max(countdown - 1, 0);
    }

    updateTimer();
    setInterval(updateTimer, 1000);
})();
