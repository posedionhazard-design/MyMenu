const videos = [
  {
    title: "React Tutorial for Beginners – Full Course in 2026",
    channel: "Code Academy",
    views: "2.4M views",
    age: "5 months ago",
    duration: "18:42",
    avatar: "CA",
    color: "linear-gradient(135deg, #ff9933, #ff5e62)",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Best travel vlog from Tokyo at sunset",
    channel: "Nomad Tales",
    views: "842K views",
    age: "1 week ago",
    duration: "12:08",
    avatar: "NT",
    color: "linear-gradient(135deg, #00c2a8, #0080ff)",
    image:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Top 10 indie games to play this month",
    channel: "GameSphere",
    views: "1.1M views",
    age: "3 months ago",
    duration: "9:47",
    avatar: "GS",
    color: "linear-gradient(135deg, #9775fa, #5f3dc4)",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "How I built a productivity system that actually works",
    channel: "Focus Mode",
    views: "480K views",
    age: "2 days ago",
    duration: "20:15",
    avatar: "FM",
    color: "linear-gradient(135deg, #ff6b6b, #f06595)",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Lo-fi beats to code and relax to",
    channel: "Night Audio",
    views: "4.8M views",
    age: "11 months ago",
    duration: "1:00:19",
    avatar: "NA",
    color: "linear-gradient(135deg, #4ecdc4, #2b9eb3)",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Minimalist desk setup tour 2026",
    channel: "Urban Setup",
    views: "673K views",
    age: "6 days ago",
    duration: "14:27",
    avatar: "US",
    color: "linear-gradient(135deg, #ffd43b, #ff922b)",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "10 Habits of highly effective developers",
    channel: "Dev Daily",
    views: "1.8M views",
    age: "8 months ago",
    duration: "16:54",
    avatar: "DD",
    color: "linear-gradient(135deg, #08aeea, #2af598)",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "City lights after rain | cinematic footage",
    channel: "Visual Drift",
    views: "310K views",
    age: "4 days ago",
    duration: "7:11",
    avatar: "VD",
    color: "linear-gradient(135deg, #7f7fd5, #86a8e7)",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80"
  }
];

const grid = document.getElementById("videoGrid");

function renderVideos() {
  grid.innerHTML = videos
    .map(
      (video) => `
        <article class="video-card" aria-label="${video.title}">
          <div class="thumbnail">
            <img src="${video.image}" alt="${video.title}" />
            <span class="duration">${video.duration}</span>
          </div>
          <div class="meta-row">
            <div class="channel-avatar" style="background: ${video.color};">${video.avatar}</div>
            <div class="meta-text">
              <h3 class="title">${video.title}</h3>
              <div class="channel-name">${video.channel}</div>
              <div class="video-stats">${video.views} • ${video.age}</div>
            </div>
            <div class="more-toggle">⋮</div>
          </div>
        </article>
      `
    )
    .join("");
}

renderVideos();

const chips = document.querySelectorAll(".chip");
chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    chips.forEach((item) => item.classList.remove("active"));
    chip.classList.add("active");
  });
});
