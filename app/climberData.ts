export interface Climber {
  name: string;
  nickname: string;
  bio: string;
  specialty: string;
  notableAscent: string;
  imageUrl: string;
}

export const climbers: Climber[] = [
  {
    name: "Adam Ondra",
    nickname: "The Czech Crusher",
    bio: "Widely considered the best competition and sport climber of all time. Adam sent the world's first 5.15d (Silence) at just 24 years old and has dominated both lead and bouldering World Cups.",
    specialty: "Sport Climbing & Bouldering",
    notableAscent: "Silence (5.15d) - Flatanger, Norway",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/20180227-LS-0055_by_Lukasz_Sokol.jpg/960px-20180227-LS-0055_by_Lukasz_Sokol.jpg",
  },
  {
    name: "Alex Honnold",
    nickname: "No Big Deal",
    bio: "Famous for free soloing El Capitan's Freerider route in Yosemite — 3,000 feet with no ropes. His calm demeanor in the face of terrifying exposure earned him worldwide fame and an Oscar-winning documentary.",
    specialty: "Free Solo & Big Wall",
    notableAscent: "Freerider Free Solo (5.13a) - El Capitan, Yosemite",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Alex_Honnold_in_2023_in_Antarctica_%28cropped%29.jpg/960px-Alex_Honnold_in_2023_in_Antarctica_%28cropped%29.jpg",
  },
  {
    name: "Emily Harrington",
    nickname: "The All-Rounder",
    bio: "A versatile climber who's competed at the highest levels in sport climbing and transitioned to big wall free climbing. She became the first woman to free climb El Cap's Golden Gate route in under 24 hours.",
    specialty: "Sport Climbing & Big Wall",
    notableAscent: "Golden Gate (5.13) - El Capitan, free in a day",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emily_Harrington_sends_Golden_Gate_%285.13_VI%29_in_El_Capitan_-_06.jpg/960px-Emily_Harrington_sends_Golden_Gate_%285.13_VI%29_in_El_Capitan_-_06.jpg",
  },
  {
    name: "Anna Hazelnutt",
    nickname: "The Social Crusher",
    bio: "A rising star in the climbing community known for her infectious energy, creative content, and strong bouldering. She's brought a fresh, fun voice to climbing media while continuing to push her grades.",
    specialty: "Bouldering & Content Creation",
    notableAscent: "Inspiring a new generation of climbers online",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOSzHjIG7ahOPn9v7aWArwrHCZtIJUQAy5FaFzcvwQJ0baQxIwOcUAysA0OpZ3Rs8OynvWZzOLvi9JcX7xa4dcaAc0J461diztwOXFuA&s=10",
  },
  {
    name: "Tommy Caldwell",
    nickname: "The Dawn Wall Legend",
    bio: "One of the greatest big wall free climbers in history. Tommy spent years projecting the Dawn Wall on El Capitan, finally completing it with Kevin Jorgeson in 2015 — a route many said was impossible.",
    specialty: "Big Wall Free Climbing",
    notableAscent: "The Dawn Wall (5.14d) - El Capitan, Yosemite",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Tommy_Caldwell_%282015%29.jpg",
  },
  {
    name: "Tom Randall",
    nickname: "The Wide Boyz",
    bio: "One half of the legendary Wide Boyz duo. Tom is the world's foremost crack and offwidth climbing specialist, known for his incredible training dedication and ability to suffer in chimneys and squeezes that would break most climbers.",
    specialty: "Crack & Offwidth Climbing",
    notableAscent: "Century Crack (5.14b offwidth) - Canyonlands, Utah",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Tom_Randall_CrackFest_2024_climbing.jpg/960px-Tom_Randall_CrackFest_2024_climbing.jpg",
  },
];
