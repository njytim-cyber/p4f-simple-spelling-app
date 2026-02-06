// Format: {wrong_word|correct_word} defines an editing slot.
// Example: "He {whent|went} to the store."

export interface EditingExercise {
    id: string;
    level: 'p4' | 'p5' | 'p6' | 'sec1' | 'sec2';
    style: 'story' | 'news' | 'business' | 'advertisement' | 'email' | 'literary' | 'instruction' | 'blog' | 'diary' | 'letter' | 'recipe' | 'review' | 'interview' | 'speech' | 'report' | 'dialogue';
    title: string;
    passage: string;
}

export const EDITING_EXERCISES_DATA: EditingExercise[] = [
    // P4 (Age 10) - Simple stories and personal narratives
    {
        id: 'p4-1',
        level: 'p4',
        style: 'story',
        title: 'Library Lesson',
        passage: `Emily and Tom were discussing their project in the {libary|library}. Just then, Ms Lee, the librarian, walked over and {wispered|whispered}, "Please keep your volume down, children." She {reminds|reminded} them that the library was a place where everyone needed to be {queit|quiet}.
Emily blushed and she {imediatly|immediately} apologised to Ms Lee. Both Emily and Tom learnt the importance of being {considerat|considerate} in the library.
The next day, they {returnd|returned} to work on their project. This time, they spoke in soft voices and were very {carefull|careful} not to disturb anyone.
Ms Lee smiled at them and gave them a {thumps|thumbs} up. She was {pleasd|pleased} to see them being so thoughtful.`
    },
    {
        id: 'p4-2',
        level: 'p4',
        style: 'story',
        title: 'Beach Day',
        passage: `Last Sunday, my family and I went to the beach. The sun was shining {britely|brightly} in the sky. My brother and I built a {magnificant|magnificent} sandcastle while our parents {relaxt|relaxed} under the shade of a large umbrella.
Suddenly, a large wave {crasht|crashed} onto the shore and washed our sandcastle away. We were {dissapointed|disappointed} but decided to build an even {biger|bigger} one.
We spent the {hole|whole} afternoon playing in the sand and swimming in the sea. Mum packed us a {delishus|delicious} picnic lunch with sandwiches and fruit.
By the time we left, we were all {tierd|tired} but happy. It had been a {wonderfull|wonderful} day at the beach.`
    },
    {
        id: 'p4-3',
        level: 'p4',
        style: 'story',
        title: 'Stormy Night',
        passage: `It was a stormy night. The wind howled {feircely|fiercely} outside our window. Lightning flashed across the sky, followed by the loud rumble of {tunder|thunder}. I huddled under my blanket, feeling a little {scaird|scared}.

My mother came into the room and gave me a warm hug. She assured me that we were {saif|safe} inside our {confortable|comfortable} home.

She told me a {carming|calming} story about a brave knight. Her voice was {sooting|soothing} and soon I started to feel better.

By the time the story ended, the storm had {passt|passed}. I fell asleep feeling {peacefull|peaceful} and safe.`
    },

    // P5 (Age 11) - More complex stories and simple news articles
    {
        id: 'p5-1',
        level: 'p5',
        style: 'news',
        title: 'School Fair Success',
        passage: `The annual school fair was held last Saturday and it was a {tremend|tremendous} success. Over 500 {familys|families} attended the event, which {raisd|raised} more than £3,000 for new library books.

The fair featured {numerus|numerous} stalls selling homemade cakes, crafts, and second-hand books. There was also a bouncy castle and face painting for younger {childeren|children}.

Mrs Thompson, the head teacher, said she was {extremly|extremely} pleased with the turnout. "The {comunity|community} has shown {wonderfull|wonderful} support," she commented.

The money raised will be used to purchase new books for the school library, which will {benifit|benefit} all students.`
    },
    {
        id: 'p5-2',
        level: 'p5',
        style: 'email',
        title: 'Birthday Party Invitation',
        passage: `Dear Sarah,

I hope this email finds you well. I'm writing to invite you to my {birfday|birthday} party on Saturday, 15th March. The party will start at 2 o'clock in the {aftenoon|afternoon} at my house.

We're going to have lots of fun {activites|activities}, including games in the garden and a treasure hunt. Mum is making her {fameous|famous} chocolate cake, which I know you love!

Please let me know if you can {atend|attend} by next Wednesday. I really hope you can make it as it wouldn't be the same {whithout|without} you there.

Looking forward to {hering|hearing} from you soon.

Best wishes,
Emma`
    },
    {
        id: 'p5-3',
        level: 'p5',
        style: 'blog',
        title: 'My First Cycling Adventure',
        passage: `Last weekend, I went on my first proper cycling adventure with my dad. We decided to {attemt|attempt} the 20-mile route around the lake, which sounded quite {challanging|challenging} for a beginner like me.

The {wheather|weather} was perfect – sunny but not too hot. We started early in the morning and the path was {beautifull|beautiful}. I was {nervus|nervous} at first, but Dad encouraged me to keep going.

Halfway through, we stopped for a picnic lunch. My legs were {akeing|aching} but I was determined to {finnish|finish} the route. The scenery was absolutely {magnificant|magnificent}, with ducks swimming in the lake and wildflowers {everwhere|everywhere}.

When we finally completed the route, I felt {incredably|incredibly} proud of myself. It was a wonderful {experiance|experience} that I'll never forget.`
    },

    // P6 (Age 12) - Literary passages and more sophisticated news
    {
        id: 'p6-1',
        level: 'p6',
        style: 'literary',
        title: 'The Mysterious Garden',
        passage: `The garden had been {abandonned|abandoned} for years, hidden behind a crumbling stone wall. Sarah pushed open the rusty gate, which creaked {ominusly|ominously} in the silence. Overgrown roses climbed wildly across the path, their {thornes|thorns} catching at her clothes.

In the centre of the garden stood a {magnificient|magnificent} fountain, now dry and covered in moss. Sarah approached it {cautiosly|cautiously}, her heart beating {rappidly|rapidly}. There was something both beautiful and melancholy about this forgotten place.

Suddenly, she noticed something glinting in the {fountains|fountain's} basin. She reached down and discovered a small silver locket, {tarnisshed|tarnished} with age. Her fingers trembled as she opened it, revealing a faded {photograf|photograph} inside.

The discovery filled her with an {overwelming|overwhelming} curiosity. Who had left this here? What story did it hold?`
    },
    {
        id: 'p6-2',
        level: 'p6',
        style: 'news',
        title: 'Climate Scientists Issue Warning',
        passage: `Leading climate scientists have issued an urgent warning about the {accellerating|accelerating} rate of global warming. The report, published this week, highlights {signifigant|significant} changes in weather patterns across the globe.

Dr Emily Chen, a climate researcher at the University of Cambridge, {emphasied|emphasised} the need for immediate action. "We are witnessing {unpresidented|unprecedented} changes in our climate system," she stated during a press {conferance|conference}.

The report recommends several measures to reduce carbon {emisssions|emissions}, including increased use of renewable energy and improved public {transprot|transport}. Governments worldwide are being urged to implement these {recomendations|recommendations} without delay.

Environmental groups have welcomed the report, calling it a wake-up call for world leaders to take {responsability|responsibility} seriously.`
    },
    {
        id: 'p6-3',
        level: 'p6',
        style: 'instruction',
        title: 'How to Make Perfect Pancakes',
        passage: `Making delicious pancakes is easier than you might think if you follow these simple {instrutions|instructions}. First, gather all your {ingrediants|ingredients}: plain flour, eggs, milk, and a pinch of salt.

Begin by sifting the flour into a large bowl to remove any lumps. Make a well in the centre and crack the eggs into it. Add a {quorter|quarter} of the milk and whisk {vigerously|vigorously} until smooth.

{Gradualy|Gradually} add the {remainning|remaining} milk, whisking continuously to avoid lumps. The {consistancy|consistency} should be similar to single cream. Let the batter rest for at least {tweny|twenty} minutes.

Heat a non-stick frying pan over {meduim|medium} heat. Pour in a small amount of batter and swirl to coat the pan evenly. Cook until bubbles appear on the surface, then flip {carfully|carefully}. Serve immediately with your favourite toppings.`
    },

    // SEC1 (Age 13) - Business communications and formal writing
    {
        id: 'sec1-1',
        level: 'sec1',
        style: 'business',
        title: 'Job Application Letter',
        passage: `Dear Sir or Madam,

I am writing to apply for the position of Junior Marketing {Assistent|Assistant} advertised on your company website. I believe my {qualifacations|qualifications} and enthusiasm make me an ideal candidate for this role.

I am currently completing my GCSEs with predicted grades of A* in English and Mathematics. During my work {experiance|experience} at a local bookshop, I developed strong customer service skills and learned the {importants|importance} of effective {comunication|communication}.

I am particularly interested in digital marketing and have completed an online course in social media {managment|management}. I am proficient in various software {aplication|applications} including Microsoft Office and Adobe Photoshop.

I am a {reliabel|reliable} and {enthusiatic|enthusiastic} individual who works well both independently and as part of a team. I would welcome the {oportunity|opportunity} to discuss my application further.

Yours faithfully,
James Wilson`
    },
    {
        id: 'sec1-2',
        level: 'sec1',
        style: 'news',
        title: 'Technology in Education Report',
        passage: `A comprehensive study published today reveals that technology is {fundamentaly|fundamentally} transforming the educational {landscap|landscape}. The research, conducted over three years, examined the impact of digital tools on student {acheivment|achievement} across 200 schools.

The findings suggest that when implemented {apropriately|appropriately}, technology can {significently|significantly} enhance learning outcomes. However, the report also {acknowleges|acknowledges} potential {disadvantages|disadvanatages}, including increased screen time and reduced face-to-face interaction.

Professor Sarah Mitchell, lead researcher, emphasised the importance of {maintaning|maintaining} a balanced approach. "Technology should {complemant|complement} traditional teaching methods, not replace them {entirely|intirely}," she explained.

The report recommends {comprihensive|comprehensive} teacher training programmes to ensure technology is used effectively in classrooms.`
    },
    {
        id: 'sec1-3',
        level: 'sec1',
        style: 'advertisement',
        title: 'New Fitness Centre Opening',
        passage: `Transform Your Life at FitZone – Opening Soon!

Are you ready to {acheive|achieve} your fitness goals? FitZone, the area's most {sofisticated|sophisticated} fitness centre, opens its doors next month with an {exclusive|exclucive} introductory offer.

Our state-of-the-art {facilities|facilites} include a fully-equipped gym, Olympic-sized swimming pool, and {specialiced|specialised} studios for yoga and Pilates. Our team of {proffessional|professional} trainers are dedicated to helping you succeed.

{Membership|Membeship} includes unlimited access to all facilities, complimentary personal training {sessions|sesions}, and nutritional {guidance|guidens}. Plus, enjoy our luxurious spa and sauna facilities at no extra cost.

Don't miss our limited-time offer: join in our first month and receive 50% off your first year's {subscription|subcription}. Visit www.fitzoneuk.com or call 0800 123 4567 for more {infomation|information}.

Your journey to a healthier, stronger you starts here!`
    },

    // SEC2 (Age 14) - Advanced literary and complex analytical writing
    {
        id: 'sec2-1',
        level: 'sec2',
        style: 'literary',
        title: 'The Last Train',
        passage: `The {platform|platfrom} was deserted save for a solitary figure hunched on a weathered bench. November rain fell in sheets, {obscuring|obscurring} the distant lights of the city. Margaret pulled her coat tighter, {shivring|shivering} against the penetrating cold.

She had been waiting for nearly an hour, her {patience|patiance} wearing thin. The departure board flickered {erratically|eratically}, offering no {reasurance|reassurance}. Somewhere in the darkness, she heard the {melancholy|meloncholy} whistle of a distant train, though whether it was coming or going, she couldn't tell.

Her thoughts drifted to the letter in her pocket, its contents {weighing|waying} heavily on her mind. She had made her decision, {irreversible|irreversable} now. There would be no going back, no second chances or {oportunities|opportunities} for reconciliation.

Finally, the train emerged from the gloom, its headlights {piercing|peircing} the darkness. This was it – the moment of {departure|depature}, the beginning of everything new and the end of all that was familiar.`
    },
    {
        id: 'sec2-2',
        level: 'sec2',
        style: 'business',
        title: 'Quarterly Business Review',
        passage: `Executive Summary: Q4 Performance Analysis

The fourth quarter demonstrated {remarkible|remarkable} growth across all business divisions, exceeding initial {projections|projectionz} by 15%. This success can be {attributed|atributed} to several key factors, including strategic market {expansion|expantion} and enhanced operational efficiency.

Revenue increased {substantially|substantialy}, reaching £4.2 million compared to £3.6 million in the {previus|previous} quarter. The marketing department's innovative {campaign|campain} proved {particulary|particularly} effective, resulting in a 23% increase in customer {acquisition|aquisition}.

However, certain {challenges|challanges} persist. Supply chain disruptions continue to affect production {schedules|scheduals}, and labour costs have risen by 8% due to market {compitition|competition}. Additionally, maintaining quality {standards|standeds} while scaling operations remains a priority concern.

Looking ahead, we recommend investing in {automattion|automation} technology and strengthening supplier {relationships|relationshps}. These {iniatives|initiatives} will position us favourably for sustained growth in the upcoming fiscal year.`
    },
    {
        id: 'sec2-3',
        level: 'sec2',
        style: 'news',
        title: 'Archaeological Discovery Unveiled',
        passage: `Archaeologists have unveiled an {extraordinery|extraordinary} discovery that could {fundementally|fundamentally} alter our understanding of ancient civilisations. The excavation, conducted in southern Egypt, has revealed a previously unknown burial complex dating to approximately 2600 BCE.

Dr Thomas Harrison, leading the {international|internasional} research team, described the find as "{unpresidented|unprecedented} in its significance". The complex contains {numerous|numerus} artifacts, including {elaborately|elaboratly} decorated pottery, jewellery, and hieroglyphic inscriptions that provide valuable insights into daily life during Egypt's Old Kingdom.

Perhaps most {intriguing|intriging} is the discovery of several scrolls that appear to contain {administrative|administrativ} records and possibly literary texts. Researchers are {cautiusly|cautiously} optimistic that these documents will offer new {perspectives|perspectivs} on ancient Egyptian society and culture.

The Egyptian Ministry of {Antiquities|Antiquites} has announced plans to establish a dedicated research centre to study the findings. {Preliminary|Preliminery} analysis suggests that full examination of the site may take several years to complete.`
    },

    // P4 (Age 10) - Additional exercises
    {
        id: 'p4-4',
        level: 'p4',
        style: 'diary',
        title: 'My School Trip',
        passage: `Dear Diary,
Today was the best day ever! We went on a school trip to the {museum|musium} and I saw so many {amazeing|amazing} things. There were {dinasaurs|dinosaurs}, old {tresures|treasures}, and even a real Egyptian mummy!
My {favrite|favourite} part was the {interaktive|interactive} science {exibition|exhibition}. We got to touch real fossils and look through a {telescop|telescope}. Mr Davies, our teacher, {explaind|explained} how everything worked.
At lunchtime, we ate our packed lunches in the {beautifull|beautiful} gardens outside. It was a brilliant day!`
    },
    {
        id: 'p4-5',
        level: 'p4',
        style: 'letter',
        title: 'Thank You Letter',
        passage: `Dear Grandma,
Thank you so much for the {lovely|lovly} birthday present! The art set is {exacly|exactly} what I wanted. I have {allready|already} used the coloured pencils to draw a {pictur|picture} of our cat, Whiskers.
Mum says we can visit you next {Saturday|Saterday} if the {wheather|weather} is nice. I'm really {exited|excited} to see you and show you all my drawings.
I hope you are {fealing|feeling} well. Dad sends his love.
Lots of love,
Lucy
P.S. Whiskers says {helo|hello} too!`
    },
    {
        id: 'p4-6',
        level: 'p4',
        style: 'story',
        title: 'The Lost Puppy',
        passage: `Jake was walking home from school when he heard a {queit|quiet} whimpering sound. He looked around and saw a tiny puppy hiding {behinde|behind} a bush. The poor puppy looked {frightend|frightened} and lost.
Jake {carefuly|carefully} picked up the puppy and noticed it was wearing a collar with a name tag. "Don't worry, Buster," he said {softley|softly}. "I'll help you find your home."
He knocked on several doors until he {finaly|finally} found Buster's owner, Mrs Patel. She was so {relievd|relieved} and {gratefull|grateful} to see her pet again.
"Thank you so much!" she said, giving Jake a big smile. Jake felt {hapy|happy} that he could help.`
    },
    {
        id: 'p4-7',
        level: 'p4',
        style: 'recipe',
        title: 'Simple Fruit Salad',
        passage: `This easy fruit salad is {perfect|perfekt} for a healthy snack!
What you need:
• One apple
• One {bannana|banana}
• A handful of grapes
• A small {oranje|orange}
• Two {tablespons|tablespoons} of honey
First, wash all the fruit {thoroly|thoroughly}. Ask an adult to help you cut the apple and orange into small {peices|pieces}. Slice the banana and add all the fruit to a {larg|large} bowl.
{Drizel|Drizzle} the honey over the top and mix {gentley|gently}. Your {delishus|delicious} fruit salad is ready to eat!`
    },
    {
        id: 'p4-8',
        level: 'p4',
        style: 'dialogue',
        title: 'New Friend',
        passage: `"Hi, I'm Sophie," said the girl with the red rucksack. "Is this seat {taken|taiken}?"
"No, it's free," replied Maya. "I'm new here. It's my first day."
Sophie smiled {warmley|warmly}. "Don't worry, {evryone|everyone} is really {freindly|friendly} here. Would you like me to show you around at break time?"
Maya felt {releived|relieved}. "That would be {briliant|brilliant}! I was feeling quite {nervus|nervous}."
"I know how you feel," said Sophie. "I was new last year. By the way, do you like football?"
"I love it!" Maya {replyed|replied} {enthusiasticly|enthusiastically}.
"Great! We play every lunchtime. You should join us!"`
    },

    // P5 (Age 11) - Additional exercises
    {
        id: 'p5-4',
        level: 'p5',
        style: 'diary',
        title: 'The Drama Club Audition',
        passage: `Monday, 10th October
Today I {auditioned|audishioned} for the school play and I'm still feeling {nervus|nervous} about it. We're doing a {modern|moderen} version of Cinderella and I really want to get a good part.
I had to read lines in front of {evryone|everyone} and perform a short dance routine. My voice was {shakeing|shaking} at first, but Miss Roberts, the drama teacher, was really {encuraging|encouraging}. She told me to take a deep breath and try again.
The {secund|second} time was much better! I managed to remember all my lines and even made {peopel|people} laugh during the funny bit. Now I just have to wait {untill|until} Friday to find out if I got a part. I'm keeping my fingers {crossd|crossed}!`
    },
    {
        id: 'p5-5',
        level: 'p5',
        style: 'review',
        title: 'Book Review: The Secret Garden',
        passage: `Title: The Secret Garden
Author: Frances Hodgson Burnett
Rating: 5 stars
This {wonderful|wonderfull} book tells the story of Mary, a {lonley|lonely} girl who discovers a hidden garden. At first, Mary is quite {unpleasent|unpleasant} and bad-tempered, but as she spends time in the garden, she becomes a much kinder person.
I loved the {discriptions|descriptions} of the garden coming back to life. The {freindship|friendship} between Mary, Colin, and Dickon was really touching. My {favorit|favourite} character was Dickon {becuase|because} he was so gentle with animals.
The book teaches us about the {importence|importance} of nature and fresh air. It's quite long, but I couldn't put it down! I would {recomend|recommend} this book to anyone who enjoys {adventur|adventure} and friendship stories.`
    },
    {
        id: 'p5-6',
        level: 'p5',
        style: 'instruction',
        title: 'How to Look After a Hamster',
        passage: `Hamsters make {excellent|excelent} pets if you care for them properly. Here's what you need to know.
Housing: Your hamster needs a {spacios|spacious} cage with plenty of room to explore. Include a running wheel for {exersise|exercise} and a small house where it can sleep during the day.
Food and Water: Feed your hamster {spesial|special} hamster food mix daily. Fresh {vegetabels|vegetables} like carrots and broccoli make good treats. Always provide clean water in a bottle.
Cleaning: Clean the cage {thoroghly|thoroughly} once a week. Remove old bedding and replace it with fresh {matereal|material}. Hamsters are {actualy|actually} very clean animals!
Health: Watch for signs of {illnes|illness} such as wet fur or lack of {apetite|appetite}. If you notice anything unusual, visit a vet straight away.`
    },
    {
        id: 'p5-7',
        level: 'p5',
        style: 'news',
        title: 'Local School Wins Recycling Award',
        passage: `Oakfield Primary School has been awarded first prize in the county's annual {enviromental|environmental} competition. The school impressed judges with its {comprehensiv|comprehensive} recycling programme and student-led {iniciatives|initiatives}.
Over the past year, pupils have collected over 2,000 plastic bottles for recycling and created a {sucessful|successful} composting scheme. They also planted a {wildflowwer|wildflower} meadow to {encourge|encourage} local wildlife.
Headteacher Mr Patel {expresed|expressed} his pride in the students' {acheivements|achievements}. "The children have shown {remarkable|remarkible} dedication to protecting our environment," he said.
As part of their prize, the school will {recieve|receive} £1,000 to spend on further environmental projects. Students are already planning to install solar panels on the school roof.`
    },
    {
        id: 'p5-8',
        level: 'p5',
        style: 'letter',
        title: 'Complaint Letter',
        passage: `15 Manor Road
Bristol
BS8 4JH
Customer Services
Toyworld Ltd
Dear Sir or Madam,
I am writing to complain about a toy robot I {purchased|purchaced} from your store last week. When I opened the box, I {discoverd|discovered} that the battery {compartmant|compartment} was broken and the remote control was missing.
I was very {dissapointed|disappointed} as I had bought this as a birthday present for my younger brother. The toy cost £25.99, which was all my {savd|saved} pocket money.
I have the {receit|receipt} and the {originel|original} packaging. I would like to {exchang|exchange} the broken robot for a new one, or {recive|receive} a full refund.
I hope you can help me resolve this {mater|matter} quickly.
Yours faithfully,
Daniel Cooper`
    },
    {
        id: 'p5-9',
        level: 'p5',
        style: 'speech',
        title: 'School Captain Speech',
        passage: `Good morning {everyone|evryone}. My name is Aisha and I'm standing for School Captain.
If elected, I promise to represent all students {fairley|fairly} and listen to your ideas. I believe our school is {allready|already} great, but together we can make it even better!
My first priority would be to organise more sports clubs and {activites|activities} during lunch breaks. Many students have told me they would like more {oportunities|opportunities} to try new things.
I would also work to improve {comunication|communication} between students and teachers. I want to set up a suggestions box where you can share your ideas {anonymusly|anonymously}.
I'm {reliabel|reliable}, hard-working, and {passionat|passionate} about making our school the best it can be. Please vote for me on Friday. Thank you!`
    },
    {
        id: 'p5-10',
        level: 'p5',
        style: 'blog',
        title: 'My Coding Journey',
        passage: `How I Learned to Code – Week 1
Last Monday, I started learning how to code using an online {platform|platfrom} called CodeAcademy. I've always been {intrested|interested} in how video games and apps are made, so I {desided|decided} to give it a try.
At first, it seemed really {dificult|difficult} and confusing. All those brackets and symbols didn't make much sense! But I watched some {tutoriel|tutorial} videos and {slowley|slowly} things started to click.
By the end of the week, I had created my first simple programme – it asks your name and age, then tells you what year you were born. It's not {amazeing|amazing}, but I'm really proud of it!
My goal is to create a simple game by the end of the month. I'll keep you {updateed|updated} on my progress. If you're {thinkng|thinking} about learning to code, I definitely recommend giving it a go!`
    },
    {
        id: 'p5-11',
        level: 'p5',
        style: 'interview',
        title: 'Interview with a Firefighter',
        passage: `We spoke to Sarah Jenkins, a local firefighter, about her {exciting|exiting} career.
Q: What made you want to become a firefighter?
A: I've always wanted to help people. When I was {yung|young}, firefighters {reskued|rescued} my neighbour from a house fire. I was so impressed by their {bravry|bravery} and skill.
Q: What's a {tipical|typical} day like?
A: Every day is {diferent|different}! We train regularly, maintain our {equiptment|equipment}, and respond to {emergencys|emergencies}. Sometimes we help with road accidents or floods, not just fires.
Q: What's the most {chalenging|challenging} part?
A: Working in {dangrous|dangerous} situations requires constant focus. But seeing people safe makes it all worthwhile.`
    },

    // P6 (Age 12) - Additional exercises
    {
        id: 'p6-4',
        level: 'p6',
        style: 'report',
        title: 'Science Project Report',
        passage: `Investigation: Does Temperature Affect Plant Growth?
Hypothesis: Plants will grow faster in warmer {temperatures|tempratures} compared to colder {condisions|conditions}.
Method: I planted 12 identical seedlings in {seperate|separate} pots with the same soil and water. Four were kept in a cold room (10°C), four at room {temperture|temperature} (20°C), and four in a warm greenhouse (30°C).
Results: After three weeks, measurements showed that the plants at room temperature grew the most, {averageing|averaging} 15cm in height. The warm plants grew {surprizingly|surprisingly} slower at 12cm, while the cold plants managed only 8cm.
{Conclution|Conclusion}: My {hipothesis|hypothesis} was {partialy|partially} correct. Warmer conditions did promote growth, but {exessive|excessive} heat appeared to hinder {developement|development}. This suggests plants have an optimal temperature range for growth.`
    },
    {
        id: 'p6-5',
        level: 'p6',
        style: 'literary',
        title: 'The Attic Discovery',
        passage: `The attic was thick with dust and {shadows|shadoes}, illuminated only by thin shafts of afternoon sunlight that {peirced|pierced} through gaps in the roof tiles. Emma {hesatated|hesitated} at the top of the creaking stairs, her torch {trembeling|trembling} slightly in her hand.
Her grandmother had {mentoined|mentioned} something hidden up here, a {secrit|secret} she wanted Emma to discover before it was too late. Now, surrounded by {forgoten|forgotten} furniture and moth-eaten trunks, Emma wondered what exactly she was searching for.
Then she saw it – an ornate wooden chest, {intricatly|intricately} carved with flowers and birds. It sat in the far corner, {deliberatly|deliberately} placed, as if waiting. Her {curiosaty|curiosity} overcame her nervousness as she approached it carefully, her heart pounding with anticipation.`
    },
    {
        id: 'p6-6',
        level: 'p6',
        style: 'news',
        title: 'Teen Inventor Creates Water Purifier',
        passage: `A 13-year-old student from Manchester has invented a low-cost water {purification|purifacation} system that could help {comunities|communities} in developing countries access clean drinking water.
James Chen developed the device using {readilly|readily} available materials including sand, charcoal, and plastic bottles. The system can remove {harmfull|harmful} bacteria and {impuritys|impurities} from contaminated water, making it safe to drink.
His invention won first prize at the National Youth Science {Compitition|Competition} last month. Judges were {particulary|particularly} impressed by the {simplisity|simplicity} and affordability of his design.
"I wanted to create something that could make a real {differance|difference}," James explained. "Clean water is something we take for granted, but millions of people don't have access to it."
James is now working with a charity to test his design in rural areas of Kenya. If {succesfull|successful}, it could be distributed widely across Africa and Asia.`
    },
    {
        id: 'p6-7',
        level: 'p6',
        style: 'email',
        title: 'Duke of Edinburgh Application',
        passage: `To: dofe@oakwoodschool.co.uk
Subject: Bronze Award {Application|Aplication}
Dear Mr Thompson,
I am writing to apply for a place on the Duke of Edinburgh Bronze Award programme starting in September. I am {extremly|extremely} interested in this {oportunity|opportunity} and believe it would help me develop {valuabel|valuable} skills.
For my physical {activty|activity}, I would like to continue with my weekly swimming training. I am currently working towards my {advansed|advanced} swimming certificate. For my skill section, I plan to learn {photografy|photography}, as I have {recenly|recently} joined the school photography club.
I am {particulary|particularly} excited about the expedition aspect of the award. I enjoy outdoor {activites|activities} and have some experience with camping and map reading from Scouts.
I understand the programme requires {commitiment|commitment} and dedication, and I am fully prepared to meet these expectations. Please let me know if you need any further information.
Best regards,
Thomas Wright`
    },
    {
        id: 'p6-8',
        level: 'p6',
        style: 'diary',
        title: 'First Day at Secondary School',
        passage: `Monday, 5th September
Today was my first day at secondary school and I'm feeling {exhausted|exausted}! The building is {absolutly|absolutely} enormous – I got lost three times and ended up in the sixth form common room by {acident|accident}.
My form tutor, Mrs Ahmed, seems really nice. She gave us all a map and a timetable, which is {definately|definitely} going to take some getting used to. We have {diferent|different} teachers for every subject and have to move {classromms|classrooms} between lessons.
I was {worryed|worried} about making friends, but I met a girl called Zara at lunch. She's in most of my classes and she's really funny. We both got {completly|completely} confused during our first science lesson!
The homework is much more {chalenging|challenging} than primary school, but I'm determined to do well. Tomorrow we have PE first thing, which I'm not looking forward to {becuase|because} I'm {terrable|terrible} at football!`
    },
    {
        id: 'p6-9',
        level: 'p6',
        style: 'instruction',
        title: 'Creating a Revision Timetable',
        passage: `A well-organised revision timetable is {essential|essensial} for exam success. Follow these steps to create your own {efective|effective} study plan.
Step 1: List all your subjects and identify which topics you find most {dificult|difficult}. Be honest about your strengths and {weakneses|weaknesses}.
Step 2: Calculate how many days you have until your exams. Work {backwords|backwards} from the exam dates to {determin|determine} your available study time.
Step 3: {Alocate|Allocate} more time to {chalenging|challenging} subjects, but don't neglect easier ones. Aim for 45-minute study sessions with 15-minute breaks to maintain {concentracion|concentration}.
Step 4: Include variety in your timetable. Switch between subjects to keep your brain {enganged|engaged}. Build in time for {exersise|exercise} and relaxation – these are just as important as studying!
Step 5: Review your progress weekly and adjust your timetable if {necesary|necessary}. Flexibility is key to sustainable revision.`
    },
    {
        id: 'p6-10',
        level: 'p6',
        style: 'review',
        title: 'Video Game Review: Minecraft',
        passage: `Game: Minecraft
Platform: Multiple
Rating: 4.5/5 stars
Minecraft is a {phenomenon|phenomonon} that has captured the {imaginacion|imagination} of millions of players worldwide. The game's {simplisity|simplicity} is deceptive – beneath the blocky graphics lies a {incrediably|incredibly} deep and engaging experience.
The creative mode is {particulary|particularly} impressive, allowing players to build virtually anything they can imagine. I've spent {countles|countless} hours constructing elaborate castles, underground bases, and even working {calculaters|calculators}! The survival mode adds challenge and excitement, requiring players to gather resources and defend against {dangrous|dangerous} creatures.
The {multiplyer|multiplayer} aspect enhances the {experiance|experience} significantly. Playing with friends transforms the game into a collaborative adventure. However, younger players should be supervised when playing online.
My only criticism is that the game can feel overwhelming for beginners. A more {comprehensiv|comprehensive} tutorial would be helpful.`
    },
    {
        id: 'p6-11',
        level: 'p6',
        style: 'advertisement',
        title: 'Summer Drama Camp',
        passage: `Starlight Drama Academy presents:
Summer Theatre Camp 2024
Unleash your creativity this summer at our {exciting|exiting} drama camp! {Wether|Whether} you're a complete beginner or an {experiensed|experienced} performer, we have {somthing|something} for everyone.
What's included:
• Daily acting workshops with {proffesional|professional} theatre practitioners
• Voice and movement training
• Improvisation and script work
• Backstage skills including costume and set design
• Final {performence|performance} for family and friends
Our {enthusiasic|enthusiastic} team creates a {suportive|supportive} {enviornment|environment} where young people can build confidence and make new friends.
Dates: 15th-26th July
Ages: 11-16
Cost: £250 (includes lunch and materials)
Early bird discount: Book before 1st June and save £30!
Visit www.starlightdrama.co.uk or call 01234 567890 for more {infomation|information}.`
    },
    {
        id: 'p6-12',
        level: 'p6',
        style: 'speech',
        title: 'Environmental Action Speech',
        passage: `Good afternoon teachers and fellow students. Today I want to talk about an issue that affects every single one of us: climate change.
We often hear adults discussing this problem, but we young people will inherit this planet. We have the right – and the {responsibility|responsability} – to take action now, not {tommorrow|tomorrow}.
Our school already does some good things. We recycle paper and have energy-{eficient|efficient} lighting. But we can do more. I propose we create a student-led {enviromental|environmental} committee to {impliment|implement} new {iniciatives|initiatives}.
We could start a bike-to-school scheme, reduce single-use plastics in the {cantin|canteen}, and {establsh|establish} a school garden to grow our own {vegetabels|vegetables}. These might seem like small steps, but {colective|collective} action creates real change.
The question isn't whether we can make a {diference|difference} – it's whether we're willing to try. Who's with me?`
    },
    {
        id: 'p6-13',
        level: 'p6',
        style: 'blog',
        title: 'Learning a Musical Instrument',
        passage: `Six Months of Piano Practice: My Progress
When I started learning piano last September, I could barely manage "Twinkle Twinkle Little Star". Now, six months later, I'm working on a piece by Beethoven. Here's what I've learnt about the {jurney|journey}.
Progress isn't linear. Some weeks I improved {dramaticaly|dramatically}; other weeks I felt like I was going {backwords|backwards}. That's {completly|completely} normal! The key is {consistant|consistent} practice, even when it's frustrating.
My teacher, Mrs Wong, {emphisises|emphasises} the {importence|importance} of proper technique. At first, I found her {corections|corrections} annoying, but now I understand why they matter. Good {tecnique|technique} prevents injury and makes playing easier.
I've also discovered that performing for others, even just family, helps build {confidense|confidence}. The first time was terrifying, but it gets easier!
My advice for beginners: be patient with yourself, practice daily, and most importantly, choose music you genuinely enjoy playing.`
    },

    // SEC1 (Age 13) - Additional exercises
    {
        id: 'sec1-4',
        level: 'sec1',
        style: 'report',
        title: 'History Essay: The Industrial Revolution',
        passage: `The Industrial Revolution: {Transformation|Transformacion} of British Society
The Industrial Revolution, spanning from approximately 1760 to 1840, {fundementally|fundamentally} transformed British society. This period witnessed {unpresidented|unprecedented} technological advancement, urbanisation, and social change.
The {introducton|introduction} of steam power {revolutionized|revolutionised} manufacturing and transportation. Factories replaced traditional cottage industries, creating new employment {oportunities|opportunities} but also harsh working conditions. Men, women, and children worked long hours in {dangrous|dangerous} environments for minimal wages.
{Urbanisacion|Urbanisation} accelerated {rappidly|rapidly} as people migrated from rural areas to industrial cities seeking work. This led to overcrowding, poor sanitation, and the spread of disease. Living {condisions|conditions} for the working class were often appalling.
However, the period also brought {signifigant|significant} benefits. {Increaced|Increased} productivity led to economic growth, and eventually, reforms improved workers' rights and living standards. The legacy of this era continues to shape modern Britain.`
    },
    {
        id: 'sec1-5',
        level: 'sec1',
        style: 'letter',
        title: 'Formal Complaint to Council',
        passage: `42 Willow Gardens
Leeds
LS7 3QR
Leeds City Council
Planning Department
Civic Hall
Leeds LS1 1UR
Dear Sir or Madam,
I am writing to express my concern regarding the proposed {developement|development} of the green space adjacent to Willow Gardens. As a local resident, I believe this plan will have {detremental|detrimental} effects on our {comunity|community}.
The green space currently provides {esential|essential} recreational facilities for local families and supports {valuabel|valuable} wildlife habitats. Its loss would {significently|significantly} impact the area's {charactor|character} and residents' quality of life.
Furthermore, the {propoosed|proposed} construction would increase traffic {congesion|congestion} on our already busy roads. {Adequite|Adequate} parking provisions have not been addressed in the planning {aplication|application}.
I respectfully request that the council reconsiders this decision and consults more {thoroghly|thoroughly} with local residents before proceeding.
Yours faithfully,
Jennifer Matthews`
    },
    {
        id: 'sec1-6',
        level: 'sec1',
        style: 'news',
        title: 'Youth Unemployment Report',
        passage: `New Report Highlights Youth Unemployment Challenges
A {comprehensive|comprehenisive} report published yesterday reveals that youth unemployment remains a {persistant|persistent} challenge across the UK. The study, conducted by the Institute for Economic Research, examines the {bariers|barriers} facing young people entering the workforce.
The findings indicate that lack of work {experiance|experience} is the primary obstacle for school leavers. Many employers require {previus|previous} experience, creating a "catch-22" situation for young job seekers. Additionally, the decline in {apprenticship|apprenticeship} {oportunities|opportunities} has limited alternative pathways to employment.
Regional {disparaties|disparities} are {particulary|particularly} pronounced, with northern regions experiencing {significently|significantly} higher unemployment rates than the south-east.
The report {recomends|recommends} increased investment in vocational training and stronger partnerships between schools and businesses. Government ministers have promised to review the {recomendations|recommendations} carefully.`
    },
    {
        id: 'sec1-7',
        level: 'sec1',
        style: 'interview',
        title: 'Author Interview',
        passage: `We spoke with bestselling author Marcus Webb about his latest novel, "The Forgotten Shore".
Q: What inspired this particular story?
A: I've always been {fascinated|facinated} by coastal {comunities|communities} and their unique {realationship|relationship} with the sea. The novel explores themes of isolation, belonging, and {enviromental|environmental} change.
Q: Your {charactors|characters} are {incrediably|incredibly} realistic. How do you develop them?
A: I spend months getting to know my characters before writing. I create detailed {biografies|biographies} and imagine their daily routines, their fears and {aspriations|aspirations}. Only when they feel like real people do I begin the actual {manuscrip|manuscript}.
Q: What advice would you give aspiring writers?
A: Read {extensivly|extensively} in different genres. Write every day, even when inspiration doesn't strike. Most importantly, accept that first drafts are {allways|always} imperfect – that's what editing is for!`
    },
    {
        id: 'sec1-8',
        level: 'sec1',
        style: 'email',
        title: 'Work Experience Request',
        passage: `To: info@cityarchitects.co.uk
Subject: Work Experience Request
Dear Ms Patel,
I am a Year 9 student at Riverside {Secondary|Secondry} School and I am writing to enquire about {potencial|potential} work experience {oportunities|opportunities} at City Architects during the week of 10th-14th June.
I have a strong interest in {architecture|architechture} and am considering it as a future career path. I have been {particulary|particularly} impressed by your firm's {sustainabel|sustainable} design projects, especially the recent eco-housing {development|developement} featured in the local press.
I am {reliabel|reliable}, {enthusiasic|enthusiastic}, and eager to learn. While I understand I may not have relevant skills yet, I am {wiling|willing} to assist with any tasks and observe how your team works.
I have attached a brief CV and a reference from my Design Technology teacher, Mr Harrison, who can vouch for my {comitment|commitment} and interest in this field.
Thank you for considering my request. I look forward to hearing from you.
Best regards,
Priya Sharma`
    },
    {
        id: 'sec1-9',
        level: 'sec1',
        style: 'business',
        title: 'School Magazine Proposal',
        passage: `Proposal: Launching a School Digital Magazine
Executive Summary
This document outlines a proposal to establish a student-led digital magazine for Riverside {Secondary|Secondry} School. The {publicaton|publication} would showcase student creativity, develop {valuabel|valuable} skills, and strengthen school community.
Objectives
• Provide a platform for student {journalizm|journalism}, creative writing, and artwork
• Develop media literacy and digital skills
• Promote student voice and {engagment|engagement}
• Create a lasting record of school {acheivements|achievements} and events
Implementation Plan
We propose a monthly online {publicacion|publication} accessible via the school website. A student editorial team would {oversea|oversee} content creation, with staff {supervison|supervision} from the English department.
Budget Requirements
{Inital|Initial} costs include website hosting (£120 annually) and design software {subscriptons|subscriptions} (£150). We estimate total first-year costs of approximately £500.
Conclusion
This initiative would {benifit|benefit} students academically and socially while enhancing the school's reputation for innovation.`
    },

    // SEC2 (Age 14) - Additional exercises
    {
        id: 'sec2-4',
        level: 'sec2',
        style: 'literary',
        title: 'Winter Morning',
        passage: `Dawn broke reluctantly over the frost-laden countryside, the {horizon|horizan} barely {distinguishible|distinguishable} through the morning mist. Thomas stood at the window, his breath {condenseing|condensing} against the cold glass, watching the world gradually emerge from darkness.
The {landscap|landscape} was transformed, every branch and blade of grass encrusted with crystalline ice that glittered in the weak sunlight. The {silense|silence} was absolute, profound – even the usually {boistrous|boisterous} crows seemed {subduded|subdued} by winter's grip.
He contemplated the day ahead with a mixture of {anticipacion|anticipation} and dread. The {examinaton|examination} loomed like an insurmountable obstacle, yet he knew {procrastinaton|procrastination} would achieve nothing. With a resigned sigh, he turned from the window and reached for his revision notes, the pages filled with {meticulusly|meticulously} written {annotacions|annotations} and highlighted passages.`
    },
    {
        id: 'sec2-5',
        level: 'sec2',
        style: 'news',
        title: 'Artificial Intelligence Ethics Debate',
        passage: `Parliament Debates Artificial Intelligence Regulation
{Parliamentary|Parlimentary} committees have begun {comprehensiv|comprehensive} discussions regarding the regulation of artificial intelligence {technologys|technologies}. The debate centres on balancing innovation with ethical {consideratons|considerations} and public safety.
Dr Amanda Foster, a leading AI {resercher|researcher} from Imperial College, testified that while AI offers {tremendus|tremendous} potential benefits, particularly in healthcare and environmental {protecton|protection}, {inadaquate|inadequate} oversight could lead to {unintented|unintended} consequences.
"We must {establsh|establish} robust ethical frameworks now," Dr Foster emphasised. "The technology is {advansing|advancing} faster than our {abilty|ability} to comprehend its full implications."
Critics argue that {exessive|excessive} regulation might stifle innovation and place UK companies at a {competative|competitive} disadvantage {internationaly|internationally}. However, consumer advocacy groups insist that {protectng|protecting} citizens' rights and privacy must take {presidence|precedence} over commercial interests.
The government has promised to {publsh|publish} draft {legislaton|legislation} by autumn.`
    },
    {
        id: 'sec2-6',
        level: 'sec2',
        style: 'business',
        title: 'Corporate Social Responsibility Report',
        passage: `Annual CSR Report: GreenTech Solutions Ltd
Executive Overview
This report outlines our {organisations|organisation's} Corporate Social {Responsability|Responsibility} initiatives for the fiscal year 2023-2024. We remain {comitted|committed} to {sustainabel|sustainable} business practices and positive community impact.
Environmental Initiatives
We have {sucessfully|successfully} reduced our carbon emissions by 34% through {implementacion|implementation} of renewable energy sources and improved {eficiency|efficiency} measures. Our {manufaturing|manufacturing} processes now utilise 85% recycled materials.
Community Engagement
Our employee volunteer programme contributed over 2,000 hours to local {charitabel|charitable} organisations. We {establshed|established} three new {apprentiship|apprenticeship} schemes, providing {oportunities|opportunities} for young people in disadvantaged areas.
Looking Forward
Next year, we plan to achieve carbon {neutralty|neutrality} and expand our {educacional|educational} {parterships|partnerships}. We recognise that {corprate|corporate} success depends on {enviromental|environmental} and social {sustainabilty|sustainability}.
Our commitment to responsible business practices remains unwavering.`
    },
    {
        id: 'sec2-7',
        level: 'sec2',
        style: 'report',
        title: 'Geography Coursework Extract',
        passage: `Coastal Erosion Study: Holderness Coast
Introduction
This investigation examines the {processes|proceses} and impacts of coastal erosion along the Holderness {coastlin|coastline}, Yorkshire. This stretch of coastline experiences some of Europe's fastest erosion rates, losing {aproximately|approximately} two metres annually.
Methodology
Data was collected through field {observatons|observations}, photographic {documentacion|documentation}, and analysis of {historicle|historical} maps. Beach {profiel|profile} measurements were taken at three locations using ranging poles and clinometers.
Findings
The {predominently|predominantly} clay {composicion|composition} of the cliffs makes them {particulary|particularly} {vulnerabel|vulnerable} to erosion. Wave action undercuts the cliff base, causing frequent landslides. Longshore drift moves sediment southward, {depriveing|depriving} northern sections of {protectiv|protective} beach material.
Human impacts are {signifigant|significant}. Coastal defences protect some settlements but accelerate erosion elsewhere. Several villages have been lost to the sea over centuries.
Conclusion
{Sustainabel|Sustainable} coastal {managment|management} requires balancing economic, social, and {environmental|enviromental} factors. Current strategies prove {inadaquate|inadequate} for long-term protection.`
    },
    {
        id: 'sec2-8',
        level: 'sec2',
        style: 'speech',
        title: 'Debate: Social Media Impact',
        passage: `Honourable judges, worthy {opponents|oponents}, and audience members, I stand before you to argue that social media has had a {predominently|predominantly} negative impact on teenage mental health.
Consider the {evidance|evidence}. Multiple studies demonstrate a clear {corelation|correlation} between excessive social media use and increased rates of {anxeity|anxiety}, depression, and low self-esteem among adolescents. The {constent|constant} comparison with {carefuly|carefully} curated online personas creates {unrealisic|unrealistic} expectations and fosters inadequacy.
Furthermore, cyberbullying has become {increasingley|increasingly} {prevalant|prevalent}, with {devastateing|devastating} consequences. Unlike traditional bullying, online harassment follows victims home, operating 24/7 without respite.
My opponents will argue that social media provides valuable connectivity and {oportunities|opportunities} for self-expression. While these benefits exist, they cannot outweigh the {substancial|substantial} psychological harm documented by researchers worldwide.
We must {acknowlege|acknowledge} this crisis and implement {comprehensiv|comprehensive} protective measures. Our generation's mental wellbeing depends on it.`
    },
    {
        id: 'sec2-9',
        level: 'sec2',
        style: 'review',
        title: 'Theatre Review: Macbeth',
        passage: `Royal Shakespeare Company presents: Macbeth
Theatre Royal, Stratford-upon-Avon
This {ambitious|ambishous} production of Shakespeare's darkest tragedy delivers a visceral, {contempory|contemporary} {interpretacion|interpretation} that resonates powerfully with modern audiences.
Director Sarah Chen's vision reimagines the Scottish {landscap|landscape} as a {distopian|dystopian} military state, with stark lighting and {minimlist|minimalist} staging that emphasises the play's psychological {intensty|intensity}. The witches, portrayed as {distrubing|disturbing} manifestations of Macbeth's {conscence|conscience}, prove {particulary|particularly} effective.
James Morrison's Macbeth is {extraordinary|extraordinery} – {simultaniously|simultaneously} sympathetic and terrifying. His gradual descent into paranoia feels inevitable yet shocking. Emma Thompson's Lady Macbeth brings unexpected vulnerability to the role, her sleepwalking scene proving genuinely haunting.
Minor {critisisms|criticisms} include {ocasionally|occasionally} rushed pacing in the second act. However, this remains a compelling, thought-provoking production that demonstrates Shakespeare's {endurring|enduring} {relevence|relevance}. Highly recommended.
Rating: 4.5/5 stars`
    }
,

    // Additional exercises for variety
    {
        id: 'p4-9',
        level: 'p4',
        style: 'news',
        title: 'New Playground Opens',
        passage: `A brand new playground has {opend|opened} at Riverside Park. The playground has {exiting|exciting} equipment including swings, slides, and a climbing frame.
Mayor Johnson cut the {ribon|ribbon} yesterday morning. "This playground is {wonderfull|wonderful} for our {comunity|community}," she said.
The playground is open every day from 9am to 6pm. Children under 8 must be {acumpanied|accompanied} by an adult.`
    },
    {
        id: 'p4-10',
        level: 'p4',
        style: 'instruction',
        title: 'How to Plant Seeds',
        passage: `Planting seeds is easy and fun! First, fill a small pot with {soyl|soil}. Make a small hole in the middle with your {fingr|finger}.
Drop one or two seeds into the hole and cover them {gentley|gently} with soil. Water the seeds {carefuly|carefully} – don't use too much water!
Place the pot in a {suny|sunny} spot and water it every day. In a few weeks, you'll see tiny {grean|green} shoots {apearing|appearing}!`
    },
    {
        id: 'p4-11',
        level: 'p4',
        style: 'email',
        title: 'Party Invitation',
        passage: `Hi Jack,
I'm having a {birfday|birthday} party next {Saterday|Saturday} at 2pm. We're going to play games in the garden and have a {barbacue|barbecue}!
Mum is making her {speshul|special} chocolate cake. We'll also have a {trampoleen|trampoline} and water balloons.
Please bring your {swiming|swimming} costume because we might use the paddling pool if it's {suny|sunny}.
Can you come? Let me know soon!
From,
Ben`
    },
    {
        id: 'p4-12',
        level: 'p4',
        style: 'blog',
        title: 'My Pet Hamster',
        passage: `My New Pet: Fluffy the Hamster
Last week, I got a pet hamster! His name is Fluffy and he's {realy|really} cute. He has {oranje|orange} and white fur and tiny pink {feat|feet}.
Fluffy loves to run on his wheel, {especialy|especially} at night. Sometimes he makes so much {noize|noise} that it wakes me up!
Every morning, I give him fresh water and {vegitables|vegetables}. His {favourit|favourite} food is carrots. He holds them in his little paws and nibbles {verry|very} fast.`
    },
    {
        id: 'p5-12',
        level: 'p5',
        style: 'report',
        title: 'Class Trip Report',
        passage: `Visit to the Science Museum – 15th March
Our class visited the London Science Museum yesterday. We {traveld|travelled} by coach and {arived|arrived} at 10am.
First, we explored the Space {Exibition|Exhibition}. I was {amazd|amazed} to see real rockets and {satelites|satellites}. The guide {explaind|explained} how astronauts live in space.
After lunch, we visited the {interaktive|interactive} section where we could touch and {experament|experiment} with different {machiens|machines}. My {favourit|favourite} part was the {electrisity|electricity} demonstration.
We {lernt|learnt} lots of {intresting|interesting} facts and had a {grate|great} day!`
    },
    {
        id: 'p5-13',
        level: 'p5',
        style: 'advertisement',
        title: 'Summer Camp Ad',
        passage: `Adventure Summer Camp 2024!
Join us for an {unforgetable|unforgettable} summer {experiance|experience}! Our camp offers {exiting|exciting} activities for children aged 8-12.
Activities include:
• Rock climbing and {abseiling|absailing}
• Canoeing and {kayaking|kayakking}
• {Wildife|Wildlife} spotting
• Arts and crafts
• Evening {campfier|campfire} stories
Our {expirienced|experienced} instructors ensure a safe and fun {enviroment|environment}. All equipment is {providded|provided}.
Book now! Spaces are {limitted|limited}. Visit www.adventurecamp.co.uk or call 0800 123 4567.`
    },
    {
        id: 'p5-14',
        level: 'p5',
        style: 'dialogue',
        title: 'Library Conversation',
        passage: `"Excuse me," said Tom to the librarian. "I'm looking for books about {dinasaurs|dinosaurs}."
"Certainly," replied Mrs Chen. "The {prehistorick|prehistoric} section is on the {secund|second} floor. Follow me."
They walked upstairs and Mrs Chen pointed to a large {bookshelf|bookshellf}. "Here you are. We have some {exelent|excellent} books about {tyrannosaurus|tyrannosaurs} rex and {stegosaurus|steggosaurus}."
"Thank you!" said Tom {excitedly|excitedley}. "I'm doing a project for school."
"These books have {wonderfull|wonderful} pictures and {interresting|interesting} facts," said Mrs Chen. "You can {borrow|borrough} up to three books."`
    },
    {
        id: 'p6-14',
        level: 'p6',
        style: 'diary',
        title: 'School Concert',
        passage: `Tuesday, 12th December
Tonight was our school {conc|concert} and I was {incredibly|incredibley} nervous! I had to play a piano solo in front of {hundrreds|hundreds} of people.
When I walked onto the stage, my hands were {shaking|shakking} and my heart was {pownding|pounding}. But as soon as I started playing, I felt {calmer|calmar}. I {rembered|remembered} everything my teacher had taught me.
The {audiance|audience} clapped loudly when I finished. Mum said I played {beautifully|beautifly} and Dad said he was really proud. My music teacher, Mrs Harrison, gave me a huge smile.
I'm so {releived|relieved} it's over, but also really happy. Maybe performing isn't so {terifying|terrifying} after all!`
    },
    {
        id: 'p6-15',
        level: 'p6',
        style: 'letter',
        title: 'Thank You Letter to Author',
        passage: `15 Church Street
Oxford
OX1 4BH
Dear Ms Rowling,
I am writing to tell you how much I enjoyed your books. I have read the entire Harry Potter {serie|series} three times! Your books are {absolutley|absolutely} brilliant.
My {favourit|favourite} character is Hermione because she is {inteligent|intelligent} and brave. The {storyline|storylin} about the Deathly Hallows was {particulary|particularly} exciting.
Your books have {inspird|inspired} me to start writing my own stories. I hope to become an author {somday|someday}, just like you.
Thank you for creating such a {magical|majical} world that has brought me so much joy.
Yours {sinceerly|sincerely},
Emma Watson`
    },
    {
        id: 'p6-16',
        level: 'p6',
        style: 'interview',
        title: 'Interview with School Chef',
        passage: `We interviewed Mr Kumar, our school chef, about his work.
Q: How long have you been cooking school meals?
A: I've been the school chef for fifteen years. I {absalutely|absolutely} love my job and enjoy creating {nutritious|nutritius} meals for students.
Q: What's the most {chalenging|challenging} part?
A: Catering for different {dietry|dietary} requirements can be {dificult|difficult}. Some students are {vegitarian|vegetarian}, others have different {alergies|allergies}. I make sure everyone has {delishus|delicious} options.
Q: What's your {favourit|favourite} meal to prepare?
A: I love making {tradisional|traditional} Sunday roasts. The students really {apreciate|appreciate} home-cooked food.`
    },
    {
        id: 'sec1-10',
        level: 'sec1',
        style: 'report',
        title: 'Biology Lab Report',
        passage: `Osmosis Experiment
Aim: To {investegate|investigate} the effect of {concentracion|concentration} on osmosis in potato cells.
Method: Five potato cylinders were {prepaired|prepared} and placed in different {concentraions|concentrations} of salt solution. Their mass was {mesured|measured} before and after 24 hours.
Results: Potatoes in pure water {increaced|increased} in mass by 15%. Those in strong salt solution {decreeced|decreased} by 12%. The {percantage|percentage} change was {proportional|proporshional} to solution strength.
Conclusion: Water moves from areas of low {concentracion|concentration} to high concentration through {semi-permeable|semi-permiable} membranes. This {demonstraits|demonstrates} osmosis {efectively|effectively}.`
    },
    {
        id: 'sec1-11',
        level: 'sec1',
        style: 'speech',
        title: 'Anti-Bullying Speech',
        passage: `Good morning everyone. Today I want to discuss a {serios|serious} issue: bullying.
Bullying affects thousands of students {nationaly|nationally}. It causes {significent|significant} emotional harm and can have {devastaing|devastating} long-term {consequenses|consequences}.
We must create an {enviroment|environment} where everyone feels safe and {respectid|respected}. This requires {colective|collective} effort. If you witness bullying, don't stay silent – report it to a teacher or {conselar|counsellor}.
{Remembr|Remember}, being kind costs nothing. A simple smile or {frendly|friendly} word can make someone's day. Let's work together to make our school a place where {everybody|evrybody} feels valued and {incloded|included}.
Thank you for listening.`
    },
    {
        id: 'sec1-12',
        level: 'sec1',
        style: 'diary',
        title: 'Work Experience Week',
        passage: `Friday, 24th June
My work {experiance|experience} week at the {vetnary|veterinary} clinic has been {amazing|amazeing}! I've learned so much about animal care.
On Monday, I watched {surgury|surgery} on a dog. It was {facinating|fascinating} but also quite {nervs-racking|nerve-racking}. The {surgen|surgeon}, Dr Patel, {explaind|explained} every step.
{Wensday|Wednesday} was busy – we saw fifteen animals! I helped clean {kennles|kennels}, {prepair|prepare} medication, and {comfert|comfort} anxious pets.
Today, I {asisted|assisted} with {vacinations|vaccinations}. The vet praised my {patiance|patience} with a {frighterned|frightened} cat.
This {experiance|experience} has {confirmd|confirmed} my ambition to become a vet. It's hard work, but {incredibbly|incredibly} rewarding.`
    },
    {
        id: 'sec2-10',
        level: 'sec2',
        style: 'letter',
        title: 'University Application',
        passage: `Dear Admissions Officer,
I am writing to apply for a place on your {prestijus|prestigious} Medicine degree {program|programme}. I believe I possess the {necesary|necessary} qualities and {dedikation|dedication} to succeed in this {chalenging|challenging} field.
My {acadamic|academic} record demonstrates consistent {excelence|excellence}. I am predicted A* grades in Biology, Chemistry, and Mathematics. {Additionaly|Additionally}, I have undertaken {extensiv|extensive} voluntary work at my local hospital, gaining {invaluabel|invaluable} insight into medical practice.
I am {particulary|particularly} interested in {cardio-vascular|cardiovasculer} medicine. Recent {advancments|advancements} in this field {fasinate|fascinate} me, and I hope to {contribut|contribute} to future research.
I would be {honered|honoured} to study at your {instituion|institution}.
Yours {faithfuly|faithfully},
James Chen`
    },
    {
        id: 'sec2-11',
        level: 'sec2',
        style: 'report',
        title: 'History Essay Extract',
        passage: `The Causes of World War One
{Historiens|Historians} debate the {primery|primary} causes of World War One. While the {assasination|assassination} of Archduke Franz Ferdinand triggered the conflict, {underlieing|underlying} tensions had been building for decades.
{Imperialist|Imperialisst} {rivulries|rivalries} between European powers created {significent|significant} friction. Germany's rapid {industrialisacion|industrialisation} threatened Britain's {economik|economic} dominance. {Similtaniously|Simultaneously}, {nationalisst|nationalist} movements {desabilised|destabilised} the Austro-Hungarian Empire.
The {aliance|alliance} system proved {catastrofic|catastrophic}. When Austria-Hungary declared war on Serbia, the web of treaties pulled other nations into the conflict. {Inadvertantly|Inadvertently}, a regional dispute {eskalated|escalated} into global warfare.
{Militarism|Militarizm} also played a crucial role. The arms race had created massive {militery|military} forces seeking {deployement|deployment}.`
    },
    {
        id: 'sec2-12',
        level: 'sec2',
        style: 'interview',
        title: 'Climate Scientist Interview',
        passage: `We spoke with Professor Sarah Mitchell, a leading climate scientist, about her research.
Q: What are the most {presing|pressing} {enviornmental|environmental} challenges?
A: Climate change is {undowbtedly|undoubtedly} the most {seriuos|serious} issue. Rising {tempertures|temperatures} are causing {unpresedented|unprecedented} changes to our {ecosistems|ecosystems}.
Q: What {evidance|evidence} do we have?
A: The data is {overwelming|overwhelming}. Ice cores reveal {atmosferic|atmospheric} CO2 levels are higher than any time in 800,000 years. We're {witnessing|witnessng} {accelerated|accelarated} glacier melting and sea-level rise.
Q: Is there hope?
A: {Absolutly|Absolutely}. {Renewable|Renewabel} energy {technolgy|technology} is advancing rapidly. With {colective|collective} action, we can {mittigate|mitigate} the worst effects.`
    }
,

    // Additional exercises for greater variety
    {
        id: 'p4-13',
        level: 'p4',
        style: 'story',
        title: 'The Lost Teddy',
        passage: `Mia was {verry|very} upset. She couldn't find her {favourit|favourite} teddy bear anywhere.
She looked under her bed and inside her {cubbord|cupboard}. "Where could Teddy be?" she {wonderd|wondered}.
Then Mia {rememberd|remembered} – she'd taken him to the park! She ran {downstares|downstairs} and told Mum.
They {hurryed|hurried} back to the park. There, sitting on the bench, was her {precius|precious} teddy. Mia was so {releived|relieved}!`
    },
    {
        id: 'p4-14',
        level: 'p4',
        style: 'recipe',
        title: 'Simple Fruit Salad',
        passage: `You will need: 1 apple, 1 banana, 1 {oranj|orange}, some grapes.
First, wash all the fruit {carfully|carefully}. Ask an adult to help you cut the apple into small {peices|pieces}.
Peel the banana and slice it. {Seperate|Separate} the orange into segments.
Put {evrything|everything} in a large bowl and mix {gentley|gently}. You can add a spoonful of honey if you like it {sweeter|sweatar}.
Serve {imediatly|immediately} and enjoy!`
    },
    {
        id: 'p4-15',
        level: 'p4',
        style: 'diary',
        title: 'First Swimming Lesson',
        passage: `Monday, 5th June
Today I had my first {swiming|swimming} lesson. I was {nervus|nervous} at first because the water looked {verry|very} deep.
The teacher, Miss Kate, was {realy|really} kind. She showed us how to float and kick our legs. It was quite {dificult|difficult} but I tried my best.
By the end, I could swim a few metres! I felt so {prowd|proud} of myself. I can't wait for next week's lesson!`
    },
    {
        id: 'p4-16',
        level: 'p4',
        style: 'review',
        title: 'Book Review: The Magic Hat',
        passage: `I {recentley|recently} read "The Magic Hat" by Sophie Green. It's about a girl who finds a {majical|magical} hat that can make her {invisibel|invisible}.
The story is {exiting|exciting} and has lots of funny moments. My {favourit|favourite} part is when she sneaks into the zoo at night.
The pictures are {beutiful|beautiful} and really help tell the story. I would {recomend|recommend} this book to anyone who likes {advanture|adventure} stories.
Rating: 5 stars!`
    },
    {
        id: 'p4-17',
        level: 'p4',
        style: 'letter',
        title: 'Thank You Letter',
        passage: `15 Park Road
London
Dear Grandma,
Thank you so much for the {lovley|lovely} birthday present. The art set is {exactley|exactly} what I wanted!
I've {allready|already} used the paints to make a {pictur|picture} of our garden. Dad says it's {realy|really} good.
I hope you can visit us soon. Mum says you might come in {Augst|August}. That would be {wonderfull|wonderful}!
Love,
Lucy`
    },
    {
        id: 'p5-15',
        level: 'p5',
        style: 'story',
        title: 'The Mysterious Package',
        passage: `When Tom arrived home from school, he found a {misteryus|mysterious} package on the doorstep. It was {adressed|addressed} to him but had no return address.
He {carefuly|carefully} opened it. Inside was an old compass with a note: "This will lead you to an {incredibl|incredible} discovery."
Tom was {puzzeled|puzzled}. He decided to follow the compass. It pointed towards the old oak tree in the {nieghbour's|neighbour's} garden.
What would he find there? His heart {pownded|pounded} with {exitement|excitement} as he set off on his {advanture|adventure}.`
    },
    {
        id: 'p5-16',
        level: 'p5',
        style: 'letter',
        title: 'Formal Complaint',
        passage: `42 High Street
Manchester
15th April
Dear Sir or Madam,
I am writing to complain about the {servise|service} I {recieved|received} at your restaurant last Saturday.
We arrived at 7pm and had to wait 45 minutes for a table, even though we had a {reservacion|reservation}. The food was cold when it {finaly|finally} arrived.
The waiter was not {apologyetic|apologetic} and seemed {anoyed|annoyed} when we complained. This was very {disapointing|disappointing}.
I would {apreciate|appreciate} a response {explayning|explaining} what went wrong.
Yours faithfully,
Mrs J. Smith`
    },
    {
        id: 'p5-17',
        level: 'p5',
        style: 'blog',
        title: 'My Camping Trip',
        passage: `Weekend Adventure: First Camping Trip
Last weekend, my family went camping in the Lake {Distict|District}. It was my first time sleeping in a tent!
Setting up the tent was {chalenging|challenging}. Dad struggled with the poles while Mum {organiced|organised} our sleeping bags. {Eventualy|Eventually}, we got it up.
At night, we cooked sausages on the campfire and told stories. I saw {increadible|incredible} stars – you can't see them in the city! I even spotted a {satelite|satellite} moving across the sky.
Despite getting cold and {uncomfertable|uncomfortable} at night, it was an {amasing|amazing} {experiance|experience}. I {definately|definitely} want to go again!`
    },
    {
        id: 'p5-18',
        level: 'p5',
        style: 'speech',
        title: 'School Council Speech',
        passage: `Good morning everyone. My name is Alex and I'm running for School Council {representativ|representative}.
If elected, I will work to improve our school in three {importent|important} ways. First, I'll campaign for better sports {equipmant|equipment}. Our footballs are old and {damadged|damaged}.
Second, I want to {orgainse|organise} more charity events. We could raise money for {childrens|children's} hospitals.
Third, I'll make sure your voices are heard. I'll hold {reguler|regular} meetings where you can share your ideas and {sugestions|suggestions}.
Please vote for me on Friday. Together, we can make a {diference|difference}!`
    },
    {
        id: 'p5-19',
        level: 'p5',
        style: 'instruction',
        title: 'How to Care for a Goldfish',
        passage: `Looking After Your Goldfish
Goldfish are {populer|popular} pets but need proper care. Follow these {esential|essential} steps.
Tank Setup: Use a tank that holds at least 20 litres. Add a filter to keep the water clean and an {areator|aerator} to provide {oxigen|oxygen}.
Feeding: Feed your goldfish twice daily. Don't {overfead|overfeed} them – only give what they can eat in two minutes. Remove any {uneaten|uneeten} food.
Cleaning: Change 25% of the water {weekley|weekly}. Clean the tank walls with a special {scrubber|scruber} to remove algae.
Temperature: Goldfish prefer water {temperture|temperature} between 18-22°C. Use a {thermomiter|thermometer} to check.
With proper care, your goldfish can live for many years!`
    },
    {
        id: 'p6-17',
        level: 'p6',
        style: 'story',
        title: 'The Time Traveller',
        passage: `Dr Chen stepped into her time machine with a mixture of {exitement|excitement} and {trepidashun|trepidation}. She had spent years developing this {technoligy|technology}.
The machine hummed and the laboratory {disapeared|disappeared} in a flash of light. When she opened her eyes, she was standing in {anceint|ancient} Egypt.
Pyramids towered above her. She {aproached|approached} {cautiosly|cautiously}, {consciuos|conscious} that she mustn't {interferr|interfere} with history.
{Suddenley|Suddenly}, she heard voices. She needed to find somewhere to hide {imediately|immediately}. This was more {dangeros|dangerous} than she'd {anticpated|anticipated}.
Would she make it back to her own time?`
    },
    {
        id: 'p6-18',
        level: 'p6',
        style: 'report',
        title: 'Recycling Survey Results',
        passage: `Survey Report: School Recycling Habits
We conducted a survey of 200 students to assess recycling {behavour|behaviour} at our school.
Results: Only 45% of students {regulerly|regularly} use recycling bins. The main {barriars|barriers} identified were:
• Insufficient bins (mentioned by 62% of {respondants|respondents})
• Confusion about what can be recycled (38%)
• Lack of {awairness|awareness} (27%)
Recommendations: We {recomend|recommend} installing more {clearley|clearly} labelled bins throughout the school. {Additionaly|Additionally}, we suggest {organising|organicing} an {educasional|educational} campaign to raise {awarness|awareness}.
Conclusion: With proper {facilitys|facilities} and education, we could {dramaticaly|dramatically} increase recycling rates.`
    },
    {
        id: 'p6-19',
        level: 'p6',
        style: 'email',
        title: 'Job Application Follow-up',
        passage: `To: recruitment@bookshop.co.uk
From: sarah.jones@email.com
Subject: Application for Saturday Assistant Position

Dear Mr Patel,
I am writing to {enquier|enquire} about my application for the Saturday Assistant position, which I submitted two weeks ago.
I am {particulerly|particularly} interested in this role because I am {passionat|passionate} about books and have {exelent|excellent} customer service skills. Last summer, I {volonteered|volunteered} at the library, where I helped {organisd|organised} the children's reading club.
I understand you must {recieve|receive} many applications, but I would be {gratefull|grateful} if you could confirm whether my application is still under {consideracion|consideration}.
I am available for an interview at your {conveniance|convenience}.
Thank you for your time.
Yours {sincerely|sinceerley},
Sarah Jones`
    },
    {
        id: 'p6-20',
        level: 'p6',
        style: 'review',
        title: 'Restaurant Review',
        passage: `Review: The Italian Garden Restaurant
Last Saturday, I visited The Italian Garden with my family to celebrate my {graduacion|graduation}.
Atmosphere: The restaurant has a warm, welcoming {atmosfere|atmosphere}. The décor is {ellegant|elegant} yet {comfertable|comfortable}.
Food: We ordered the chef's {spesial|special} pasta, which was {absolutley|absolutely} {delishus|delicious}. The ingredients were {clearley|clearly} fresh and high quality. The portions were {genorus|generous}.
Service: Our waiter was {profesional|professional} and {attentiv|attentive} without being intrusive. He made {exelent|excellent} {recomendations|recommendations}.
Value: Prices are {reasonabel|reasonable} considering the quality. Main courses range from £12-18.
Overall: I {higly|highly} {recomend|recommend} The Italian Garden. We'll {deffinately|definitely} return!
Rating: 4.5/5 stars`
    },
    {
        id: 'sec1-13',
        level: 'sec1',
        style: 'story',
        title: 'The Scientific Discovery',
        passage: `Professor Martinez examined the {microscopick|microscopic} sample with growing {exitement|excitement}. After months of research, she had finally {acheeved|achieved} a breakthrough.
The {bacterya|bacteria} had mutated in an {unexpectd|unexpected} way, developing {resistence|resistance} to the antibiotic. This was both {facinating|fascinating} and {worriing|worrying}.
She {imediatley|immediately} documented her findings, {photographing|photografing} the {specimin|specimen} from multiple angles. Her {coleagues|colleagues} would need to {verifie|verify} these results.
This discovery could have {profownd|profound} implications for medical science. It might {necessitate|necesitate} {developing|developping} entirely new treatments.
She reached for her phone to call the lab director, her hands {trembling|trembeling} with {anticipacion|anticipation}.`
    },
    {
        id: 'sec1-14',
        level: 'sec1',
        style: 'letter',
        title: 'University Application Letter',
        passage: `15 Willow Avenue
Bristol
BS1 3QR
1st October
Dear Admissions Tutor,
I am writing to apply for the {Bacheler|Bachelor} of Science in {Enviromental|Environmental} Studies at your university.
I have always been {passionately|passionatley} interested in {conservacion|conservation}. During my A-levels, I completed an {indipendent|independent} research project on local wildlife {populacions|populations}, which {recieved|received} high praise from my teachers.
I have also gained {practicle|practical} experience through {volentary|voluntary} work with the Wildlife Trust. This {experiance|experience} has {strengthend|strengthened} my {comitment|commitment} to pursuing a career in {enviromental|environmental} protection.
I am {particully|particularly} drawn to your {programme|programm} because of its emphasis on fieldwork and {sustainibility|sustainability}.
I would be {honered|honoured} to study at your {prestigous|prestigious} institution.
Yours faithfully,
James Wilson`
    },
    {
        id: 'sec1-15',
        level: 'sec1',
        style: 'report',
        title: 'Geography Fieldwork Report',
        passage: `Coastal Erosion Study: Brighton Beach
Aim: To investigate the rate and impact of coastal erosion at Brighton Beach.
Methodology: We measured beach width at five locations using tape measures and GPS {equipmant|equipment}. We compared our {measurments|measurements} with historical data from 2010 and 2015.
Results: Beach width has {decreeced|decreased} by an average of 3.2 metres since 2010. The {nothern|northern} section showed the most {significent|significant} erosion (4.7m), while the {southen|southern} section was {relativeley|relatively} stable (1.8m).
Analysis: The {diference|difference} in erosion rates is likely due to the {absense|absence} of {groynes|groines} in the northern section. Wave action has removed {sedimant|sediment} more rapidly in this area.
Conclusion: Without {intervension|intervention}, erosion will continue to {acselerate|accelerate}. We {recomend|recommend} installing additional coastal defences.`
    },
    {
        id: 'sec1-16',
        level: 'sec1',
        style: 'speech',
        title: 'Debate: School Uniforms',
        passage: `Chair, {oposing|opposing} team, and audience members, I stand before you to argue that school uniforms should be {abolishd|abolished}.
First, uniforms restrict personal {expresion|expression}. Teenagers are developing their {identitys|identities}, and clothing is an important way to express {individuallity|individuality}.
Second, uniforms are {financialy|financially} {burdensme|burdensome} for families. A complete uniform costs {aproximately|approximately} £150, which is a {significent|significant} expense for many households.
Third, there is no {conclusiv|conclusive} evidence that uniforms improve {academick|academic} performance or {behavour|behaviour}. Several studies have shown {neglijible|negligible} {diferences|differences} between schools with and without uniforms.
My opponents may argue that uniforms promote {equalaty|equality}, but this is a superficial solution to deeper social {inequalitys|inequalities}.
In conclusion, schools should trust students to dress {apropriatley|appropriately} without {imposeing|imposing} rigid uniform policies.`
    },
    {
        id: 'sec1-17',
        level: 'sec1',
        style: 'diary',
        title: 'Duke of Edinburgh Expedition',
        passage: `Day 2 of DofE Expedition - Thursday
Woke up at 6am feeling {absolutly|absolutely} exhausted. My sleeping bag was {inadiquate|inadequate} for the cold temperature – I barely slept.
After a {disapointing|disappointing} breakfast of porridge, we packed up camp and started walking. The terrain was {chalenjing|challenging}, with steep hills and {ocasional|occasional} boggy patches.
By midday, we'd covered 12 kilometres. My feet were covered in blisters, but I was {determind|determined} to continue. The {scenary|scenery} was {breathtaking|breathtakking} – rolling hills and {distent|distant} mountains.
We reached our second campsite at 4pm, {compleetly|completely} exhausted but {triumfant|triumphant}. Despite the {dificulties|difficulties}, I've learned so much about {perserverance|perseverance} and teamwork.
Tomorrow is the final day. I can't believe we've {acheived|achieved} this much already!`
    },
    {
        id: 'sec2-13',
        level: 'sec2',
        style: 'story',
        title: 'The Inheritance',
        passage: `When the solicitor finished reading the will, Marcus sat in stunned silence. His grandfather had left him the entire estate – {approximatley|approximately} £2 million.
"This is {extraordinery|extraordinary}," he {whisperd|whispered}. He'd expected perhaps a small bequest, but this was beyond his {wildist|wildest} imagination.
The solicitor {continewed|continued}: "There is, however, one condition. You must {sucessfully|successfully} manage the family business for five years before you can inherit the full amount."
Marcus felt {simultanious|simultaneous} excitement and {trepidation|trepadation}. He had no business experience. Could he {posibly|possibly} meet this {chalenging|challenging} requirement?
"I understand the {stipulacion|stipulation}," he said, trying to sound more {confident|confadent} than he felt. This would be the most {signifikant|significant} challenge of his life.`
    },
    {
        id: 'sec2-14',
        level: 'sec2',
        style: 'letter',
        title: 'Letter to MP',
        passage: `18 Churchill Road
Edinburgh
EH3 6LN
2nd November
Dear Ms Henderson MP,
I am writing to express my concern about the proposed {developement|development} of green belt land in our {constitency|constituency}.
The planned housing estate would {irrevocably|irrevokably} damage a {preshus|precious} wildlife {habutat|habitat}. Local {conservacionists|conservationists} have identified several {endangerd|endangered} species in the area, including the great crested newt.
Furthermore, the development would place {unacceptabel|unacceptable} strain on local {infastructure|infrastructure}. Our roads are already {congested|congestted}, and schools are operating at full {cappacity|capacity}.
I understand the {necesity|necessity} of providing housing, but this should not come at the expense of our {enviroment|environment}. There are {alternatif|alternative} brownfield sites that could be developed {insted|instead}.
I {urge|urg} you to {opose|oppose} this plan in Parliament and to {advocat|advocate} for more {sustainible|sustainable} development {strategys|strategies}.
I look forward to your response.
Yours sincerely,
Dr Eleanor Thompson`
    },
    {
        id: 'sec2-15',
        level: 'sec2',
        style: 'report',
        title: 'Psychology Study Report',
        passage: `The Effect of Sleep Deprivation on Cognitive Performance
Abstract: This study investigated the impact of sleep {depravation|deprivation} on {cognitiv|cognitive} function in adolescents.
Methodology: Forty {particapants|participants} aged 16-18 were divided into two groups. The {experamental|experimental} group was {restricked|restricted} to four hours sleep, while the control group had eight hours. All {particapants|participants} completed {cognative|cognitive} tests the following day.
Results: The sleep-deprived group showed {significantly|significently} impaired performance. {Reaction|Reacktion} times were 23% slower on average, and error rates {increaced|increased} by 34%. {Particulerly|Particularly} affected were tasks requiring {sustained|sustaned} attention.
Discussion: These findings {corroberate|corroborate} previous research {demonstraiting|demonstrating} the {critcal|critical} importance of {adeqate|adequate} sleep for {optimum|optimam} cognitive function.
Limitations: The sample size was {relativly|relatively} small, and the study only examined short-term effects.
Conclusion: {Adolecents|Adolescents} should be educated about the {deletereious|deleterious} effects of sleep {deprivacion|deprivation} on {acadamic|academic} performance.`
    },
    {
        id: 'sec2-16',
        level: 'sec2',
        style: 'speech',
        title: 'Graduation Speech',
        passage: `Headteacher, staff, parents, and fellow students,
As we stand here today, on the {precipis|precipice} of a new chapter, I want to reflect on the {extraordnary|extraordinary} journey we've shared.
We've faced {numerus|numerous} challenges over the past seven years. We've experienced {achademic|academic} pressures, personal struggles, and the {unpresedented|unprecedented} {disrupsion|disruption} of a global pandemic. Yet we have {persevered|perseverd}.
I want to {acknowledg|acknowledge} the {incredable|incredible} dedication of our teachers, who have shown {unyeilding|unwavering} {comitment|commitment} to our education. Their {influense|influence} extends far beyond the classroom.
To my fellow students: as we move forward, let us remember that success is not {mearly|merely} about {acheivements|achievements} and qualifications. It's about integrity, {compassion|compashion}, and the {courige|courage} to stand up for what's right.
We are {embarking|embarkking} on different paths, but we will always share this {foundacion|foundation}. Let us go forward with {confidance|confidence} and {determinacion|determination}.
Thank you, and {congratulacions|congratulations} to the Class of 2024!`
    },
    {
        id: 'sec2-17',
        level: 'sec2',
        style: 'review',
        title: 'Theatre Review',
        passage: `Review: Hamlet at the National Theatre
Last night's production of Hamlet was a {masterfull|masterful} {interpretacion|interpretation} of Shakespeare's tragic masterpiece.
Direction and Staging: Director Sarah Wilson has created a {minimalisst|minimalist} yet {powerfull|powerful} production. The stark staging focuses attention on the {psycological|psychological} drama, {alowing|allowing} the language to take centre stage.
Performance: James Morrison's portrayal of the {torcured|tortured} prince is {nuanced|nuansed} and {compeling|compelling}. His famous {soliloqy|soliloquy} "To be or not to be" was delivered with {remarkabel|remarkable} intensity and {vulnerabilty|vulnerability}.
Supporting Cast: The ensemble cast {deliverud|delivered} strong performances throughout. {Particullary|Particularly} {noteworthey|noteworthy} was Emma Chen's Ophelia, whose descent into madness was {harowing|harrowing} to witness.
Design: The {costum|costume} design {clevely|cleverly} blends contemporary and {traditonal|traditional} elements, creating a timeless quality.
Verdict: This is {esential|essential} viewing for Shakespeare {enthusiests|enthusiasts} and theatre lovers alike. A {triumfant|triumphant} production that {breathes|breaths} new life into a classic text.
Rating: 5/5 stars`
    }
,

    // Curriculum-focused exercises to reach 100+
    {
        id: 'p4-18',
        level: 'p4',
        style: 'instruction',
        title: 'How to Make a Bird Feeder',
        passage: `Making a bird feeder is easy and helps {wildlif|wildlife}!
You will need: a plastic bottle, string, scissors, and bird seed.
Ask an adult to cut two small holes {opposit|opposite} each other near the bottom of the bottle. Push a stick through both holes – this is where birds will perch.
Cut a larger hole above the stick so birds can reach the seed. Fill the bottle with seed and tie string around the top to hang it.
Hang your feeder in a {quiete|quiet} spot in your garden. Soon you'll see {diferent|different} birds visiting! Remember to refill it {regularley|regularly}.`
    },
    {
        id: 'p4-19',
        level: 'p4',
        style: 'news',
        title: 'School Wins Football Match',
        passage: `Oakfield Primary School's football team won an {exiting|exciting} match yesterday {afternon|afternoon}. They played against Riverside School and the final score was 3-2.
The match was very {closse|close} until the final {minuts|minutes}. Tom Davies scored the winning goal just before the whistle blew. Everyone {cheered|cheerred} loudly!
The team's coach, Mr Brown, said he was {extremley|extremely} proud of all the players. "They worked {togather|together} {brilliantley|brilliantly}," he said.
The team will play in the county finals next month. Good luck!`
    },
    {
        id: 'p4-20',
        level: 'p4',
        style: 'email',
        title: 'School Trip Permission',
        passage: `Dear Parents,
We are {planing|planning} a trip to the zoo on {Wensday|Wednesday} 15th May. We will leave school at 9am and return by 3pm.
The cost is £12 per child. This {includs|includes} transport and entry to the zoo. Please bring a packed lunch.
Children should wear {comfertable|comfortable} shoes and bring a waterproof coat in case it rains. Please {compleet|complete} the permission form and return it by Friday.
If you have any {questons|questions}, please contact the school office.
Best wishes,
Mrs Thompson
Year 4 Teacher`
    },
    {
        id: 'p5-20',
        level: 'p5',
        style: 'report',
        title: 'Roman Britain Project',
        passage: `The Roman {Invasian|Invasion} of Britain
The Romans first invaded Britain in 43 AD under {Emporer|Emperor} Claudius. They brought many changes to Britain including new roads, buildings, and towns.
Roman soldiers built {strate|straight} roads across the country so they could move {quickley|quickly}. Some of these roads are still used today! They also built {impressiv|impressive} forts and towns like Bath and Chester.
The Romans {introdused|introduced} new foods to Britain including apples, carrots, and peas. They also built the first {publik|public} baths where people could relax and meet friends.
Roman rule lasted for nearly 400 years. When they left in 410 AD, they had {permanantly|permanently} changed Britain.`
    },
    {
        id: 'p5-21',
        level: 'p5',
        style: 'story',
        title: 'The School Play',
        passage: `Maya stood backstage, her heart {pownding|pounding} with {nervusness|nervousness}. In five minutes, the curtain would rise and she would step onto the stage as the Wicked Witch.
She {peaked|peeked} through the curtain at the {audiance|audience}. The hall was {compleetly|completely} full! She spotted her mum and dad in the third row, smiling {encourajingly|encouragingly}.
"Places everyone!" called Miss Davies, the drama teacher. Maya took a deep breath and walked to her starting position.
The music began and the curtain slowly {opend|opened}. Maya forgot her nerves and {rememberd|remembered} all her lines {perfectley|perfectly}. When the show ended, everyone gave them a {standng|standing} ovation!`
    },
    {
        id: 'p6-21',
        level: 'p6',
        style: 'news',
        title: 'Student Wins Science Competition',
        passage: `Local Student's {Inventian|Invention} Wins National Prize
Twelve-year-old Sophie Chen from Greenfield School has won first prize in the Young Scientists {Competicion|Competition} for her {ingenius|ingenious} invention.
Sophie designed a device that converts {rainwatter|rainwater} into drinking water using simple, {afordable|affordable} materials. Her invention could help {comunities|communities} in developing countries access clean water.
The judges were {particularily|particularly} impressed by Sophie's {thorogh|thorough} research and clear {explanacion|explanation} of how the device works. "Sophie shows {remarkabel|remarkable} scientific thinking for someone so young," said Professor James Wilson.
Sophie will receive £500 and her invention will be displayed at the Science Museum. She hopes to study {enviromental|environmental} engineering at {universty|university}.`
    },
    {
        id: 'p6-22',
        level: 'p6',
        style: 'letter',
        title: 'Letter to Local Council',
        passage: `25 Oak Avenue
Bristol
BS7 4RT
Bristol City Council
Dear Sir or Madam,
I am writing on behalf of the students at Greenfield School to request better {cyclng|cycling} facilities in our area.
Many students would like to cycle to school, but the current roads are too {dangrous|dangerous}. There are no {propper|proper} cycle lanes and heavy traffic makes cycling {unsayf|unsafe}.
We believe that installing cycle lanes would {encourge|encourage} more students to cycle, which would reduce {polusion|pollution} and improve our health. It would also reduce {conjesion|congestion} around the school gates.
We hope you will consider our {sugestion|suggestion} {seriusly|seriously}. A safer cycling {enviroment|environment} would benefit the whole {comunity|community}.
Yours faithfully,
Emily Roberts
School Council Representative`
    },
    {
        id: 'sec1-18',
        level: 'sec1',
        style: 'report',
        title: 'Physics Experiment Report',
        passage: `Investigating Electrical {Resistence|Resistance}
Aim: To investigate how the length of wire affects electrical {resistence|resistance}.
Apparatus: Power supply, ammeter, voltmeter, {nichrome|nickrome} wire, metre ruler, connecting wires.
Method: We set up a simple circuit with the power supply, ammeter, and different lengths of wire. We {mesured|measured} the current and voltage for wires of 10cm, 20cm, 30cm, 40cm, and 50cm.
Results: As wire length {increaced|increased}, {resistence|resistance} also increased {proportionaly|proportionally}. The 50cm wire had five times more resistance than the 10cm wire.
{Analisys|Analysis}: The results show a clear {linearr|linear} relationship between length and resistance. This supports Ohm's Law.
Conclusion: Wire length {directley|directly} affects resistance. Longer wires have greater resistance because electrons must travel further and {experiance|experience} more {colisions|collisions} with atoms.`
    },
    {
        id: 'sec1-19',
        level: 'sec1',
        style: 'email',
        title: 'Scholarship Application',
        passage: `To: scholarships@musicacademy.org.uk
Subject: Application for Music {Scholership|Scholarship}
Dear Selection Committee,
I am writing to apply for the Junior Music {Scholership|Scholarship} at the Royal Academy of Music. I am 14 years old and have been playing the violin for eight years.
I am {pasionate|passionate} about classical music and dream of becoming a {profesional|professional} violinist. I currently hold Grade 7 with {distincion|distinction} and am working towards Grade 8. I also play in my school {orchestre|orchestra} as first violin.
Last year, I was selected to perform at the National Youth Music Festival, which was an {incredibal|incredible} {experiance|experience}. This {oportunity|opportunity} confirmed my {determenation|determination} to pursue music {profesionally|professionally}.
I am {comitted|committed} to practicing daily and am willing to work hard to develop my skills further. I would be {extremeley|extremely} grateful for the {oportunity|opportunity} to study at your {prestigous|prestigious} institution.
Thank you for considering my application.
Yours sincerely,
Alexander Novak`
    },
    {
        id: 'sec1-20',
        level: 'sec1',
        style: 'news',
        title: 'New Technology in Classrooms',
        passage: `Schools Embrace {Virtuel|Virtual} Reality Technology
Secondary schools across the UK are {introduceng|introducing} virtual reality (VR) headsets to enhance learning {experiances|experiences}.
The {technoligy|technology} allows students to explore {historicle|historical} sites, visit distant planets, and even travel inside the human body. Teachers report that VR makes lessons more {enganging|engaging} and helps students understand complex concepts.
At Riverside {Secondry|Secondary} School, students recently used VR to explore ancient Rome. "It was {amasing|amazing}," said Year 9 student Jake Thompson. "We walked through the {Coloseum|Colosseum} and saw how Romans actually lived."
However, some experts have raised concerns about the cost of the equipment and potential {distractions|distracktions}. Schools must ensure VR {complemants|complements} rather than {replaceing|replacing} {tradisional|traditional} teaching methods.
Despite these concerns, most educators believe VR represents an exciting {developement|development} in education.`
    },
    {
        id: 'sec2-18',
        level: 'sec2',
        style: 'report',
        title: 'Economics Essay Extract',
        passage: `The Impact of {Globalisation|Globalisacion} on Developing {Economys|Economies}
{Globalisation|Globalisacion} has had {profownd|profound} effects on developing nations, with both positive and negative {consequenses|consequences}. Proponents argue that increased international trade creates {oportunities|opportunities} for economic growth and {developement|development}.
Developing countries can access larger markets for their products, {atracting|attracting} foreign investment and creating employment {oportunities|opportunities}. {Multinasional|Multinational} corporations often establish {manufaturing|manufacturing} facilities in developing nations, bringing {technoligy|technology} transfer and skills development.
However, critics highlight {significent|significant} disadvantages. Local industries may struggle to compete with large {internasional|international} corporations, leading to job losses. {Additionaly|Additionally}, developing countries often become dependent on exporting raw materials rather than developing their own {manufaturing|manufacturing} sectors.
{Enviornmental|Environmental} concerns are also {signifigant|significant}. Developed nations sometimes relocate {poluting|polluting} industries to countries with weaker {enviornmental|environmental} regulations, causing {ecoligical|ecological} damage.
In conclusion, while {globalisation|globalisacion} offers {potencial|potential} benefits, developing nations must implement policies to ensure {sustainabel|sustainable} and {equitabel|equitable} growth.`
    },
    {
        id: 'sec2-19',
        level: 'sec2',
        style: 'letter',
        title: 'Job Application Letter',
        passage: `Apartment 14B
Manchester
M1 5JG
Human Resources Department
TechFuture Ltd
Dear Hiring Manager,
I am writing to apply for the position of Junior Software Developer advertised on your company website. I believe my {qualificatons|qualifications} and enthusiasm make me an ideal candidate.
I am currently studying Computer Science A-Level and am predicted an A* grade. I have developed strong programming skills in Python, Java, and JavaScript through both {acadamic|academic} study and {independant|independent} projects. Last year, I created a mobile app to help students organise their revision, which has been downloaded over 500 times.
I completed work {experiance|experience} at a software {developement|development} company last summer, where I assisted with testing and debugging. This {experiance|experience} gave me valuable insight into {profesional|professional} software {developement|development} practices and strengthened my {determenation|determination} to pursue this career.
I am {particulary|particularly} interested in your company's work on {artifisial|artificial} intelligence and machine learning. I have been following your recent projects with great interest and would be {honered|honoured} to {contribut|contribute} to your team.
I am {enthusiasic|enthusiastic}, hard-working, and eager to learn. I would welcome the {oportunity|opportunity} to discuss my application further.
Yours sincerely,
David Kumar`
    },
    {
        id: 'sec2-20',
        level: 'sec2',
        style: 'review',
        title: 'Film Review: Climate Documentary',
        passage: `Review: "Our Changing Planet" - A Wake-Up Call
This {powerfull|powerful} documentary examines the {acellerating|accelerating} pace of climate change and its {devastatng|devastating} impact on our planet.
Director Sarah Mitchell has created a {compeling|compelling} narrative that combines stunning {cinemtography|cinematography} with {scientifik|scientific} evidence. The film takes viewers from melting Arctic glaciers to {defore|deforested} rainforests, {demonstraiting|demonstrating} the global scale of {enviornmental|environmental} {degradacion|degradation}.
{Particulary|Particularly} {efective|effective} are the interviews with climate scientists who explain complex {fenomena|phenomena} in {acessible|accessible} terms. The documentary doesn't {shy|shigh} away from presenting {uncomfertable|uncomfortable} truths about our {colective|collective} {responsability|responsibility}.
However, the film avoids being entirely {pesimistic|pessimistic}. The final section showcases {innovativ|innovative} solutions and {grassrots|grassroots} movements working to combat climate change. This balance between {raisng|raising} awareness and offering hope makes the documentary both {informativ|informative} and {inspirasional|inspirational}.
Minor weaknesses include {ocasional|occasional} repetition of key points and a {relativly|relatively} brief exploration of {economik|economic} factors.
Overall: An {esential|essential} viewing {experiance|experience} that should be shown in every classroom. {Highly|Highley} recommended.
Rating: 5/5 stars`
    },

    // Additional P4 exercises (Ages 10)
    {
        id: 'p4-21',
        level: 'p4',
        style: 'recipe',
        title: 'Banana Smoothie Recipe',
        passage: `Yummy Banana Smoothie
This {delishus|delicious} smoothie is {helthy|healthy} and easy to make!
You will need: 2 bananas, 1 cup of milk, 2 {spoonsful|spoonfuls} of honey, and 3 ice cubes.
First, peel the bananas and put them in a blender. Add the milk, honey, and ice cubes. Ask an adult to help you blend {evrything|everything} until it's smooth and {creemy|creamy}.
Pour into a glass and enjoy {imediatly|immediately}! You can add {strawberrys|strawberries} or blueberries for extra {flaver|flavour}.
This smoothie is {perfekt|perfect} for {brekfast|breakfast} or a snack after school.`
    },
    {
        id: 'p4-22',
        level: 'p4',
        style: 'diary',
        title: 'First Day at Swimming Lessons',
        passage: `Dear Diary,
Today was my first {swiming|swimming} lesson and I was really {nervus|nervous}! We had to jump into the deep end and I was {scaird|scared}.
The instructor, Emma, was very {nise|nice} and {pashent|patient}. She showed us how to float on our backs. At first I kept {sinking|sinkking}, but then I got the hang of it!
We also {lerned|learned} how to do front crawl. My arms got {tierd|tired} but I didn't give up. Emma said I did {realy|really} well for my first lesson.
I can't wait for next week. Maybe I'll be brave {enuf|enough} to dive in! Swimming is more fun than I {thort|thought} it would be.`
    },
    {
        id: 'p4-23',
        level: 'p4',
        style: 'advertisement',
        title: 'Toy Shop Advertisement',
        passage: `SUPER TOY SHOP - SALE NOW ON!
Come and visit our {amasing|amazing} toy shop this weekend! We have {hundreds|hunreds} of toys at {incredibel|incredible} prices.
New arrivals: Remote control cars, {cuddley|cuddly} teddy bears, building blocks, and board games for all the {familly|family}!
{Speshul|Special} offer: Buy two toys and get the {cheapist|cheapest} one half price! This offer is only {avalable|available} this {Saterday|Saturday} and Sunday.
Don't miss out on these {fantastick|fantastic} bargains! Visit us at 25 High Street. Open from 9am to 5pm.
Your children will {absalutly|absolutely} love our {selecton|selection}!`
    },
    {
        id: 'p4-24',
        level: 'p4',
        style: 'blog',
        title: 'My First Blog Post',
        passage: `Welcome to My Blog!
Hi everyone! This is my first blog post and I'm really {exited|excited} to share my {thoghts|thoughts} with you.
I'm going to write about my {hobbys|hobbies}, which include drawing, reading, and playing football. I might also write about {intresting|interesting} things that happen at school.
Yesterday, {somthing|something} funny happened in art class. I {accidentaly|accidentally} knocked over a pot of paint and it went {evrywhere|everywhere}! My teacher wasn't angry though - she just laughed and helped me clean up.
I'm hoping to post on my blog every week. Please leave comments and tell me what you'd like me to write about. I {promis|promise} to read {evryone|everyone}'s suggestions!
Thanks for reading!`
    },
    {
        id: 'p4-25',
        level: 'p4',
        style: 'dialogue',
        title: 'Playground Conversation',
        passage: `"Did you finish the {homwork|homework}?" asked Sarah.
"Not yet," replied Tom. "I found the maths {questons|questions} really {dificult|difficult}."
"Me too! {Especally|Especially} the last three. Do you want to work {togather|together} after school?"
"That's a {briliant|brilliant} idea," said Tom. "We could meet in the {libary|library}."
Sarah smiled. "Great! I'll bring my {caculator|calculator} and we can help each other."
"Thanks, Sarah. You're a really good {frend|friend}," said Tom {gratefuly|gratefully}.
"No problem! That's what friends are for. We should {probly|probably} ask the teacher to explain it {tomorow|tomorrow} too."`
    },
    {
        id: 'p4-26',
        level: 'p4',
        style: 'story',
        title: 'The Lost Kitten',
        passage: `One {rainy|rainie} afternoon, Emma heard a {weerd|weird} noise coming from the garden shed. She walked {carefuly|carefully} towards it and opened the door.
Inside, she found a tiny kitten, soaking wet and {shivvering|shivering}. "You poor thing!" she {wisperd|whispered}. The kitten looked at her with big, sad eyes.
Emma {gentley|gently} picked up the kitten and wrapped it in a warm towel. She carried it inside and showed her mum. "Can we keep it?" she asked {hopfully|hopefully}.
Her mum smiled. "First, we need to check if anyone has lost a kitten. We'll put up posters {tomorow|tomorrow}."
Nobody claimed the kitten, so Emma got to keep her new pet. She named her Misty and they became the best of {frends|friends}.`
    },
    {
        id: 'p4-27',
        level: 'p4',
        style: 'letter',
        title: 'Thank You Letter to Grandma',
        passage: `Dear Grandma,
Thank you so much for the {lovley|lovely} birthday present! The art set is {exacly|exactly} what I wanted. I've already used the paints to make a {picher|picture} of our garden.
I had a {wonderfull|wonderful} birthday party. We played games in the park and had a {piknik|picnic}. Mum made my {favorit|favourite} chocolate cake.
I miss you lots and can't wait to visit you during the {hollidays|holidays}. Maybe I can bring my new art set and we can paint {togather|together}?
Thank you again for being such a {speshul|special} grandma.
Lots of love,
Lucy`
    },
    {
        id: 'p4-28',
        level: 'p4',
        style: 'instruction',
        title: 'How to Care for a Pet Hamster',
        passage: `Looking After Your Hamster
Hamsters make {wonderfull|wonderful} pets but need {propper|proper} care. Here's what you need to know.
Housing: Your hamster needs a large cage with plenty of space to run around. Add a {excersize|exercise} wheel and some toys. Clean the cage {weekley|weekly} to keep your hamster {helthy|healthy}.
Food: Give your hamster special hamster food every day. They also enjoy {carrits|carrots}, {apples|appels}, and {brokoli|broccoli}. Make sure they always have fresh water.
Handling: Be {gentl|gentle} when you pick up your hamster. Never wake them {suddnly|suddenly} as they might bite. Let them get used to your {sent|scent} first.
{Exersize|Exercise}: Let your hamster out to play in a safe area every day. Make sure there are no {dangrous|dangerous} gaps they could escape through!`
    },
    {
        id: 'p4-29',
        level: 'p4',
        style: 'news',
        title: 'School Garden Project Success',
        passage: `Oakwood Primary's Garden Blooms with Success
Students at Oakwood Primary School are celebrating the success of their {gardning|gardening} project. The school garden, planted last spring, has produced {beautifull|beautiful} flowers and fresh {vegitables|vegetables}.
Year 4 students worked {incredibbly|incredibly} hard, planting seeds and watering the garden every day. They grew tomatoes, lettuce, and {strawberrys|strawberries}.
"It's been {amasing|amazing} to watch {evrything|everything} grow," said teacher Mrs Wilson. "The children have {lerned|learned} so much about nature and {patiense|patience}."
The school plans to use the {vegitables|vegetables} in the {dinnng|dining} hall. They hope to expand the garden next year to grow even more {varitys|varieties}.`
    },

    // Additional P5 exercises (Ages 11)
    {
        id: 'p5-22',
        level: 'p5',
        style: 'advertisement',
        title: 'Summer Camp Advertisement',
        passage: `ADVENTURE SUMMER CAMP - Book Now!
Give your child an {unforgetable|unforgettable} summer {experiance|experience}! Our action-packed camp offers {excitng|exciting} activities for ages 8-14.
Activities include: Rock climbing, {kayakking|kayaking}, archery, nature walks, and team-building games. All activities are {supervized|supervised} by {qualifyed|qualified} instructors.
{Acommodation|Accommodation}: {Comfertable|Comfortable} cabins with all modern {facilitys|facilities}. Delicious, {nutrishus|nutritious} meals provided daily.
Dates: 15th July - 29th July ({fortnite|fortnight})
Cost: £650 per child ({includs|includes} all activities, {acommodation|accommodation}, and meals)
Early bird discount: Book before 1st June and save {fifety|fifty} pounds!
Don't let your child miss this {incredibel|incredible} {oportunity|opportunity} to make new friends and try new adventures. Spaces are {limitid|limited} - book today!
Call 01234 567890 or visit www.adventurecamp.co.uk`
    },
    {
        id: 'p5-23',
        level: 'p5',
        style: 'diary',
        title: 'School Trip to the Museum',
        passage: `Dear Diary,
Today was {absalutely|absolutely} brilliant! We went on a school trip to the Natural History Museum and I saw the most {amasing|amazing} things.
The dinosaur {exibit|exhibit} was {incredibel|incredible}. There was a {gigantick|gigantic} T-Rex skeleton that was {towring|towering} above us. Our guide explained how {paleontolojists|paleontologists} dig up fossils and piece them {togather|together} like a {misterious|mysterious} puzzle.
We also visited the earthquake {simulater|simulator}. It was quite {scairy|scary} but really {intresting|interesting}. I never {realiced|realised} how {powerfull|powerful} earthquakes could be.
My {favorit|favourite} part was the mineral section. The crystals were so {beautifull|beautiful} and sparkly. I bought a small amethyst from the gift shop to {rember|remember} the day.
I'm {definatly|definitely} going to become a scientist when I grow up!`
    },
    {
        id: 'p5-24',
        level: 'p5',
        style: 'blog',
        title: 'Book Review Blog',
        passage: `My Latest Read: "The Secret Island"
Hi book lovers! Today I'm reviewing "The Secret Island" by Enid Blyton, which I {finaly|finally} finished last night.
The story follows four children who run away to a {mysterius|mysterious} island to escape their horrible aunt. They build a shelter, catch fish, and have the most {amazng|amazing} adventures.
What I loved: The {descripsions|descriptions} of island life were so {vivid|vived} that I felt like I was there with them. The characters were really {likabel|likeable} and brave. I {especialy|especially} liked Jack, who was {extremly|extremely} clever at solving problems.
What could be better: Sometimes the story moved a bit slowly. There were a few chapters that were less {exiting|exciting} than others.
Overall rating: 4 out of 5 stars
I'd {recomend|recommend} this book to anyone who loves adventure stories. It's {perfekt|perfect} for {leasurely|leisurely} reading during the holidays.
Have you read this book? Let me know your {thoghts|thoughts} in the comments!`
    },
    {
        id: 'p5-25',
        level: 'p5',
        style: 'speech',
        title: 'Class President Speech',
        passage: `Good morning everyone,
My name is Aisha and I'm running for Class President. I {belive|believe} I would make an {excelent|excellent} representative for our year group.
Firstly, I'm a good listener. I want to hear your ideas and {sugestions|suggestions} about how we can improve our school {enviroment|environment}. Every voice {maters|matters}!
Secondly, I'm organised and {responsibel|responsible}. Last year, I {sucessfully|successfully} coordinated the charity bake sale which raised over £200 for the local animal shelter.
If elected, I {promis|promise} to work hard on three main goals: {improvng|improving} our library {facilitys|facilities}, organizing more sports events, and arranging fun {charitey|charity} fundraisers.
I'm {passionet|passionate} about making our school the best it can be. Together, we can achieve great things. Please vote for me and let's make this year {unforgetable|unforgettable}!
Thank you for your time and {considaration|consideration}.`
    },
    {
        id: 'p5-26',
        level: 'p5',
        style: 'email',
        title: 'Email to Penpal',
        passage: `To: maria@email.es
From: tom@email.co.uk
Subject: Hello from England!
Hi Maria,
Thank you for your email! It's so {exiting|exciting} to have a penpal from Spain. Let me tell you about myself.
I live in a small town called Henley. It's very {peacefull|peaceful} here. We have a {beautifull|beautiful} river where people go rowing. My {favorit|favourite} thing to do is cycle along the river path with my friends.
At school, I'm studying Spanish, which is why I wanted a Spanish penpal! I find it quite {chalenging|challenging} but my teacher says I'm making good {progres|progress}. Maybe you could help me practice?
I'm also really into football. My {favrite|favourite} team is Manchester United. Do you like football? Who do you support?
I'm {realy|really} {curios|curious} about life in Spain. What's your school like? What do you do in your free time? What's your {favorit|favourite} Spanish food? I've tried paella and thought it was {absalutely|absolutely} {delishus|delicious}!
Please write back soon and tell me more about yourself. Maybe one day we could visit each other's countries!
Best wishes,
Tom`
    },
    {
        id: 'p5-27',
        level: 'p5',
        style: 'recipe',
        title: 'Easy Pasta Bake',
        passage: `Simple Tomato Pasta Bake
This {delishus|delicious} pasta bake is {perfekt|perfect} for {beginnrs|beginners}!
Ingredients: 300g pasta, 1 jar tomato sauce, 200g cheese (grated), 1 onion, 2 cloves garlic, mixed herbs.
Method:
Cook the pasta {acordng|according} to packet {instrucktions|instructions}. While the pasta cooks, chop the onion and garlic {fineley|finely}.
Ask an adult to help you fry the onion and garlic until soft. Add the tomato sauce and herbs, then {simmr|simmer} for 5 minutes.
Drain the pasta and mix it with the sauce. Pour {evrything|everything} into an oven-proof dish. Sprinkle cheese {genrusly|generously} on top.
Bake at 180°C for 20 minutes until the cheese is melted and {goldun|golden}. Leave it to cool {slitely|slightly} before serving.
This recipe serves 4 people and is {guarenteed|guaranteed} to be a family {favorit|favourite}!`
    },
    {
        id: 'p5-28',
        level: 'p5',
        style: 'dialogue',
        title: 'Science Class Discussion',
        passage: `"Today we're learning about the solar system," announced Mr Davies {enthusiastically|enthusiasticaly}.
"Sir, how many planets are there?" asked Mia.
"That's an {excelent|excellent} question," he replied. "There are eight planets. Can anyone name them?"
Jake raised his hand. "Mercury, Venus, Earth, Mars, Jupiter, Saturn, {Uranas|Uranus}, and Neptune. Pluto used to be a planet but it's too small now."
"{Precisley|Precisely}!" said Mr Davies. "Scientists {reclassifyed|reclassified} Pluto as a dwarf planet in 2006."
"Which planet is the {bigest|biggest}?" asked Lily.
"Jupiter is the largest planet. It's so {enormus|enormous} that over 1,000 Earths could fit inside it!" Mr Davies {explaned|explained}.
The class gasped. "That's {incredibel|incredible}!" said Mia. "Space is {absalutely|absolutely} {fasinating|fascinating}."`
    },
    {
        id: 'p5-29',
        level: 'p5',
        style: 'literary',
        title: 'Autumn Description',
        passage: `Autumn's Arrival
The leaves had begun their {magnificant|magnificent} {transformacion|transformation}, painting the {forrest|forest} in shades of amber, crimson, and gold. A crisp breeze rustled through the branches, carrying the {earthy|earfy} scent of fallen leaves.
Sarah walked slowly along the {familar|familiar} path, her boots crunching on the carpet of dried leaves beneath her feet. The morning mist clung to the ground like a {wisperd|whispered} secret, {graduly|gradually} lifting as the sun climbed higher.
In the distance, she could hear the {ocasional|occasional} call of a crow and the gentle rustling of a squirrel {busyly|busily} {gatherng|gathering} acorns for winter. The whole {forrest|forest} seemed to be {prepairng|preparing} for the cold months ahead.
This was her {favorit|favourite} time of year - when nature displayed its most {spectaculer|spectacular} colours before the winter's sleep. She breathed deeply, trying to capture this {perfekt|perfect} moment in her memory forever.`
    },
    {
        id: 'p5-30',
        level: 'p5',
        style: 'interview',
        title: 'Interview with Local Firefighter',
        passage: `School Newspaper Interviews Fire Chief
Reporter: Thank you for talking to us today, Chief Williams. What made you want to become a firefighter?
Chief Williams: I've always wanted to help people. Being a firefighter is {chalenging|challenging} but {incredibbly|incredibly} {rewardng|rewarding}.
Reporter: What's a {tipical|typical} day like at the fire station?
Chief Williams: We train {regularley|regularly} to stay fit and practice our skills. We also check all our {equiptment|equipment} {thoroughley|thoroughly} every day. When the alarm sounds, we must be ready to {responde|respond} {imediatly|immediately}.
Reporter: What's the most {dificult|difficult} part of your job?
Chief Williams: {Probly|Probably} the {unpredictabel|unpredictable} nature of the work. We never know what {emergancy|emergency} we'll face next. It {requirs|requires} {consant|constant} focus and bravery.
Reporter: What advice would you give young people interested in this career?
Chief Williams: Stay fit, study hard, and {practiss|practise} teamwork. Firefighters must work {togather|together} {perfectley|perfectly}. It's a {wonderfull|wonderful} career if you're {comitted|committed} to serving your {comunity|community}.`
    },

    // Additional P6 exercises (Ages 12)
    {
        id: 'p6-23',
        level: 'p6',
        style: 'blog',
        title: 'Photography Blog',
        passage: `Capturing the Perfect Sunset
Hello photography {enthusiests|enthusiasts}! Today I want to share my tips for {photographing|photografing} sunsets.
Timing is {cruciel|crucial}. The best light {occures|occurs} during the "golden hour" - about an hour before sunset. The sun is lower in the sky, creating {warmr|warmer}, softer light that's {absolutley|absolutely} {perfekt|perfect} for photos.
{Composicion|Composition} matters too. Try using the rule of thirds - imagine your photo divided into nine equal sections. Place the horizon on one of the {horiszontal|horizontal} lines rather than in the centre. This creates a more {intresting|interesting} image.
Don't forget to experiment with {silouettes|silhouettes}! Position a tree or building {aginst|against} the colourful sky for dramatic effect.
Camera settings: If you're using a {professionel|professional} camera, try a low ISO (100-200) to reduce noise. Use a small {aperchure|aperture} (f/11 or higher) to keep {evrything|everything} sharp.
Finally, be patient. The colours change {rapidley|rapidly}, so take lots of shots. The most {spectaculer|spectacular} colours often appear just after the sun has {dissapeared|disappeared} below the horizon.
Happy {photographing|photografing}!`
    },
    {
        id: 'p6-24',
        level: 'p6',
        style: 'diary',
        title: 'School Production Diary',
        passage: `Friday, 8th March
Opening night of our school production of "Oliver!" and I'm {incredibbly|incredibly} nervous! I'm playing Nancy and have been {reheersing|rehearsing} for months.
Got to the theatre early to help with final {preparacions|preparations}. The set looks {amasing|amazing} - the art department has done a {fantasick|fantastic} job creating Victorian London. The costumes are {equally|equaly} {impressiv|impressive}.
During the final {rehersal|rehearsal}, I {accidentaly|accidentally} forgot my lines in Act 2. My heart {practicaly|practically} stopped! But thankfully it came back to me and I didn't make the same mistake during the actual {performence|performance}.
The show was {absalutely|absolutely} {brillant|brilliant}! The {audiance|audience} gave us a standing ovation. When I sang "As Long As He Needs Me," I could see people in the front row wiping their eyes. That made me feel so proud.
After the show, we celebrated with pizza and {lemonaid|lemonade}. Mrs Harrison, our drama teacher, said we'd {exeeded|exceeded} all her {expectacions|expectations}. I'm {exhaustid|exhausted} but so happy. This has been the most {memorabel|memorable} {experiance|experience} of my school life!`
    },
    {
        id: 'p6-25',
        level: 'p6',
        style: 'speech',
        title: 'Environmental Assembly Speech',
        passage: `Good morning everyone,
Today I want to talk about an urgent issue: plastic {polusion|pollution} in our oceans. This is one of the most {serius|serious} {enviornmental|environmental} {chalenges|challenges} facing our planet.
Every year, over 8 million tonnes of plastic enter our oceans. This has {devastaing|devastating} effects on marine life. Sea turtles mistake plastic bags for jellyfish. Birds feed plastic to their chicks. Fish {accidentaly|accidentally} swallow {mikroskopic|microscopic} plastic particles.
But we can make a {diferance|difference}! Here are three simple actions we can take:
Firstly, reduce single-use plastics. Bring a {reusabel|reusable} water bottle to school instead of buying plastic bottles. Use {clothe|cloth} bags instead of plastic ones.
Secondly, {recicle|recycle} properly. Make sure you put plastic {waist|waste} in the correct bin. Even better, {upcicle|upcycle} old containers into plant pots or storage.
Thirdly, spread {awarness|awareness}. Talk to your family and friends about this issue. Small changes, when made by millions of people, have {enormus|enormous} impact.
The ocean's future is in our hands. Let's work {togather|together} to protect it. Remember: every action, no matter how small, makes a {diferance|difference}.
Thank you.`
    },
    {
        id: 'p6-26',
        level: 'p6',
        style: 'advertisement',
        title: 'Tutoring Service Advertisement',
        passage: `EXCEL TUTORING SERVICES
Struggling with maths or science? We can help!
Our {experinced|experienced} tutors have helped {hundredds|hundreds} of students achieve their {academick|academic} goals. We {specialice|specialise} in GCSE preparation and offer {personelised|personalised} learning plans tailored to each student's needs.
Subjects {avalable|available}: Maths, Physics, Chemistry, Biology
All our tutors are {qualifyed|qualified} teachers with {extensiv|extensive} classroom {experiance|experience}. We use proven teaching {metheds|methods} and provide regular progress reports to parents.
{Fleksible|Flexible} scheduling: Evening and weekend sessions {availabel|available}
Locations: In-person tutoring at our {comfertable|comfortable} learning centre or online via video call
Prices: £35 per hour (discounts {avalable|available} for block bookings)
First session {absolutley|absolutely} FREE!
Don't let {dificult|difficult} subjects hold your child back. Our tutors make learning {enjoyabel|enjoyable} and build {confidance|confidence}.
Contact us today: Call 0800 123 4567 or email info@exceltutoring.co.uk
Limited spaces {availabel|available} - book now to {guarentee|guarantee} your preferred time slot!`
    },
    {
        id: 'p6-27',
        level: 'p6',
        style: 'report',
        title: 'Geography Project: Rainforests',
        passage: `The Amazon Rainforest: An Ecosystem Under Threat
{Introduccion|Introduction}
The Amazon rainforest is the world's largest tropical rainforest, covering {aproximatly|approximately} 5.5 million square {kilometerrs|kilometres}. It plays a {cruciel|crucial} role in {regulatng|regulating} Earth's climate and is home to {incredibel|incredible} {biodiversaty|biodiversity}.
Location and Climate
The rainforest spans nine countries in South America, with the {majoraty|majority} located in Brazil. The climate is hot and humid year-round, with {avrege|average} {tempertures|temperatures} of 27°C and annual rainfall {exceding|exceeding} 2,000mm.
{Biodiversaty|Biodiversity}
The Amazon contains {aproximately|approximately} 10% of all species on Earth. Scientists have {identifyed|identified} over 40,000 plant species, 1,300 bird species, and 3,000 types of fish. Many species are {yoonique|unique} to this {enviornment|environment} and cannot be found {elswhere|elsewhere}.
Threats
{Unfortunatley|Unfortunately}, the rainforest faces {serius|serious} threats. {Deforestacion|Deforestation} caused by logging, farming, and mining has {destroied|destroyed} large areas. Scientists estimate that 17% of the original forest has been lost.
{Concluson|Conclusion}
Protecting the Amazon is {esential|essential} for our planet's future. We must support {conservacion|conservation} efforts and {sustainabel|sustainable} practices to preserve this vital {ecosistem|ecosystem}.`
    },
    {
        id: 'p6-28',
        level: 'p6',
        style: 'literary',
        title: 'Creative Writing: The Storm',
        passage: `The storm arrived without warning, transforming the {peacefull|peaceful} afternoon into something far more {sinnister|sinister}. Dark clouds gathered {rapidley|rapidly} overhead, {swollowing|swallowing} the sunlight and casting {eerie|eery} shadows across the landscape.
Thunder rumbled in the distance, a low, {menasing|menacing} growl that sent shivers down my spine. The wind picked up, {howlng|howling} through the trees like a wounded animal. Leaves swirled in {frantick|frantic} circles, caught in the storm's {relentles|relentless} grip.
Then came the rain. Not the gentle {pater|patter} of a summer shower, but a {torremshal|torrential} downpour that hammered against the windows with {startlng|startling} {ferocaty|ferocity}. Lightning split the sky, {iluminating|illuminating} the garden in brief, {brilliant|brillant} flashes.
I stood at the window, both {terrifyed|terrified} and {mesmorized|mesmerised} by nature's raw power. The storm was {magnificant|magnificent} in its fury, a {remindor|reminder} that despite all our {technolojy|technology} and progress, we remain at the mercy of forces far greater than ourselves.
As {quickley|quickly} as it had arrived, the storm began to fade. The thunder grew more distant, the rain {lessend|lessened} to a gentle drizzle. Peace was {gradualy|gradually} restored.`
    },
    {
        id: 'p6-29',
        level: 'p6',
        style: 'dialogue',
        title: 'Career Advice Conversation',
        passage: `"Miss Johnson, can I ask you about careers?" said Alex {nervusly|nervously}.
"Of course! What would you like to know?" replied the careers adviser with an {encuraging|encouraging} smile.
"I'm interested in marine biology, but I don't know if I'm good enough at science. Is it really {dificult|difficult}?"
"Marine biology is {chalenging|challenging}, but if you're {pasionet|passionate} about it, you can {absolutley|absolutely} succeed. What {particuler|particular} aspect interests you?"
Alex's eyes lit up. "I'm {fasinated|fascinated} by coral reefs and how they're being {afected|affected} by climate change. I want to help protect them."
"That's {wonderfull|wonderful}!" Miss Johnson {exclaimed|exclamed}. "You'll need strong {qualificacions|qualifications} in biology and chemistry. Have you considered {volantearing|volunteering} at the local {aquariom|aquarium}?"
"I didn't know that was {posible|possible}!" said Alex {excitedley|excitedly}.
"Yes, getting {praktical|practical} {experiance|experience} is {extremeley|extremely} valuable. It shows {comitment|commitment} and helps you understand if this career is right for you. I can give you the contact details."
"Thank you so much, Miss Johnson. You've been really {helpfull|helpful}."
"You're welcome, Alex. Follow your dreams - marine biology needs {enthusiastick|enthusiastic} people like you!"`
    },
    {
        id: 'p6-30',
        level: 'p6',
        style: 'email',
        title: 'Email to Local Newspaper',
        passage: `To: editor@localnews.co.uk
From: student.council@greenfield.sch.uk
Subject: Youth Voices Need to Be Heard
Dear Editor,
I am writing on behalf of Greenfield School Student Council to express our {conserns|concerns} about the proposed closure of our local youth centre.
The youth centre provides {essenshal|essential} services to young people in our {comunity|community}. It offers a safe space where teenagers can meet, {sosialise|socialise}, and {particpate|participate} in {constructiv|constructive} activities. The centre runs homework clubs, sports programmes, and art workshops that have had a {tremendus|tremendous} positive impact.
Many students from {disadvantaged|disadvataged} backgrounds rely on these free services. Without the youth centre, they will have nowhere to go after school. This could lead to increased anti-social {behavour|behaviour} and social isolation.
We {urjently|urgently} appeal to the local council to {reconsidder|reconsider} this decision. Young people deserve to have their voices heard on issues that {directley|directly} affect them. We are the future of this {comunity|community} and should be {consulted|consultted} about such {signifikant|significant} changes.
We would be {gratefull|grateful} if you could publish this letter to raise {awarness|awareness} of this important issue.
Yours {sincearly|sincerely},
James Peterson
Student Council President, Greenfield School`
    },
    {
        id: 'p6-31',
        level: 'p6',
        style: 'recipe',
        title: 'Vegetarian Curry Recipe',
        passage: `Delicious Vegetable Curry
This {flaverful|flavourful} curry is {perfekt|perfect} for {vegitarians|vegetarians} and easy to make!
Ingredients: 2 onions, 3 cloves garlic, 1 {tablespoon|tablespone} curry powder, 1 can chopped tomatoes, 1 can {chikpeas|chickpeas}, 2 {carrits|carrots}, 1 {corget|courgette}, {coconut|cocunut} milk, rice.
Method: Chop all {vegitables|vegetables} into {simillar|similar}-sized pieces. Heat oil in a large pan and fry the onions until {translusent|translucent}. Add the garlic and curry powder, stirring for one minute until {fragrent|fragrant}.
Add the {carrits|carrots} and cook for 5 minutes, then add the {corget|courgette}, tomatoes, and {chikpeas|chickpeas}. Pour in the {coconut|cocunut} milk and {simmr|simmer} for 20 minutes until {vegitables|vegetables} are tender.
{Simultaneusly|Simultaneously}, cook the rice {acordng|according} to packet {instrucktions|instructions}.
Season with salt and {peper|pepper}. Serve the curry over rice and garnish with fresh {coriandor|coriander}.
This recipe is {nutricious|nutritious}, {delishus|delicious}, and {guarenteed|guaranteed} to {satisfie|satisfy} even meat-lovers!`
    },
    {
        id: 'p6-32',
        level: 'p6',
        style: 'interview',
        title: 'Interview with Author',
        passage: `School Magazine Interviews Children's Author
Reporter: Thank you for visiting our school, Ms Parker. What inspired you to become a writer?
Ms Parker: I've always been {fasinated|fascinated} by stories. As a child, I read {voraciously|voratiously} and {imagind|imagined} creating my own worlds. Writing seemed like the most {wonderfull|wonderful} career {posible|possible}.
Reporter: Where do you get your ideas?
Ms Parker: Ideas come from {evrywhere|everywhere}! Sometimes from {conversacions|conversations} I overhear, sometimes from dreams. My latest book was inspired by a {mysterius|mysterious} old house I saw while walking my dog. I {imediatly|immediately} started {imaginng|imagining} who might live there.
Reporter: What's the most {chalenging|challenging} part of writing?
Ms Parker: {Definately|Definitely} the editing process. The first draft is {exiting|exciting} - you're creating {somthing|something} new. But then you must {revize|revise} it {repeatedley|repeatedly}, fixing errors and improving the story. It {requirs|requires} {patiense|patience} and {perserverance|perseverance}.
Reporter: What advice would you give young {aspiring|aspirng} writers?
Ms Parker: Read as much as {posible|possible}! Reading widely helps you understand different writing styles. Also, don't be {discuraged|discouraged} by rejection. Every successful author has faced {setbaks|setbacks}. Keep writing, keep improving, and {belive|believe} in your stories.
Reporter: Thank you for your time and {inspiracion|inspiration}!`
    },

    // Additional SEC1 exercises (Ages 13-14)
    {
        id: 'sec1-21',
        level: 'sec1',
        style: 'blog',
        title: 'Mental Health Awareness Blog',
        passage: `Breaking the Stigma: Teen Mental Health Matters
Mental health is just as important as {fizical|physical} health, yet many teenagers struggle in silence due to stigma and {missunderstanding|misunderstanding}.
The {statistiks|statistics} are alarming: approximately one in six young people {experiances|experiences} a mental health problem. Anxiety and depression are {increacingly|increasingly} common, often triggered by academic {presure|pressure}, social media, and the challenges of adolescence.
So why don't more teens seek help? The answer is {complecated|complicated}. Many fear being judged or {labled|labelled}. Some worry they'll be seen as weak or {atention|attention}-seeking. Others simply don't {reconize|recognise} that what they're {experiancng|experiencing} isn't normal.
It's {cruciel|crucial} that we change this narrative. {Strugglng|Struggling} with mental health doesn't make you weak - it makes you human. {Seeking|Seekng} help is actually {incredibley|incredibly} brave.
If you're {worrid|worried} about your mental health, talk to someone you trust - a parent, teacher, or school counsellor. {Professionel|Professional} support is {avalable|available} through organizations like Childline and YoungMinds.
Remember: it's okay not to be okay. {Raching|Reaching} out is the first step towards feeling better. You're not alone, and you deserve support.
Let's break the stigma {togather|together}.`
    },
    {
        id: 'sec1-22',
        level: 'sec1',
        style: 'advertisement',
        title: 'Coding Bootcamp Advertisement',
        passage: `FUTURE CODERS BOOTCAMP - Transform Your Skills!
Are you {intrested|interested} in {technolojy|technology}? Want to learn skills that will shape your future career? Join our {intensiv|intensive} coding bootcamp for teenagers!
What You'll Learn:
- Python programming {fundamentels|fundamentals}
- Web {developement|development} (HTML, CSS, JavaScript)
- Mobile app creation
- {Artificiel|Artificial} intelligence basics
- {Cybersecurit|Cybersecurity} {essenshals|essentials}
Our {experinced|experienced} instructors are {professionel|professional} developers who make learning {enjoyabel|enjoyable} and {acessible|accessible}. Classes are small, ensuring {personelised|personalised} attention for every student.
Course Details:
Duration: 4 weeks ({intensiv|intensive}) or 12 weeks (evening classes)
Ages: 13-16
Location: Central London (easily {acessible|accessible} by public transport)
Cost: £450 (payment plans {availabel|available})
{Scholarships|Scholerships} {availabel|available} for students from low-income families - don't let cost be a {barier|barrier}!
By the end of the bootcamp, you'll have created your own website and mobile app to showcase in your portfolio. Previous students have gone on to win coding {competisions|competitions} and secure {aprenticeships|apprenticeships}.
The {technolojy|technology} industry is growing {rapidley|rapidly} and needs diverse, talented young people. Start your coding journey today!
Register now: www.futurecoders.com or call 020 7946 0958
Early bird discount: Save £50 if you book before March 1st!`
    },
    {
        id: 'sec1-23',
        level: 'sec1',
        style: 'diary',
        title: 'First Day at New School',
        passage: `Monday, 4th September
First day at Riverside {Secondery|Secondary} School. I'm {absalutely|absolutely} terrified.
Mum dropped me off early. The building is {enormus|enormous} - so much bigger than primary school. I felt {compleetly|completely} lost trying to find my form room. {Eventualy|Eventually} a friendly Year 11 student showed me the way.
My form tutor, Mr Hassan, seems nice but strict. He gave us a {lectshure|lecture} about {maintaning|maintaining} high standards and being {responsibel|responsible}. Then he handed out our timetables. I'm {particulerly|particularly} nervous about science - I've heard the teacher is really {dificult|difficult}.
At break, I sat alone on a bench, feeling {miserabel|miserable}. Then a girl named Sophie came over and asked if I wanted to join her group. I was so {releived|relieved}! We spent lunch together and I {actualy|actually} started to relax.
The afternoon was better. In English, we're studying "Wonder" which I've already read. When the teacher asked {questons|questions}, I knew the answers and felt more {confidant|confident}.
Still feeling {overwhelmd|overwhelmed} by everything - the {buildin|building}, the different teachers, the homework {expecations|expectations}. But maybe, just maybe, this won't be as bad as I {thort|thought}.
Tomorrow: PE. {Dredfull|Dreadful}.`
    },
    {
        id: 'sec1-24',
        level: 'sec1',
        style: 'letter',
        title: 'Letter of Complaint',
        passage: `42 Church Lane
Manchester
M14 6PQ
Customer Services
TechGadgets Ltd
15th October 2024
Dear Sir or Madam,
I am writing to {complain|complane} about a laptop I {purchaced|purchased} from your online store on 1st October.
When the laptop arrived, I was {initialy|initially} pleased with its {appearence|appearance}. However, after just three days of use, {severel|several} serious problems became {aparent|apparent}.
Firstly, the battery life is {extremeley|extremely} poor. Despite your website claiming it would last "up to 10 hours," it {barreley|barely} manages three hours. This is {unacceptabel|unacceptable} for a product marketed to students.
Secondly, the keyboard has a {defektiv|defective} space bar that only works {intermitently|intermittently}. This makes typing {assignmants|assignments} {incredibbly|incredibly} frustrating.
Finally, the laptop {frequantly|frequently} overheats and shuts down without warning, causing me to lose unsaved work.
I contacted your customer service team last week but received an {inadaquate|inadequate} response. The {representativ|representative} suggested I had damaged the laptop through misuse, which is {absoluteley|absolutely} untrue.
As the laptop is clearly {fawlty|faulty}, I am entitled to a full refund under the Consumer Rights Act. I expect a response within 14 days and will take {furthur|further} action if {necesary|necessary}.
I look forward to your prompt reply.
Yours faithfully,
Jessica Thompson`
    },
    {
        id: 'sec1-25',
        level: 'sec1',
        style: 'speech',
        title: 'Debate Speech: School Uniform',
        passage: `Proposition: School Uniform Should Be Abolished
Honourable judges, {worfhy|worthy} opponents, and fellow students, I stand before you to argue that school uniform should be {abolishd|abolished}.
My first argument concerns {individuelity|individuality}. Teenagers are at a {cruciel|crucial} stage of {developement|development}, discovering who they are and how they want to express themselves. Forcing everyone to wear identical clothing {supresses|suppresses} {creativaty|creativity} and personal expression. Schools should {encorage|encourage} diversity, not {eradacate|eradicate} it.
Secondly, school uniform is {prohibitively|prohibativly} expensive. Many families struggle {finanshally|financially} to afford multiple sets of {offishel|official} uniform. This creates {inekwality|inequality}, with some students wearing worn-out, {ill-fitng|ill-fitting} uniforms while others have pristine outfits. Allowing students to wear their own clothes would be more {economicle|economical}.
Thirdly, the argument that uniform {prevents|prevants} bullying is {fundamentaly|fundamentally} flawed. Bullies will find other things to target - shoes, bags, or hairstyles. We should address the root causes of bullying rather than use uniform as a {temporery|temporary} solution.
Finally, {prepairng|preparing} students for the real world means teaching them to make {apropriate|appropriate} clothing choices. In most workplaces, employees dress {profesionaly|professionally} without being told exactly what to wear.
In {concluson|conclusion}, school uniform is an outdated concept that {restricts|restriks} {individuelity|individuality}, creates {finanshel|financial} burden, and fails to achieve its stated aims. It's time for change.
Thank you.`
    },
    {
        id: 'sec1-26',
        level: 'sec1',
        style: 'dialogue',
        title: 'Careers Interview Dialogue',
        passage: `"Come in, take a seat," said Ms Roberts, the interviewer, gesturing to the chair {opposit|opposite} her desk.
"Thank you," replied Amir, trying to hide his {nervusness|nervousness}.
"I've reviewed your application for our {aprentisship|apprenticeship} programme and I'm {extremeley|extremely} {impresed|impressed}. Tell me, why are you interested in {sofware|software} {developement|development}?"
Amir's {confidance|confidence} grew as he {answerd|answered}. "I've been coding since I was twelve. I find it {fasinating|fascinating} how you can create {somthing|something} from nothing - just logic and {creativaty|creativity}."
"Excellent. What would you say is your {bigest|biggest} weakness?" Ms Roberts asked, leaning forward.
This was a {dificult|difficult} question. Amir {paused|pawsed} {breifley|briefly}. "Sometimes I get so focused on solving a {technicle|technical} problem that I forget to take breaks. But I'm working on {managng|managing} my time more {efectively|effectively}."
"That's a very honest answer," she said {apreciatively|appreciatively}. "Self-awareness is important. Now, can you tell me about a {chalenging|challenging} project you've worked on?"
Amir described his mobile app {enthusiasticaly|enthusiastically}. Ms Roberts listened {atentivly|attentively}, {nodding|noding} {ocasionally|occasionally}.
"Well, Amir, I think you'd be an excellent {adition|addition} to our team. We'll be in touch within a week."
Amir left feeling {incredibley|incredibly} {releeved|relieved}. He'd done his best, and that was all anyone could ask.`
    },
    {
        id: 'sec1-27',
        level: 'sec1',
        style: 'literary',
        title: 'Short Story Opening',
        passage: `The {abandond|abandoned} lighthouse stood {sentinal|sentinel} on the rocky cliff, its paint peeling and windows {shaterd|shattered}. Nobody had lived there for fifty years, yet local fishermen swore they sometimes saw a light burning in the tower at midnight.
Maya had heard the stories her entire life but never {beleeved|believed} them. Ghosts weren't real, she told herself {firmley|firmly}. There had to be a {logicle|logical} {explanacion|explanation}.
As she {aproached|approached} the lighthouse, the wind {howld|howled} around her, carrying the sharp scent of salt and seaweed. The rusty door creaked as she pushed it open, revealing a {circular|circuler} room filled with debris - broken furniture, {rotting|roting} books, and thick cobwebs.
A {spirel|spiral} staircase wound upwards into darkness. Despite her {racional|rational} mind telling her to leave, {curiousity|curiosity} pulled her forward. She {began|beggan} to climb, her footsteps echoing in the empty space.
{Halfway|Halfeway} up, she heard it - a sound that made her blood run cold. Footsteps above her, slow and {deliberat|deliberate}, descending towards her.
Maya froze, her heart {pownding|pounding}. She was {absoluteley|absolutely} certain she was alone. Wasn't she?
The footsteps grew louder, closer. She gripped the {handrale|handrail}, {prepairing|preparing} to flee. Whatever was coming down those stairs, she didn't want to meet it in this {forsaken|forsayken} place.
But it was too late to run.`
    },
    {
        id: 'sec1-28',
        level: 'sec1',
        style: 'review',
        title: 'Video Game Review',
        passage: `Game Review: "Quantum Odyssey"
{Platfrom|Platform}: PlayStation 5, Xbox Series X, PC
{Genra|Genre}: Sci-Fi Action-Adventure
Rating: 4.5/5 stars
"Quantum Odyssey" is an {ambisious|ambitious} space exploration game that {largeley|largely} {succeeds|suceeds} in delivering an {incredibel|incredible} {experiance|experience}.
Gameplay: You play as Captain Elena Rodriguez, commanding a ship through {uncharted|unchartted} {galaxys|galaxies}. The core {mechaniks|mechanics} involve resource {managment|management}, space combat, and planetary exploration. The variety of activities prevents {repetativ|repetitive} gameplay, though some missions feel {ocasionally|occasionally} tedious.
Graphics: {Absoluteley|Absolutely} {stuning|stunning}. The {visualisation|visualisacion} of nebulae, planets, and space stations is {breathtakng|breathtaking}. Each world feels unique and {lovingly|loveing} crafted.
Story: The narrative is {compeling|compelling}, exploring themes of {isolacion|isolation}, discovery, and humanity's place in the {univers|universe}. Voice acting is {excelent|excellent}, {particulerly|particularly} the protagonist, who feels {genuinely|genuinly} human and {relatabel|relatable}.
Weaknesses: The game suffers from {ocasional|occasional} {technicle|technical} issues, including frame rate drops during {intensiv|intensive} battles. The learning curve is steep, which might {intimidat|intimidate} casual players.
Verdict: Despite minor flaws, "Quantum Odyssey" is an {esential|essential} purchase for sci-fi fans. It offers dozens of hours of {enganging|engaging} gameplay in a {beautifuly|beautifully} {realissd|realised} {univers|universe}. {Highly|Highley} recommended.`
    },
    {
        id: 'sec1-29',
        level: 'sec1',
        style: 'report',
        title: 'History Essay: Industrial Revolution',
        passage: `The Social Impact of the Industrial Revolution
{Introduccion|Introduction}
The Industrial Revolution, {begining|beginning} in Britain in the late 18th century, {fundamentaly|fundamentally} transformed society. While it brought {technologicle|technological} advancement and economic growth, it also created {signifikent|significant} social {chalenges|challenges}.
Urbanization
As factories were built in cities, millions of people migrated from rural areas seeking employment. This rapid {urbanisacion|urbanisation} led to {overcrowded|overcrowdded} housing and poor living conditions. Workers lived in cramped {tenaments|tenements} with {inadaquate|inadequate} sanitation, leading to {frecuent|frequent} disease outbreaks.
Working Conditions
Factory work was {extrordinary|extraordinary} harsh. Men, women, and children worked twelve to sixteen hour days in {dangrous|dangerous} conditions. {Accidants|Accidents} were common, and there were no {saftey|safety} regulations or workers' rights. Child labour was {particulerly|particularly} {shockng|shocking}, with children as young as five working in mines and factories.
Social Reform
{Eventualy|Eventually}, the {apalling|appalling} conditions led to reform movements. {Philanthropists|Filanthropists} and {politishans|politicians} began {campaining|campaigning} for better working conditions. The Factory Acts {gradualy|gradually} {imposd|imposed} restrictions on working hours and improved {saftey|safety} standards.
{Concluson|Conclusion}
The Industrial Revolution brought both progress and suffering. Understanding this period helps us {apreciate|appreciate} modern workers' rights and the importance of {balansing|balancing} economic {developement|development} with social {responsability|responsibility}.`
    },

    // Additional SEC2 exercises (Ages 15-16)
    {
        id: 'sec2-21',
        level: 'sec2',
        style: 'blog',
        title: 'Social Media Impact Blog',
        passage: `The Double-Edged Sword: Social Media and Teen Wellbeing
Social media has become {ubikwitous|ubiquitous} in teenagers' lives, but its impact on mental health remains a {contentious|contentous} topic worthy of serious {examinacion|examination}.
The Benefits: {Undeniabbly|Undeniably}, social platforms offer valuable {oportunities|opportunities} for connection. They enable young people to maintain {friendshps|friendships} across distances, find {comunities|communities} with shared interests, and access support networks. For marginalised teens, online spaces can provide {cruciel|crucial} {validacion|validation} and belonging.
The Drawbacks: However, the negative {consequenses|consequences} are {incresingly|increasingly} {aparent|apparent}. The {konstant|constant} exposure to {curatted|curated} {perfeccion|perfection} creates unrealistic expectations. {Algorithems|Algorithms} {deliberatley|deliberately} promote {provocativ|provocative} content to maximise {engangemant|engagement}, often {amplifying|amplifiing} anxiety and {inadequasy|inadequacy}.
{Reserch|Research} indicates a {corelacion|correlation} between heavy social media use and increased depression, {particulary|particularly} among girls. The pressure to {accumalate|accumulate} likes and followers can become {obsessiv|obsessive}. {Cyberbulying|Cyberbullying} is {rampant|ramppant}, with {perpetrators|perpetraitors} hiding behind {anonimity|anonymity}.
Finding Balance: The solution isn't {necesarily|necessarily} complete {abstinance|abstinence}. Instead, we need {consciencious|conscientious} usage - being {mindfull|mindful} of time spent online, {unfollowng|unfollowing} accounts that trigger negative feelings, and {prioratising|prioritising} real-world {interacshons|interactions}.
Parents and educators must {facilitait|facilitate} open {converacions|conversations} about {navigatng|navigating} social media {healthily|healthyly}. {Ultimatly|Ultimately}, developing {critikle|critical} {media|meadia} literacy is {esential|essential} for the digital generation.`
    },
    {
        id: 'sec2-22',
        level: 'sec2',
        style: 'speech',
        title: 'Graduation Speech',
        passage: `Esteemed staff, proud parents, and fellow graduates,
Today marks the end of one chapter and the {begining|beginning} of another. As we stand on the {threshhold|threshold} of our futures, I want to reflect on what we've {acomplished|accomplished} and what lies ahead.
Five years ago, we arrived as nervous Year 7 students, {overwhelmd|overwhelmed} by the {enormaty|enormity} of secondary school. We've grown {tremendously|tremendosly}, not just {academicaly|academically} but as individuals. We've faced {chalenges|challenges} - difficult exams, personal setbacks, and {recently|recentley}, a global pandemic that {disrupted|disruppted} our education.
Yet here we stand, {resiliant|resilient} and ready. We've {demonstratted|demonstrated} {remarkabel|remarkable} {adaptabilaty|adaptability}, learning remotely when {necesary|necessary} and supporting each other through {unprecedentted|unprecedented} {circumstanses|circumstances}.
To our teachers: Thank you for your {unwavering|unwavring} {dedicacion|dedication}. You didn't just teach us {curriculam|curriculum} content; you taught us to think {criticaly|critically}, {questione|question} assumptions, and pursue {excelence|excellence}. Your {influance|influence} will {resanate|resonate} throughout our lives.
To my fellow graduates: The future is {simultaneusly|simultaneously} {exiting|exciting} and {dawnting|daunting}. Some of us will attend university, others will pursue {aprentiseships|apprenticeships} or employment. Whatever path we choose, let's remain {curios|curious}, {compashonate|compassionate}, and {comitted|committed} to making a {diferance|difference}.
As we leave these familiar halls, let's remember that {failer|failure} is not the {opposit|opposite} of success but part of the journey towards it. Be brave, be kind, and never stop learning.
{Congratulacions|Congratulations}, Class of 2024. Our adventure is just beginning.`
    },
    {
        id: 'sec2-23',
        level: 'sec2',
        style: 'literary',
        title: 'Dystopian Fiction Extract',
        passage: `The city sprawled beneath a {permanant|permanent} grey sky, its towers {piercing|piersing} the smog like {acusatory|accusatory} fingers. Nobody remembered when the sun had last broken through the {polusion|pollution}.
Kira navigated the crowded streets with {practaced|practised} {efficiancy|efficiency}, her face mask {filtering|filtreing} the toxic air. {Surveilance|Surveillance} cameras tracked her every movement, feeding data to the {omnipresent|omnipresant} Central {Algorythm|Algorithm}. Step out of line, {deviation|devietion} from your {asigned|assigned} routine, and the {Enforcement|Enforcemant} Division would {aprehend|apprehend} you within minutes.
She'd lived her entire life under this {totalitaryan|totalitarian} regime, yet recently, something had {shiftted|shifted}. {Whisperd|Whispered} {conversatons|conversations} in dark alleys spoke of a resistance, a group who remembered freedom and refused to accept this {dystopien|dystopian} reality as {permanant|permanent}.
Kira had always been {obedient|obediant}, {beleiving|believing} {complience|compliance} was the only way to survive. But yesterday, she'd witnessed {somthing|something} that shattered her {comlacency|complacency} - a child dragged away by {enforscers|enforcers} for the "crime" of drawing a picture of the sun.
That image haunted her. How had {societey|society} {deterioratted|deteriorated} to this point? When had they traded {libertey|liberty} for {illusory|illusery} security?
Tonight, Kira would attend her first resistance meeting. The {decison|decision} {terrified|terrifyed} her - if caught, she'd face {imprisonmant|imprisonment} or worse. But living in fear wasn't really living.
As she approached the {abandonned|abandoned} warehouse where the group met, her heart {raced|raiced}. {Rebelion|Rebellion} began with a single step.`
    },
    {
        id: 'sec2-24',
        level: 'sec2',
        style: 'report',
        title: 'Biology Coursework',
        passage: `Investigating the Effect of Light {Intensaty|Intensity} on {Photosinthesis|Photosynthesis}
{Introduccion|Introduction}
{Photosinthesis|Photosynthesis} is the process by which plants convert light energy into chemical energy. This investigation {examins|examines} how varying light {intensaty|intensity} affects the rate of {photosinthetic|photosynthetic} activity in aquatic plants.
{Hipothesis|Hypothesis}
I {hipothesise|hypothesise} that as light {intensaty|intensity} increases, the rate of {photosinthesis|photosynthesis} will increase {proportionaly|proportionally} until reaching a {pladeau|plateau} where other factors become limiting.
{Methodoligy|Methodology}
I used Canadian pondweed ({Elodea|Elodeer}) submerged in water. A lamp was positioned at {varring|varying} distances (10cm, 20cm, 30cm, 40cm, 50cm) from the plant to alter light {intensaty|intensity}. {Photosinthetic|Photosynthetic} rate was measured by counting oxygen bubbles produced per minute. Each {distanse|distance} was tested three times and results averaged for {acuracy|accuracy}.
Variables: The {independant|independent} variable was light {intensaty|intensity}. The {dependant|dependent} variable was the rate of bubble production. Control variables included water {temperture|temperature}, plant species, and time of day.
Results
At 10cm (highest {intensaty|intensity}): 45 bubbles/minute
At 20cm: 32 bubbles/minute
At 30cm: 21 bubbles/minute
At 40cm: 14 bubbles/minute
At 50cm: 8 bubbles/minute
{Analisys|Analysis}
The results {clearley|clearly} show a {corelacion|correlation} between light {intensaty|intensity} and {photosinthetic|photosynthetic} rate. As distance increased and {intensaty|intensity} decreased, fewer bubbles were produced.
{Concluson|Conclusion}
The {hipothesis|hypothesis} is supported. Light {intensaty|intensity} {directley|directly} affects {photosinthesis|photosynthesis} rate, though we didn't reach the {predicded|predicted} {pladeau|plateau} within our test range.
{Evaluacion|Evaluation}
This {experament|experiment} had {limitacions|limitations}. Counting bubbles is {subjektiv|subjective}, and {temperture|temperature} fluctuations may have {influanst|influenced} results. Future investigations could use more {sofisticated|sophisticated} oxygen measurement {techneeks|techniques}.`
    },
    {
        id: 'sec2-25',
        level: 'sec2',
        style: 'letter',
        title: 'University Application Letter',
        passage: `Apartment 7C
Edinburgh
EH3 9LD
Admissions Office
University of Cambridge
18th November 2024
Dear Admissions {Commitee|Committee},
I am writing to apply for a place on your {Biomedical|Biomedicle} Science degree programme, and I am {incredibley|incredibly} {enthusiastick|enthusiastic} about the {prospekt|prospect} of studying at your {prestigous|prestigious} institution.
My {fascinacion|fascination} with human biology began when I {volunt|volunteered} at a local hospital, observing doctors diagnose and treat patients. Witnessing the {aplicacion|application} of scientific knowledge to {aleviate|alleviate} suffering was {profoundley|profoundly} inspiring. I {realiced|realised} that {Biomedical|Biomedicle} Science {ofered|offered} the {perfekt|perfect} {combinacion|combination} of my interests in research and {medisin|medicine}.
{Academicaly|Academically}, I am predicted A* grades in Biology, Chemistry, and Mathematics. I have {consistantly|consistently} {acheived|achieved} top marks in my cohort and {recieved|received} the Science {Acheivement|Achievement} Award last year. Beyond {curriculam|curriculum} study, I completed an online course in {Genetics|Geneticks} through FutureLearn and {regularley|regularly} read scientific {journels|journals} to stay {currant|current} with {reserch|research} {developemants|developments}.
I have {demonstratted|demonstrated} {leadership|leadrship} as head of the Science Society, where I organised lectures from guest speakers and coordinated laboratory demonstrations for younger students. These {experiances|experiences} have {strengthend|strengthened} my {comunication|communication} skills and {reinforsed|reinforced} my {commitant|commitment} to scientific {educacion|education}.
Cambridge's {worl|world}-leading research facilities and {exceptionel|exceptional} teaching staff make it my first choice. I am {particulerly|particularly} interested in Professor Ahmed's work on {celular|cellular} {regeneracion|regeneration}, which I find {uterly|utterly} {fasinating|fascinating}.
I am {comitted|committed}, {passionet|passionate}, and ready to {emerse|immerse} myself in {rigerus|rigorous} {academick|academic} study. I would be {honoured|honered} to {contribut|contribute} to the {vibrent|vibrant} {intellectuel|intellectual} {comunity|community} at Cambridge.
Thank you for considering my application. I look forward to {hering|hearing} from you.
Yours {sincearly|sincerely},
Priya Sharma`
    },
    {
        id: 'sec2-26',
        level: 'sec2',
        style: 'dialogue',
        title: 'Philosophy Discussion',
        passage: `"So, if a tree falls in a forest and nobody's around to hear it, does it make a sound?" asked Tom, {leening|leaning} back in his chair.
Dr. Phillips smiled, {recognising|recogniseing} the {clasic|classic} {philosofical|philosophical} question. "That depends on your {definicion|definition} of 'sound.' From a {physiks|physics} perspective, yes - sound waves are {generatted|generated} {regardles|regardless} of observers."
"But isn't sound a {perceptual|perceptuel} {experiance|experience}?" {countered|counterd} Maya. "Without ears to hear it, there are just {vibrations|vibracions}. Sound {requirs|requires} {consciousnes|consciousness}."
"Interesting {distincton|distinction}," said Dr. Phillips. "You're {touching|tuching} on the difference between {objektiv|objective} reality and {subjektiv|subjective} {experiance|experience}. This {debait|debate} goes back centuries to {philosophrs|philosophers} like Berkeley, who argued that objects only exist when {percieved|perceived}."
Tom frowned. "But that's {abserd|absurd}. Are you saying this table {dissapears|disappears} when I close my eyes?"
"Not exactly," Dr. Phillips {explaned|explained}. "Berkeley {beleived|believed} that God {constantley|constantly} {percieves|perceives} everything, so objects have {continuos|continuous} {existance|existence}. It's {complecated|complicated}."
"This is making my brain hurt," Tom {admited|admitted} {cheerfuly|cheerfully}.
"Good!" Dr. Phillips {laffed|laughed}. "Philosophy should {chalenge|challenge} your assumptions. The {unexamind|unexamined} life, as Socrates said, is not worth living."
Maya {nodded|noded} {thoughtfuly|thoughtfully}. "I love how one simple question can lead to such {profownd|profound} {discussons|discussions} about reality, {percepcion|perception}, and {existance|existence}."
"That's the beauty of philosophy," said Dr. Phillips. "{Aparently|Apparently} simple questions often reveal deep {complexitys|complexities}."`
    },
    {
        id: 'sec2-27',
        level: 'sec2',
        style: 'review',
        title: 'Album Review',
        passage: `Album Review: "Midnight Reverie" by Luna Eclipse
{Genra|Genre}: Alternative Indie Rock
Rating: 5/5 stars
Luna Eclipse's third album, "Midnight Reverie," is a {sophistocated|sophisticated}, {emosionally|emotionally} {resonent|resonant} {masterpece|masterpiece} that {solidifys|solidifies} their position as one of indie rock's most {exiting|exciting} acts.
Musicality: The band has {dramaticaly|dramatically} evolved their sound. While previous albums {showcaced|showcased} raw, {grungy|grungey} energy, "Midnight Reverie" displays {remarkabel|remarkable} musical {maturity|maturaty}. {Layerd|Layered} {instrumentacion|instrumentation} creates {atmosferic|atmospheric} soundscapes, {partic|particularly} evident in tracks like "Echo Chamber" where {etherial|ethereal} synths blend with {distorted|distortted} guitars.
Lyrics: Lead singer Aria Chen's {lyricism|lyrissism} has reached new heights. She {exploars|explores} themes of {isolacion|isolation}, identity, and {existencial|existential} uncertainty with {poectic|poetic} {precicion|precision}. Lines like "{Silwets|Silhouettes} of yesterday dance in {tomorow's|tomorrow's} light" demonstrate her {talant|talent} for {evocativ|evocative} imagery.
Standout Tracks: "{Fragmants|Fragments}" is {hauntingly|hauntingley} beautiful, {featuring|featurng} minimalist {arangement|arrangement} that {allowes|allows} Chen's {vocals|vocels} to shine. "Digital {Ghosts|Ghostes}" offers a {scathing|scathng} {critiqe|critique} of social media {obsession|obsetion}, while "{Renaissanse|Renaissance}" provides an uplifting closer that feels both {triumfent|triumphant} and {bittersweat|bittersweet}.
Production: Producer James Morrison has done an {exquisit|exquisite} job. The album sounds {simultaneusly|simultaneously} {polishd|polished} and raw, {maintaning|maintaining} {authenticaty|authenticity} while {showcasing|showcaseing} {technickle|technical} {excelence|excellence}.
{Weeknesses|Weaknesses}: {Ocasionally|Occasionally}, the {experimentel|experimental} {eletronics|electronics} feel slightly {indulgant|indulgent}, though these moments are rare.
Final Verdict: "Midnight Reverie" is an {essenshel|essential} listen for anyone {intrested|interested} in {contempory|contemporary} indie rock. Luna Eclipse has created an album that's both {intellectualy|intellectually} {stimulatin|stimulating} and {emosionally|emotionally} {powerfull|powerful} - a rare {acheivement|achievement} in modern music.`
    },
    {
        id: 'sec2-28',
        level: 'sec2',
        style: 'advertisement',
        title: 'Gap Year Programme Advertisement',
        passage: `GLOBAL HORIZONS GAP YEAR PROGRAMME
{Transformativ|Transformative} {Experiances|Experiences} - {Lifellong|Lifelong} Impact
Are you finishing A-Levels and seeking {somthing|something} more meaningful than {imidiate|immediate} university {enrollmant|enrolment}? Our {comprehensiv|comprehensive} gap year programme offers {unparaleled|unparalleled} {oportunities|opportunities} for personal growth and global {awarness|awareness}.
What We Offer:
{Voluntering|Volunteering} Projects: {Contribut|Contribute} to {comunity|community} {developement|development} in locations across Africa, Asia, and South America. Previous {participents|participants} have taught English, built schools, and worked on {conservacion|conservation} projects.
Cultural {Imersion|Immersion}: Live with local families, learn new languages, and gain {authetic|authentic} {understaning|understanding} of different cultures. This {experiance|experience} develops {independence|independance}, {adaptabilaty|adaptability}, and cross-cultural {competense|competence} - skills {increacingly|increasingly} valued by employers and universities.
Skills {Developement|Development}: {Parcipate|Participate} in workshops covering {leadership|leadrship}, {proyect|project} {managment|management}, and {globle|global} citizenship. Return home with {enhansed|enhanced} {capabilitys|capabilities} and {clarer|clearer} career direction.
Adventure Activities: Balance work with adventure! Our programmes include {trekking|treking}, scuba diving, and cultural {excurtions|excursions}.
Program Details:
Duration: 3-12 months ({flexibel|flexible} options)
Ages: 18-25
Cost: From £2,500 ({includs|includes} {acommodation|accommodation}, meals, training, and in-country support)
{Scholerships|Scholarships} {availabel|available} for students from disadvantaged backgrounds
Safety is our priority. All participants receive {comprehensiv|comprehensive} training, 24/7 support, and {insurence|insurance} coverage.
Alumni {Testimoniels|Testimonials}:
"This programme {fundamentaly|fundamentally} changed my {perspektiv|perspective} on life. I returned more confident, {culturaly|culturally} aware, and {motivatted|motivated}." - Sophie, Tanzania 2023
"The best {decison|decision} I ever made. Universities were {impresed|impressed} by my {experiances|experiences}, and I gained skills you simply can't learn in a classroom." - James, Peru 2024
Don't let fear of the unknown hold you back. The world is waiting - are you ready to explore it?
Apply now: www.globalhorizons.org
Early {aplicacion|application} discount: Save £200 if you apply before January 31st!
Join the {thousends|thousands} of young people who have discovered themselves while discovering the world.`
    },
    {
        id: 'sec2-29',
        level: 'sec2',
        style: 'diary',
        title: 'Exam Results Day',
        passage: `Thursday, 22nd August
Results day. The day I've been {simultaneusly|simultaneously} dreading and {antisipatng|anticipating} for weeks.
Woke at 5am, heart {pownding|pounding}, unable to sleep. Spent two hours refreshing my email, even though results weren't released until 8am. Mum kept trying to make me eat breakfast, but I felt {nauseus|nauseous} with anxiety.
Finally, at 8:03am, the email arrived. I couldn't bring myself to open it {imediatly|immediately}. What if I'd failed {evrything|everything}? What if all those months of {relendles|relentless} revision had been {insufficiant|insufficient}?
Dad {gentley|gently} {encurraged|encouraged} me: "Whatever the results, we're proud of you. You worked {incredibbly|incredibly} hard."
With shaking hands, I clicked. The screen loaded with {agonizing|agonising} slowness.
Then, {incredibley|incredibly}, there they were: A* in English Literature, A in History, A in Psychology, B in Biology.
I {actualy|actually} screamed. Mum came running, {thinkng|thinking} something was wrong, but I was crying happy tears. These results mean I've met my university offer! I'm going to study English at Durham!
Called my best friend Zara {imediatly|immediately}. She got {brillant|brilliant} results too - we're both going to uni! We {promiced|promised} to stay in touch despite going to different {universitys|universities}.
Spent the afternoon celebrating with friends. We went to the park, {reminissing|reminiscing} about our five years at school - the stress, the laughter, the {friendshps|friendships} we've built.
Tonight, lying in bed, I feel {overwhelmd|overwhelmed} with relief and {excitemant|excitement}. All the late nights, the {sacrifices|sacrifises}, the {presure|pressure} - it was worth it. This is the end of one journey and the start of {somthing|something} new.
September can't come soon enough. I'm ready for the next chapter.`
    },
    {
        id: 'sec2-30',
        level: 'sec2',
        style: 'interview',
        title: 'Entrepreneur Interview',
        passage: `Tech Magazine Interviews Young {Entrepeneur|Entrepreneur}
Interviewer: Thank you for joining us, Sarah. At just twenty-two, you've already launched two successful tech {startaps|startups}. How did you get started?
Sarah: It began during sixth form when I {identifyed|identified} a problem - students {strugglng|struggling} to find {reliabel|reliable} revision resources. I created an app {connecting|connectng} students with peer tutors. The {responce|response} was {overwelming|overwhelming}.
Interviewer: What were the biggest {chalenges|challenges}?
Sarah: {Definately|Definitely} the {finanshel|financial} aspect {initialy|initially}. I had no funding, so I {bootstraped|bootstrapped} the business using {savings|savngs} from part-time work. Learning to code was {daunting|dawnting} too, but YouTube tutorials and {persistance|persistence} got me there. The {bigest|biggest} {obsticle|obstacle} was {convinceing|convincing} people to take a teenager {seriusly|seriously} in the business world.
Interviewer: How do you balance {entrepeneurship|entrepreneurship} with university {commitants|commitments}?
Sarah: It's not easy! Time {managment|management} is {cruciel|crucial}. I wake at 6am to work on the business before lectures. I've learned to {prioratise|prioritise} {ruthlesly|ruthlessly} and say no to {distrakcions|distractions}. My {achademic|academic} work has actually improved because I'm more {disciplind|disciplined}.
Interviewer: What advice would you give young {aspiring|aspirng} {entrepeneurs|entrepreneurs}?
Sarah: Don't wait for the {perfekt|perfect} moment - it doesn't exist. Start small, {validait|validate} your idea with real users, and don't be {diskurraged|discouraged} by failure. Every setback is a learning {oportunity|opportunity}. {Surrownd|Surround} yourself with supportive people who {beleve|believe} in your vision. Most {importantly|importantley}, solve {problams|problems} you {genuinly|genuinely} care about. {Pasion|Passion} sustains you when {chalenges|challenges} arise.
Interviewer: What's next for your company?
Sarah: We're {expending|expanding} internationally and developing {artifishel|artificial} intelligence features to {personelise|personalise} learning {experiances|experiences} further. I'm {incredibley|incredibly} {exited|excited} about the future.
Interviewer: Thank you, Sarah. Your story is truly {inspirasional|inspirational}.`
    }
];

// Legacy format for backward compatibility
// Maps IDs to passages only (without metadata)
export const EDITING_EXERCISES: Record<string, string> = EDITING_EXERCISES_DATA.reduce((acc, exercise) => {
    acc[exercise.id] = exercise.passage;
    return acc;
}, {} as Record<string, string>);
