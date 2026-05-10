// member.js - The Last Wish Elite Membership Platform

// 1. Particle Background Logic
function createParticles() {
    const container = document.getElementById('particles-container');
    if (!container) return;
    const particleCount = 60;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 2 + 1 + 'px';
        particle.style.width = size;
        particle.style.height = size;
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDuration = Math.random() * 15 + 15 + 's';
        particle.style.animationDelay = Math.random() * 10 + 's';
        container.appendChild(particle);
    }
}

// 2. Journey Data Generation (30 Days)
const JOURNEY_DATA = [];

const dailyThemes = [
    { day: 1, title: "The Silent Threshold", focus: "Releasing Stress", color: "gold" },
    { day: 2, title: "Vibrational Clearing", focus: "Opening Receptivity", color: "gold" },
    { day: 3, title: "The Survival Switch", focus: "Calming the Nervous System", color: "gold" },
    { day: 4, title: "Ancestral Weight", focus: "Emotional Awareness", color: "gold" },
    { day: 5, title: "The Still Point", focus: "Presence & Relaxation", color: "gold" },
    { day: 6, title: "Decoding Lack", focus: "Scarcity Rewiring", color: "gold" },
    { day: 7, title: "The Receiver's Code", focus: "Receiving Abundance", color: "gold" },
    { day: 8, title: "Architectural Wealth", focus: "Wealth Consciousness", color: "gold" },
    { day: 9, title: "The Value Mirror", focus: "Self-Worth Expansion", color: "gold" },
    { day: 10, title: "Emotional Alignment", focus: "Vibrational Harmony", color: "gold" },
    { day: 11, title: "The Magnetic Core", focus: "Opportunity Magnetism", color: "gold" },
    { day: 12, title: "Lion's Frequency", focus: "Confidence Activation", color: "gold" },
    { day: 13, title: "Ethereal Elevation", focus: "Frequency Elevation", color: "gold" },
    { day: 14, title: "Quantum Shifting", focus: "Identity Shifting", color: "gold" },
    { day: 15, title: "The Power Center", focus: "Emotional Power", color: "gold" },
    { day: 16, title: "Shadow Programming", focus: "Subconscious Cleaning", color: "gold" },
    { day: 17, title: "Boundary Expansion", focus: "Personal Expansion", color: "gold" },
    { day: 18, title: "Living Abundance", focus: "Abundance Embodiment", color: "gold" },
    { day: 19, title: "The Energy Alchemist", focus: "Energy Mastery", color: "gold" },
    { day: 20, title: "Vibrational Certainty", focus: "Emotional Certainty", color: "gold" },
    { day: 21, title: "The Millionaire Mindset", focus: "Wealth Identity Integration", color: "gold" },
    { day: 22, title: "Uncompromising Standards", focus: "Higher Standards", color: "gold" },
    { day: 23, title: "Prosperity Design", focus: "Prosperity Lifestyle", color: "gold" },
    { day: 24, title: "The Inner Authority", focus: "Inner Power", color: "gold" },
    { day: 25, title: "Sovereign Presence", focus: "Magnetic Presence", color: "gold" },
    { day: 26, title: "The Great Awakening", focus: "Total Transformation", color: "gold" },
    { day: 27, title: "Shattering the Ceiling", focus: "New Self-Concept", color: "gold" },
    { day: 28, title: "Permanent Abundance", focus: "Eternal State", color: "gold" },
    { day: 29, title: "The Final Surrender", focus: "Emotional Liberation", color: "gold" },
    { day: 30, title: "THE LAST WISH", focus: "Ascension & Fulfillment", color: "gold" }
];

