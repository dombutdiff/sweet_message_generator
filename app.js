let message = [
  `"You brighten my darkest days with your smile."`,
  `"Every moment with you feels like a dream come true."`,
  `"Your laughter is the soundtrack of my happiest memories."`,
  `"In your eyes, I see a reflection of my soulmate."`,
  `"Loving you is the easiest and most natural thing in the world."`,
  `"Your love is the compass that guides me through life's journey."`,
  `"I fall for you more and more each day, without hesitation."`,
  `"You're not just my partner; you're my best friend and confidant."`,
  `"My heart skips a beat every time I think of you."`,
  `"You're the missing piece that completes my puzzle of happiness."`,
  `"Your love is a treasure I cherish every day."`,
  `"I am so grateful to have you in my life."`,
  `"You make me believe in fairy tales and happily ever afters."`,
  `"With you, I feel like I can conquer the world."`,
  `"You are my sun, my moon, and all my stars."`,
  `"Loving you feels like coming home to a place I've never been before."`,
  `"Your kindness and compassion inspire me to be a better person."`,
  `"I am the luckiest person alive to have you by my side."`,
  `"Every day spent with you is a blessing I never want to take for granted."`,
  `"Thank you for being the reason I smile every day."`,
];

let messageText = document.querySelector(".message");
let generateMessage = document.querySelector(".generate_message");

generateMessage.addEventListener("click", () => {
  let generateIndex = messageGenerator();
  messageText.textContent = message[generateIndex];
  console.log("click");
});

function messageGenerator() {
  return Math.floor(Math.random() * message.length);
}
