/* ==========================================================
   💜 HAPPY BIRTHDAY, MY LOVE — JAVASCRIPT
   Interactive features: Photo gallery, category filters,
   candles blowing, music player, canvas particles, countdown.
   ========================================================== */

// --- PHOTO DATABASE ---
// Carefully classified into 'her' (Just Her) and 'both' (Both of Us)
const PHOTOS = [
  // --- JUST HER (Solo) ---
  {
    id: 1,
    src: "Picsss/Messenger_creation_02CA1C2F-4DA8-452C-ABA5-4B5902F13DF1.jpeg",
    title: "Playful & Lovely",
    category: "her",
    categoryLabel: "Ryza 👑",
    caption: "Peace signs and that captivating smile. You make every ordinary day feel like magic.",
    likes: 124
  },
  {
    id: 2,
    src: "Picsss/Messenger_creation_2DD1AB77-48D0-4039-8FBB-167113818A13.jpeg",
    title: "Sweetest Gaze",
    category: "her",
    categoryLabel: "Ryza 👑",
    caption: "A close-up of my favorite face in the entire world. Your warmth melts every worry away.",
    likes: 189
  },
  {
    id: 3,
    src: "Picsss/Messenger_creation_32CD3CF3-09E2-48E5-B1A3-C9A654E61629.jpeg",
    title: "Timeless Elegance",
    category: "her",
    categoryLabel: "Ryza 👑",
    caption: "Sitting gracefully under the wooden arbor. Your beauty is effortless and mesmerizing.",
    likes: 156
  },
  {
    id: 4,
    src: "Picsss/Messenger_creation_6F7E7D96-EA04-4F88-AF30-679AAF4B41D2.jpeg",
    title: "The Cutest Pose",
    category: "her",
    categoryLabel: "Ryza 👑",
    caption: "Hands framing that angelic smile. I could stare at this picture for hours.",
    likes: 210
  },
  {
    id: 5,
    src: "Picsss/Messenger_creation_7B83306D-7376-4CEC-86E3-87E05D5430BA.jpeg",
    title: "Stairway to Radiance",
    category: "her",
    categoryLabel: "Ryza 👑",
    caption: "Looking back over your shoulder on the spiral stairs — pure grace and charm.",
    likes: 177
  },
  {
    id: 6,
    src: "Picsss/Messenger_creation_981D02E9-C0E5-4032-9857-56A03B1C936E.jpeg",
    title: "Gentle Sunshine",
    category: "her",
    categoryLabel: "Ryza 👑",
    caption: "That serene and kind look that stole my heart. The sweetest birthday girl alive.",
    likes: 145
  },
  {
    id: 7,
    src: "Picsss/Messenger_creation_A76298BA-1676-43A4-8EBE-DA63F841C860.jpeg",
    title: "Heart-Melting Eyes",
    category: "her",
    categoryLabel: "Ryza 👑",
    caption: "Sparkling eyes and rosy cheeks. You have all of my love, forever and always.",
    likes: 198
  },
  {
    id: 8,
    src: "Picsss/Messenger_creation_A8DB1A6B-7314-45B3-9BC8-49C81ADE0A0D.jpeg",
    title: "Golden Hour Glow",
    category: "her",
    categoryLabel: "Ryza 👑",
    caption: "Sunlight filtering through the trees, but you shine brighter than any sunlight.",
    likes: 164
  },
  {
    id: 9,
    src: "Picsss/Messenger_creation_DB748D73-8AF5-49FE-9164-053FD8BEF8D9.jpeg",
    title: "Flower Girl Dreams",
    category: "her",
    categoryLabel: "Ryza 👑",
    caption: "Eyes closed and dreaming sweet dreams. May every wish you make today come true!",
    likes: 230
  },

  // --- BOTH OF US (Couple) ---
  {
    id: 10,
    src: "Picsss/20260604_161440.jpg",
    title: "Coffee & Cozy Talks",
    category: "both",
    categoryLabel: "Both of Us 💑",
    caption: "Side by side with our cold drinks, laughing at nothing and everything together.",
    likes: 245
  },
  {
    id: 11,
    src: "Picsss/DSC09801.JPG",
    title: "Close to You",
    category: "both",
    categoryLabel: "Both of Us 💑",
    caption: "Matching maroon shirts, sitting together in the studio. In your embrace is my happiest place.",
    likes: 290
  },
  {
    id: 12,
    src: "Picsss/DSC09811.JPG",
    title: "3 Years & Counting",
    category: "both",
    categoryLabel: "Both of Us 💑",
    caption: "Celebrating milestones together! 3 beautiful years filled with laughter, growth, and endless love.",
    likes: 312
  },
  {
    id: 13,
    src: "Picsss/DSC09814.JPG",
    title: "Stealing Cheerful Kisses",
    category: "both",
    categoryLabel: "Both of Us 💑",
    caption: "A quick sweet kiss on the cheek while you giggle. My absolute favorite memory.",
    likes: 340
  },
  {
    id: 14,
    src: "Picsss/DSC09815 (1).JPG",
    title: "Kisses Right Back",
    category: "both",
    categoryLabel: "Both of Us 💑",
    caption: "When you give the kiss back and leave me blushing. You bring out the goofiest joy in me.",
    likes: 355
  },
  {
    id: 15,
    src: "Picsss/FB_IMG_1766259364204.jpg",
    title: "Pikachu Duo",
    category: "both",
    categoryLabel: "Both of Us 💑",
    caption: "School uniforms and fluffy Pikachu hats! Never afraid to be totally silly together.",
    likes: 288
  },
  {
    id: 16,
    src: "Picsss/FB_IMG_1766259375819.jpg",
    title: "Flowers For My Queen",
    category: "both",
    categoryLabel: "Both of Us 💑",
    caption: "On bended knee presenting you with flowers. You deserve every bouquet and star in the sky.",
    likes: 375
  },
  {
    id: 17,
    src: "Picsss/Messenger_creation_93BD5459-48C5-4B1F-B59B-151EE731AAC0.jpeg",
    title: "Twinning at the Mall",
    category: "both",
    categoryLabel: "Both of Us 💑",
    caption: "Matching beige button-ups and strolling through the crowd hand-in-hand.",
    likes: 215
  },
  {
    id: 18,
    src: "Picsss/Messenger_creation_A6FD92BA-4D46-4BFB-AC47-C3A4A78520BC.jpeg",
    title: "Cafe Mirror Snap",
    category: "both",
    categoryLabel: "Both of Us 💑",
    caption: "Iced matcha latte date and catching our reflection together. Simple moments are the best.",
    likes: 204
  },
  {
    id: 19,
    src: "Picsss/Messenger_creation_F825B559-9C0A-4A28-9B92-3BA850966A56.jpeg",
    title: "Peace Beside You",
    category: "both",
    categoryLabel: "Both of Us 💑",
    caption: "Resting close together, finding comfort in each other's presence. You are my safe harbor.",
    likes: 278
  }
];

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  initBackgroundCanvas();
  initCountdown();
  initLoveLetter();
  initBirthdayCake();
  initPhotoGallery();
  initMusicPlayer();
  initClickSparkles();
  initWishesWall();
  initConfettiBoost();
  initSmileCamera();
});