function generateDetailedContent(dayInfo) {
    const d = dayInfo.day;
    const t = dayInfo.title;
    const f = dayInfo.focus;

    return {
        id: `day${d}`,
        title: t,
        day: `Day ${d < 10 ? '0' + d : d}`,
        focus: f,
        summary: `Complete immersion into ${f.toLowerCase()}. This module contains advanced protocols for your transformation.`,
        content: `
            <div class="lesson-header">
                <span class="module-tag">${f}</span>
                <h2>${t}</h2>
                <div class="visualizer">
                    <div class="v-bar"></div><div class="v-bar"></div><div class="v-bar"></div><div class="v-bar"></div><div class="v-bar"></div>
                </div>
            </div>

            <section class="lesson-section">
                <h3>Daily Introduction</h3>
                <div class="lesson-body-text">
                    <p>Welcome to Day ${d}. You are standing at the edge of a significant internal shift. Today's focus is <strong>${f}</strong>. This is not just a lesson; it is a cinematic unfolding of your own potential. As you progress through these 30 days, remember that the "The Last Wish" is not something you obtain, but something you become.</p>
                </div>
            </section>

            <section class="lesson-section">
                <h3>Today's Teaching</h3>
                <div class="lesson-body-text">
                    <p>In this module, we dive deep into the mechanics of ${f.toLowerCase()}. Wealth is a state of being. Scarcity is a trauma response. When we focus on ${f}, we are essentially retraining your nervous system to accept luxury as a natural environment.</p>
                </div>
            </section>

            <section class="lesson-section">
                <h3>${d === 30 ? 'The Final Ascension' : 'The Activation Ritual'}</h3>
                <div class="ritual-box" style="${d === 30 ? 'background: linear-gradient(135deg, var(--bg-black) 0%, var(--accent-purple) 100%); border: 2px solid var(--gold-primary);' : ''}">
                    <h4 style="color: var(--gold-primary); margin-bottom: 20px;">${d === 30 ? 'THE LAST WISH: FINAL RITUAL' : `Guided Process: ${t} Activation`}</h4>
                    <p style="margin-bottom: 20px;">${d === 30 ? 'This is the moment you were born for. The culmination of 30 days of vibrational death and rebirth.' : 'Find a place of absolute stillness.'}</p>
                    <ul style="text-align: left; max-width: 500px; margin: 0 auto 30px; list-style: none;">
                        ${d === 30 ? `
                        <li>✧ <strong>The Surrender:</strong> Completely letting go of the person who started on Day 01.</li>
                        <li>✧ <strong>The Anchor:</strong> Feeling the gold light not just as a visual, but as your new physical state.</li>
                        <li>✧ <strong>The Declaration:</strong> "I am the reality I have chosen."</li>
                        ` : `
                        <li>✧ <strong>Breath:</strong> 4-7-8 breathing technique.</li>
                        <li>✧ <strong>Relaxation:</strong> Visualizing a golden liquid entering through the crown.</li>
                        <li>✧ <strong>Release:</strong> Consciously exhaling old frequencies.</li>
                        `}
                    </ul>
                </div>
            </section>

            <section class="lesson-section">
                <h3>Premium Affirmations</h3>
                <div class="affirmation-grid">
                    <div class="affirmation-item">I am the architect of my reality.</div>
                    <div class="affirmation-item">Abundance is my birthright.</div>
                    <div class="affirmation-item">I vibrate at the frequency of luxury.</div>
                    <div class="affirmation-item">Opportunities seek me out.</div>
                </div>
            </section>

            <section class="lesson-section" style="text-align:center;">
                <button class="btn-gold" style="padding: 20px 60px;">START AUDIO SESSION</button>
            </section>
        `
    };
}

