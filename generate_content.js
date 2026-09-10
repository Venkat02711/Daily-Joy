import fs from 'fs';

const oldContent = fs.readFileSync('/app/applet/src/data/content.ts', 'utf8');

const prefix = oldContent.substring(0, oldContent.indexOf('export const contentLibrary'));
const suffix = oldContent.substring(oldContent.indexOf('export const getFeaturedCard'));

const generateUrl = (prompt, seed) => `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=800&height=1000&nologo=true&seed=${seed}`;

const cards = [
  // SPIRITUAL
  {
    id: 'spiritual-1', category: 'spiritual',
    message: "Faith is taking the first step even when you don't see the whole staircase.",
    imagePrompt: "Photorealistic warm portrait of a person standing at the bottom of a grand stone staircase looking up with hope, warm golden light, serene spiritual atmosphere, authentic human emotion, vertical portrait composition. No text, no typography.",
    imageKeywords: ["hope", "staircase", "spiritual", "light"]
  },
  {
    id: 'spiritual-2', category: 'spiritual',
    message: "Let your faith be bigger than your fears.",
    imagePrompt: "Photorealistic image of hands gently clasped in prayer resting on a wooden pew, soft sunlight filtering through a stained glass window, peaceful worship setting, spiritual atmosphere, vertical portrait composition. No text.",
    imageKeywords: ["prayer", "worship", "stained glass", "faith"]
  },
  {
    id: 'spiritual-3', category: 'spiritual',
    message: "Trust the journey. Everything happens for a reason.",
    imagePrompt: "Photorealistic portrait of a person looking peacefully toward the heavens, warm sunlight illuminating their face, serene spiritual atmosphere, respectful and authentic, vertical portrait composition. No text.",
    imageKeywords: ["peaceful", "heavens", "spiritual", "trust"]
  },
  {
    id: 'spiritual-4', category: 'spiritual',
    message: "You are guided, protected, and loved.",
    imagePrompt: "Photorealistic image of a beautiful glowing candle on a peaceful altar, soft warm light radiating in a dark quiet room, spiritual ceremony, vertical portrait composition. No text.",
    imageKeywords: ["candle", "altar", "guidance", "spiritual"]
  },
  {
    id: 'spiritual-5', category: 'spiritual',
    message: "Listen to your soul; it knows the way.",
    imagePrompt: "Photorealistic portrait of a person sitting in deep meditation with eyes softly closed, serene temple interior background, warm golden light, authentic spiritual emotion, vertical portrait composition. No text.",
    imageKeywords: ["meditation", "temple", "soul", "peace"]
  },
  {
    id: 'spiritual-6', category: 'spiritual',
    message: "Count your blessings, not your problems.",
    imagePrompt: "Photorealistic portrait of an adult person peacefully praying with hands together in gratitude, warm golden light, serene spiritual atmosphere, respectful and authentic, vertical portrait composition. No text.",
    imageKeywords: ["gratitude", "praying", "blessings", "spiritual"]
  },
  {
    id: 'spiritual-7', category: 'spiritual',
    message: "Grace will take you places hustling can't.",
    imagePrompt: "Photorealistic image of wooden prayer beads resting gently on an open ancient religious text, soft warm sunlight, church interior, peaceful worship setting, vertical portrait composition. No text.",
    imageKeywords: ["grace", "prayer beads", "church", "peaceful"]
  },
  {
    id: 'spiritual-8', category: 'spiritual',
    message: "Be a light in this world.",
    imagePrompt: "Photorealistic image of a person holding a lit candle in cupped hands, warm glow illuminating their peaceful face, dark serene background, spiritual atmosphere, vertical portrait composition. No text.",
    imageKeywords: ["light", "candle", "world", "spiritual"]
  },
  {
    id: 'spiritual-9', category: 'spiritual',
    message: "Walk by faith, not by sight.",
    imagePrompt: "Photorealistic portrait of an elderly person with eyes closed in peaceful prayer, hands clasped, warm natural lighting, respectful and authentic spiritual moment, vertical portrait composition. No text.",
    imageKeywords: ["faith", "elderly", "praying", "spiritual"]
  },
  {
    id: 'spiritual-10', category: 'spiritual',
    message: "Your spiritual journey is unique and beautiful.",
    imagePrompt: "Photorealistic image of stunning rays of light entering a beautiful quiet place of worship, dust motes dancing in the light, peaceful spiritual atmosphere, vertical portrait composition. No text.",
    imageKeywords: ["light rays", "worship", "beautiful", "spiritual"]
  },

  // MORNING
  {
    id: 'morning-1', category: 'morning',
    message: "Good morning! May today bring you peace and happiness.",
    imagePrompt: "Photorealistic image of a person opening bedroom curtains to reveal bright morning sunlight, cozy bedroom interior, warm positive morning atmosphere, vertical portrait composition. No text.",
    imageKeywords: ["morning", "sunlight", "curtains", "waking up"]
  },
  {
    id: 'morning-2', category: 'morning',
    message: "Every morning is a new beginning. Embrace the day.",
    imagePrompt: "Photorealistic close up of a steaming cup of coffee and an open book on a wooden table, bright morning sunlight streaming through a nearby window, warm cozy morning atmosphere, vertical portrait composition. No text.",
    imageKeywords: ["coffee", "book", "morning", "sunrise"]
  },
  {
    id: 'morning-3', category: 'morning',
    message: "Wake up with gratitude and go to sleep with peace.",
    imagePrompt: "Photorealistic portrait of a person stretching happily in a sunlit bedroom, white sheets, bright morning light, positive and energetic mood, vertical portrait composition. No text.",
    imageKeywords: ["stretching", "bedroom", "morning", "gratitude"]
  },
  {
    id: 'morning-4', category: 'morning',
    message: "Good morning. Wishing you a day full of joyful moments.",
    imagePrompt: "Photorealistic image of a family having a happy breakfast together at a sunlit kitchen table, warm morning light, joyful human connection, vertical portrait composition. No text.",
    imageKeywords: ["breakfast", "family", "joyful", "morning"]
  },
  {
    id: 'morning-5', category: 'morning',
    message: "A beautiful morning to you. Let your light shine.",
    imagePrompt: "Photorealistic image of a beautiful sunrise over a calm suburban neighborhood, golden morning light hitting the houses, peaceful morning atmosphere, vertical portrait composition. No text.",
    imageKeywords: ["sunrise", "neighborhood", "morning", "beautiful"]
  },
  {
    id: 'morning-6', category: 'morning',
    message: "May your morning be as beautiful as your smile.",
    imagePrompt: "Photorealistic portrait of a smiling person enjoying a warm cup of tea on a sunny morning porch, joyful and peaceful, vertical portrait composition. No text.",
    imageKeywords: ["smile", "tea", "porch", "morning"]
  },
  {
    id: 'morning-7', category: 'morning',
    message: "Rise and shine. Today is a gift.",
    imagePrompt: "Photorealistic image of beautiful flowers in a garden covered in morning dew, bright morning sunlight shining through the petals, vertical portrait composition. No text.",
    imageKeywords: ["flowers", "dew", "morning", "sunlight"]
  },
  {
    id: 'morning-8', category: 'morning',
    message: "Good morning. Breathe deeply and enjoy the present moment.",
    imagePrompt: "Photorealistic image of a person doing morning yoga on a peaceful beach at sunrise, calm waves, serene atmosphere, vertical portrait composition. No text.",
    imageKeywords: ["yoga", "sunrise", "beach", "morning"]
  },
  {
    id: 'morning-9', category: 'morning',
    message: "Sending you morning sunshine and positive vibes.",
    imagePrompt: "Photorealistic close up of a breakfast plate with fresh fruit and pancakes, brightly lit by morning sun, cheerful and positive, vertical portrait composition. No text.",
    imageKeywords: ["breakfast", "pancakes", "sunshine", "morning"]
  },
  {
    id: 'morning-10', category: 'morning',
    message: "Start today with a grateful heart. Good morning.",
    imagePrompt: "Photorealistic image of a person standing by a window looking out at a beautiful morning sunrise with a peaceful smile, vertical portrait composition. No text.",
    imageKeywords: ["window", "sunrise", "smile", "morning"]
  },

  // LOVE
  {
    id: 'love-1', category: 'love',
    message: "Let everything you do be done in love.",
    imagePrompt: "Photorealistic portrait of a loving elderly couple holding hands and smiling warmly at each other, soft natural lighting, authentic human connection, vertical portrait composition. No text.",
    imageKeywords: ["elderly couple", "holding hands", "love", "warmth"]
  },
  {
    id: 'love-2', category: 'love',
    message: "Love is the greatest gift we can give and receive.",
    imagePrompt: "Photorealistic image of a parent gently holding their newborn baby, warm soft lighting, tender affection, beautiful human moment, vertical portrait composition. No text.",
    imageKeywords: ["parent", "baby", "gift", "love"]
  },
  {
    id: 'love-3', category: 'love',
    message: "Spread love wherever you go.",
    imagePrompt: "Photorealistic image of someone handing a beautiful bouquet of flowers to another person, hands touching gently, warm sunlight, joyful giving, vertical portrait composition. No text.",
    imageKeywords: ["flowers", "giving", "love", "sunlight"]
  },
  {
    id: 'love-4', category: 'love',
    message: "You are loved, you are valued, you are beautiful.",
    imagePrompt: "Photorealistic portrait of a happy couple hugging warmly in a sunlit park, genuine smiles, authentic affection, vertical portrait composition. No text.",
    imageKeywords: ["couple", "hugging", "love", "park"]
  },
  {
    id: 'love-5', category: 'love',
    message: "Love lights up the darkest days.",
    imagePrompt: "Photorealistic close-up of two hands gently holding each other, warm golden hour lighting, deep human connection and care, vertical portrait composition. No text.",
    imageKeywords: ["hands", "connection", "love", "golden hour"]
  },
  {
    id: 'love-6', category: 'love',
    message: "A heart full of love has no room for sadness.",
    imagePrompt: "Photorealistic image of a family laughing and embracing warmly outdoors, genuine joy and love, beautiful sunlight, vertical portrait composition. No text.",
    imageKeywords: ["family", "laughing", "love", "joy"]
  },
  {
    id: 'love-7', category: 'love',
    message: "Love cures people—both the ones who give it and the ones who receive it.",
    imagePrompt: "Photorealistic image of a person comforting a friend with a warm, caring hug, compassionate and loving atmosphere, soft lighting, vertical portrait composition. No text.",
    imageKeywords: ["comfort", "hug", "friendship", "love"]
  },
  {
    id: 'love-8', category: 'love',
    message: "May your day be filled with endless love.",
    imagePrompt: "Photorealistic portrait of a young couple sharing a tender, joyful moment looking into each other's eyes, beautiful natural lighting, vertical portrait composition. No text.",
    imageKeywords: ["couple", "joyful", "love", "eyes"]
  },
  {
    id: 'love-9', category: 'love',
    message: "Love is the flower you've got to let grow.",
    imagePrompt: "Photorealistic image of a person tenderly watering a small blooming flower plant in a sunlit garden, nurturing and loving, vertical portrait composition. No text.",
    imageKeywords: ["watering", "flower", "nurturing", "love"]
  },
  {
    id: 'love-10', category: 'love',
    message: "Keep love in your heart. A life without it is like a sunless garden.",
    imagePrompt: "Photorealistic image of an affectionate mother and child reading a book together in a cozy sunlit room, warm loving family moment, vertical portrait composition. No text.",
    imageKeywords: ["mother", "child", "reading", "love"]
  },

  // MOTIVATION
  {
    id: 'motivation-1', category: 'motivation',
    message: "You are capable of amazing things.",
    imagePrompt: "Photorealistic image of a determined runner pushing forward on a track at sunrise, dynamic action, energetic lighting, perseverance and achievement, vertical portrait composition. No text.",
    imageKeywords: ["runner", "sunrise", "determination", "achievement"]
  },
  {
    id: 'motivation-2', category: 'motivation',
    message: "Believe you can and you're halfway there.",
    imagePrompt: "Photorealistic image of a person reaching the summit of a steep rocky hill, raising arms in triumph, bright sunlight, achievement and determination, vertical portrait composition. No text.",
    imageKeywords: ["summit", "triumph", "climbing", "motivation"]
  },
  {
    id: 'motivation-3', category: 'motivation',
    message: "Every small step counts towards your beautiful journey.",
    imagePrompt: "Photorealistic close-up of hiking boots stepping up a rugged stone staircase on a mountain trail, dynamic lighting, progress and determination, vertical portrait composition. No text.",
    imageKeywords: ["hiking", "steps", "progress", "journey"]
  },
  {
    id: 'motivation-4', category: 'motivation',
    message: "You have the strength within you to overcome any challenge.",
    imagePrompt: "Photorealistic portrait of a hardworking person looking determined and focused while working on a project at a desk, warm lighting, perseverance, vertical portrait composition. No text.",
    imageKeywords: ["hardworking", "focused", "perseverance", "strength"]
  },
  {
    id: 'motivation-5', category: 'motivation',
    message: "Do something today that your future self will thank you for.",
    imagePrompt: "Photorealistic image of a person studying intensely at a desk with a warm desk lamp, focus and dedication, late night or early morning, vertical portrait composition. No text.",
    imageKeywords: ["studying", "focus", "dedication", "future"]
  },
  {
    id: 'motivation-6', category: 'motivation',
    message: "Your potential is endless. Keep going.",
    imagePrompt: "Photorealistic image of an athlete training hard in a gym, sweat and determination on their face, dramatic lighting, strength and action, vertical portrait composition. No text.",
    imageKeywords: ["athlete", "training", "determination", "potential"]
  },
  {
    id: 'motivation-7', category: 'motivation',
    message: "Focus on the good and the good will multiply.",
    imagePrompt: "Photorealistic image of a person enthusiastically writing in a notebook, brainstorming ideas, bright energetic workspace, action and progress, vertical portrait composition. No text.",
    imageKeywords: ["writing", "ideas", "progress", "focus"]
  },
  {
    id: 'motivation-8', category: 'motivation',
    message: "You are stronger than you know.",
    imagePrompt: "Photorealistic image of a rock climber scaling a challenging cliff face, gripping the rock tightly, clear sky background, intense focus and strength, vertical portrait composition. No text.",
    imageKeywords: ["rock climber", "strength", "cliff", "overcome"]
  },
  {
    id: 'motivation-9', category: 'motivation',
    message: "Let your dreams be your wings.",
    imagePrompt: "Photorealistic image of a person standing on a stage speaking confidently, gesturing with passion, inspiring action, well-lit, vertical portrait composition. No text.",
    imageKeywords: ["speaking", "confidence", "passion", "dreams"]
  },
  {
    id: 'motivation-10', category: 'motivation',
    message: "It's a good day to have a good day.",
    imagePrompt: "Photorealistic portrait of an entrepreneur smiling proudly in front of their new small business storefront, feeling accomplished and determined, warm daylight, vertical portrait composition. No text.",
    imageKeywords: ["entrepreneur", "proud", "accomplishment", "business"]
  },

  // PEACE
  {
    id: 'peace-1', category: 'peace',
    message: "Peace begins with a smile.",
    imagePrompt: "Photorealistic portrait of a person sitting in lotus position meditating in a quiet sunlit room, deep inner peace, calm atmosphere, vertical portrait composition. No text.",
    imageKeywords: ["meditation", "peace", "calm", "smile"]
  },
  {
    id: 'peace-2', category: 'peace',
    message: "Do not let the behavior of others destroy your inner peace.",
    imagePrompt: "Photorealistic image of a person sitting peacefully on a park bench reading a book, serene garden setting, soft natural lighting, quiet relaxation, vertical portrait composition. No text.",
    imageKeywords: ["reading", "bench", "park", "peace"]
  },
  {
    id: 'peace-3', category: 'peace',
    message: "Peace is a journey of a thousand miles and it must be taken one step at a time.",
    imagePrompt: "Photorealistic image of a peaceful zen garden with perfectly raked sand and smooth stones, soft diffused lighting, tranquil atmosphere, vertical portrait composition. No text.",
    imageKeywords: ["zen garden", "sand", "stones", "tranquil"]
  },
  {
    id: 'peace-4', category: 'peace',
    message: "Breathe in peace, exhale worry.",
    imagePrompt: "Photorealistic image of a person taking a deep breath of fresh air in a quiet green park, eyes softly closed, calm and relaxed, vertical portrait composition. No text.",
    imageKeywords: ["breathing", "park", "relaxed", "peace"]
  },
  {
    id: 'peace-5', category: 'peace',
    message: "Find your center and let peace surround you.",
    imagePrompt: "Photorealistic image of a glowing candle sitting on a table in a dark, quiet, peaceful room, soft warm illumination, tranquil setting, vertical portrait composition. No text.",
    imageKeywords: ["candle", "room", "quiet", "center"]
  },
  {
    id: 'peace-6', category: 'peace',
    message: "Calm mind brings inner strength and self-confidence.",
    imagePrompt: "Photorealistic portrait of a person gently resting their hands in their lap, sitting calmly by a quiet lake at dawn, peaceful reflection, vertical portrait composition. No text.",
    imageKeywords: ["calm", "lake", "dawn", "reflection"]
  },
  {
    id: 'peace-7', category: 'peace',
    message: "Let go of what you cannot change.",
    imagePrompt: "Photorealistic image of someone gently releasing a beautiful paper lantern into a night sky, peaceful acceptance, warm glowing light, vertical portrait composition. No text.",
    imageKeywords: ["lantern", "night sky", "releasing", "peace"]
  },
  {
    id: 'peace-8', category: 'peace',
    message: "Peace comes from within. Do not seek it without.",
    imagePrompt: "Photorealistic close-up of a person drinking a cup of warm tea while looking out a rainy window, feeling cozy and completely at peace, vertical portrait composition. No text.",
    imageKeywords: ["tea", "rainy window", "cozy", "peace"]
  },
  {
    id: 'peace-9', category: 'peace',
    message: "May peace and tranquility bless your day.",
    imagePrompt: "Photorealistic image of a tranquil indoor water fountain in a softly lit spa room, peaceful ambiance, relaxing environment, vertical portrait composition. No text.",
    imageKeywords: ["water fountain", "spa", "tranquility", "peace"]
  },
  {
    id: 'peace-10', category: 'peace',
    message: "Embrace the silent moments and find your inner calm.",
    imagePrompt: "Photorealistic image of a person laying back peacefully in a hammock in a quiet backyard, dappled sunlight, true relaxation, vertical portrait composition. No text.",
    imageKeywords: ["hammock", "backyard", "relaxation", "calm"]
  },

  // FLOWERS
  {
    id: 'flowers-1', category: 'flowers',
    message: "Like a flower, you have the power to bloom wherever you are.",
    imagePrompt: "Photorealistic close-up macro photography of a vibrant red rose in full bloom, soft dew drops on petals, beautiful natural lighting, vertical portrait composition. No text.",
    imageKeywords: ["rose", "bloom", "dew", "flower"]
  },
  {
    id: 'flowers-2', category: 'flowers',
    message: "Flowers are a proud assertion that a ray of beauty outvalues all the utilities.",
    imagePrompt: "Photorealistic image of a lush garden filled with colorful blooming tulips, bright spring sunlight, vibrant natural beauty, vertical portrait composition. No text.",
    imageKeywords: ["tulips", "garden", "colorful", "flower"]
  },
  {
    id: 'flowers-3', category: 'flowers',
    message: "Where flowers bloom, so does hope.",
    imagePrompt: "Photorealistic close-up of delicate pink cherry blossoms on a branch against a soft blue sky, spring atmosphere, vertical portrait composition. No text.",
    imageKeywords: ["cherry blossoms", "spring", "sky", "flower"]
  },
  {
    id: 'flowers-4', category: 'flowers',
    message: "Every flower blooms in its own time.",
    imagePrompt: "Photorealistic image of a beautiful bouquet of mixed wildflowers in a glass vase on a wooden table, warm sunlight, vertical portrait composition. No text.",
    imageKeywords: ["wildflowers", "vase", "bouquet", "flower"]
  },
  {
    id: 'flowers-5', category: 'flowers',
    message: "Take time to smell the roses today.",
    imagePrompt: "Photorealistic image of bright yellow sunflowers standing tall in a field, facing the sun, vibrant colors, vertical portrait composition. No text.",
    imageKeywords: ["sunflowers", "field", "yellow", "flower"]
  },
  {
    id: 'flowers-6', category: 'flowers',
    message: "Bloom with kindness and grace.",
    imagePrompt: "Photorealistic close-up of an elegant white lotus flower floating peacefully on calm water, beautiful reflection, vertical portrait composition. No text.",
    imageKeywords: ["lotus", "water", "elegant", "flower"]
  },
  {
    id: 'flowers-7', category: 'flowers',
    message: "Let joy blossom in your heart.",
    imagePrompt: "Photorealistic image of a beautiful arrangement of purple lavender and white daisies in a rustic basket, charming and cheerful, vertical portrait composition. No text.",
    imageKeywords: ["lavender", "daisies", "basket", "flower"]
  },
  {
    id: 'flowers-8', category: 'flowers',
    message: "A flower cannot blossom without sunshine, and man cannot live without love.",
    imagePrompt: "Photorealistic image of gorgeous pink peonies in full bloom in a sunny garden, soft and romantic, vertical portrait composition. No text.",
    imageKeywords: ["peonies", "garden", "romantic", "flower"]
  },
  {
    id: 'flowers-9', category: 'flowers',
    message: "May your day be as colorful as a spring garden.",
    imagePrompt: "Photorealistic close-up of vibrant orange marigolds growing beautifully in a terracotta pot, sunny day, vertical portrait composition. No text.",
    imageKeywords: ["marigolds", "pot", "vibrant", "flower"]
  },
  {
    id: 'flowers-10', category: 'flowers',
    message: "Embrace your unique beauty, just like every delicate flower.",
    imagePrompt: "Photorealistic close-up of a stunning rare purple orchid flower, elegant and delicate, dark background to highlight the colors, vertical portrait composition. No text.",
    imageKeywords: ["orchid", "purple", "delicate", "flower"]
  },

  // NATURE
  {
    id: 'nature-1', category: 'nature',
    message: "Nature is the art of God. Take time to admire it.",
    imagePrompt: "Photorealistic image of a majestic mountain peak towering over a crystal clear alpine lake, pine trees on the shore, beautiful landscape photography, vertical portrait composition. No text.",
    imageKeywords: ["mountain", "lake", "landscape", "nature"]
  },
  {
    id: 'nature-2', category: 'nature',
    message: "In every walk with nature, one receives far more than he seeks.",
    imagePrompt: "Photorealistic image of a lush green forest with a winding dirt path, sunlight filtering through the canopy, serene nature landscape, vertical portrait composition. No text.",
    imageKeywords: ["forest", "path", "canopy", "nature"]
  },
  {
    id: 'nature-3', category: 'nature',
    message: "Let the beauty of nature bring peace to your soul.",
    imagePrompt: "Photorealistic image of a beautiful cascading waterfall deep in a green jungle, pristine water, vibrant nature, vertical portrait composition. No text.",
    imageKeywords: ["waterfall", "jungle", "pristine", "nature"]
  },
  {
    id: 'nature-4', category: 'nature',
    message: "Look deep into nature, and you will understand everything better.",
    imagePrompt: "Photorealistic image of a tranquil ocean beach at sunset, gentle waves washing onto the sand, beautiful colors in the sky, vertical portrait composition. No text.",
    imageKeywords: ["ocean", "beach", "sunset", "nature"]
  },
  {
    id: 'nature-5', category: 'nature',
    message: "Find your peace in the rustling of leaves and the song of birds.",
    imagePrompt: "Photorealistic image of a vast open valley with rolling green hills and a clear blue sky, peaceful landscape, vertical portrait composition. No text.",
    imageKeywords: ["valley", "hills", "sky", "nature"]
  },
  {
    id: 'nature-6', category: 'nature',
    message: "Nature does not hurry, yet everything is accomplished.",
    imagePrompt: "Photorealistic image of a slow-moving river winding through an autumn forest with vibrant red and gold leaves, calm and natural, vertical portrait composition. No text.",
    imageKeywords: ["river", "autumn", "forest", "nature"]
  },
  {
    id: 'nature-7', category: 'nature',
    message: "The earth has music for those who listen.",
    imagePrompt: "Photorealistic close-up of a small, beautifully colored bird perched on a branch, singing happily, natural blurred background, vertical portrait composition. No text.",
    imageKeywords: ["bird", "singing", "branch", "nature"]
  },
  {
    id: 'nature-8', category: 'nature',
    message: "A peaceful mind is like a calm lake.",
    imagePrompt: "Photorealistic image of a perfectly still, misty lake at dawn, reflecting the surrounding tall pine trees flawlessly, serene nature, vertical portrait composition. No text.",
    imageKeywords: ["lake", "misty", "dawn", "nature"]
  },
  {
    id: 'nature-9', category: 'nature',
    message: "Breath in the fresh air and let your worries go.",
    imagePrompt: "Photorealistic image of a dense redwood forest with massive trees towering into the sky, people small in the distance for scale, majestic nature, vertical portrait composition. No text.",
    imageKeywords: ["redwood", "forest", "majestic", "nature"]
  },
  {
    id: 'nature-10', category: 'nature',
    message: "Wherever you go, no matter what the weather, always bring your own sunshine.",
    imagePrompt: "Photorealistic image of a brilliant double rainbow stretching across a lush green landscape after a heavy rain, vibrant and fresh, vertical portrait composition. No text.",
    imageKeywords: ["rainbow", "landscape", "fresh", "nature"]
  },

  // THOUGHTS
  {
    id: 'thoughts-1', category: 'thoughts',
    message: "Positive mind, positive vibes, positive life.",
    imagePrompt: "Photorealistic portrait of a diverse group of friends laughing joyfully together outdoors in the sunshine, genuine happiness, positive human connection, vertical portrait composition. No text.",
    imageKeywords: ["friends", "laughing", "joyful", "positive"]
  },
  {
    id: 'thoughts-2', category: 'thoughts',
    message: "Choose joy every single day.",
    imagePrompt: "Photorealistic image of a happy child running with colorful balloons in a sunlit park, pure joy and celebration, vertical portrait composition. No text.",
    imageKeywords: ["child", "balloons", "joy", "park"]
  },
  {
    id: 'thoughts-3', category: 'thoughts',
    message: "A positive attitude changes everything.",
    imagePrompt: "Photorealistic portrait of a person smiling brightly while holding a bright yellow umbrella in the rain, optimistic and happy, vertical portrait composition. No text.",
    imageKeywords: ["smile", "umbrella", "optimistic", "positive"]
  },
  {
    id: 'thoughts-4', category: 'thoughts',
    message: "Happiness is an inside job.",
    imagePrompt: "Photorealistic image of a family celebrating a birthday with a glowing cake, happy faces illuminated by candlelight, joyful human moment, vertical portrait composition. No text.",
    imageKeywords: ["family", "celebrating", "birthday", "happiness"]
  },
  {
    id: 'thoughts-5', category: 'thoughts',
    message: "Keep your face to the sunshine and you cannot see a shadow.",
    imagePrompt: "Photorealistic portrait of a young woman with a radiant smile standing in a field of flowers, bright sunshine, joyful and uplifting mood, vertical portrait composition. No text.",
    imageKeywords: ["smile", "sunshine", "flowers", "uplifting"]
  },
  {
    id: 'thoughts-6', category: 'thoughts',
    message: "Focus on the beautiful things in life.",
    imagePrompt: "Photorealistic image of a person happily playing with their golden retriever dog in a sunny backyard, genuine laughter and fun, vertical portrait composition. No text.",
    imageKeywords: ["dog", "playing", "laughter", "beautiful"]
  },
  {
    id: 'thoughts-7', category: 'thoughts',
    message: "Your mind is a garden. Your thoughts are the seeds.",
    imagePrompt: "Photorealistic close-up of a person happily planting colorful flowers in a garden box, getting their hands dirty with a smile, productive and positive, vertical portrait composition. No text.",
    imageKeywords: ["planting", "flowers", "garden", "thoughts"]
  },
  {
    id: 'thoughts-8', category: 'thoughts',
    message: "Radiate positivity and watch the world around you change.",
    imagePrompt: "Photorealistic image of a group of volunteers enthusiastically painting a community mural together, smiling and working as a team, bright colors, vertical portrait composition. No text.",
    imageKeywords: ["volunteers", "mural", "team", "positivity"]
  },
  {
    id: 'thoughts-9', category: 'thoughts',
    message: "Every day is a second chance.",
    imagePrompt: "Photorealistic portrait of a person taking a deep, refreshing breath at the edge of the ocean, feeling renewed and positive about the day ahead, vertical portrait composition. No text.",
    imageKeywords: ["ocean", "refreshing", "renewed", "chance"]
  },
  {
    id: 'thoughts-10', category: 'thoughts',
    message: "Train your mind to see the good in every situation.",
    imagePrompt: "Photorealistic image of two people happily sharing a meal at an outdoor cafe, laughing deeply and enjoying each other's company, bright sunny day, vertical portrait composition. No text.",
    imageKeywords: ["cafe", "laughing", "meal", "good"]
  }
];

let counter = 1000;
const cardsCode = cards.map(c => {
  counter++;
  const url = generateUrl(c.imagePrompt, counter);
  return `  { 
    id: '${c.id}', 
    category: '${c.category}', 
    message: ${JSON.stringify(c.message)}, 
    imagePrompt: ${JSON.stringify(c.imagePrompt)},
    imageKeywords: ${JSON.stringify(c.imageKeywords)},
    image: "${url}" 
  }`;
}).join(',\n');

const newContent = `${prefix}export const contentLibrary: ContentItem[] = [\n${cardsCode}\n];\n\n${suffix}`;

fs.writeFileSync('/app/applet/src/data/content.ts', newContent);
console.log('Done');