/* ==========================================================
   1. BACKGROUND PARTICLES CANVAS (Hearts & Sparkles)
   ========================================================== */
function initBackgroundCanvas() {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = 45;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 12 + 6,
      speedY: Math.random() * 0.7 + 0.3,
      speedX: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.2,
      type: Math.random() > 0.4 ? "heart" : "sparkle",
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.02
    });
  }

  function drawHeart(x, y, size, opacity) {
    ctx.save();
    ctx.translate(x, y);
    ctx.fillStyle = `rgba(196, 181, 253, ${opacity})`;
    ctx.beginPath();
    const topCurveHeight = size * 0.3;
    ctx.moveTo(0, topCurveHeight);
    ctx.bezierCurveTo(0, 0, -size / 2, 0, -size / 2, topCurveHeight);
    ctx.bezierCurveTo(-size / 2, (size + topCurveHeight) / 2, 0, size, 0, size * 1.25);
    ctx.bezierCurveTo(0, size, size / 2, (size + topCurveHeight) / 2, size / 2, topCurveHeight);
    ctx.bezierCurveTo(size / 2, 0, 0, 0, 0, topCurveHeight);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function drawSparkle(x, y, size, opacity, rot) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rot);
    ctx.fillStyle = `rgba(244, 114, 182, ${opacity})`;
    ctx.beginPath();
    for (let i = 0; i < 4; i++) {
      ctx.lineTo(0, size);
      ctx.lineTo(size * 0.2, size * 0.2);
      ctx.rotate(Math.PI / 2);
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let p of particles) {
      p.y -= p.speedY;
      p.x += p.speedX;
      p.rotation += p.rotSpeed;

      if (p.y < -20) {
        p.y = height + 20;
        p.x = Math.random() * width;
      }
      if (p.x < -20) p.x = width + 20;
      if (p.x > width + 20) p.x = -20;

      if (p.type === "heart") {
        drawHeart(p.x, p.y, p.size, p.opacity);
      } else {
        drawSparkle(p.x, p.y, p.size, p.opacity, p.rotation);
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

/* ==========================================================
   2. COUNTDOWN & CELEBRATION TIMER
   ========================================================== */
function initCountdown() {
  const card = document.getElementById("countdown-card");
  const title = document.getElementById("countdown-title");
  const hoursEl = document.getElementById("time-hours");
  const minsEl = document.getElementById("time-mins");
  const secsEl = document.getElementById("time-secs");
  const noteEl = document.getElementById("countdown-note");

  function updateTimer() {
    const now = new Date();
    
    // Target: October 5 of current year
    const currentYear = now.getFullYear();
    let target = new Date(currentYear, 9, 5, 0, 0, 0); // Month is 0-indexed (9 = Oct)

    const isOctober5 = (now.getMonth() === 9 && now.getDate() === 5);

    if (isOctober5) {
      if (!card.classList.contains("celebrate-mode")) {
        card.classList.add("celebrate-mode");
        title.innerHTML = "🎉 HAPPY 21ST BIRTHDAY, RYZA! 💜";
        title.style.color = "#FDE047";
        noteEl.innerHTML = "✨ Happy 21st Birthday, Ryza E. Cariño! Today is all about celebrating you! ✨";
        triggerConfetti(60);
      }
      hoursEl.textContent = "21";
      minsEl.textContent = "✨";
      secsEl.textContent = "💜";
      return;
    }

    // If Oct 5 has passed this year and is not today, look ahead to next year
    if (now > target && !isOctober5) {
      target = new Date(currentYear + 1, 9, 5, 0, 0, 0);
    }

    const diff = target - now;

    if (diff <= 0) {
      card.classList.add("celebrate-mode");
      title.innerHTML = "🎉 HAPPY 21ST BIRTHDAY, RYZA! 💜";
      noteEl.innerHTML = "✨ Today is all about celebrating you, Ryza! ✨";
      hoursEl.textContent = "00";
      minsEl.textContent = "00";
      secsEl.textContent = "00";
      return;
    }

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    hoursEl.textContent = String(hours).padStart(2, "0");
    minsEl.textContent = String(mins).padStart(2, "0");
    secsEl.textContent = String(secs).padStart(2, "0");
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

/* ==========================================================
   3. INTERACTIVE LOVE LETTER
   ========================================================== */
function initLoveLetter() {
  const trigger = document.getElementById("envelope-trigger");
  const content = document.getElementById("letter-content");
  const closeBtn = document.getElementById("close-letter-btn");

  if (!trigger || !content) return;

  trigger.addEventListener("click", () => {
    trigger.style.display = "none";
    content.classList.add("open");
    content.scrollIntoView({ behavior: "smooth", block: "center" });
    triggerConfetti(25);
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      content.classList.remove("open");
      trigger.style.display = "block";
    });
  }
}

/* ==========================================================
   4. INTERACTIVE BIRTHDAY CAKE & CANDLE BLOWING
   ========================================================== */
function initBirthdayCake() {
  const cake = document.getElementById("cake-interactive");
  const flames = document.querySelectorAll(".flame");
  const reveal = document.getElementById("wish-reveal-card");
  const hint = document.getElementById("cake-hint-text");
  const relightBtn = document.getElementById("relight-btn");

  if (!cake) return;

  let blownOut = false;

  cake.addEventListener("click", () => {
    if (blownOut) return;
    blowCandles();
  });

  cake.addEventListener("keydown", (e) => {
    if ((e.key === "Enter" || e.key === " ") && !blownOut) {
      e.preventDefault();
      blowCandles();
    }
  });

  function blowCandles() {
    blownOut = true;
    
    // Play sweet chime / fanfare
    playFanfareSound();

    // Extinguish flames with smoke effect
    flames.forEach((flame) => {
      flame.classList.add("extinguished");
      
      const smoke = document.createElement("div");
      smoke.className = "smoke-puff";
      flame.parentElement.appendChild(smoke);
      setTimeout(() => smoke.remove(), 1300);
    });

    hint.style.display = "none";
    
    // Massive confetti rain
    triggerConfetti(120);

    setTimeout(() => {
      reveal.classList.add("show");
      reveal.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 600);
  }

  if (relightBtn) {
    relightBtn.addEventListener("click", () => {
      blownOut = false;
      flames.forEach(flame => flame.classList.remove("extinguished"));
      reveal.classList.remove("show");
      hint.style.display = "block";
    });
  }
}

/* ==========================================================
   5. PHOTO GALLERY & FILTERING ("JUST HER" VS "BOTH OF US")
   ========================================================== */
let currentFilter = "all";
let currentLightboxIndex = 0;
let filteredPhotos = [...PHOTOS];

function initPhotoGallery() {
  const grid = document.getElementById("photos-grid");
  const filterTabs = document.querySelectorAll(".filter-tab");

  // Render initial photos
  renderGallery();

  // Filter tab clicks
  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      filterTabs.forEach((t) => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");

      currentFilter = tab.getAttribute("data-filter");
      renderGallery();
    });
  });

  // Setup Lightbox events
  initLightbox();
}

function renderGallery() {
  const grid = document.getElementById("photos-grid");
  if (!grid) return;

  if (currentFilter === "all") {
    filteredPhotos = [...PHOTOS];
  } else {
    filteredPhotos = PHOTOS.filter((p) => p.category === currentFilter);
  }

  grid.innerHTML = "";

  filteredPhotos.forEach((photo, index) => {
    const card = document.createElement("div");
    card.className = "photo-card";

    // Read stored likes or fallback
    const storedLikes = localStorage.getItem(`photo_like_${photo.id}`) || photo.likes;
    const isLiked = localStorage.getItem(`photo_liked_${photo.id}`) === "true";

    card.innerHTML = `
      <div class="photo-thumb-wrap" data-index="${index}">
        <span class="photo-badge ${photo.category === 'her' ? 'tag-her' : 'tag-both'}">
          ${photo.categoryLabel}
        </span>
        <img 
          src="${encodeURI(photo.src)}" 
          alt="${photo.title}" 
          class="photo-thumb" 
          loading="lazy"
        />
      </div>
      <div class="photo-card-info">
        <h3 class="photo-title">${photo.title}</h3>
        <p class="photo-caption">${photo.caption}</p>
        <div class="photo-footer">
          <button class="view-btn" data-index="${index}">
            <span>Enlarge</span> 🔍
          </button>
          <button class="like-heart-btn ${isLiked ? 'liked' : ''}" data-id="${photo.id}">
            <span class="heart-icon">${isLiked ? '💖' : '💜'}</span>
            <span class="like-count">${storedLikes}</span>
          </button>
        </div>
      </div>
    `;

    // Click on thumbnail or enlarge button opens lightbox
    card.querySelector(".photo-thumb-wrap").addEventListener("click", () => openLightbox(index));
    card.querySelector(".view-btn").addEventListener("click", () => openLightbox(index));

    // Like heart button
    const likeBtn = card.querySelector(".like-heart-btn");
    likeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleLike(photo.id, likeBtn);
    });

    grid.appendChild(card);
  });
}