// 3. COMPLETE PREMIUM BONUS CONTENT
const BONUS_DATA = [
    {
        id: 'b1',
        title: "The Official Last Wish Guide",
        tag: "ELITE INITIATION",
        summary: "The master manual for your 30-day cinematic transformation.",
        content: `
            <div class="lesson-header">
                <span class="module-tag">MASTER MANUAL</span>
                <h2>The Official Last Wish Guide</h2>
                <div class="visualizer">
                    <div class="v-bar"></div><div class="v-bar"></div><div class="v-bar"></div>
                </div>
            </div>

            <section class="lesson-section">
                <h3>Welcome Message: The Chosen Path</h3>
                <div class="lesson-body-text">
                    <p>You were not led here by chance. In a world of noise, you found a frequency. <strong>The Last Wish</strong> is not just a program; it is an initiation into the version of yourself that already possesses everything you desire.</p>
                    <div class="luxury-quote">
                        "Your presence here is a testament to your readiness. The door is open, but you must be willing to walk through it as a different person."
                    </div>
                    <p>This guide is your secret manual. It contains the architectural plans for your new reality. Treat every word as a vibrational key.</p>
                </div>
            </section>

            <section class="lesson-section">
                <h3>How the Experience Works</h3>
                <div class="lesson-body-text">
                    <p>The transformation occurs in three distinct layers: <strong>Consistency, Immersion, and Alignment.</strong></p>
                    <ul>
                        <li><strong>Consistency:</strong> The brain requires 30 days to bypass the critical factor of the conscious mind. Do not miss a single day.</li>
                        <li><strong>Frequency Immersion:</strong> Every audio session is embedded with binaural technology that re-tunes your pineal gland.</li>
                        <li><strong>Nighttime Rituals:</strong> Your subconscious is most receptive in the "Hypnagogic State" just before sleep. This is when the real work happens.</li>
                    </ul>
                </div>
            </section>

            <section class="lesson-section">
                <h3>Preparing Your Sanctuary</h3>
                <div class="ritual-box">
                    <h4>The Immersion Protocol</h4>
                    <ul style="text-align: left; max-width: 600px; margin: 20px auto;">
                        <li>✧ <strong>Zero Light:</strong> Use a sleep mask or a blacked-out room. Light interferes with DMT production in the pineal gland.</li>
                        <li>✧ <strong>Spatial Audio:</strong> High-quality headphones are mandatory. The frequencies are designed to move through your energetic field.</li>
                        <li>✧ <strong>Body Stillness:</strong> Adopt the "Savasana" position. Keep your spine straight to allow the frequency to move through your central nervous system.</li>
                    </ul>
                </div>
            </section>

            <section class="lesson-section">
                <h3>Common Mistakes & Acceleration Tips</h3>
                <div class="action-card">
                    <p><strong>Avoid the "Analytical Trap":</strong> Do not try to understand the logic of the sounds. Allow them to bypass your intellect and reach your core.</p>
                    <p><strong>Success Tip:</strong> Journal every morning for 5 minutes. Not about what you want, but about what you *feel* has already changed. This anchors the new identity.</p>
                </div>
            </section>

            <section class="lesson-section">
                <h3>Final Activation Message</h3>
                <div class="lesson-body-text" style="text-align:center;">
                    <p>The journey begins now. You are no longer a spectator of your life; you are the Director. Every breath is a brushstroke. Every thought is a command.</p>
                    <h4 style="color: var(--gold-primary); margin-top: 30px;">WELCOME TO THE NEW REALITY.</h4>
                </div>
            </section>
        `
    },
    {
        id: 'b2',
        title: "Pineal Decalcification Plan",
        tag: "LUXURY BIOHACKING",
        summary: "Ancient wisdom meets modern wellness for peak frequency reception.",
        content: `
            <div class="lesson-header">
                <span class="module-tag">VIBRATIONAL HEALTH</span>
                <h2>Pineal Decalcification Plan</h2>
                <div class="visualizer">
                    <div class="v-bar"></div><div class="v-bar"></div><div class="v-bar"></div>
                </div>
            </div>

            <section class="lesson-section">
                <h3>The Third Eye: Your Spiritual Antenna</h3>
                <div class="lesson-body-text">
                    <p>The Pineal Gland is the bridge between the physical and non-physical. Modern society, through fluoride, toxins, and blue light, has "calcified" this antenna. This plan is designed to clean the signal.</p>
                </div>
            </section>

            <section class="lesson-section">
                <h3>Daily Habits for Mental Clarity</h3>
                <div class="action-card">
                    <p><strong>Morning:</strong> 10 minutes of direct sunlight (no glasses). This sets the circadian rhythm and triggers serotonin production.</p>
                    <p><strong>Evening:</strong> No screens 60 minutes before the Last Wish session. Blue light inhibits the very chemicals we are trying to activate.</p>
                </div>
            </section>

            <section class="lesson-section">
                <h3>Nutrition & Environmental Reset</h3>
                <div class="lesson-body-text">
                    <p>Hydration is everything. Water is an electrical conductor. Use distilled or spring water for your rituals. Avoid fluoride at all costs — it is a biological "mute" button for your pineal gland.</p>
                    <div class="luxury-box">
                        <p><strong>Environment:</strong> Use lavender or sandalwood oils to ground your space. High frequency requires a sanctuary, not just a room.</p>
                    </div>
                </div>
            </section>

            <section class="lesson-section">
                <h3>The 7-Day Reset Challenge</h3>
                <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                    <tr style="border-bottom: 1px solid var(--border-gold);">
                        <th style="padding: 15px; text-align: left;">Day</th>
                        <th style="padding: 15px; text-align: left;">Protocol</th>
                    </tr>
                    <tr><td style="padding: 15px;">Day 01</td><td style="padding: 15px;">Digital Detox (No social media after 6 PM)</td></tr>
                    <tr><td style="padding: 15px;">Day 02</td><td style="padding: 15px;">Hydration Surge (3L Spring Water)</td></tr>
                    <tr><td style="padding: 15px;">Day 03</td><td style="padding: 15px;">Sun Gazing (10 min at sunrise/sunset)</td></tr>
                    <tr><td style="padding: 15px;">Day 04</td><td style="padding: 15px;">Silent Hour (No speaking, no noise)</td></tr>
                    <tr><td style="padding: 15px;">Day 05</td><td style="padding: 15px;">Breathwork (Box breathing for 20 min)</td></tr>
                    <tr><td style="padding: 15px;">Day 06</td><td style="padding: 15px;">Nature Immersion (Feet on soil)</td></tr>
                    <tr><td style="padding: 15px;">Day 07</td><td style="padding: 15px;">Total Fast & Frequency Immersion</td></tr>
                </table>
            </section>
        `
    },
    {
        id: 'b3',
        title: "The Wealth Scripts",
        tag: "SUBCONSCIOUS REPROGRAMMING",
        summary: "Hypnotic, long-form scripts for identity transformation.",
        content: `
            <div class="lesson-header">
                <span class="module-tag">HYPNOTIC COMMANDS</span>
                <h2>The Wealth Scripts</h2>
            </div>

            <section class="lesson-section">
                <h3>Morning Wealth Activation</h3>
                <div class="action-card" style="font-style: italic; line-height: 1.8;">
                    <p>"As I open my eyes, I am not merely waking up; I am logging into a new reality. My nervous system is calibrated to detect opportunities that others miss. Every breath I take increases my vibrational net worth. I do not chase; I attract. I am a sovereign creator of value, and the universe reflects this back to me in perfect timing. I am worthy of luxury, I am worthy of peace, I am the source of abundance."</p>
                </div>
            </section>

            <section class="lesson-section">
                <h3>Night Manifestation Script</h3>
                <div class="action-card" style="font-style: italic; line-height: 1.8; background: var(--bg-black); border-color: var(--accent-purple);">
                    <p>"As the world fades, my true power awakens. I release the events of the day. I am not my past, I am not my debts, I am the consciousness behind it all. I enter the void where everything is possible. My subconscious is now a garden of wealth. I sleep in the certainty of my expansion. When I wake, I will be even more aligned with the millions that are already mine. It is done."</p>
                </div>
            </section>

            <section class="lesson-section">
                <h3>Self-Worth Reprogramming</h3>
                <div class="lesson-body-text">
                    <p>"I release the guilt of wanting more. I recognize that my wealth serves the world. To be poor is a disservice to my potential. I accept high-ticket opportunities with grace. I am the version of myself that naturally lives in luxury. My time is priceless. My energy is sacred."</p>
                </div>
            </section>

            <section class="lesson-section">
                <h3>The Final "Last Wish" Script</h3>
                <div class="ritual-box" style="background: linear-gradient(to bottom, #000, #2a0e4a);">
                    <h4 style="color: var(--gold-primary);">THE ASCENSION SCRIPT</h4>
                    <p style="font-style: italic; margin-top: 20px;">
                        "The search is over. The wish is no longer a desire; it is a memory of the future. I step into the golden version of my life. The walls of limitation have dissolved. I am the frequency of the infinite. I walk with the authority of the divine. Abundance is not what I have, it is who I am. I have returned to the source of all supply. I am free. I am wealthy. I am home."
                    </p>
                </div>
            </section>
        `
    }
];

