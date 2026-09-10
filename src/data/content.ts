import { Category, ContentItem } from '../types';

export const categories: Category[] = [
  { id: 'morning', name: 'Good Morning', icon: '🌅', color: 'bg-orange-100 text-orange-800' },
  { id: 'nature', name: 'Nature', icon: '🌿', color: 'bg-green-100 text-green-800' },
  { id: 'flowers', name: 'Flowers', icon: '🌸', color: 'bg-pink-100 text-pink-800' },
  { id: 'motivation', name: 'Motivation', icon: '💪', color: 'bg-yellow-100 text-yellow-800' },
  { id: 'peace', name: 'Peace', icon: '🕊️', color: 'bg-blue-100 text-blue-800' },
  { id: 'love', name: 'Love', icon: '❤️', color: 'bg-red-100 text-red-800' },
  { id: 'spiritual', name: 'Spiritual', icon: '🙏', color: 'bg-purple-100 text-purple-800' },
  { id: 'thoughts', name: 'Positive Thoughts', icon: '🌞', color: 'bg-amber-100 text-amber-800' },
];

export const contentLibrary: ContentItem[] = [
  { 
    id: 'spiritual-1', 
    category: 'spiritual', 
    message: "Faith is taking the first step even when you don't see the whole staircase.", 
    imagePrompt: "Photorealistic warm portrait of a person standing at the bottom of a grand stone staircase looking up with hope, warm golden light, serene spiritual atmosphere, authentic human emotion, vertical portrait composition. No text, no typography.",
    imageKeywords: ["hope","staircase","spiritual","light"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20warm%20portrait%20of%20a%20person%20standing%20at%20the%20bottom%20of%20a%20grand%20stone%20staircase%20looking%20up%20with%20hope%2C%20warm%20golden%20light%2C%20serene%20spiritual%20atmosphere%2C%20authentic%20human%20emotion%2C%20vertical%20portrait%20composition.%20No%20text%2C%20no%20typography.?width=800&height=1000&nologo=true&seed=1001" 
  },
  { 
    id: 'spiritual-2', 
    category: 'spiritual', 
    message: "Let your faith be bigger than your fears.", 
    imagePrompt: "Photorealistic image of hands gently clasped in prayer resting on a wooden pew, soft sunlight filtering through a stained glass window, peaceful worship setting, spiritual atmosphere, vertical portrait composition. No text.",
    imageKeywords: ["prayer","worship","stained glass","faith"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20image%20of%20hands%20gently%20clasped%20in%20prayer%20resting%20on%20a%20wooden%20pew%2C%20soft%20sunlight%20filtering%20through%20a%20stained%20glass%20window%2C%20peaceful%20worship%20setting%2C%20spiritual%20atmosphere%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1002" 
  },
  { 
    id: 'spiritual-3', 
    category: 'spiritual', 
    message: "Trust the journey. Everything happens for a reason.", 
    imagePrompt: "Photorealistic portrait of a person looking peacefully toward the heavens, warm sunlight illuminating their face, serene spiritual atmosphere, respectful and authentic, vertical portrait composition. No text.",
    imageKeywords: ["peaceful","heavens","spiritual","trust"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20portrait%20of%20a%20person%20looking%20peacefully%20toward%20the%20heavens%2C%20warm%20sunlight%20illuminating%20their%20face%2C%20serene%20spiritual%20atmosphere%2C%20respectful%20and%20authentic%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1003" 
  },
  { 
    id: 'spiritual-4', 
    category: 'spiritual', 
    message: "You are guided, protected, and loved.", 
    imagePrompt: "Photorealistic image of a beautiful glowing candle on a peaceful altar, soft warm light radiating in a dark quiet room, spiritual ceremony, vertical portrait composition. No text.",
    imageKeywords: ["candle","altar","guidance","spiritual"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20image%20of%20a%20beautiful%20glowing%20candle%20on%20a%20peaceful%20altar%2C%20soft%20warm%20light%20radiating%20in%20a%20dark%20quiet%20room%2C%20spiritual%20ceremony%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1004" 
  },
  { 
    id: 'spiritual-5', 
    category: 'spiritual', 
    message: "Listen to your soul; it knows the way.", 
    imagePrompt: "Photorealistic portrait of a person sitting in deep meditation with eyes softly closed, serene temple interior background, warm golden light, authentic spiritual emotion, vertical portrait composition. No text.",
    imageKeywords: ["meditation","temple","soul","peace"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20portrait%20of%20a%20person%20sitting%20in%20deep%20meditation%20with%20eyes%20softly%20closed%2C%20serene%20temple%20interior%20background%2C%20warm%20golden%20light%2C%20authentic%20spiritual%20emotion%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1005" 
  },
  { 
    id: 'spiritual-6', 
    category: 'spiritual', 
    message: "Count your blessings, not your problems.", 
    imagePrompt: "Photorealistic portrait of an adult person peacefully praying with hands together in gratitude, warm golden light, serene spiritual atmosphere, respectful and authentic, vertical portrait composition. No text.",
    imageKeywords: ["gratitude","praying","blessings","spiritual"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20portrait%20of%20an%20adult%20person%20peacefully%20praying%20with%20hands%20together%20in%20gratitude%2C%20warm%20golden%20light%2C%20serene%20spiritual%20atmosphere%2C%20respectful%20and%20authentic%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1006" 
  },
  { 
    id: 'spiritual-7', 
    category: 'spiritual', 
    message: "Grace will take you places hustling can't.", 
    imagePrompt: "Photorealistic image of wooden prayer beads resting gently on an open ancient religious text, soft warm sunlight, church interior, peaceful worship setting, vertical portrait composition. No text.",
    imageKeywords: ["grace","prayer beads","church","peaceful"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20image%20of%20wooden%20prayer%20beads%20resting%20gently%20on%20an%20open%20ancient%20religious%20text%2C%20soft%20warm%20sunlight%2C%20church%20interior%2C%20peaceful%20worship%20setting%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1007" 
  },
  { 
    id: 'spiritual-8', 
    category: 'spiritual', 
    message: "Be a light in this world.", 
    imagePrompt: "Photorealistic image of a person holding a lit candle in cupped hands, warm glow illuminating their peaceful face, dark serene background, spiritual atmosphere, vertical portrait composition. No text.",
    imageKeywords: ["light","candle","world","spiritual"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20image%20of%20a%20person%20holding%20a%20lit%20candle%20in%20cupped%20hands%2C%20warm%20glow%20illuminating%20their%20peaceful%20face%2C%20dark%20serene%20background%2C%20spiritual%20atmosphere%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1008" 
  },
  { 
    id: 'spiritual-9', 
    category: 'spiritual', 
    message: "Walk by faith, not by sight.", 
    imagePrompt: "Photorealistic portrait of an elderly person with eyes closed in peaceful prayer, hands clasped, warm natural lighting, respectful and authentic spiritual moment, vertical portrait composition. No text.",
    imageKeywords: ["faith","elderly","praying","spiritual"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20portrait%20of%20an%20elderly%20person%20with%20eyes%20closed%20in%20peaceful%20prayer%2C%20hands%20clasped%2C%20warm%20natural%20lighting%2C%20respectful%20and%20authentic%20spiritual%20moment%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1009" 
  },
  { 
    id: 'spiritual-10', 
    category: 'spiritual', 
    message: "Your spiritual journey is unique and beautiful.", 
    imagePrompt: "Photorealistic image of stunning rays of light entering a beautiful quiet place of worship, dust motes dancing in the light, peaceful spiritual atmosphere, vertical portrait composition. No text.",
    imageKeywords: ["light rays","worship","beautiful","spiritual"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20image%20of%20stunning%20rays%20of%20light%20entering%20a%20beautiful%20quiet%20place%20of%20worship%2C%20dust%20motes%20dancing%20in%20the%20light%2C%20peaceful%20spiritual%20atmosphere%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1010" 
  },
  { 
    id: 'morning-1', 
    category: 'morning', 
    message: "Good morning! May today bring you peace and happiness.", 
    imagePrompt: "Photorealistic image of a person opening bedroom curtains to reveal bright morning sunlight, cozy bedroom interior, warm positive morning atmosphere, vertical portrait composition. No text.",
    imageKeywords: ["morning","sunlight","curtains","waking up"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20image%20of%20a%20person%20opening%20bedroom%20curtains%20to%20reveal%20bright%20morning%20sunlight%2C%20cozy%20bedroom%20interior%2C%20warm%20positive%20morning%20atmosphere%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1011" 
  },
  { 
    id: 'morning-2', 
    category: 'morning', 
    message: "Every morning is a new beginning. Embrace the day.", 
    imagePrompt: "Photorealistic close up of a steaming cup of coffee and an open book on a wooden table, bright morning sunlight streaming through a nearby window, warm cozy morning atmosphere, vertical portrait composition. No text.",
    imageKeywords: ["coffee","book","morning","sunrise"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20close%20up%20of%20a%20steaming%20cup%20of%20coffee%20and%20an%20open%20book%20on%20a%20wooden%20table%2C%20bright%20morning%20sunlight%20streaming%20through%20a%20nearby%20window%2C%20warm%20cozy%20morning%20atmosphere%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1012" 
  },
  { 
    id: 'morning-3', 
    category: 'morning', 
    message: "Wake up with gratitude and go to sleep with peace.", 
    imagePrompt: "Photorealistic portrait of a person stretching happily in a sunlit bedroom, white sheets, bright morning light, positive and energetic mood, vertical portrait composition. No text.",
    imageKeywords: ["stretching","bedroom","morning","gratitude"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20portrait%20of%20a%20person%20stretching%20happily%20in%20a%20sunlit%20bedroom%2C%20white%20sheets%2C%20bright%20morning%20light%2C%20positive%20and%20energetic%20mood%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1013" 
  },
  { 
    id: 'morning-4', 
    category: 'morning', 
    message: "Good morning. Wishing you a day full of joyful moments.", 
    imagePrompt: "Photorealistic image of a family having a happy breakfast together at a sunlit kitchen table, warm morning light, joyful human connection, vertical portrait composition. No text.",
    imageKeywords: ["breakfast","family","joyful","morning"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20image%20of%20a%20family%20having%20a%20happy%20breakfast%20together%20at%20a%20sunlit%20kitchen%20table%2C%20warm%20morning%20light%2C%20joyful%20human%20connection%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1014" 
  },
  { 
    id: 'morning-5', 
    category: 'morning', 
    message: "A beautiful morning to you. Let your light shine.", 
    imagePrompt: "Photorealistic image of a beautiful sunrise over a calm suburban neighborhood, golden morning light hitting the houses, peaceful morning atmosphere, vertical portrait composition. No text.",
    imageKeywords: ["sunrise","neighborhood","morning","beautiful"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20image%20of%20a%20beautiful%20sunrise%20over%20a%20calm%20suburban%20neighborhood%2C%20golden%20morning%20light%20hitting%20the%20houses%2C%20peaceful%20morning%20atmosphere%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1015" 
  },
  { 
    id: 'morning-6', 
    category: 'morning', 
    message: "May your morning be as beautiful as your smile.", 
    imagePrompt: "Photorealistic portrait of a smiling person enjoying a warm cup of tea on a sunny morning porch, joyful and peaceful, vertical portrait composition. No text.",
    imageKeywords: ["smile","tea","porch","morning"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20portrait%20of%20a%20smiling%20person%20enjoying%20a%20warm%20cup%20of%20tea%20on%20a%20sunny%20morning%20porch%2C%20joyful%20and%20peaceful%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1016" 
  },
  { 
    id: 'morning-7', 
    category: 'morning', 
    message: "Rise and shine. Today is a gift.", 
    imagePrompt: "Photorealistic image of beautiful flowers in a garden covered in morning dew, bright morning sunlight shining through the petals, vertical portrait composition. No text.",
    imageKeywords: ["flowers","dew","morning","sunlight"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20image%20of%20beautiful%20flowers%20in%20a%20garden%20covered%20in%20morning%20dew%2C%20bright%20morning%20sunlight%20shining%20through%20the%20petals%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1017" 
  },
  { 
    id: 'morning-8', 
    category: 'morning', 
    message: "Good morning. Breathe deeply and enjoy the present moment.", 
    imagePrompt: "Photorealistic image of a person doing morning yoga on a peaceful beach at sunrise, calm waves, serene atmosphere, vertical portrait composition. No text.",
    imageKeywords: ["yoga","sunrise","beach","morning"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20image%20of%20a%20person%20doing%20morning%20yoga%20on%20a%20peaceful%20beach%20at%20sunrise%2C%20calm%20waves%2C%20serene%20atmosphere%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1018" 
  },
  { 
    id: 'morning-9', 
    category: 'morning', 
    message: "Sending you morning sunshine and positive vibes.", 
    imagePrompt: "Photorealistic close up of a breakfast plate with fresh fruit and pancakes, brightly lit by morning sun, cheerful and positive, vertical portrait composition. No text.",
    imageKeywords: ["breakfast","pancakes","sunshine","morning"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20close%20up%20of%20a%20breakfast%20plate%20with%20fresh%20fruit%20and%20pancakes%2C%20brightly%20lit%20by%20morning%20sun%2C%20cheerful%20and%20positive%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1019" 
  },
  { 
    id: 'morning-10', 
    category: 'morning', 
    message: "Start today with a grateful heart. Good morning.", 
    imagePrompt: "Photorealistic image of a person standing by a window looking out at a beautiful morning sunrise with a peaceful smile, vertical portrait composition. No text.",
    imageKeywords: ["window","sunrise","smile","morning"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20image%20of%20a%20person%20standing%20by%20a%20window%20looking%20out%20at%20a%20beautiful%20morning%20sunrise%20with%20a%20peaceful%20smile%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1020" 
  },
  { 
    id: 'love-1', 
    category: 'love', 
    message: "Let everything you do be done in love.", 
    imagePrompt: "Photorealistic portrait of a loving elderly couple holding hands and smiling warmly at each other, soft natural lighting, authentic human connection, vertical portrait composition. No text.",
    imageKeywords: ["elderly couple","holding hands","love","warmth"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20portrait%20of%20a%20loving%20elderly%20couple%20holding%20hands%20and%20smiling%20warmly%20at%20each%20other%2C%20soft%20natural%20lighting%2C%20authentic%20human%20connection%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1021" 
  },
  { 
    id: 'love-2', 
    category: 'love', 
    message: "Love is the greatest gift we can give and receive.", 
    imagePrompt: "Photorealistic image of a parent gently holding their newborn baby, warm soft lighting, tender affection, beautiful human moment, vertical portrait composition. No text.",
    imageKeywords: ["parent","baby","gift","love"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20image%20of%20a%20parent%20gently%20holding%20their%20newborn%20baby%2C%20warm%20soft%20lighting%2C%20tender%20affection%2C%20beautiful%20human%20moment%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1022" 
  },
  { 
    id: 'love-3', 
    category: 'love', 
    message: "Spread love wherever you go.", 
    imagePrompt: "Photorealistic image of someone handing a beautiful bouquet of flowers to another person, hands touching gently, warm sunlight, joyful giving, vertical portrait composition. No text.",
    imageKeywords: ["flowers","giving","love","sunlight"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20image%20of%20someone%20handing%20a%20beautiful%20bouquet%20of%20flowers%20to%20another%20person%2C%20hands%20touching%20gently%2C%20warm%20sunlight%2C%20joyful%20giving%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1023" 
  },
  { 
    id: 'love-4', 
    category: 'love', 
    message: "You are loved, you are valued, you are beautiful.", 
    imagePrompt: "Photorealistic portrait of a happy couple hugging warmly in a sunlit park, genuine smiles, authentic affection, vertical portrait composition. No text.",
    imageKeywords: ["couple","hugging","love","park"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20portrait%20of%20a%20happy%20couple%20hugging%20warmly%20in%20a%20sunlit%20park%2C%20genuine%20smiles%2C%20authentic%20affection%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1024" 
  },
  { 
    id: 'love-5', 
    category: 'love', 
    message: "Love lights up the darkest days.", 
    imagePrompt: "Photorealistic close-up of two hands gently holding each other, warm golden hour lighting, deep human connection and care, vertical portrait composition. No text.",
    imageKeywords: ["hands","connection","love","golden hour"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20close-up%20of%20two%20hands%20gently%20holding%20each%20other%2C%20warm%20golden%20hour%20lighting%2C%20deep%20human%20connection%20and%20care%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1025" 
  },
  { 
    id: 'love-6', 
    category: 'love', 
    message: "A heart full of love has no room for sadness.", 
    imagePrompt: "Photorealistic image of a family laughing and embracing warmly outdoors, genuine joy and love, beautiful sunlight, vertical portrait composition. No text.",
    imageKeywords: ["family","laughing","love","joy"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20image%20of%20a%20family%20laughing%20and%20embracing%20warmly%20outdoors%2C%20genuine%20joy%20and%20love%2C%20beautiful%20sunlight%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1026" 
  },
  { 
    id: 'love-7', 
    category: 'love', 
    message: "Love cures people—both the ones who give it and the ones who receive it.", 
    imagePrompt: "Photorealistic image of a person comforting a friend with a warm, caring hug, compassionate and loving atmosphere, soft lighting, vertical portrait composition. No text.",
    imageKeywords: ["comfort","hug","friendship","love"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20image%20of%20a%20person%20comforting%20a%20friend%20with%20a%20warm%2C%20caring%20hug%2C%20compassionate%20and%20loving%20atmosphere%2C%20soft%20lighting%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1027" 
  },
  { 
    id: 'love-8', 
    category: 'love', 
    message: "May your day be filled with endless love.", 
    imagePrompt: "Photorealistic portrait of a young couple sharing a tender, joyful moment looking into each other's eyes, beautiful natural lighting, vertical portrait composition. No text.",
    imageKeywords: ["couple","joyful","love","eyes"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20portrait%20of%20a%20young%20couple%20sharing%20a%20tender%2C%20joyful%20moment%20looking%20into%20each%20other's%20eyes%2C%20beautiful%20natural%20lighting%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1028" 
  },
  { 
    id: 'love-9', 
    category: 'love', 
    message: "Love is the flower you've got to let grow.", 
    imagePrompt: "Photorealistic image of a person tenderly watering a small blooming flower plant in a sunlit garden, nurturing and loving, vertical portrait composition. No text.",
    imageKeywords: ["watering","flower","nurturing","love"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20image%20of%20a%20person%20tenderly%20watering%20a%20small%20blooming%20flower%20plant%20in%20a%20sunlit%20garden%2C%20nurturing%20and%20loving%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1029" 
  },
  { 
    id: 'love-10', 
    category: 'love', 
    message: "Keep love in your heart. A life without it is like a sunless garden.", 
    imagePrompt: "Photorealistic image of an affectionate mother and child reading a book together in a cozy sunlit room, warm loving family moment, vertical portrait composition. No text.",
    imageKeywords: ["mother","child","reading","love"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20image%20of%20an%20affectionate%20mother%20and%20child%20reading%20a%20book%20together%20in%20a%20cozy%20sunlit%20room%2C%20warm%20loving%20family%20moment%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1030" 
  },
  { 
    id: 'motivation-1', 
    category: 'motivation', 
    message: "You are capable of amazing things.", 
    imagePrompt: "Photorealistic image of a determined runner pushing forward on a track at sunrise, dynamic action, energetic lighting, perseverance and achievement, vertical portrait composition. No text.",
    imageKeywords: ["runner","sunrise","determination","achievement"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20image%20of%20a%20determined%20runner%20pushing%20forward%20on%20a%20track%20at%20sunrise%2C%20dynamic%20action%2C%20energetic%20lighting%2C%20perseverance%20and%20achievement%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1031" 
  },
  { 
    id: 'motivation-2', 
    category: 'motivation', 
    message: "Believe you can and you're halfway there.", 
    imagePrompt: "Photorealistic image of a person reaching the summit of a steep rocky hill, raising arms in triumph, bright sunlight, achievement and determination, vertical portrait composition. No text.",
    imageKeywords: ["summit","triumph","climbing","motivation"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20image%20of%20a%20person%20reaching%20the%20summit%20of%20a%20steep%20rocky%20hill%2C%20raising%20arms%20in%20triumph%2C%20bright%20sunlight%2C%20achievement%20and%20determination%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1032" 
  },
  { 
    id: 'motivation-3', 
    category: 'motivation', 
    message: "Every small step counts towards your beautiful journey.", 
    imagePrompt: "Photorealistic close-up of hiking boots stepping up a rugged stone staircase on a mountain trail, dynamic lighting, progress and determination, vertical portrait composition. No text.",
    imageKeywords: ["hiking","steps","progress","journey"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20close-up%20of%20hiking%20boots%20stepping%20up%20a%20rugged%20stone%20staircase%20on%20a%20mountain%20trail%2C%20dynamic%20lighting%2C%20progress%20and%20determination%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1033" 
  },
  { 
    id: 'motivation-4', 
    category: 'motivation', 
    message: "You have the strength within you to overcome any challenge.", 
    imagePrompt: "Photorealistic portrait of a hardworking person looking determined and focused while working on a project at a desk, warm lighting, perseverance, vertical portrait composition. No text.",
    imageKeywords: ["hardworking","focused","perseverance","strength"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20portrait%20of%20a%20hardworking%20person%20looking%20determined%20and%20focused%20while%20working%20on%20a%20project%20at%20a%20desk%2C%20warm%20lighting%2C%20perseverance%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1034" 
  },
  { 
    id: 'motivation-5', 
    category: 'motivation', 
    message: "Do something today that your future self will thank you for.", 
    imagePrompt: "Photorealistic image of a person studying intensely at a desk with a warm desk lamp, focus and dedication, late night or early morning, vertical portrait composition. No text.",
    imageKeywords: ["studying","focus","dedication","future"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20image%20of%20a%20person%20studying%20intensely%20at%20a%20desk%20with%20a%20warm%20desk%20lamp%2C%20focus%20and%20dedication%2C%20late%20night%20or%20early%20morning%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1035" 
  },
  { 
    id: 'motivation-6', 
    category: 'motivation', 
    message: "Your potential is endless. Keep going.", 
    imagePrompt: "Photorealistic image of an athlete training hard in a gym, sweat and determination on their face, dramatic lighting, strength and action, vertical portrait composition. No text.",
    imageKeywords: ["athlete","training","determination","potential"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20image%20of%20an%20athlete%20training%20hard%20in%20a%20gym%2C%20sweat%20and%20determination%20on%20their%20face%2C%20dramatic%20lighting%2C%20strength%20and%20action%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1036" 
  },
  { 
    id: 'motivation-7', 
    category: 'motivation', 
    message: "Focus on the good and the good will multiply.", 
    imagePrompt: "Photorealistic image of a person enthusiastically writing in a notebook, brainstorming ideas, bright energetic workspace, action and progress, vertical portrait composition. No text.",
    imageKeywords: ["writing","ideas","progress","focus"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20image%20of%20a%20person%20enthusiastically%20writing%20in%20a%20notebook%2C%20brainstorming%20ideas%2C%20bright%20energetic%20workspace%2C%20action%20and%20progress%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1037" 
  },
  { 
    id: 'motivation-8', 
    category: 'motivation', 
    message: "You are stronger than you know.", 
    imagePrompt: "Photorealistic image of a rock climber scaling a challenging cliff face, gripping the rock tightly, clear sky background, intense focus and strength, vertical portrait composition. No text.",
    imageKeywords: ["rock climber","strength","cliff","overcome"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20image%20of%20a%20rock%20climber%20scaling%20a%20challenging%20cliff%20face%2C%20gripping%20the%20rock%20tightly%2C%20clear%20sky%20background%2C%20intense%20focus%20and%20strength%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1038" 
  },
  { 
    id: 'motivation-9', 
    category: 'motivation', 
    message: "Let your dreams be your wings.", 
    imagePrompt: "Photorealistic image of a person standing on a stage speaking confidently, gesturing with passion, inspiring action, well-lit, vertical portrait composition. No text.",
    imageKeywords: ["speaking","confidence","passion","dreams"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20image%20of%20a%20person%20standing%20on%20a%20stage%20speaking%20confidently%2C%20gesturing%20with%20passion%2C%20inspiring%20action%2C%20well-lit%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1039" 
  },
  { 
    id: 'motivation-10', 
    category: 'motivation', 
    message: "It's a good day to have a good day.", 
    imagePrompt: "Photorealistic portrait of an entrepreneur smiling proudly in front of their new small business storefront, feeling accomplished and determined, warm daylight, vertical portrait composition. No text.",
    imageKeywords: ["entrepreneur","proud","accomplishment","business"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20portrait%20of%20an%20entrepreneur%20smiling%20proudly%20in%20front%20of%20their%20new%20small%20business%20storefront%2C%20feeling%20accomplished%20and%20determined%2C%20warm%20daylight%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1040" 
  },
  { 
    id: 'peace-1', 
    category: 'peace', 
    message: "Peace begins with a smile.", 
    imagePrompt: "Photorealistic portrait of a person sitting in lotus position meditating in a quiet sunlit room, deep inner peace, calm atmosphere, vertical portrait composition. No text.",
    imageKeywords: ["meditation","peace","calm","smile"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20portrait%20of%20a%20person%20sitting%20in%20lotus%20position%20meditating%20in%20a%20quiet%20sunlit%20room%2C%20deep%20inner%20peace%2C%20calm%20atmosphere%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1041" 
  },
  { 
    id: 'peace-2', 
    category: 'peace', 
    message: "Do not let the behavior of others destroy your inner peace.", 
    imagePrompt: "Photorealistic image of a person sitting peacefully on a park bench reading a book, serene garden setting, soft natural lighting, quiet relaxation, vertical portrait composition. No text.",
    imageKeywords: ["reading","bench","park","peace"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20image%20of%20a%20person%20sitting%20peacefully%20on%20a%20park%20bench%20reading%20a%20book%2C%20serene%20garden%20setting%2C%20soft%20natural%20lighting%2C%20quiet%20relaxation%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1042" 
  },
  { 
    id: 'peace-3', 
    category: 'peace', 
    message: "Peace is a journey of a thousand miles and it must be taken one step at a time.", 
    imagePrompt: "Photorealistic image of a peaceful zen garden with perfectly raked sand and smooth stones, soft diffused lighting, tranquil atmosphere, vertical portrait composition. No text.",
    imageKeywords: ["zen garden","sand","stones","tranquil"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20image%20of%20a%20peaceful%20zen%20garden%20with%20perfectly%20raked%20sand%20and%20smooth%20stones%2C%20soft%20diffused%20lighting%2C%20tranquil%20atmosphere%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1043" 
  },
  { 
    id: 'peace-4', 
    category: 'peace', 
    message: "Breathe in peace, exhale worry.", 
    imagePrompt: "Photorealistic image of a person taking a deep breath of fresh air in a quiet green park, eyes softly closed, calm and relaxed, vertical portrait composition. No text.",
    imageKeywords: ["breathing","park","relaxed","peace"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20image%20of%20a%20person%20taking%20a%20deep%20breath%20of%20fresh%20air%20in%20a%20quiet%20green%20park%2C%20eyes%20softly%20closed%2C%20calm%20and%20relaxed%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1044" 
  },
  { 
    id: 'peace-5', 
    category: 'peace', 
    message: "Find your center and let peace surround you.", 
    imagePrompt: "Photorealistic image of a glowing candle sitting on a table in a dark, quiet, peaceful room, soft warm illumination, tranquil setting, vertical portrait composition. No text.",
    imageKeywords: ["candle","room","quiet","center"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20image%20of%20a%20glowing%20candle%20sitting%20on%20a%20table%20in%20a%20dark%2C%20quiet%2C%20peaceful%20room%2C%20soft%20warm%20illumination%2C%20tranquil%20setting%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1045" 
  },
  { 
    id: 'peace-6', 
    category: 'peace', 
    message: "Calm mind brings inner strength and self-confidence.", 
    imagePrompt: "Photorealistic portrait of a person gently resting their hands in their lap, sitting calmly by a quiet lake at dawn, peaceful reflection, vertical portrait composition. No text.",
    imageKeywords: ["calm","lake","dawn","reflection"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20portrait%20of%20a%20person%20gently%20resting%20their%20hands%20in%20their%20lap%2C%20sitting%20calmly%20by%20a%20quiet%20lake%20at%20dawn%2C%20peaceful%20reflection%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1046" 
  },
  { 
    id: 'peace-7', 
    category: 'peace', 
    message: "Let go of what you cannot change.", 
    imagePrompt: "Photorealistic image of someone gently releasing a beautiful paper lantern into a night sky, peaceful acceptance, warm glowing light, vertical portrait composition. No text.",
    imageKeywords: ["lantern","night sky","releasing","peace"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20image%20of%20someone%20gently%20releasing%20a%20beautiful%20paper%20lantern%20into%20a%20night%20sky%2C%20peaceful%20acceptance%2C%20warm%20glowing%20light%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1047" 
  },
  { 
    id: 'peace-8', 
    category: 'peace', 
    message: "Peace comes from within. Do not seek it without.", 
    imagePrompt: "Photorealistic close-up of a person drinking a cup of warm tea while looking out a rainy window, feeling cozy and completely at peace, vertical portrait composition. No text.",
    imageKeywords: ["tea","rainy window","cozy","peace"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20close-up%20of%20a%20person%20drinking%20a%20cup%20of%20warm%20tea%20while%20looking%20out%20a%20rainy%20window%2C%20feeling%20cozy%20and%20completely%20at%20peace%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1048" 
  },
  { 
    id: 'peace-9', 
    category: 'peace', 
    message: "May peace and tranquility bless your day.", 
    imagePrompt: "Photorealistic image of a tranquil indoor water fountain in a softly lit spa room, peaceful ambiance, relaxing environment, vertical portrait composition. No text.",
    imageKeywords: ["water fountain","spa","tranquility","peace"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20image%20of%20a%20tranquil%20indoor%20water%20fountain%20in%20a%20softly%20lit%20spa%20room%2C%20peaceful%20ambiance%2C%20relaxing%20environment%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1049" 
  },
  { 
    id: 'peace-10', 
    category: 'peace', 
    message: "Embrace the silent moments and find your inner calm.", 
    imagePrompt: "Photorealistic image of a person laying back peacefully in a hammock in a quiet backyard, dappled sunlight, true relaxation, vertical portrait composition. No text.",
    imageKeywords: ["hammock","backyard","relaxation","calm"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20image%20of%20a%20person%20laying%20back%20peacefully%20in%20a%20hammock%20in%20a%20quiet%20backyard%2C%20dappled%20sunlight%2C%20true%20relaxation%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1050" 
  },
  { 
    id: 'flowers-1', 
    category: 'flowers', 
    message: "Like a flower, you have the power to bloom wherever you are.", 
    imagePrompt: "Photorealistic close-up macro photography of a vibrant red rose in full bloom, soft dew drops on petals, beautiful natural lighting, vertical portrait composition. No text.",
    imageKeywords: ["rose","bloom","dew","flower"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20close-up%20macro%20photography%20of%20a%20vibrant%20red%20rose%20in%20full%20bloom%2C%20soft%20dew%20drops%20on%20petals%2C%20beautiful%20natural%20lighting%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1051" 
  },
  { 
    id: 'flowers-2', 
    category: 'flowers', 
    message: "Flowers are a proud assertion that a ray of beauty outvalues all the utilities.", 
    imagePrompt: "Photorealistic image of a lush garden filled with colorful blooming tulips, bright spring sunlight, vibrant natural beauty, vertical portrait composition. No text.",
    imageKeywords: ["tulips","garden","colorful","flower"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20image%20of%20a%20lush%20garden%20filled%20with%20colorful%20blooming%20tulips%2C%20bright%20spring%20sunlight%2C%20vibrant%20natural%20beauty%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1052" 
  },
  { 
    id: 'flowers-3', 
    category: 'flowers', 
    message: "Where flowers bloom, so does hope.", 
    imagePrompt: "Photorealistic close-up of delicate pink cherry blossoms on a branch against a soft blue sky, spring atmosphere, vertical portrait composition. No text.",
    imageKeywords: ["cherry blossoms","spring","sky","flower"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20close-up%20of%20delicate%20pink%20cherry%20blossoms%20on%20a%20branch%20against%20a%20soft%20blue%20sky%2C%20spring%20atmosphere%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1053" 
  },
  { 
    id: 'flowers-4', 
    category: 'flowers', 
    message: "Every flower blooms in its own time.", 
    imagePrompt: "Photorealistic image of a beautiful bouquet of mixed wildflowers in a glass vase on a wooden table, warm sunlight, vertical portrait composition. No text.",
    imageKeywords: ["wildflowers","vase","bouquet","flower"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20image%20of%20a%20beautiful%20bouquet%20of%20mixed%20wildflowers%20in%20a%20glass%20vase%20on%20a%20wooden%20table%2C%20warm%20sunlight%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1054" 
  },
  { 
    id: 'flowers-5', 
    category: 'flowers', 
    message: "Take time to smell the roses today.", 
    imagePrompt: "Photorealistic image of bright yellow sunflowers standing tall in a field, facing the sun, vibrant colors, vertical portrait composition. No text.",
    imageKeywords: ["sunflowers","field","yellow","flower"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20image%20of%20bright%20yellow%20sunflowers%20standing%20tall%20in%20a%20field%2C%20facing%20the%20sun%2C%20vibrant%20colors%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1055" 
  },
  { 
    id: 'flowers-6', 
    category: 'flowers', 
    message: "Bloom with kindness and grace.", 
    imagePrompt: "Photorealistic close-up of an elegant white lotus flower floating peacefully on calm water, beautiful reflection, vertical portrait composition. No text.",
    imageKeywords: ["lotus","water","elegant","flower"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20close-up%20of%20an%20elegant%20white%20lotus%20flower%20floating%20peacefully%20on%20calm%20water%2C%20beautiful%20reflection%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1056" 
  },
  { 
    id: 'flowers-7', 
    category: 'flowers', 
    message: "Let joy blossom in your heart.", 
    imagePrompt: "Photorealistic image of a beautiful arrangement of purple lavender and white daisies in a rustic basket, charming and cheerful, vertical portrait composition. No text.",
    imageKeywords: ["lavender","daisies","basket","flower"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20image%20of%20a%20beautiful%20arrangement%20of%20purple%20lavender%20and%20white%20daisies%20in%20a%20rustic%20basket%2C%20charming%20and%20cheerful%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1057" 
  },
  { 
    id: 'flowers-8', 
    category: 'flowers', 
    message: "A flower cannot blossom without sunshine, and man cannot live without love.", 
    imagePrompt: "Photorealistic image of gorgeous pink peonies in full bloom in a sunny garden, soft and romantic, vertical portrait composition. No text.",
    imageKeywords: ["peonies","garden","romantic","flower"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20image%20of%20gorgeous%20pink%20peonies%20in%20full%20bloom%20in%20a%20sunny%20garden%2C%20soft%20and%20romantic%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1058" 
  },
  { 
    id: 'flowers-9', 
    category: 'flowers', 
    message: "May your day be as colorful as a spring garden.", 
    imagePrompt: "Photorealistic close-up of vibrant orange marigolds growing beautifully in a terracotta pot, sunny day, vertical portrait composition. No text.",
    imageKeywords: ["marigolds","pot","vibrant","flower"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20close-up%20of%20vibrant%20orange%20marigolds%20growing%20beautifully%20in%20a%20terracotta%20pot%2C%20sunny%20day%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1059" 
  },
  { 
    id: 'flowers-10', 
    category: 'flowers', 
    message: "Embrace your unique beauty, just like every delicate flower.", 
    imagePrompt: "Photorealistic close-up of a stunning rare purple orchid flower, elegant and delicate, dark background to highlight the colors, vertical portrait composition. No text.",
    imageKeywords: ["orchid","purple","delicate","flower"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20close-up%20of%20a%20stunning%20rare%20purple%20orchid%20flower%2C%20elegant%20and%20delicate%2C%20dark%20background%20to%20highlight%20the%20colors%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1060" 
  },
  { 
    id: 'nature-1', 
    category: 'nature', 
    message: "Nature is the art of God. Take time to admire it.", 
    imagePrompt: "Photorealistic image of a majestic mountain peak towering over a crystal clear alpine lake, pine trees on the shore, beautiful landscape photography, vertical portrait composition. No text.",
    imageKeywords: ["mountain","lake","landscape","nature"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20image%20of%20a%20majestic%20mountain%20peak%20towering%20over%20a%20crystal%20clear%20alpine%20lake%2C%20pine%20trees%20on%20the%20shore%2C%20beautiful%20landscape%20photography%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1061" 
  },
  { 
    id: 'nature-2', 
    category: 'nature', 
    message: "In every walk with nature, one receives far more than he seeks.", 
    imagePrompt: "Photorealistic image of a lush green forest with a winding dirt path, sunlight filtering through the canopy, serene nature landscape, vertical portrait composition. No text.",
    imageKeywords: ["forest","path","canopy","nature"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20image%20of%20a%20lush%20green%20forest%20with%20a%20winding%20dirt%20path%2C%20sunlight%20filtering%20through%20the%20canopy%2C%20serene%20nature%20landscape%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1062" 
  },
  { 
    id: 'nature-3', 
    category: 'nature', 
    message: "Let the beauty of nature bring peace to your soul.", 
    imagePrompt: "Photorealistic image of a beautiful cascading waterfall deep in a green jungle, pristine water, vibrant nature, vertical portrait composition. No text.",
    imageKeywords: ["waterfall","jungle","pristine","nature"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20image%20of%20a%20beautiful%20cascading%20waterfall%20deep%20in%20a%20green%20jungle%2C%20pristine%20water%2C%20vibrant%20nature%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1063" 
  },
  { 
    id: 'nature-4', 
    category: 'nature', 
    message: "Look deep into nature, and you will understand everything better.", 
    imagePrompt: "Photorealistic image of a tranquil ocean beach at sunset, gentle waves washing onto the sand, beautiful colors in the sky, vertical portrait composition. No text.",
    imageKeywords: ["ocean","beach","sunset","nature"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20image%20of%20a%20tranquil%20ocean%20beach%20at%20sunset%2C%20gentle%20waves%20washing%20onto%20the%20sand%2C%20beautiful%20colors%20in%20the%20sky%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1064" 
  },
  { 
    id: 'nature-5', 
    category: 'nature', 
    message: "Find your peace in the rustling of leaves and the song of birds.", 
    imagePrompt: "Photorealistic image of a vast open valley with rolling green hills and a clear blue sky, peaceful landscape, vertical portrait composition. No text.",
    imageKeywords: ["valley","hills","sky","nature"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20image%20of%20a%20vast%20open%20valley%20with%20rolling%20green%20hills%20and%20a%20clear%20blue%20sky%2C%20peaceful%20landscape%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1065" 
  },
  { 
    id: 'nature-6', 
    category: 'nature', 
    message: "Nature does not hurry, yet everything is accomplished.", 
    imagePrompt: "Photorealistic image of a slow-moving river winding through an autumn forest with vibrant red and gold leaves, calm and natural, vertical portrait composition. No text.",
    imageKeywords: ["river","autumn","forest","nature"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20image%20of%20a%20slow-moving%20river%20winding%20through%20an%20autumn%20forest%20with%20vibrant%20red%20and%20gold%20leaves%2C%20calm%20and%20natural%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1066" 
  },
  { 
    id: 'nature-7', 
    category: 'nature', 
    message: "The earth has music for those who listen.", 
    imagePrompt: "Photorealistic close-up of a small, beautifully colored bird perched on a branch, singing happily, natural blurred background, vertical portrait composition. No text.",
    imageKeywords: ["bird","singing","branch","nature"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20close-up%20of%20a%20small%2C%20beautifully%20colored%20bird%20perched%20on%20a%20branch%2C%20singing%20happily%2C%20natural%20blurred%20background%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1067" 
  },
  { 
    id: 'nature-8', 
    category: 'nature', 
    message: "A peaceful mind is like a calm lake.", 
    imagePrompt: "Photorealistic image of a perfectly still, misty lake at dawn, reflecting the surrounding tall pine trees flawlessly, serene nature, vertical portrait composition. No text.",
    imageKeywords: ["lake","misty","dawn","nature"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20image%20of%20a%20perfectly%20still%2C%20misty%20lake%20at%20dawn%2C%20reflecting%20the%20surrounding%20tall%20pine%20trees%20flawlessly%2C%20serene%20nature%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1068" 
  },
  { 
    id: 'nature-9', 
    category: 'nature', 
    message: "Breath in the fresh air and let your worries go.", 
    imagePrompt: "Photorealistic image of a dense redwood forest with massive trees towering into the sky, people small in the distance for scale, majestic nature, vertical portrait composition. No text.",
    imageKeywords: ["redwood","forest","majestic","nature"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20image%20of%20a%20dense%20redwood%20forest%20with%20massive%20trees%20towering%20into%20the%20sky%2C%20people%20small%20in%20the%20distance%20for%20scale%2C%20majestic%20nature%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1069" 
  },
  { 
    id: 'nature-10', 
    category: 'nature', 
    message: "Wherever you go, no matter what the weather, always bring your own sunshine.", 
    imagePrompt: "Photorealistic image of a brilliant double rainbow stretching across a lush green landscape after a heavy rain, vibrant and fresh, vertical portrait composition. No text.",
    imageKeywords: ["rainbow","landscape","fresh","nature"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20image%20of%20a%20brilliant%20double%20rainbow%20stretching%20across%20a%20lush%20green%20landscape%20after%20a%20heavy%20rain%2C%20vibrant%20and%20fresh%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1070" 
  },
  { 
    id: 'thoughts-1', 
    category: 'thoughts', 
    message: "Positive mind, positive vibes, positive life.", 
    imagePrompt: "Photorealistic portrait of a diverse group of friends laughing joyfully together outdoors in the sunshine, genuine happiness, positive human connection, vertical portrait composition. No text.",
    imageKeywords: ["friends","laughing","joyful","positive"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20portrait%20of%20a%20diverse%20group%20of%20friends%20laughing%20joyfully%20together%20outdoors%20in%20the%20sunshine%2C%20genuine%20happiness%2C%20positive%20human%20connection%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1071" 
  },
  { 
    id: 'thoughts-2', 
    category: 'thoughts', 
    message: "Choose joy every single day.", 
    imagePrompt: "Photorealistic image of a happy child running with colorful balloons in a sunlit park, pure joy and celebration, vertical portrait composition. No text.",
    imageKeywords: ["child","balloons","joy","park"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20image%20of%20a%20happy%20child%20running%20with%20colorful%20balloons%20in%20a%20sunlit%20park%2C%20pure%20joy%20and%20celebration%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1072" 
  },
  { 
    id: 'thoughts-3', 
    category: 'thoughts', 
    message: "A positive attitude changes everything.", 
    imagePrompt: "Photorealistic portrait of a person smiling brightly while holding a bright yellow umbrella in the rain, optimistic and happy, vertical portrait composition. No text.",
    imageKeywords: ["smile","umbrella","optimistic","positive"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20portrait%20of%20a%20person%20smiling%20brightly%20while%20holding%20a%20bright%20yellow%20umbrella%20in%20the%20rain%2C%20optimistic%20and%20happy%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1073" 
  },
  { 
    id: 'thoughts-4', 
    category: 'thoughts', 
    message: "Happiness is an inside job.", 
    imagePrompt: "Photorealistic image of a family celebrating a birthday with a glowing cake, happy faces illuminated by candlelight, joyful human moment, vertical portrait composition. No text.",
    imageKeywords: ["family","celebrating","birthday","happiness"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20image%20of%20a%20family%20celebrating%20a%20birthday%20with%20a%20glowing%20cake%2C%20happy%20faces%20illuminated%20by%20candlelight%2C%20joyful%20human%20moment%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1074" 
  },
  { 
    id: 'thoughts-5', 
    category: 'thoughts', 
    message: "Keep your face to the sunshine and you cannot see a shadow.", 
    imagePrompt: "Photorealistic portrait of a young woman with a radiant smile standing in a field of flowers, bright sunshine, joyful and uplifting mood, vertical portrait composition. No text.",
    imageKeywords: ["smile","sunshine","flowers","uplifting"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20portrait%20of%20a%20young%20woman%20with%20a%20radiant%20smile%20standing%20in%20a%20field%20of%20flowers%2C%20bright%20sunshine%2C%20joyful%20and%20uplifting%20mood%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1075" 
  },
  { 
    id: 'thoughts-6', 
    category: 'thoughts', 
    message: "Focus on the beautiful things in life.", 
    imagePrompt: "Photorealistic image of a person happily playing with their golden retriever dog in a sunny backyard, genuine laughter and fun, vertical portrait composition. No text.",
    imageKeywords: ["dog","playing","laughter","beautiful"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20image%20of%20a%20person%20happily%20playing%20with%20their%20golden%20retriever%20dog%20in%20a%20sunny%20backyard%2C%20genuine%20laughter%20and%20fun%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1076" 
  },
  { 
    id: 'thoughts-7', 
    category: 'thoughts', 
    message: "Your mind is a garden. Your thoughts are the seeds.", 
    imagePrompt: "Photorealistic close-up of a person happily planting colorful flowers in a garden box, getting their hands dirty with a smile, productive and positive, vertical portrait composition. No text.",
    imageKeywords: ["planting","flowers","garden","thoughts"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20close-up%20of%20a%20person%20happily%20planting%20colorful%20flowers%20in%20a%20garden%20box%2C%20getting%20their%20hands%20dirty%20with%20a%20smile%2C%20productive%20and%20positive%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1077" 
  },
  { 
    id: 'thoughts-8', 
    category: 'thoughts', 
    message: "Radiate positivity and watch the world around you change.", 
    imagePrompt: "Photorealistic image of a group of volunteers enthusiastically painting a community mural together, smiling and working as a team, bright colors, vertical portrait composition. No text.",
    imageKeywords: ["volunteers","mural","team","positivity"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20image%20of%20a%20group%20of%20volunteers%20enthusiastically%20painting%20a%20community%20mural%20together%2C%20smiling%20and%20working%20as%20a%20team%2C%20bright%20colors%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1078" 
  },
  { 
    id: 'thoughts-9', 
    category: 'thoughts', 
    message: "Every day is a second chance.", 
    imagePrompt: "Photorealistic portrait of a person taking a deep, refreshing breath at the edge of the ocean, feeling renewed and positive about the day ahead, vertical portrait composition. No text.",
    imageKeywords: ["ocean","refreshing","renewed","chance"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20portrait%20of%20a%20person%20taking%20a%20deep%2C%20refreshing%20breath%20at%20the%20edge%20of%20the%20ocean%2C%20feeling%20renewed%20and%20positive%20about%20the%20day%20ahead%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1079" 
  },
  { 
    id: 'thoughts-10', 
    category: 'thoughts', 
    message: "Train your mind to see the good in every situation.", 
    imagePrompt: "Photorealistic image of two people happily sharing a meal at an outdoor cafe, laughing deeply and enjoying each other's company, bright sunny day, vertical portrait composition. No text.",
    imageKeywords: ["cafe","laughing","meal","good"],
    image: "https://image.pollinations.ai/prompt/Photorealistic%20image%20of%20two%20people%20happily%20sharing%20a%20meal%20at%20an%20outdoor%20cafe%2C%20laughing%20deeply%20and%20enjoying%20each%20other's%20company%2C%20bright%20sunny%20day%2C%20vertical%20portrait%20composition.%20No%20text.?width=800&height=1000&nologo=true&seed=1080" 
  }
];

export const getFeaturedCard = (): ContentItem => {
  // Simple deterministic way to pick a featured card based on the current date
  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
  const index = dayOfYear % contentLibrary.length;
  return contentLibrary[index];
};