function toggleLike(photoId, btnElement) {
  const photo = PHOTOS.find(p => p.id === photoId);
  if (!photo) return;

  const isLiked = localStorage.getItem(`photo_liked_${photoId}`) === "true";
  let count = parseInt(localStorage.getItem(`photo_like_${photoId}`) || photo.likes, 10);

  if (isLiked) {
    count -= 1;
    localStorage.setItem(`photo_liked_${photoId}`, "false");
    btnElement.classList.remove("liked");
    btnElement.querySelector(".heart-icon").textContent = "💜";
  } else {
    count += 1;
    localStorage.setItem(`photo_liked_${photoId}`, "true");
    btnElement.classList.add("liked");
    btnElement.querySelector(".heart-icon").textContent = "💖";
    
    // Spawn tiny floating heart
    spawnHeartParticle(btnElement);
  }

  localStorage.setItem(`photo_like_${photoId}`, count);
  btnElement.querySelector(".like-count").textContent = count;
}

function spawnHeartParticle(element) {
  const rect = element.getBoundingClientRect();
  const heart = document.createElement("div");
  heart.className = "click-sparkle";
  heart.textContent = "💖";
  heart.style.left = `${rect.left + rect.width / 2}px`;
  heart.style.top = `${rect.top}px`;
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 900);
}

