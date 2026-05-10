// Particle Background Logic
function createParticles() {
    const container = document.getElementById('particles-container');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 3 + 1 + 'px';
        particle.style.width = size;
        particle.style.height = size;
        
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * 100 + 'vh';
        
        const duration = Math.random() * 10 + 10 + 's';
        const delay = Math.random() * 5 + 's';
        particle.style.animationDuration = duration;
        particle.style.animationDelay = delay;
        
        container.appendChild(particle);
    }
}

document.addEventListener('DOMContentLoaded', createParticles);

// Module Content Data (Translated to English as requested)
const moduleContent = {
    intro: {
        title: "Before You Begin",
        content: `
            <div class="lesson-header">
                <span class="module-day">Introduction</span>
                <h2>Welcome to the Beginning of Your New Reality</h2>
            </div>
            <div class="lesson-body">
                <p>You are about to embark on a journey that defies conventional logic and dives into the depths of your energetic consciousness. <strong>The Last Wish</strong> is not just an audio program; it is a vibrational technology designed to reconfigure your financial and spiritual identity.</p>
                
                <h4>The Philosophy behind The Last Wish</h4>
                <p>Our external reality is a direct reflection of our internal frequency. Most people try to change their lives by working harder in the physical world, but forget that the "source code" lies in the subconscious. Here, we will learn to edit that code.</p>

                <h4>Preparing Your Environment</h4>
                <ul>
                    <li><strong>Total Darkness:</strong> The pineal gland is activated by the absence of light. For maximum effectiveness, listen to sessions in a completely dark room.</li>
                    <li><strong>Headphones:</strong> The frequencies utilize binaural and isochronic technology that requires stereo isolation.</li>
                    <li><strong>Consistency:</strong> The human brain takes time to crystallize new neural pathways. Do not skip any day for the next 30 days.</li>
                </ul>

                <h4>A Message from Danny Kelly</h4>
                <div class="luxury-box" style="background: rgba(212, 175, 55, 0.1); padding: 30px; border-radius: 20px; border-left: 4px solid var(--primary-gold); margin: 40px 0;">
                    <p><em>"I've been where you are. Looking at the world and feeling that something was missing, a secret that the few knew and the rest of us ignored. The Last Wish is that secret translated into frequency. Use it with reverence. What you are about to ask for, you will surely receive."</em></p>
                </div>

                <div class="audio-player-wrapper">
                    <p style="text-align:center; margin-bottom: 10px; font-weight: 700;">WELCOME AUDIO</p>
                    <div class="player-visualizer">
                        <div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div>
                    </div>
                    <button class="btn-start" style="width:100%; font-size: 0.9rem;">PLAY INTRODUCTION</button>
                </div>
            </div>
        `
    },
    day1: {
        title: "Day 01 — Pineal Awakening",
        content: `
            <div class="lesson-header">
                <span class="module-day">Day 01</span>
                <h2>Disconnecting from Survival Mode</h2>
            </div>
            <div class="lesson-body">
                <p>Today is the day you draw a line in the sand. "Survival Mode" is characterized by high cortisol, constant financial stress, and the feeling that the world is a place of scarcity. Today, we turn off that switch.</p>
                
                <h4>Today's Activation Ritual</h4>
                <p>Your mission is to create internal silence. Before starting the day's study, perform 5 deep breaths (inhale for 4 counts, hold for 4, exhale for 8). Feel the weight of stress leaving through your feet.</p>

                <h4>15 Receptivity Affirmations</h4>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 20px 0;">
                    <li>I am open to receiving.</li>
                    <li>Abundance flows naturally toward me.</li>
                    <li>My mind is aligned with opportunity.</li>
                    <li>I release the fear of lack.</li>
                    <li>I am a magnet for prosperity.</li>
                    <li>The universe is infinitely rich.</li>
                    <li>I deserve wealth without effort.</li>
                    <li>My frequency is rising right now.</li>
                    <li>I see opportunities where others see problems.</li>
                    <li>Money is energy and I am an excellent conductor.</li>
                    <li>I accept gifts from the universe today.</li>
                    <li>My pineal gland is awakening to the light.</li>
                    <li>I am the architect of my wealth.</li>
                    <li>Financial peace is my natural state.</li>
                    <li>I choose abundance over fear.</li>
                </div>

                <div class="luxury-box" style="text-align:center; padding: 20px; background: rgba(255,255,255,0.05); border-radius: 15px; margin-top: 30px;">
                    <p style="color: var(--primary-gold); font-weight: 700;">NOTE: Audio sessions begin on Day 07. Focus on the internal ritual today.</p>
                </div>
            </div>
        `
    },
    day3: {
        title: "Day 03 — Opening Abundance",
        content: `
            <div class="lesson-header">
                <span class="module-day">Day 03</span>
                <h2>Dissolving Energetic Resistance</h2>
            </div>
            <div class="lesson-body">
                <p>On the third day, we start digging deeper. Why don't you have the life you want yet? The answer is: <strong>Resistance</strong>. These are the small subconscious voices that say "it's not for me" or "it's too hard."</p>
                
                <h4>Abundance Reflection Exercise</h4>
                <p>Take a piece of paper and answer with total honesty:</p>
                <ul>
                    <li>What beliefs about money did I inherit from my parents?</li>
                    <li>What would my life look like if fear didn't exist?</li>
                    <li>What opportunities am I ignoring due to insecurity?</li>
                </ul>

                <h4>Guided Visualization Instructions</h4>
                <p>Visualize a golden door in the center of your forehead. As you breathe deeply, this door opens, allowing a liquid, golden light to flood your entire body, cleansing every cell of scarcity.</p>

                <div class="luxury-box" style="text-align:center; padding: 20px; background: rgba(255,255,255,0.05); border-radius: 15px; margin-top: 30px;">
                    <p style="color: var(--primary-gold); font-weight: 700;">NOTE: Audio sessions begin on Day 07. Focus on the visualization today.</p>
                </div>
            </div>
        `
    },
    day7: {
        title: "Day 07 — Prosperity Alignment",
        content: `
            <div class="lesson-header">
                <span class="module-day">Day 07</span>
                <h2>Becoming Magnetic to Opportunities</h2>
            </div>
            <div class="lesson-body">
                <p>Alignment happens when your thought and emotion vibrate on the same note. Today we focus on Gratitude, not as a polite "thank you," but as a force of energetic amplification.</p>
                
                <h4>Prosperity Alignment Ritual</h4>
                <p>In the morning, before getting up, list 10 things you are grateful for as if they were already abundant. If you want more money, give thanks for the money that already flows into your accounts (even if you don't see it yet).</p>

                <h4>20 Premium Alignment Affirmations</h4>
                <div style="font-size: 0.9rem; column-count: 2; margin: 20px 0;">
                    <li>My vibration attracts wealth.</li>
                    <li>I am grateful for infinite abundance.</li>
                    <li>Money loves me and I love money.</li>
                    <li>Opportunities arise from nowhere for me.</li>
                    <li>I am in perfect harmony with prosperity.</li>
                    <li>I am a beacon of light and wealth.</li>
                    <li>My life is a succession of financial miracles.</li>
                    <li>I receive with ease and joy.</li>
                    <li>Prosperity is my birthright.</li>
                    <li>I choose to be wealthy and free.</li>
                </div>

                <div class="audio-player-wrapper">
                    <p style="text-align:center; margin-bottom: 10px; font-weight: 700;">SESSION DAY 07: PROSPERITY ALIGNMENT</p>
                    <div class="player-visualizer">
                        <div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div>
                    </div>
                    <button class="btn-start" style="width:100%; font-size: 0.9rem;">START SESSION (11 MIN)</button>
                </div>
            </div>
        `
    },
    day10: {
        title: "Day 10 — Wealth Frequency",
        content: `
            <div class="lesson-header">
                <span class="module-day">Day 10</span>
                <h2>Reprogramming Your Wealth Identity</h2>
            </div>
            <div class="lesson-body">
                <p>Who are you in your own mind? A person who "tries" to make money or a person who "is" wealthy? Today we change your self-image. Wealth is not something you do, it is something you are.</p>
                
                <h4>Wealth Frequency Exercise: The Mirror</h4>
                <p>Look at yourself in the mirror for 2 minutes. Don't look at your imperfections, look into your eyes. Say aloud: "I recognize the divinity and abundance that dwell within me. I am worthy of luxury, peace, and power."</p>

                <h4>Luxury Visualization</h4>
                <p>During today's audio, feel the touch of fine fabrics, the smell of luxurious places, the weight of precious metals. Your mind doesn't know the difference between the real and the imagined — use this to your advantage.</p>

                <div class="audio-player-wrapper">
                    <p style="text-align:center; margin-bottom: 10px; font-weight: 700;">SESSION DAY 10: WEALTH FREQUENCY</p>
                    <div class="player-visualizer">
                        <div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div>
                    </div>
                    <button class="btn-start" style="width:100%; font-size: 0.9rem;">START SESSION (11 MIN)</button>
                </div>
            </div>
        `
    },
    day21: {
        title: "Day 21 — Total Expansion",
        content: `
            <div class="lesson-header">
                <span class="module-day">Day 21</span>
                <h2>Removing Subconscious Limitations</h2>
            </div>
            <div class="lesson-body">
                <p>We've reached a turning point. Your personal reality is expanding. The old limitations now seem small, almost ridiculous. Today is the day of total emotional liberation.</p>
                
                <h4>Expansion Ceremony</h4>
                <p>Write on a piece of paper everything that has held you back until today. Then, safely burn this paper and, as the ashes rise, declare: "The old me is dead. The new me now breathes the freedom of expansion."</p>

                <h4>Guided Emotional Reset</h4>
                <p>If you feel like crying, laughing, or feeling heat during today's session, do not hold back. It is your nervous system releasing decades of energetic compression.</p>

                <div class="audio-player-wrapper">
                    <p style="text-align:center; margin-bottom: 10px; font-weight: 700;">SESSION DAY 21: TOTAL EXPANSION</p>
                    <div class="player-visualizer">
                        <div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div>
                    </div>
                    <button class="btn-start" style="width:100%; font-size: 0.9rem;">START SESSION (11 MIN)</button>
                </div>
            </div>
        `
    },
    day30: {
        title: "Day 30 — The Last Wish",
        content: `
            <div class="lesson-header">
                <span class="module-day">Day 30</span>
                <h2>The Final Ritual: Entering the New Reality</h2>
            </div>
            <div class="lesson-body">
                <p>You have completed the cycle. You are no longer the person who began this journey. Your eyes shine with a different frequency. Your hands are ready to shape matter.</p>
                
                <h4>The Candle Ritual</h4>
                <p>Light a white candle in a dark room. Look at the flame and see your already manifested future in it. Ask for nothing. Just declare: "IT IS DONE. I AM."</p>

                <h4>Final Message: Your New Life</h4>
                <div style="text-align:center; padding: 40px; border: 1px solid var(--primary-gold); border-radius: 30px; margin: 40px 0;">
                    <h3 style="color: var(--primary-gold); margin-bottom: 20px;">You are no longer surviving.</h3>
                    <p>You are now choosing what to receive. The universe is your catalog. Your frequency is your credit card. Use it with wisdom, love, and power.</p>
                </div>

                <div class="audio-player-wrapper">
                    <p style="text-align:center; margin-bottom: 10px; font-weight: 700;">FINAL SESSION: THE LAST WISH</p>
                    <div class="player-visualizer">
                        <div class="bar" style="height: 50px"></div><div class="bar" style="height: 50px"></div><div class="bar" style="height: 50px"></div><div class="bar" style="height: 50px"></div>
                    </div>
                    <button class="btn-start" style="width:100%; font-size: 1.1rem; letter-spacing: 3px;">MANIFEST NOW</button>
                </div>
            </div>
        `
    },
    bonus1: {
        title: "Bonus #1 — The Official Last Wish Guide",
        content: `
            <div class="lesson-header">
                <span class="module-day">Support Material</span>
                <h2>Success Acceleration Strategies</h2>
            </div>
            <div class="lesson-body">
                <p>This guide was designed to ensure you extract every drop of frequency from your sessions. Follow these recommendations for up to 3x faster results.</p>
                
                <h4>Frequency Optimization</h4>
                <ul>
                    <li><strong>Best Time:</strong> 15 minutes before bed, when the brain naturally enters Theta waves.</li>
                    <li><strong>Hydration:</strong> Water is an electrical conductor. Drink 300ml of mineral water before each session.</li>
                    <li><strong>Posture:</strong> Keep your spine straight, whether sitting or lying down. Energy flow through the spinal cord should be unobstructed.</li>
                </ul>

                <h4>Common Mistakes</h4>
                <p>Do not use poor quality headphones. Do not skip days. Do not talk about the process with low vibration or skeptical people during the first 30 days.</p>
            </div>
        `
    },
    bonus2: {
        title: "Bonus #2 — Pineal Gland Decalcification Plan",
        content: `
            <div class="lesson-header">
                <span class="module-day">Health & Vibration</span>
                <h2>Biological Protocols for High Frequency</h2>
            </div>
            <div class="lesson-body">
                <p>The pineal gland is your frequency receiver. If it is calcified by fluoride and toxins, the signal arrives weak. Let's clean your spiritual radio.</p>
                
                <h4>What to Avoid</h4>
                <ul>
                    <li>Fluoride (use fluoride-free toothpaste).</li>
                    <li>Ultra-processed foods and excess sugar.</li>
                    <li>Blue light from screens 1 hour before the ritual.</li>
                </ul>

                <h4>What to Prioritize</h4>
                <ul>
                    <li>Morning sun exposure (directly in the eyes, without glasses, during the first 10 min of sun).</li>
                    <li>Magnesium and Iodine supplementation (consult your doctor).</li>
                    <li>Alkaline and dark green foods.</li>
                </ul>
            </div>
        `
    },
    bonus3: {
        title: "Bonus #3 — Wealth Scripts",
        content: `
            <div class="lesson-header">
                <span class="module-day">Power of the Word</span>
                <h2>Hypnotic Reprogramming Scripts</h2>
            </div>
            <div class="lesson-body">
                <p>Use these scripts as mantras during the day or read them before nightly sessions. They are designed with language patterns that bypass the critical factor of the conscious mind.</p>
                
                <h4>Morning Script: The Awakening of the Creator</h4>
                <p><em>"I open my eyes to a world of infinite possibilities. Today, money finds me in unexpected ways. I am a clean channel for divine prosperity. Every step I take brings me closer to my fortune."</em></p>

                <h4>Night Script: Subconscious Harvest</h4>
                <p><em>"While my body rests, my subconscious works on building my wealth. I release all debts and worries. I sleep in peace and wake in abundance. The Last Wish is now my reality."</em></p>
            </div>
        `
    }
};

// Open Module Logic
function openModule(moduleId) {
    const data = moduleContent[moduleId];
    if (!data) return;

    const modal = document.getElementById('lesson-modal');
    const content = document.getElementById('lesson-content');

    content.innerHTML = data.content;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scroll

    // Update Progress (Mockup Logic)
    const progressFill = document.getElementById('progress-fill');
    const progressPercent = document.getElementById('progress-percent');
    
    // Simulating progress increase
    let currentProgress = parseInt(progressPercent.innerText) || 15;
    if (currentProgress < 100) {
        currentProgress += 5;
        progressFill.style.width = currentProgress + '%';
        progressPercent.innerText = currentProgress + '%';
    }
}

// Close Module Logic
function closeModule() {
    const modal = document.getElementById('lesson-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scroll
}

// Close on background click
window.onclick = function(event) {
    const modal = document.getElementById('lesson-modal');
    if (event.target == modal) {
        closeModule();
    }
}
