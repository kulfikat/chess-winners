// Handle form submission on the homepage
document.getElementById('compare-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the player names
    const playerA = document.getElementById('playerA').value;
    const playerB = document.getElementById('playerB').value;

    // Redirect to comparison.html with player names in the URL
    window.location.href = `comparison.html?playerA=${playerA}&playerB=${playerB}`;
});

// On the comparison page, display the player names and basic stats
if (window.location.pathname.includes('comparison.html')) {
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const playerA = urlParams.get('playerA');
    const playerB = urlParams.get('playerB');

    // Display the player names
    document.getElementById('playerA-name').innerText = playerA;
    document.getElementById('playerB-name').innerText = playerB;
    document.getElementById('playerA-name-stats').innerText = playerA;
    document.getElementById('playerB-name-stats').innerText = playerB;

    // Dummy Data: Replace this with real data or API integration later
    const dummyData = {
        winsA: 10,
        winsB: 8,
        draws: 5,
        lastYear: "Player A: 3 Wins, Player B: 1 Win, 2 Draws",
        last5Years: "Player A: 8 Wins, Player B: 7 Wins, 3 Draws"
    };

    // Display the stats
    document.getElementById('winsA').innerText = dummyData.winsA;
    document.getElementById('winsB').innerText = dummyData.winsB;
    document.getElementById('draws').innerText = dummyData.draws;
    document.getElementById('last-year-stats').innerText = dummyData.lastYear;
    document.getElementById('last-5-years-stats').innerText = dummyData.last5Years;
}