/* ==========================================================
   6. LIGHTBOX MODAL
   ========================================================== */
function initLightbox() {
  const modal = document.getElementById("lightbox-modal");
  const overlay = document.getElementById("lightbox-overlay");
  const closeBtn = document.getElementById("lightbox-close");
  const prevBtn = document.getElementById("lightbox-prev");
  const nextBtn = document.getElementById("lightbox-next");

  if (!modal) return;

  overlay.addEventListener("click", closeLightbox);
  closeBtn.addEventListener("click", closeLightbox);

  prevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    navigateLightbox(-1);
  });

  nextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    navigateLightbox(1);
  });

  window.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navigateLightbox(-1);
    if (e.key === "ArrowRight") navigateLightbox(1);
  });

  // Touch swipe support for mobile phones
  let touchStartX = 0;
  let touchStartY = 0;
  modal.addEventListener("touchstart", (e) => {
    if (!modal.classList.contains("active")) return;
    touchStartX = e.changedTouches[0].clientX;
    touchStartY = e.changedTouches[0].clientY;
  }, { passive: true });

  modal.addEventListener("touchend", (e) => {
    if (!modal.classList.contains("active")) return;
    const diffX = e.changedTouches[0].clientX - touchStartX;
    const diffY = e.changedTouches[0].clientY - touchStartY;
    if (Math.abs(diffX) > 45 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX < 0) {
        navigateLightbox(1); // Swipe left = next photo
      } else {
        navigateLightbox(-1); // Swipe right = previous photo
      }
    }
  }, { passive: true });
}

