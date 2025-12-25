document.addEventListener("DOMContentLoaded", () => {
  const colors = ["red", "yellow", "lime"];
  const layers = document.querySelectorAll(".layer");
  const music = document.getElementById("music");
  const btn = document.getElementById("musicBtn");

  // 🌈 Đèn chạy từ trên xuống
  let step = 0;
  setInterval(() => {
    layers.forEach((layer, index) => {
      const lights = layer.querySelectorAll(".light");
      lights.forEach(light => {
        if (index === step) {
          const c = colors[Math.floor(Math.random() * colors.length)];
          light.style.backgroundColor = c;
          light.style.boxShadow = `0 0 12px ${c}`;
        } else {
          light.style.backgroundColor = "#333";
          light.style.boxShadow = "none";
        }
      });
    });
    step = (step + 1) % layers.length;
  }, 300);

  // 🔊 Nhạc
  btn.onclick = () => {
    if (music.paused) music.play();
    else music.pause();
  };
});
document.addEventListener("DOMContentLoaded", () => {
  const lights = document.querySelectorAll(".light");
  const colors = ["red", "yellow", "lime"];

  setInterval(() => {
    lights.forEach(light => {
      // 50% xác suất bật/tắt
      const isOn = Math.random() > 0.5;

      if (isOn) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        light.style.backgroundColor = color;
        light.style.boxShadow = `0 0 12px ${color}`;
      } else {
        light.style.backgroundColor = "#222";
        light.style.boxShadow = "none";
      }
    });
  }, 300); // tốc độ nhấp nháy
});
// ❄️ TUYẾT RƠI DÀY + NGẪU NHIÊN
const snowContainer = document.getElementById("snow-container");

function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");
  snowflake.innerText = "❄";

  // ngẫu nhiên
  snowflake.style.left = Math.random() * window.innerWidth + "px";
  snowflake.style.fontSize = 10 + Math.random() * 20 + "px";
  snowflake.style.animationDuration = 3 + Math.random() * 5 + "s";
  snowflake.style.opacity = Math.random();

  snowContainer.appendChild(snowflake);

  // xóa khi rơi xong
  setTimeout(() => {
    snowflake.remove();
  }, 8000);
}

// tạo tuyết LIÊN TỤC → DÀY
setInterval(createSnowflake, 100); // số càng nhỏ → tuyết càng dày
