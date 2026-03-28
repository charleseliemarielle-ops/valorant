const fakeUsers = ["Viper_Main", "JettAce99", "RadiantSmurf", "LowEloKing", "SkinHunter", "VandalLover", "RiotEmployee04", "PhoenixBurner"];
const fakeSkins = [
    { name: "Kuronami Vandal", img: "https://valorant-api.com/media/v1/displayicons/weapons/vandal/kuronami.png" },
    { name: "Reaver Karambit", img: "https://valorant-api.com/media/v1/displayicons/weapons/melee/reaver.png" },
    { name: "Oni Phantom", img: "https://valorant-api.com/media/v1/displayicons/weapons/phantom/oni.png" },
    { name: "Prime 2.0 Odin", img: "https://valorant-api.com/media/v1/displayicons/weapons/odin/prime.png" }
];

function showNotification() {
    const container = document.getElementById('notification-container');
    const user = fakeUsers[Math.floor(Math.random() * fakeUsers.length)];
    const skin = fakeSkins[Math.floor(Math.random() * fakeSkins.length)];

    document.getElementById('notif-user-name').innerText = user;
    document.getElementById('notif-skin-name').innerText = skin.name;
    document.getElementById('notif-skin-img').src = skin.img;

    container.classList.add('active');

    // On cache la notification après 5 secondes
    setTimeout(() => {
        container.classList.remove('active');
    }, 5000);

    // On relance la prochaine notification après un délai aléatoire
    setTimeout(showNotification, Math.random() * (25000 - 10000) + 10000);
}

// Lancer le cycle après 3 secondes sur le site
setTimeout(showNotification, 3000);
