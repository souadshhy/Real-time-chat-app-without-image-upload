const emojis = [
  // Faces & People
  "😀",
  "😂",
  "😍",
  "😎",
  "🥳",
  "🤔",
  "😭",
  "😡",
  "🤯",
  "👻",
  "🤖",

  // Animals
  "🐶",
  "🐱",
  "🐼",
  "🦁",
  "🐸",
  "🐵",
  "🦊",
  "🐧",
  "🦋",
  "🐙",

  // Nature
  "🌞",
  "🌙",
  "⭐",
  "🌈",
  "🔥",
  "🌊",
  "🌸",
  "🌵",
  "🍀",

  // Food & Drink
  "🍕",
  "🍔",
  "🍟",
  "🌮",
  "🍣",
  "🍩",
  "🍪",
  "🍉",
  "🍓",
  "☕",

  // Activities & Sports
  "⚽",
  "🏀",
  "🎾",
  "🎮",
  "🎯",
  "🎸",
  "🎨",
  "🎲",
  "🏆",

  // Travel & Places
  "🚗",
  "✈️",
  "🚀",
  "🚲",
  "🚂",
  "🏝️",
  "🏰",
  "🌍",

  // Objects
  "💡",
  "📱",
  "💻",
  "📷",
  "🎁",
  "🔑",
  "⏰",
  "📚",
  "🧸",
  "🧉",

  // Symbols
  "❤️",
  "💯",
  "✅",
  "❌",
  "⚡",
  "✨",
  "💎",
  "🎵",

  // Extra
  "👑",
  "🧠",
  "🪄",
];

export const getRandomEmoji=()=> {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
}