function openLightbox(index) {
  currentLightboxIndex = index;
  updateLightboxContent();

  const modal = document.getElementById("lightbox-modal");
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const modal = document.getElementById("lightbox-modal");
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function navigateLightbox(direction) {
  currentLightboxIndex += direction;
  if (currentLightboxIndex < 0) {
    currentLightboxIndex = filteredPhotos.length - 1;
  } else if (currentLightboxIndex >= filteredPhotos.length) {
    currentLightboxIndex = 0;
  }
  updateLightboxContent();
}

function updateLightboxContent() {
  const photo = filteredPhotos[currentLightboxIndex];
  if (!photo) return;

  const img = document.getElementById("lightbox-img");
  const tag = document.getElementById("lightbox-tag");
  const counter = document.getElementById("lightbox-counter");
  const title = document.getElementById("lightbox-title");
  const caption = document.getElementById("lightbox-caption");
  const heartBtn = document.getElementById("lightbox-heart-btn");

  img.src = encodeURI(photo.src);
  img.alt = photo.title;

  tag.textContent = photo.categoryLabel;
  tag.className = `category-tag ${photo.category === 'her' ? 'tag-her' : 'tag-both'}`;

  counter.textContent = `${currentLightboxIndex + 1} / ${filteredPhotos.length}`;
  title.textContent = photo.title;
  caption.textContent = photo.caption;

  const isLiked = localStorage.getItem(`photo_liked_${photo.id}`) === "true";
  heartBtn.innerHTML = `<span class="heart-icon">${isLiked ? '💖' : '💜'}</span> <span>${isLiked ? 'Favorited' : 'Love This'}</span>`;

  // Onclick inside lightbox
  heartBtn.onclick = () => {
    toggleLike(photo.id, heartBtn);
    renderGallery(); // Keep grid in sync
    const nowLiked = localStorage.getItem(`photo_liked_${photo.id}`) === "true";
    heartBtn.innerHTML = `<span class="heart-icon">${nowLiked ? '💖' : '💜'}</span> <span>${nowLiked ? 'Favorited' : 'Love This'}</span>`;
  };
}

/* ==========================================================
   7. ROMANTIC BIRTHDAY AUDIO SYNTHESIZER (Web Audio API)
   Plays a sweet acoustic music box / lullaby rendition
   of "Happy Birthday" & romantic chord arpeggios!
   ========================================================== */
let audioCtx = null;
let isMusicPlaying = false;
let musicInterval = null;

function initMusicPlayer() {
  const toggleBtn = document.getElementById("music-toggle-btn");
  const statusText = document.getElementById("music-status-text");
  const widget = document.getElementById("music-widget");

  if (!toggleBtn) return;

  toggleBtn.addEventListener("click", () => {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
    }

    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }

    if (isMusicPlaying) {
      stopMelody();
      widget.classList.remove("playing");
      statusText.textContent = "Play Melody ♫";
    } else {
      startMelody();
      widget.classList.add("playing");
      statusText.textContent = "Playing Melody 💜";
    }
  });
}

function playNote(freq, startTime, duration = 0.55, gainLevel = 0.12) {
  if (!audioCtx) return;

  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  // Gentle music box timbre: blend of triangle and sine wave
  osc.type = "sine";
  osc.frequency.setValueAtTime(freq, startTime);

  // Soft attack and natural decay
  gain.gain.setValueAtTime(0, startTime);
  gain.gain.linearRampToValueAtTime(gainLevel, startTime + 0.05);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start(startTime);
  osc.stop(startTime + duration);
}

// "Happy Birthday" notes in F Major (sweet, soothing register)
const BIRTHDAY_NOTES = [
  // C4, C4, D4, C4, F4, E4
  { f: 261.63, d: 0.4 }, { f: 261.63, d: 0.4 }, { f: 293.66, d: 0.7 }, { f: 261.63, d: 0.7 }, { f: 349.23, d: 0.7 }, { f: 329.63, d: 1.2 },
  // C4, C4, D4, C4, G4, F4
  { f: 261.63, d: 0.4 }, { f: 261.63, d: 0.4 }, { f: 293.66, d: 0.7 }, { f: 261.63, d: 0.7 }, { f: 392.00, d: 0.7 }, { f: 349.23, d: 1.2 },
  // C4, C4, C5, A4, F4, E4, D4
  { f: 261.63, d: 0.4 }, { f: 261.63, d: 0.4 }, { f: 523.25, d: 0.7 }, { f: 440.00, d: 0.7 }, { f: 349.23, d: 0.7 }, { f: 329.63, d: 0.7 }, { f: 293.66, d: 1.2 },
  // Bb4, Bb4, A4, F4, G4, F4
  { f: 466.16, d: 0.4 }, { f: 466.16, d: 0.4 }, { f: 440.00, d: 0.7 }, { f: 349.23, d: 0.7 }, { f: 392.00, d: 0.8 }, { f: 349.23, d: 1.6 }
];

function startMelody() {
  isMusicPlaying = true;
  let noteIndex = 0;

  function scheduleNextNote() {
    if (!isMusicPlaying || !audioCtx) return;

    const note = BIRTHDAY_NOTES[noteIndex];
    const now = audioCtx.currentTime;

    playNote(note.f, now, note.d * 1.5, 0.15);

    // Subtle harmony chime
    if (noteIndex % 3 === 0) {
      playNote(note.f * 1.5, now + 0.05, note.d * 1.2, 0.05);
    }

    noteIndex = (noteIndex + 1) % BIRTHDAY_NOTES.length;
    musicInterval = setTimeout(scheduleNextNote, note.d * 750);
  }

  scheduleNextNote();
}

function stopMelody() {
  isMusicPlaying = false;
  if (musicInterval) {
    clearTimeout(musicInterval);
    musicInterval = null;
  }
}

