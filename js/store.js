const tabBtns = document.querySelectorAll('.shop-tab');
const tabContents = document.querySelectorAll('.shop-content');

tabBtns.forEach(btn => {
   btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      btn.classList.add('active');
      document.getElementById(btn.dataset.target).classList.add('active');
   });
});

    const perksData = {
        "VIP": [
            "VIP Prefix in chat",
            "Access to /fly in lobbies",
            "2x Coins multiplier",
            "VIP-only cosmetics",
            "Queue priority"
        ],
        "Diamond": [
            "All VIP features",
            "Diamond Prefix in chat",
            "3x Coins multiplier",
            "Exclusive Diamond cosmetics",
            "Access to Diamond lounge",
            "Daily rewards"
        ],
        "Emerald": [
            "All Diamond features",
            "Emerald Prefix in chat",
            "4x Coins multiplier",
            "Exclusive Emerald cosmetics",
            "Custom nicknames",
            "Weekly crates"
        ],
        "Gold": [
            "All Emerald features",
            "Gold Prefix in chat",
            "5x Coins multiplier",
            "Exclusive Gold cosmetics",
            "Access to Gold exclusive games",
            "Monthly premium crates"
        ],
        "Legend": [
            "All Gold features",
            "Legend Prefix in chat",
            "6x Coins multiplier",
            "Exclusive Legend cosmetics",
            "Custom join messages",
            "Legend particle effects"
        ],
        "Goliath": [
            "All Legend features",
            "Goliath Prefix in chat",
            "10x Coins multiplier",
            "Exclusive Goliath cosmetics",
            "Custom commands",
            "Ultimate Goliath effects",
            "Lifetime benefits"
        ],
        "Victory Dance Pack": [
            "Teabaggging",
            "Griddy",
            "Orange Justice",
            "Exclusive Goliath cosmetics",
            "Custom commands",
            "Ultimate Goliath effects",
            "Lifetime benefits"
        ],
        "Bed Break Effects": [
            "All Legend features",
            "Goliath Prefix in chat",
            "10x Coins multiplier",
            "Exclusive Goliath cosmetics",
            "Custom commands",
            "Ultimate Goliath effects",
            "Lifetime benefits"
        ],
        "Kill Messages": [
            "All Legend features",
            "Goliath Prefix in chat",
            "10x Coins multiplier",
            "Exclusive Goliath cosmetics",
            "Custom commands",
            "Ultimate Goliath effects",
            "Lifetime benefits"
        ],
        "Projectile Trails": [
            "All Legend features",
            "Goliath Prefix in chat",
            "10x Coins multiplier",
            "Exclusive Goliath cosmetics",
            "Custom commands",
            "Ultimate Goliath effects",
            "Lifetime benefits"
        ],
        "1 Hour XP Booster": [
            "Boosts XP for 1 hour, can be used anytime.",
        ],
        "24 Hour Coin Booster": [
            "Boosts your coin production for 1 hour, can be used anytime"
        ],
        "Weekly XP & Coin Booster": [
            "Boosts XP and Coin production for a whole week, can be used anytime"
        ]
    };

    function openDetailsModal(itemName) {
        document.getElementById('detailsTitle').textContent = itemName + " Perks";
        const list = document.getElementById('detailsList');
        list.innerHTML = perksData[itemName]
            ? perksData[itemName].map(perk => `<li>✅ ${perk}</li>`).join('')
            : "<li>No details available.</li>";
        document.getElementById('detailsModal').style.display = 'block';
    }

    function closeDetailsModal() {
        document.getElementById('detailsModal').style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target === document.getElementById('detailsModal')) {
            closeDetailsModal();
        }
        if (event.target === document.getElementById('purchaseModal')) {
            closePurchaseModal();
        }
    };

    // Purchase modal functionality
function openPurchaseModal(rankName, price) {
    document.getElementById('modalTitle').textContent = `Purchase ${rankName} Rank - ${price}`;
    document.getElementById('purchaseModal').style.display = 'block';
}

function closePurchaseModal() {
    document.getElementById('purchaseModal').style.display = 'none';
}

// Payment method selection
document.querySelectorAll('.payment-method').forEach(method => {
    method.addEventListener('click', function() {
        document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('selected'));
        this.classList.add('selected');
    });
});

// Form submission
document.getElementById('purchaseForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const selectedMethod = document.querySelector('.payment-method.selected').dataset.method;

    // Here you would integrate with your payment processor
    alert(`Processing ${selectedMethod} payment for ${username}...\n\nIn a real implementation, this would redirect to your payment processor.`);
});

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('purchaseModal');
    if (event.target === modal) {
        closePurchaseModal();
    }
}