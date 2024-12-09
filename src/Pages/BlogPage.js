import React from "react";
import BlogSection from "../components/BlogSection";

const BlogPage = (props) => {
 const showblur=props.showblur;

  const blogs = [
    {
      title: "Understanding Zodiac Signs",
      category: "Astrology Basics",
      subhead:"The Origins of Zodiac Signs",
      subheadcontent:"The zodiac is a belt of the sky divided into twelve equal parts, each named after the constellation that occupies its section. Ancient civilizations, like the Babylonians and Greeks, observed how celestial bodies influenced human behavior and began to associate these signs with specific traits. The zodiac is split into four elements: Fire, Earth, Air, and Water, each element bringing unique energy and characteristics.",
      name: "Aishwary",
      date:"Aug 27,2024",
      img:"https://cdn.pixabay.com/photo/2011/03/24/09/58/astronomical-clock-5718_1280.jpg",
      headcontent:"Astrology has fascinated humanity for centuries, and at its core lies the twelve zodiac signs. These signs, each representing different traits and characteristics, are not just random assignments; they are based on the position of the sun at the time of your birth. Whether you're an astrology enthusiast or a curious beginner, understanding zodiac signs can provide insights into your personality, relationships, and life's journey.",
      foothead:"The Influence of Zodiac Signs on Daily Life",
      footdesc:"Your zodiac sign can offer a glimpse into your personality, strengths, weaknesses, and potential challenges. While astrology shouldn't dictate your every decision, understanding your sign and those of people around you can enhance your self-awareness and improve your relationships.",
      midhead:"The Twelve Zodiac Signs are :",
      finalthoughts:" Astrology is a tool for reflection and personal growth. Whether you are an Aries trailblazer or a sensitive Pisces, embracing your zodiac sign’s traits can help you understand your true self better. Dive deeper into your astrological journey, and you might find the universe has more guidance to offer than you ever imagined.",
      data:[{
        title:"1.Aries (March 21 - April)",
        image:"https://cdn.pixabay.com/photo/2017/08/28/15/28/aries-2689949_1280.jpg",
        element:"Fire",
        traits:" Courageous, enthusiastic, dynamic, competitive.",
        description:"Aries is the first sign of the zodiac, symbolizing new beginnings and leadership. They are known for their fiery enthusiasm, boldness, and desire to be at the forefront. Aries are natural-born leaders who are not afraid to take risks. However, their impulsive nature can sometimes lead to hasty decisions. They thrive in challenges and are motivated by the thrill of the chase, whether it's in career, love, or personal goals.",
      },
    {
      title:"2.Taurus (April 20 - May 20)",
      image:"https://cdn.pixabay.com/photo/2024/05/12/10/05/astrology-8756541_1280.png",
      element:"Earth",
    traits:"Patient, reliable, devoted, and practical.",
    description:"Represented by the bull, Taurus is grounded, steadfast, and values security in all forms. They have a deep appreciation for beauty, comfort, and the pleasures of life. Taureans are known for their tenacity and loyalty, often seeing things through to the very end. While their stubbornness can be a challenge, it also makes them incredibly dependable. They enjoy the finer things in life and are willing to work hard to attain them.",
      },
      {
        title:"3.Gemini (May 21 - June 20)",
        image:"https://cdn.pixabay.com/photo/2021/10/29/08/32/gemini-6751374_1280.jpg",
        element:"Air",
      traits:"Adaptable, curious, versatile, and communicative.",
      description:"Gemini is symbolized by the twins, reflecting their dual nature and ability to view things from multiple perspectives. They are social butterflies who thrive on interaction and intellectual stimulation. Geminis are adaptable, quick-thinking, and often have a multitude of interests. However, their restless nature can lead to indecisiveness and a tendency to spread themselves too thin. They are always eager to learn and share their knowledge with others.",
        },
        {
          title:"4.Cancer (June 21 - July 22)",
          image:"https://cdn.pixabay.com/photo/2022/11/26/11/45/cancer-7617683_1280.jpg",
          element:"Water",
        traits:"Emotional, nurturing, intuitive, and compassionate.",
        description:" Cancer is ruled by the moon, which reflects their deep emotions and intuitive nature. They are often seen as the caretakers of the zodiac, providing comfort and support to those around them. Cancers are deeply connected to their home and family, valuing close bonds and traditions. They can be sensitive and easily hurt, often retreating into their shells when feeling overwhelmed. Despite their protective nature, they are fiercely loyal and will go to great lengths to care for their loved ones.",
          },
          {
            title:"5.Leo (July 23 - August 22)",
            image:"https://cdn.pixabay.com/photo/2019/07/31/06/03/zodiac-sign-4374408_1280.jpg",
            element:"Fire",
          traits:"Confident, charismatic, creative, and generous.",
          description:" Leo, represented by the lion, is known for its regal presence and magnetic personality. Leos love to be in the spotlight and have a flair for drama and creativity. They are warm-hearted, generous, and enjoy making others feel special. Their confidence can sometimes come across as arrogance, but at their core, Leos seek appreciation and validation. They are natural leaders who inspire others with their passion and zest for life.",
            },
            {
              title:"6.Virgo (August 23 - September 22)",
              image:"https://cdn.pixabay.com/photo/2022/11/26/11/45/virgo-7617694_1280.jpg",
              element:"Earth",
            traits:"Analytical, meticulous, dependable, and modest.",
            description:" Virgos are the meticulous organizers of the zodiac. They have a keen eye for detail and are driven by a desire to improve and perfect. Often seen as practical and grounded, Virgos excel at problem-solving and offer invaluable advice. They can be overly critical of themselves and others due to their high standards. Despite their reserved nature, they are deeply caring and find joy in helping others.",
              },
              {
                title:"7.Libra (September 23 - October 22)",
                image:"https://cdn.pixabay.com/photo/2017/08/28/19/56/horizontal-2691106_1280.jpg",
                element:"Air",
              traits:"Diplomatic, sociable, fair-minded, and charming.",
              description:"  Libra is symbolized by the scales, representing balance and harmony. Libras are natural diplomats, striving to create equilibrium in all aspects of their lives. They are charming, sociable, and have a keen sense of aesthetics, often drawn to art, beauty, and luxury. However, their desire to please everyone can lead to indecisiveness. They value partnership and often feel most complete when in a harmonious relationship.",
                },
                {
                  title:"8.Scorpio (October 23 - November 21)",
                  image:"https://cdn.pixabay.com/photo/2017/08/28/15/28/scorpio-2689945_1280.jpg",
                  element:"Water",
                traits:"Passionate, resourceful, determined, and mysterious.",
                description:"  Scorpios are known for their intensity and depth of emotion. They are highly perceptive, often seeing beyond the surface to uncover hidden truths. Scorpios are fiercely loyal and protective, but their trust is not easily earned. They approach life with determination and are not afraid to face challenges head-on. While they can be secretive and possessive, Scorpios have a magnetic allure and are often drawn to the mysterious and transformative aspects of life.",
                  },
                  {
                    title:"9.Sagittarius (November 22 - December 21)",
                    image:"https://cdn.pixabay.com/photo/2017/08/28/10/32/contactors-2689092_1280.jpg",
                    element:"Fire",
                  traits:" Adventurous, optimistic, philosophical, and independent.",
                  description:"  Sagittarius is represented by the archer, always aiming high and seeking new horizons. They are known for their adventurous spirit, love of travel, and desire to explore the deeper meanings of life. Sagittarians are optimistic, often bringing light-heartedness and humor to difficult situations. However, their blunt honesty can sometimes come across as tactlessness. They value freedom and are happiest when unbound by routine or restriction.",
                    },
                    {
                      title:"10.Capricorn (December 22 - January 19)",
                      image:"https://cdn.pixabay.com/photo/2017/08/28/15/28/capricorn-2689947_1280.jpg",
                      element:"Earth",
                    traits:" Ambitious, disciplined, responsible, and patient.",
                    description:"  Capricorns are the achievers of the zodiac, known for their determination and strong work ethic. They are goal-oriented, often setting high standards for themselves and others. Capricorns are practical, patient, and willing to put in the hard work to reach their ambitions. They value tradition, structure, and responsibility. While they can sometimes be seen as too serious or rigid, their sense of duty and persistence often lead them to success.",
                      },
                      {
                        title:"11.Aquarius (January 20 - February 18)",
                        image:"https://cdn.pixabay.com/photo/2022/11/26/11/45/aquarius-7617682_1280.jpg",
                        element:"Air",
                      traits:"  Innovative, independent, humanitarian, and unconventional.",
                      description:" Aquarius is the visionary of the zodiac, always thinking ahead and striving for progress. They are known for their unconventional ideas and desire to bring positive change to the world. Aquarians value independence and often march to the beat of their own drum, unafraid to challenge societal norms. While they can be perceived as detached or aloof, their true motivation lies in their desire to help humanity and create a better future.",
                        },
                        {
                          title:"12.Pisces (February 19 - March 20)",
                          image:"https://cdn.pixabay.com/photo/2017/08/27/17/13/fish-2686842_1280.jpg",
                          element:"Water",
                        traits:"  Imaginative, compassionate, artistic, and empathetic.",
                        description:" Pisces are the dreamers and empaths of the zodiac. They possess a rich inner world filled with creativity, intuition, and deep emotions. Pisceans are compassionate, often putting the needs of others before their own. They are drawn to art, music, and anything that allows them to express their feelings. However, their sensitivity can sometimes lead them to retreat into escapism or avoid facing reality. Despite this, they are gentle souls who bring kindness and understanding wherever they go.",
                          },
    ]
    },
    {
      title: "Mercury Retrograde and Its Effects",
      category: "Planetary Influences",
      subhead:"What is Mercury Retrograde?",
      subheadcontent:"Mercury retrograde is an optical illusion that occurs when the planet Mercury appears to move backward in its orbit from our perspective on Earth. It’s not actually moving backward; it just seems that way due to the relative positions of Mercury and Earth around the Sun. This event happens about three to four times a year, each lasting around three weeks.",
      midhead:"The Effects of Mercury Retrograde",
      name: "Rishabh",
      date:"Aug 27,2024",
      img:"https://media.istockphoto.com/id/1382812150/photo/3d-rendered-photo-realistic-planet-photo.jpg?s=612x612&w=0&k=20&c=c2ITd-cHfFXKSZhWGIhnm-MZGHLUTSxGFS7S473eOw4=",
      headcontent:"If you've ever heard someone blame their bad day, miscommunication, or tech glitches on Mercury retrograde, you’re not alone. This astrological event has become notorious for its chaotic energy, but what exactly is Mercury retrograde, and why does it seem to wreak so much havoc in our lives? In this blog, we'll delve into what Mercury retrograde really means, its effects, and how to navigate its turbulent waters.",
     foothead:"The Silver Lining of Mercury Retrograde",
     footdesc:"While Mercury retrograde gets a bad rap, it also serves a valuable purpose. It forces us to slow down, pay attention to details, and reflect on our actions. Rather than fear this cosmic event, embrace it as a time for introspection and growth. It’s a period to pause, reflect, and reset, allowing you to move forward with renewed clarity once Mercury goes direct.",
     finalthoughts:"Mercury retrograde doesn’t have to be a dreaded period of mishaps and miscommunication. By understanding its effects and learning to navigate them with patience and preparedness, you can turn this astrological event into a time of meaningful reflection and personal growth. Remember, it’s not about avoiding Mercury retrograde but embracing the lessons it has to offer.",
     data:[
        {title:"Communication Breakdowns",
          image:"https://media.istockphoto.com/id/1223343058/photo/young-couple-having-argument-at-home.jpg?s=1024x1024&w=is&k=20&c=U3EeS-WP3WXJc2Hh37SpYrYcPDEKJqIvfPyqqJIZhIo=",
          description:" Mercury retrograde is notorious for causing miscommunication, misunderstandings, and conflicts. Emails get lost, messages are misread, and even the simplest conversations can go awry. It’s a time when clear communication seems impossible, and misunderstandings abound.",
          advice:"Double-check your messages, be clear in your communication, and avoid making assumptions. It's also wise to be patient and understanding when things don’t go as planned.",
        },
      {
        title:"Technology Glitches",
        image:"https://media.istockphoto.com/id/658516626/photo/businessman-burying-his-head-uner-a-laptop-asking-for-help.jpg?s=612x612&w=0&k=20&c=9NRtB7xhdHjwLPMm3DB3iuzvR55vKpyLKnhuFCsbelQ=",
        description:" Since Mercury also governs technology, retrograde periods often coincide with tech malfunctions. Expect your computer to crash, your phone to act up, or your favorite app to glitch. Even the most reliable gadgets seem to have a mind of their own during this time.",
        advice:"Back up important files, avoid launching new tech projects, and be prepared for minor annoyances. Having a backup plan for tech-related issues can save you from a lot of frustration.",
      },
      {
        title:"Travel Delays and Mishaps",
        image:"https://cdn.pixabay.com/photo/2018/09/28/15/42/flight-3709560_1280.jpg",
        description:"Mercury’s influence over travel means that during its retrograde, you might experience delays, missed connections, or lost luggage. Travel plans can quickly go off course, leading to unexpected detours and disruptions.",
        advice:" If you must travel during Mercury retrograde, double-check your bookings, allow extra time for delays, and keep your travel documents organized. Flexibility is key!",
      },
      {
        title:"Revisiting the Past",
        image:"https://cdn.pixabay.com/photo/2015/01/13/08/44/pocket-watch-598039_1280.jpg",
        description:"Mercury retrograde is a period of introspection, where old memories, past relationships, and unresolved issues tend to resurface. This can be a time for closure, reflection, and personal growth, but it can also bring up emotions you thought were long buried.",
        advice:"Use this time to reflect rather than react. Reassess old situations with a fresh perspective, and take this opportunity to tie up loose ends or gain closure.",
      },
    {
      title:"Decision-Making Challenges",
      image:"https://cdn.pixabay.com/photo/2020/06/12/20/33/decision-5291766_1280.jpg",
      description:"Decision-making can feel foggy or uncertain during Mercury retrograde. It's often advised to avoid signing contracts, making big purchases, or committing to major decisions during this time, as clarity may be lacking.",
      advice:"If possible, delay major decisions until Mercury goes direct. If you can’t postpone, read the fine print carefully and seek advice from trusted sources.",
    }]
    },
    {
      title: "Love Compatibility in Astrology",
      category: "Relationships",
      name: "Harsh",
      date:"Aug 27,2024",
      img:"https://cdn.pixabay.com/photo/2014/09/07/16/53/couple-437968_1280.jpg",
      headcontent:"Astrology has long been a guide to understanding love and relationships. Whether you're looking for your soulmate, navigating the ups and downs of romance, or simply curious about how the stars influence your connections, astrology offers insights into compatibility based on zodiac signs. In this blog, we’ll explore the role of astrology in love compatibility, how different zodiac signs interact, and what makes certain pairings truly magical.",
      subhead:"What is Love Compatibility in Astrology?",
      subheadcontent:"Astrological love compatibility, also known as synastry, examines the dynamics between two individuals by comparing their zodiac signs, planetary positions, and aspects in their birth charts. This comparison reveals the strengths and challenges within the relationship, highlighting areas of harmony and conflict. While astrology isn't a definitive roadmap to love, it provides valuable insights that can help you better understand yourself and your partner.",
      midhead:"Key Elements of Astrological Compatibility",
      foothead:"How to Use Astrology for Better Relationships ?",
      footdesc:"Knowing your partner’s astrological placements helps you understand their needs, triggers, and communication style. This understanding fosters empathy and patience.Astrology can guide the timing of significant relationship milestones, such as first dates, proposals, or moving in together.Awareness of astrological influences helps identify potential areas of conflict and offers strategies for resolving issues constructively.Use your astrological insights to nurture love, whether through shared activities that align with both partners' signs or celebrating each other's unique qualities.",
      finalthoughts:"Astrology offers a unique lens through which to view love and relationships. While it’s not a guarantee of success or failure, it provides valuable insights that can help navigate the complexities of human connections. Whether you’re exploring new love or deepening an existing bond, the stars can be your guide.",
      data:[
        {
          title:"1.Sun Sign Compatibility",
          image:"https://th.bing.com/th/id/OIP.yZwpHpmXVoYn3w817tI9HQAAAA?rs=1&pid=ImgDetMain",
          description:"The Sun sign, representing one’s core personality, is the most common aspect considered in love compatibility. It reflects basic traits, desires, and the essence of how one expresses love.",
          pairing:"Fire signs (Aries, Leo, Sagittarius) are often energetic and passionate, making them highly compatible with fellow fire signs or air signs (Gemini, Libra, Aquarius) who fuel their excitement.",

        },
        {
          title:"2.Moon Sign Compatibility",
          image:"https://th.bing.com/th/id/OIP.j11MaxO2uaXKSx6hAZi6yQHaE8?rs=1&pid=ImgDetMain",
          description:"The Moon sign governs emotions, needs, and inner desires. Compatibility between Moon signs reflects emotional connection, comfort, and how partners nurture each other.",
          pairing:" A Cancer Moon pairs well with a Pisces Moon, both being water signs that understand deep emotional bonds and offer nurturing energy.",

        },
        {
          title:"3.Rising Sign (Ascendant) Compatibility",
          image:"https://watermark.lovepik.com/photo/50084/5115.jpg_wh1200.jpg",
          description:"The Rising sign influences first impressions, communication style, and outward personality. Compatibility here affects how partners approach the world together and project themselves as a couple.",
          pairing:" A Virgo rising and Capricorn rising may work well together, both being earth signs that value stability, practicality, and a well-organized approach to life.",
        },
        {
          title:"4.Venus Sign Compatibility",
          image:"https://th.bing.com/th/id/OIP.6YB3m1izMmuP06tquUM17wAAAA?w=308&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          description:"Venus, the planet of love and beauty, plays a crucial role in romantic attraction, affection, and how one expresses love. Compatibility of Venus signs reveals the romantic chemistry between partners.",
          pairing:"A Taurus Venus is compatible with a Libra Venus, as both are ruled by Venus and appreciate beauty, sensuality, and harmonious relationships.",
        },
        {
          title:"5.Mars Sign Compatibility",
          image:"https://signsmystery.com/wp-content/uploads/2023/10/314-1.webp",
          description:"Mars governs desire, passion, and how individuals assert themselves. Compatibility here influences the physical side of relationships, from attraction to conflict resolution.",
          pairing:"An Aries Mars and a Scorpio Mars create intense chemistry, driven by passion and a fearless approach to intimacy and challenges.",
        }
      ]
    },
    {
      title: "Festivals Aligned with Astrology",
      category: "Festivals",
      name: "Atul",
      date:"Aug 27,2024",
      img:"https://cdn.pixabay.com/photo/2017/09/22/08/18/diwali-festival-2774745_1280.jpg",
      headcontent:"Astrology has always been intertwined with cultural and religious practices around the world. Many festivals are celebrated in alignment with astrological events, harnessing the power of celestial movements to enhance the significance of these occasions. In this blog, we'll explore various festivals that are deeply connected with astrology, how they are celebrated, and the astrological significance behind them.",
      subhead:"The Role of Astrology in Festivals",
      subheadcontent:"Astrology plays a crucial role in determining the dates, rituals, and significance of many festivals. These celebrations are often timed according to lunar phases, solar cycles, and planetary transits, making them a time to connect with cosmic energies and honor the celestial forces that influence our lives.",
      midhead:"Key Festivals Aligned with Astrology",
      foothead:"Why Festivals Align with Astrology ?",
      footdesc:"Celebrating during astrological events like new moons, full moons, or equinoxes amplifies the cosmic energy, making rituals and prayers more powerful.Many festivals are rooted in ancient traditions that recognized the importance of celestial events. Aligning with astrology brings deeper meaning to these celebrations.Festivals aligned with astrology often mark significant transitions in both nature and human life, offering opportunities for reflection, renewal, and transformation.",
      finalthoughts:"Astrology and festivals are deeply interconnected, offering a unique way to connect with the cosmos and celebrate the cycles of life. Whether you're honoring ancient traditions or creating new ones, understanding the astrological significance behind these festivals can enrich your celebrations and bring you closer to the celestial forces that guide our lives.",
      data:[
        {
          title:"1.Diwali: The Festival of Lights",
          image:"https://cdn.pixabay.com/photo/2019/10/12/06/56/hand-4543318_1280.jpg",
          description:" Diwali, celebrated by millions around the world, is timed with the new moon in the Hindu month of Kartika. This festival symbolizes the victory of light over darkness and is deeply connected to the lunar cycle.",
          AstroSignificance:"Diwali falls on Amavasya (new moon night), representing new beginnings and the triumph of good over evil. The new moon is a powerful time for setting intentions and manifesting desires.",
        },
        {
          title:"2.Chinese New Year",
          image:"https://media.istockphoto.com/id/1626795273/vector/plum-blossom-of-dragon-year.jpg?s=1024x1024&w=is&k=20&c=9d0NNpU_kExr0WVHFxl_5HcnMB8Ei4_Blpu-ShNA7qI=",
          description:"The Chinese New Year, also known as the Lunar New Year, marks the beginning of a new lunar cycle. This festival is based on the Chinese zodiac, which assigns an animal sign to each year.",
          AstroSignificance:"The year is determined by the position of Jupiter, with each year associated with one of the 12 zodiac animals. Celebrations include honoring the ruling animal of the year and setting the tone for the year ahead.",
        },
        {
          title:"3.Easter",
          image:"https://media.istockphoto.com/id/1143266782/photo/happy-easter-note-written-on-eggs-on-the-grass.jpg?s=1024x1024&w=is&k=20&c=KBiITqcyjIorZscJqmR13tVsQCdUU9nz4GGvOyEVw-M=",
          description:"Easter, the Christian festival celebrating the resurrection of Jesus Christ, is closely linked to the spring equinox and the lunar cycle.",
          AstroSignificance:"Easter is celebrated on the first Sunday after the first full moon following the spring equinox, symbolizing rebirth, renewal, and the return of light after the darkness of winter.",
        },
        {
          title:"4.Maha Shivaratri",
          image:"https://cdn.pixabay.com/photo/2020/01/15/07/39/mahashivaratri-4767144_1280.jpg",
          description:"Maha Shivaratri is a Hindu festival dedicated to Lord Shiva, observed on the 14th night of the dark fortnight in the month of Phalguna. It is a night of fasting, meditation, and connecting with divine energy.",
          AstroSignificance:"The timing of Maha Shivaratri is aligned with the waning moon, symbolizing the transcendence of darkness and ignorance. It's a powerful night for spiritual growth and inner transformation.",

        },
        {
          title:"5.Navratri",
          image:"https://media.istockphoto.com/id/1919483202/photo/chandraghanta-devi-for-the-third-navadurga-of-navratri-festival.jpg?s=1024x1024&w=is&k=20&c=QqAEpEvQWtaU-7-jGX1eOKwYZ8pp_nX8aY4fgzeaJJs=",
          description:"Navratri is a nine-night festival dedicated to the goddess Durga, celebrated with great fervor across India. The dates of Navratri are determined by the lunar calendar, aligning with the autumn and spring equinoxes.",
          AstroSignificance:" The nine nights of Navratri are aligned with the phases of the moon, each night honoring a different form of the goddess. The festival represents the triumph of good over evil and the balance of cosmic energies.",
        }
      ]
    }, 
    {
      title: "Tarot  Reading in Astrology",
      category: "Tarot",
      name: "Deepak",
      date:"Aug 27,2024",
      img:"https://cdn.pixabay.com/photo/2022/08/18/20/39/tarot-cards-7395644_1280.jpg",
      headcontent:"Tarot reading, like astrology, is a powerful tool for gaining insights into your life, relationships, and future. When combined, tarot and astrology offer a deeper understanding of the energies at play, providing guidance and clarity. In this blog, we’ll explore the relationship between tarot and astrology, how they complement each other, and the ways you can use them to gain cosmic insights.",
      subhead:"The Connection Between Tarot and Astrology",
      subheadcontent:"Tarot and astrology are both systems of divination, each with its own rich symbolism and tradition. While astrology interprets the influence of celestial bodies on human affairs, tarot taps into the subconscious mind, revealing hidden truths and potential outcomes. When used together, they create a holistic approach to understanding the energies that shape our lives.",
      midhead:"Key Aspects of Tarot Reading in Astrology",
      foothead:"How to Use Tarot and Astrology Together",
      footdesc:"By combining tarot with astrology, you can gain a multi-layered understanding of your life’s challenges and opportunities. This combination allows you to see both the cosmic influence and the personal interpretation of your circumstances. Use your birth chart to create a personalized tarot reading that aligns with your astrological signs and transits, offering a more customized approach to divination.Tarot and astrology together can help you navigate difficult periods, such as retrogrades or challenging transits, by providing both predictive insights and advice on how to handle the situation.",
      finalthoughts:"Tarot reading and astrology are powerful tools on their own, but when combined, they offer a profound way to understand and navigate the energies influencing your life. Whether you’re a seasoned practitioner or a curious beginner, exploring the connection between tarot and astrology can deepen your spiritual practice and provide guidance on your life’s journey.",
      data:[
        {
          title:"1.Astrological Associations of Tarot Cards",
          image:"https://cdn.pixabay.com/photo/2015/10/16/11/40/tarot-991041_1280.jpg",
          description:"Each tarot card has a corresponding astrological sign, planet, or element, making it possible to link tarot readings with your birth chart. For example, The Emperor card is associated with Aries, representing authority, leadership, and ambition.",
          example:"The Strength card is connected to Leo, symbolizing courage, determination, and inner strength.",
        },
        {
          title:"2.Using Tarot to Interpret Astrological Transits",
          image:"https://cdn.pixabay.com/photo/2020/02/04/19/06/tarot-4819137_1280.jpg",
          description:"Tarot can be used to gain insights into how astrological transits might affect you. For example, during a Mercury retrograde, pulling the Magician card (associated with Mercury) could indicate a need to be mindful of communication.",
          example:"During a Venus transit in your chart, pulling the Empress card (associated with Venus) could suggest a focus on love, beauty, and abundance.",

        },
        {
          title:"3.Zodiac-Themed Tarot Spreads",
          image:"https://cdn.pixabay.com/photo/2020/08/23/18/17/tarot-5511610_1280.jpg",
          description:"You can create tarot spreads based on the zodiac signs to focus on specific areas of life, such as career, love, or spiritual growth. Each spread aligns with the qualities of the zodiac sign it represents.",
          example:"A Libra-themed tarot spread might focus on balance, relationships, and justice, while a Scorpio-themed spread could delve into transformation and secrets.",
        },
        {
          title:"4.Planetary Influence in Tarot Readings",
          image:"https://th.bing.com/th/id/OIP._uWAuQiZLOxE4_0NngVrrAHaFj?rs=1&pid=ImgDetMain",
          description:"Planets govern different areas of life in astrology, and their influence can be reflected in tarot readings. For example, a tarot reading during a strong Mars influence might reveal themes of conflict, energy, or action.",
          example:"If your reading is under a strong Saturn influence, cards like The Devil or The Tower could signify challenges and the need for discipline.",
        },
        {
          title:"5.Timing Events with Tarot and Astrology",
          image:"https://th.bing.com/th/id/OIP.EmOXDcbR10Enqd4iCtAT-AHaFH?rs=1&pid=ImgDetMain",
          description:"Both tarot and astrology can be used to time important events. For instance, combining the astrological timing of a New Moon with a tarot reading can help set intentions or plan new beginnings.",
          example:"Pulling the Ace of Pentacles during a New Moon in Taurus might suggest a great time to start a financial project or invest in something tangible.",
        }
      ]
    }
    
  ];

  const categories = [
    "Astrology Basics",
    "Planetary Influences",
    "Relationships",
  ];

  return (
    <div>
      <div className={`${ showblur  &&
       "filter blur-sm opacity-50 cursor-not-allowed pointer-events-none relative overflow-hidden h-full"} 
      text-center relative top-24 lg:top-16 mb-16`}>
        <BlogSection blogs={blogs} categories={categories}/>
      </div>
    </div>
  );
};

export default BlogPage;