// 4. Platform Logic
function initPlatform() {
    const mainGrid = document.getElementById('main-journey-grid');
    const bonusGrid = document.getElementById('bonus-grid');
    if (!mainGrid || !bonusGrid) return;

    JOURNEY_DATA.length = 0; // Clear

    dailyThemes.forEach(theme => {
        const fullDay = generateDetailedContent(theme);
        JOURNEY_DATA.push(fullDay);

        const card = document.createElement('div');
        card.className = 'module-card';
        card.innerHTML = `
            <span class="module-tag">${fullDay.day} — ${fullDay.focus}</span>
            <h3>${fullDay.title}</h3>
            <p>${fullDay.summary}</p>
            <div class="btn-open">Open Sanctuary →</div>
        `;
        card.onclick = () => openModule(fullDay.id);
        mainGrid.appendChild(card);
    });

    BONUS_DATA.forEach(bonus => {
        const card = document.createElement('div');
        card.className = 'module-card';
        card.innerHTML = `
            <span class="module-tag">${bonus.tag}</span>
            <h3>${bonus.title}</h3>
            <p>${bonus.summary}</p>
            <div class="btn-open">View Masterclass →</div>
        `;
        card.onclick = () => openModule(bonus.id);
        bonusGrid.appendChild(card);
    });
}

function openModule(id) {
    const modal = document.getElementById('lesson-modal');
    const content = document.getElementById('lesson-content');
    
    let data = JOURNEY_DATA.find(d => d.id === id);
    if (!data) {
        data = BONUS_DATA.find(b => b.id === id);
    }

    if (data) {
        content.innerHTML = data.content;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        const progressFill = document.getElementById('progress-fill');
        const progressPercent = document.getElementById('progress-percent');
        let current = parseInt(progressPercent.innerText) || 0;
        if (current < 100) {
            current += 3;
            if (current > 100) current = 100;
            progressFill.style.width = current + '%';
            progressPercent.innerText = current + '%';
        }
    }
}

function closeModule() {
    const modal = document.getElementById('lesson-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    initPlatform();
});
