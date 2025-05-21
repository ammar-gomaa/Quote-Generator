// DOM Elements
var quoteContainer = document.getElementById("quote-container");
var quoteText = document.getElementById("quote");
var authorText = document.getElementById("author");
var newQuoteBtn = document.getElementById("new-quote");

// Array to keep track of used quotes
var usedQuotes = [];

// Collection of 100 quotes
var quotesArray = [
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
  },
  {
    text: "So many books, so little time.",
    author: "Frank Zappa",
  },
  {
    text: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    text: "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
  },
  {
    text: "If you tell the truth, you don't have to remember anything.",
    author: "Mark Twain",
  },
  {
    text: "A friend is someone who knows all about you and still loves you.",
    author: "Elbert Hubbard",
  },
  {
    text: "Always forgive your enemies; nothing annoys them so much.",
    author: "Oscar Wilde",
  },
  {
    text: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi",
  },
  {
    text: "Without music, life would be a mistake.",
    author: "Friedrich Nietzsche",
  },
  {
    text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "It is better to be hated for what you are than to be loved for what you are not.",
    author: "Andre Gide",
  },
  {
    text: "Insanity is doing the same thing, over and over again, but expecting different results.",
    author: "Albert Einstein",
  },
  {
    text: "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
    author: "Albert Einstein",
  },
  {
    text: "We accept the love we think we deserve.",
    author: "Stephen Chbosky",
  },
  {
    text: "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
    author: "Bill Keane",
  },
  {
    text: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas A. Edison",
  },
  {
    text: "It is never too late to be what you might have been.",
    author: "George Eliot",
  },
  {
    text: "Everything you can imagine is real.",
    author: "Pablo Picasso",
  },
  {
    text: "Life isn't about finding yourself. Life is about creating yourself.",
    author: "George Bernard Shaw",
  },
  {
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston S. Churchill",
  },
  {
    text: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    author: "J.K. Rowling",
  },
  {
    text: "Don't walk in front of me... I may not follow. Don't walk behind me... I may not lead. Walk beside me... just be my friend.",
    author: "Albert Camus",
  },
  {
    text: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    text: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author: "Bernard M. Baruch",
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    author: "Maya Angelou",
  },
  {
    text: "A room without books is like a body without a soul.",
    author: "Cicero",
  },
  {
    text: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky",
  },
  {
    text: "If you judge people, you have no time to love them.",
    author: "Mother Teresa",
  },
  {
    text: "For every minute you are angry you lose sixty seconds of happiness.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "If you can't explain it to a six year old, you don't understand it yourself.",
    author: "Albert Einstein",
  },
  {
    text: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
  },
  {
    text: "Logic will get you from A to Z; imagination will get you everywhere.",
    author: "Albert Einstein",
  },
  {
    text: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates",
  },
  {
    text: "The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.",
    author: "Jane Austen",
  },
  {
    text: "If you don't stand for something, you will fall for anything.",
    author: "Gordon A. Eadie",
  },
  {
    text: "The man who does not read has no advantage over the man who cannot read.",
    author: "Mark Twain",
  },
  {
    text: "If opportunity doesn't knock, build a door.",
    author: "Milton Berle",
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do.",
    author: "Mark Twain",
  },
  {
    text: "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "Those who cannot change their minds cannot change anything.",
    author: "George Bernard Shaw",
  },
  {
    text: "Life is what happens to us while we are making other plans.",
    author: "Allen Saunders",
  },
  {
    text: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "Success is stumbling from failure to failure with no loss of enthusiasm.",
    author: "Winston S. Churchill",
  },
  {
    text: "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.",
    author: "Charles Darwin",
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    text: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins",
  },
  {
    text: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    author: "Martin Luther King Jr.",
  },
  {
    text: "Life is 10% what happens to me and 90% how I react to it.",
    author: "Charles R. Swindoll",
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    text: "Education is the most powerful weapon which you can use to change the world.",
    author: "Nelson Mandela",
  },
  {
    text: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu",
  },
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    text: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas A. Edison",
  },
  {
    text: "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    text: "Life is never fair, and perhaps it is a good thing for most of us that it is not.",
    author: "Oscar Wilde",
  },
  {
    text: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
  },
  {
    text: "The secret of success is to do the common thing uncommonly well.",
    author: "John D. Rockefeller Jr.",
  },
  {
    text: "The future rewards those who press on. I don't have time to feel sorry for myself. I don't have time to complain. I'm going to press on.",
    author: "Barack Obama",
  },
  {
    text: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    author: "Albert Einstein",
  },
  {
    text: "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "The question isn't who is going to let me; it's who is going to stop me.",
    author: "Ayn Rand",
  },
  {
    text: "The greatest wealth is to live content with little.",
    author: "Plato",
  },
  {
    text: "The successful warrior is the average man, with laser-like focus.",
    author: "Bruce Lee",
  },
  {
    text: "You must be the change you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    text: "Rise above the storm and you will find the sunshine.",
    author: "Mario Fernandez",
  },
  {
    text: "Don't count the days, make the days count.",
    author: "Muhammad Ali",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
  },
  {
    text: "I have learned over the years that when one's mind is made up, this diminishes fear.",
    author: "Rosa Parks",
  },
  {
    text: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    author: "Oprah Winfrey",
  },
  {
    text: "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
    author: "Dalai Lama",
  },
  {
    text: "You can't use up creativity. The more you use, the more you have.",
    author: "Maya Angelou",
  },
  {
    text: "Dream big and dare to fail.",
    author: "Norman Vaughan",
  },
  {
    text: "We become what we think about.",
    author: "Earl Nightingale",
  },
  {
    text: "The most difficult thing is the decision to act, the rest is merely tenacity.",
    author: "Amelia Earhart",
  },
  {
    text: "Life shrinks or expands in proportion to one's courage.",
    author: "Anais Nin",
  },
  {
    text: "Nothing is impossible, the word itself says 'I'm possible'!",
    author: "Audrey Hepburn",
  },
  {
    text: "The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "Everything has beauty, but not everyone can see.",
    author: "Confucius",
  },
  {
    text: "Whatever you are, be a good one.",
    author: "Abraham Lincoln",
  },
  {
    text: "Change your thoughts and you change your world.",
    author: "Norman Vincent Peale",
  },
  {
    text: "The only way to have a friend is to be one.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "What we achieve inwardly will change outer reality.",
    author: "Plutarch",
  },
  {
    text: "The mind is everything. What you think you become.",
    author: "Buddha",
  },
  {
    text: "Keep your eyes on the stars, and your feet on the ground.",
    author: "Theodore Roosevelt",
  },
  {
    text: "What you seek is seeking you.",
    author: "Rumi",
  },
  {
    text: "Never let your memories be greater than your dreams.",
    author: "Doug Ivester",
  },
  {
    text: "The more you praise and celebrate your life, the more there is in life to celebrate.",
    author: "Oprah Winfrey",
  },
  {
    text: "The power of imagination makes us infinite.",
    author: "John Muir",
  },
  {
    text: "Hope is the heartbeat of the soul.",
    author: "Michelle Horst",
  },
  {
    text: "Try to be a rainbow in someone's cloud.",
    author: "Maya Angelou",
  },
  {
    text: "Do not wait to strike till the iron is hot; but make it hot by striking.",
    author: "William Butler Yeats",
  },
  {
    text: "The best revenge is massive success.",
    author: "Frank Sinatra",
  },
];

// Show new quote
function newQuote() {
  // Check if all quotes have been used
  if (usedQuotes.length === quotesArray.length) {
    // Reset usedQuotes array when all quotes have been displayed
    usedQuotes = [];
  }

  var quote;
  var index;
  var isUsed = true;

  // Keep selecting a random quote until we find one that hasn't been used
  while (isUsed) {
    index = Math.floor(Math.random() * quotesArray.length);

    // Check if this quote has already been used
    if (usedQuotes.indexOf(index) === -1) {
      isUsed = false;

      // Add this quote index to the used quotes array
      usedQuotes.push(index);
    }
  }

  // Get the quote from the array
  quote = quotesArray[index];

  // Check quote length to determine styling
  if (quote.text.length > 120) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }

  // Set the quote text and author
  quoteText.textContent = quote.text;

  // Handle cases where author might be unknown
  if (!quote.author) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quote.author;
  }
}

// Add event listener for the new quote button
newQuoteBtn.addEventListener("click", newQuote);

// On Load
newQuote();
