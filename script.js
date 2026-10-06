const message = document.getElementById("message");

const changeMessageBtn = document.getElementById("changeMessageBtn");
const toggleColorBtn = document.getElementById("toggleColorBtn");
const toggleVisibilityBtn = document.getElementById("toggleVisibilityBtn");

const hiddenBox = document.getElementById("hiddenBox");

const signupForm = document.getElementById("signupForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const formFeedback = document.getElementById("formFeedback");

const messages = [
  "✨ Isang hakbang kada araw, pangarap ay matatanaw.",
  "🚀 Sikap at tiyaga, susi sa ginhawa.",
  "🌱 Mabagal man ang galaw, basta tuloy ang tanaw.",
  "🏆 Hindi man madali ang laban, darating din ang tagumpay."
];

const themes = [
  "linear-gradient(135deg, #667eea, #764ba2)",
  "linear-gradient(135deg, #11998e, #38ef7d)",
  "linear-gradient(135deg, #ff9966, #ff5e62)",
  "linear-gradient(135deg, #8e2de2, #4a00e0)"
];

let messageIndex = 0;
let themeIndex = 0;

changeMessageBtn.addEventListener("click", () => {
  messageIndex = (messageIndex + 1) % messages.length;
  message.textContent = messages[messageIndex];

  message.animate(
    [
      { opacity: 0, transform: "translateY(-10px)" },
      { opacity: 1, transform: "translateY(0)" }
    ],
    {
      duration: 300,
      easing: "ease-out"
    }
  );
});

toggleColorBtn.addEventListener("click", () => {
  themeIndex = (themeIndex + 1) % themes.length;
  document.body.style.background = themes[themeIndex];
});

toggleVisibilityBtn.addEventListener("click", () => {
  const visible = hiddenBox.classList.toggle("visible");

  toggleVisibilityBtn.innerHTML = visible
    ? "👁 Hide Box"
    : "📦 Show Box";
});

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  [nameInput, emailInput].forEach(input =>
    input.classList.remove("input-error")
  );

  const errors = [];

  if (!name) {
    errors.push("Name");
    nameInput.classList.add("input-error");
  }

  if (!email) {
    errors.push("Email");
    emailInput.classList.add("input-error");
  }

  if (errors.length) {
    formFeedback.textContent = `⚠ Required: ${errors.join(", ")}`;
    formFeedback.className = "form-feedback error";
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    formFeedback.textContent = "❌ Invalid email address.";
    formFeedback.className = "form-feedback error";
    emailInput.classList.add("input-error");
    return;
  }

  formFeedback.textContent = `✅ Welcome, ${name}! Registration successful.`;
  formFeedback.className = "form-feedback success";

  signupForm.reset();
});