// Chime fanfare for cake blowing
function playFanfareSound() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const ctx = audioCtx || new AudioContext();
    const chords = [523.25, 659.25, 783.99, 1046.50]; // C Major arpeggio sparkle
    const now = ctx.currentTime;

    chords.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, now + i * 0.12);

      gain.gain.setValueAtTime(0, now + i * 0.12);
      gain.gain.linearRampToValueAtTime(0.2, now + i * 0.12 + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.12 + 0.9);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + i * 0.12);
      osc.stop(now + i * 0.12 + 0.9);
    });
  } catch (err) {
    // Ignore if audio permissions blocked
  }
}

/* ==========================================================
   8. CONFETTI GENERATOR (Purple, Pink, Gold)
   ========================================================== */
function triggerConfetti(count = 50) {
  const colors = ["#A855F7", "#C084FC", "#F472B6", "#EC4899", "#FDE047", "#E9D5FF", "#7C3AED"];
  
  for (let i = 0; i < count; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti-piece";

    const bg = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.random() * 8 + 6;
    const left = Math.random() * 100;
    const duration = Math.random() * 2.5 + 2;
    const delay = Math.random() * 0.5;

    confetti.style.backgroundColor = bg;
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size * 1.4}px`;
    confetti.style.left = `${left}vw`;
    confetti.style.top = `-20px`;
    confetti.style.animationDuration = `${duration}s`;
    confetti.style.animationDelay = `${delay}s`;

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), (duration + delay) * 1000);
  }
}

function initConfettiBoost() {
  const boostBtn = document.getElementById("confetti-boost-btn");
  if (boostBtn) {
    boostBtn.addEventListener("click", () => {
      triggerConfetti(80);
      playFanfareSound();
    });
  }
}

/* ==========================================================
   9. INTERACTIVE CLICK SPARKLES & HEARTS
   ========================================================== */
function initClickSparkles() {
  const symbols = ["💜", "✨", "🌸", "💖", "💫"];

  window.addEventListener("click", (e) => {
    // Don't spawn on button clicks to avoid double clutter
    if (e.target.closest("button") || e.target.closest("a") || e.target.closest("input") || e.target.closest("textarea")) {
      return;
    }

    const sparkle = document.createElement("div");
    sparkle.className = "click-sparkle";
    sparkle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    sparkle.style.left = `${e.clientX}px`;
    sparkle.style.top = `${e.clientY}px`;

    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 900);
  });
}

/* ==========================================================
   10. WISHES WALL (LOCAL STORAGE GUESTBOOK)
   ========================================================== */
const DEFAULT_WISHES = [
  {
    author: "Your Loving Boyfriend 💜",
    text: "Happy 21st Birthday to my sweetest girl, Ryza! 💜 Thank you for 3+ incredible years of pure joy, cozy dates, and endless laughter. You make my whole world brighter! 🌸",
    date: "October 5"
  },
  {
    author: "Forever By Your Side ✨",
    text: "Happy 21st Birthday, Ryza E. Cariño! You are the most breathtaking, kind-hearted girl. May this milestone year grant you all your dreams and even greater happiness!",
    date: "October 5"
  }
];

function initWishesWall() {
  const form = document.getElementById("wish-form");
  const wall = document.getElementById("wishes-wall");

  if (!form || !wall) return;

  function loadWishes() {
    let saved = localStorage.getItem("birthday_wishes_ryza_21");
    if (!saved) {
      saved = JSON.stringify(DEFAULT_WISHES);
      localStorage.setItem("birthday_wishes_ryza_21", saved);
    }
    const wishes = JSON.parse(saved);

    wall.innerHTML = "";
    wishes.forEach((w) => {
      const note = document.createElement("div");
      note.className = "sticky-note";
      note.innerHTML = `
        <span class="sticky-pin">📌</span>
        <p class="sticky-text">${escapeHtml(w.text)}</p>
        <div class="sticky-meta">
          <strong>${escapeHtml(w.author)}</strong>
          <span>${w.date}</span>
        </div>
      `;
      wall.appendChild(note);
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const authorInput = document.getElementById("wish-author");
    const textInput = document.getElementById("wish-text");

    const newWish = {
      author: authorInput.value.trim() || "Secret Admirer",
      text: textInput.value.trim(),
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" })
    };

    if (!newWish.text) return;

    let saved = localStorage.getItem("birthday_wishes_ryza_21");
    const wishes = saved ? JSON.parse(saved) : [];
    wishes.unshift(newWish);

    localStorage.setItem("birthday_wishes_ryza_21", JSON.stringify(wishes));

    authorInput.value = "";
    textInput.value = "";

    loadWishes();
    triggerConfetti(35);
  });

  loadWishes();
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

/* ==========================================================
   11. SMILE CAMERA SURPRISE & EXPRESSION DETECTION
   Detects if Ryza is smiling in front of the camera, then
   flashes the screen and reveals the heartfelt birthday message!
   ========================================================== */
const SECRET_BIRTHDAY_MESSAGE = "Hi baby happy happy birthday sayo, I hope maenjoy mo yung araw na to kasi it is your day eh. Wish ko lang para sayo is lagi kang maging masaya at maayos sa lahat ng bagay and sana lagi mong makuha lahat ng gusto mo mapa materyal man yan o hindi. Sana maging malusog ka sa para di ka magkasakit pero syempre lagi mo aalagaan ang health mo kasi yun yung pinaka mahalaga. Sana marating natin lahat ng mga pangarap natin sa buhay. Sorry if minsan ang cruel ko sayo pero sana maintindihan mo na mahal na mahal kita palagi. Happy birthday babyy ko!!!<3";

function initSmileCamera() {
  const heroCameraBtn = document.getElementById("hero-camera-btn");
  const startBtn = document.getElementById("start-camera-btn");
  const stopBtn = document.getElementById("stop-camera-btn");
  const forceBtn = document.getElementById("force-smile-btn");
  const bypassBtn = document.getElementById("bypass-smile-btn");
  
  const startView = document.getElementById("camera-start-view");
  const activeView = document.getElementById("camera-active-view");
  const video = document.getElementById("camera-video");
  const canvas = document.getElementById("camera-overlay-canvas");
  
  const smileEmoji = document.getElementById("smile-emoji");
  const statusText = document.getElementById("smile-status-text");
  const percentageText = document.getElementById("smile-percentage");
  const meterFill = document.getElementById("smile-meter-fill");
  const instructionText = document.getElementById("smile-instruction");
  const cameraNotice = document.getElementById("camera-notice");

  const flashOverlay = document.getElementById("camera-flash-overlay");
  const secretModal = document.getElementById("secret-message-modal");
  const secretModalOverlay = document.getElementById("secret-modal-overlay");
  const secretModalClose = document.getElementById("secret-modal-close");
  const secretCloseBtn = document.getElementById("secret-close-btn");
  const secretCopyBtn = document.getElementById("secret-copy-btn");
  const secretConfettiBtn = document.getElementById("secret-confetti-btn");

  let stream = null;
  let isCameraActive = false;
  let detectionInterval = null;
  let modelsLoaded = false;
  let isModelLoading = false;

  // Hero Quick Button Smooth Scroll
  if (heroCameraBtn) {
    heroCameraBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.getElementById("camera-section");
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Load Models asynchronously
  async function loadModels() {
    if (modelsLoaded || isModelLoading) return modelsLoaded;
    if (typeof faceapi === "undefined") {
      console.warn("faceapi library is not loaded yet.");
      return false;
    }

    isModelLoading = true;
    if (statusText) statusText.textContent = "Loading smile detector models... ✨";

    try {
      // First attempt: load from local ./models folder
      await faceapi.nets.tinyFaceDetector.loadFromUri("models");
      await faceapi.nets.faceExpressionNet.loadFromUri("models");
      modelsLoaded = true;
    } catch (localErr) {
      console.log("Local model load bypassed, trying CDN fallback...", localErr);
      try {
        // Fallback: load from jsDelivr CDN
        await faceapi.nets.tinyFaceDetector.loadFromUri("https://cdn.jsdelivr.net/npm/@vladmandic/face-api/model/");
        await faceapi.nets.faceExpressionNet.loadFromUri("https://cdn.jsdelivr.net/npm/@vladmandic/face-api/model/");
        modelsLoaded = true;
      } catch (cdnErr) {
        console.error("Failed to load face-api models from CDN:", cdnErr);
      }
    } finally {
      isModelLoading = false;
    }
    return modelsLoaded;
  }

  // Start Camera Function
  async function startCamera() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      showCameraNotice(
        "💡 <strong>Camera Notice:</strong> Web browsers (like Chrome & Edge) disable webcam access on direct <code>file:///</code> links for security.<br>" +
        "To use the real camera, run <strong>start.bat</strong> in the project folder (or open <code>http://localhost:3000</code>).<br>" +
        "You can also click <strong>I'm Smiling! 😊 Reveal</strong> below right now to unlock your message!"
      );
      if (activeView) activeView.style.display = "block";
      if (startView) startView.style.display = "none";
      return;
    }

    try {
      startBtn.disabled = true;
      startBtn.innerHTML = "<span>Connecting Camera... ⌛</span>";

      stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "user",
          width: { ideal: 640 },
          height: { ideal: 480 }
        },
        audio: false
      });

      video.srcObject = stream;
      await video.play();

      startView.style.display = "none";
      activeView.style.display = "block";
      isCameraActive = true;
      cameraNotice.style.display = "none";

      const ready = await loadModels();
      if (ready) {
        statusText.textContent = "Looking for Ryza's face... 😊";
        startDetectionLoop();
      } else {
        statusText.textContent = "Camera on! Click below to reveal your message 💜";
      }
    } catch (err) {
      console.warn("Camera start failed:", err);
      showCameraNotice(
        "📷 <strong>Camera Permission Needed:</strong> Please allow camera access in your browser, or click <strong>I'm Smiling! 😊 Reveal</strong> to view your message directly!"
      );
      if (activeView) activeView.style.display = "block";
      if (startView) startView.style.display = "none";
    } finally {
      startBtn.disabled = false;
      startBtn.innerHTML = "<span>Turn On Camera & Smile 📸</span>";
    }
  }

  // Stop Camera Function
  function stopCamera() {
    isCameraActive = false;
    if (detectionInterval) {
      clearInterval(detectionInterval);
      detectionInterval = null;
    }

    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      stream = null;
    }

    if (video) {
      video.srcObject = null;
    }

    if (meterFill) meterFill.style.width = "0%";
    if (percentageText) percentageText.textContent = "0%";
    if (activeView) activeView.style.display = "none";
    if (startView) startView.style.display = "block";
  }

  function showCameraNotice(html) {
    if (!cameraNotice) return;
    cameraNotice.innerHTML = html;
    cameraNotice.style.display = "block";
  }

  // Face & Smile Detection Loop
  function startDetectionLoop() {
    if (detectionInterval) clearInterval(detectionInterval);

    detectionInterval = setInterval(async () => {
      if (!isCameraActive || !video || video.paused || video.ended) return;

      try {
        const detection = await faceapi
          .detectSingleFace(video, new faceapi.TinyFaceDetectorOptions({ inputSize: 224, scoreThreshold: 0.5 }))
          .withFaceExpressions();

        if (detection) {
          const happy = detection.expressions.happy || 0;
          const percentage = Math.min(100, Math.round(happy * 100));

          if (meterFill) meterFill.style.width = `${percentage}%`;
          if (percentageText) percentageText.textContent = `${percentage}%`;

          // Smile threshold check
          if (happy >= 0.65) {
            smileEmoji.textContent = "😍";
            statusText.textContent = "Radiant smile detected! Unlocking secret message... ✨";
            instructionText.textContent = "You look so breathtaking! 💜";
            
            // Stop scanning and trigger reveal
            clearInterval(detectionInterval);
            detectionInterval = null;
            setTimeout(() => {
              triggerSmileReveal();
            }, 300);
          } else if (happy >= 0.3) {
            smileEmoji.textContent = "😊";
            statusText.textContent = "Getting warmer! Give an even bigger smile! 🌸";
            instructionText.textContent = "A little wider smile! Almost there! ✨";
          } else {
            smileEmoji.textContent = "👀";
            statusText.textContent = "Face detected! Let's see that beautiful smile 💜";
            instructionText.textContent = "Give your sweetest smile to the camera! 😊";
          }
        } else {
          smileEmoji.textContent = "🔍";
          statusText.textContent = "Looking for your face... Center yourself in the frame! 🌸";
          if (meterFill) meterFill.style.width = "0%";
          if (percentageText) percentageText.textContent = "0%";
        }
      } catch (err) {
        // Suppress frame glitches gracefully
      }
    }, 180);
  }

  // Trigger Flash Effect and Reveal Secret Message Modal
  function triggerSmileReveal() {
    // 1. Stop Camera
    stopCamera();

    // 2. Camera Flash animation effect
    if (flashOverlay) {
      flashOverlay.classList.remove("flashing");
      void flashOverlay.offsetWidth; // Trigger reflow
      flashOverlay.classList.add("flashing");
    }

    // 3. Audio Chime & Confetti
    playFanfareSound();
    triggerConfetti(110);

    // 4. Reveal Secret Message Modal
    setTimeout(() => {
      if (secretModal) {
        secretModal.classList.add("active");
        secretModal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
      }
    }, 450);
  }

  // Event Listeners
  if (startBtn) startBtn.addEventListener("click", startCamera);
  if (stopBtn) stopBtn.addEventListener("click", stopCamera);
  if (forceBtn) forceBtn.addEventListener("click", triggerSmileReveal);
  if (bypassBtn) bypassBtn.addEventListener("click", triggerSmileReveal);

  // Modal Closures
  function closeSecretModal() {
    if (secretModal) {
      secretModal.classList.remove("active");
      secretModal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }
  }

  if (secretModalClose) secretModalClose.addEventListener("click", closeSecretModal);
  if (secretCloseBtn) secretCloseBtn.addEventListener("click", closeSecretModal);
  if (secretModalOverlay) secretModalOverlay.addEventListener("click", closeSecretModal);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && secretModal && secretModal.classList.contains("active")) {
      closeSecretModal();
    }
  });

  // Confetti Button inside Modal
  if (secretConfettiBtn) {
    secretConfettiBtn.addEventListener("click", () => {
      triggerConfetti(70);
      playFanfareSound();
    });
  }

  // Copy Message to Clipboard
  if (secretCopyBtn) {
    secretCopyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(SECRET_BIRTHDAY_MESSAGE).then(() => {
        const originalText = secretCopyBtn.innerHTML;
        secretCopyBtn.innerHTML = "<span>Copied to Clipboard! 💜</span>";
        setTimeout(() => {
          secretCopyBtn.innerHTML = originalText;
        }, 2200);
      }).catch(() => {
        // Fallback copy
        const textarea = document.createElement("textarea");
        textarea.value = SECRET_BIRTHDAY_MESSAGE;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        secretCopyBtn.innerHTML = "<span>Copied to Clipboard! 💜</span>";
      });
    });
  }
}

