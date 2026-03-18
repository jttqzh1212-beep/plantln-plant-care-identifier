export interface Plant {
  slug: string
  name: string
  commonName: string
  family: string
  description: string
  care: {
    watering: string
    light: string
    temperature: string
    humidity: string
    soil: string
  }
  tips: string[]
  faq: { q: string; a: string }[]
}

export const plants: Plant[] = [
  {
    slug: 'monstera',
    name: 'Monstera deliciosa',
    commonName: 'Swiss Cheese Plant',
    family: 'Araceae',
    description: 'Monstera deliciosa is a tropical plant famous for its large, glossy leaves with natural holes. It\'s one of the most popular houseplants worldwide.',
    care: {
      watering: 'Every 1–2 weeks, allow soil to dry out between waterings',
      light: 'Bright indirect light; tolerates low light',
      temperature: '18–30°C (65–85°F)',
      humidity: 'High humidity preferred (60%+)',
      soil: 'Well-draining potting mix with perlite',
    },
    tips: [
      'Wipe leaves with a damp cloth to keep them dust-free',
      'Provide a moss pole for support as it grows',
      'Yellow leaves usually mean overwatering',
      'Rotate the pot for even growth',
    ],
    faq: [
      { q: 'Why are my Monstera leaves turning yellow?', a: 'Usually caused by overwatering or poor drainage. Let the soil dry out more between waterings.' },
      { q: 'How do I make my Monstera grow faster?', a: 'Provide bright indirect light, fertilize monthly in spring/summer, and keep humidity high.' },
    ],
  },
  {
    slug: 'pothos',
    name: 'Epipremnum aureum',
    commonName: 'Golden Pothos',
    family: 'Araceae',
    description: 'Pothos is one of the easiest houseplants to grow, known for its trailing vines and heart-shaped leaves. Perfect for beginners.',
    care: {
      watering: 'Every 1–2 weeks; let top inch of soil dry out',
      light: 'Low to bright indirect light',
      temperature: '15–30°C (60–85°F)',
      humidity: 'Average household humidity is fine',
      soil: 'Any well-draining potting mix',
    },
    tips: [
      'Can grow in water alone — great for propagation',
      'Trim leggy vines to encourage bushier growth',
      'Toxic to pets — keep out of reach',
      'Variegation fades in low light',
    ],
    faq: [
      { q: 'Can pothos grow in low light?', a: 'Yes, but variegated varieties may lose their pattern. All-green varieties do best in low light.' },
      { q: 'How do I propagate pothos?', a: 'Cut a stem just below a node and place in water or soil. Roots appear in 2–4 weeks.' },
    ],
  },
  {
    slug: 'snake-plant',
    name: 'Dracaena trifasciata',
    commonName: 'Snake Plant',
    family: 'Asparagaceae',
    description: 'The snake plant is nearly indestructible, making it ideal for beginners. Its upright, sword-like leaves add a modern touch to any space.',
    care: {
      watering: 'Every 2–6 weeks; very drought tolerant',
      light: 'Low to bright indirect light',
      temperature: '15–30°C (60–85°F)',
      humidity: 'Tolerates dry air well',
      soil: 'Sandy, well-draining cactus mix',
    },
    tips: [
      'Overwatering is the #1 killer — when in doubt, don\'t water',
      'Great air purifier according to NASA studies',
      'Can survive weeks without water',
      'Avoid cold drafts and frost',
    ],
    faq: [
      { q: 'How often should I water my snake plant?', a: 'In summer, every 2–3 weeks. In winter, once a month or less. Always check that soil is completely dry first.' },
      { q: 'Why is my snake plant drooping?', a: 'Usually overwatering or root rot. Check the roots and repot in fresh dry soil if needed.' },
    ],
  },
  {
    slug: 'fiddle-leaf-fig',
    name: 'Ficus lyrata',
    commonName: 'Fiddle Leaf Fig',
    family: 'Moraceae',
    description: 'The fiddle leaf fig is a statement plant with large, violin-shaped leaves. It requires consistent care but rewards with dramatic beauty.',
    care: {
      watering: 'Every 1–2 weeks; let top 2 inches dry out',
      light: 'Bright indirect light; some direct morning sun',
      temperature: '16–24°C (60–75°F)',
      humidity: '30–65% humidity',
      soil: 'Well-draining, nutrient-rich potting mix',
    },
    tips: [
      'Hates being moved — find a good spot and leave it',
      'Wipe leaves monthly to maximize light absorption',
      'Brown spots on edges = underwatering or low humidity',
      'Brown spots in the middle = overwatering',
    ],
    faq: [
      { q: 'Why is my fiddle leaf fig dropping leaves?', a: 'Usually stress from being moved, temperature changes, or inconsistent watering. Keep conditions stable.' },
      { q: 'How much light does a fiddle leaf fig need?', a: 'At least 6 hours of bright indirect light daily. A north or east-facing window works well.' },
    ],
  },
  {
    slug: 'peace-lily',
    name: 'Spathiphyllum wallisii',
    commonName: 'Peace Lily',
    family: 'Araceae',
    description: 'Peace lilies are elegant plants that thrive in low light and produce beautiful white flowers. They\'re also excellent air purifiers.',
    care: {
      watering: 'Every 1–2 weeks; keep soil slightly moist',
      light: 'Low to medium indirect light',
      temperature: '18–27°C (65–80°F)',
      humidity: 'High humidity preferred',
      soil: 'Rich, well-draining potting mix',
    },
    tips: [
      'Drooping leaves are a sign it needs water',
      'Mist leaves regularly to boost humidity',
      'Toxic to pets and humans if ingested',
      'Fertilize monthly in spring and summer',
    ],
    faq: [
      { q: 'Why won\'t my peace lily bloom?', a: 'Needs more light or a slight temperature drop at night. Move to a brighter spot and fertilize with a bloom booster.' },
      { q: 'Why are the leaves turning brown?', a: 'Usually low humidity, fluoride in tap water, or too much direct sun. Use filtered water and mist regularly.' },
    ],
  },
  {
    slug: 'rubber-plant',
    name: 'Ficus elastica',
    commonName: 'Rubber Plant',
    family: 'Moraceae',
    description: 'The rubber plant features large, glossy leaves in deep green or burgundy. It\'s a fast grower that can become a stunning indoor tree.',
    care: {
      watering: 'Every 1–2 weeks; let top inch dry out',
      light: 'Bright indirect light',
      temperature: '15–30°C (60–85°F)',
      humidity: 'Average to high humidity',
      soil: 'Well-draining potting mix',
    },
    tips: [
      'Wipe leaves with a damp cloth to keep them shiny',
      'Prune in spring to control height',
      'Milky sap can irritate skin — wear gloves when pruning',
      'Repot every 1–2 years in spring',
    ],
    faq: [
      { q: 'Why are my rubber plant leaves falling off?', a: 'Usually overwatering, low light, or temperature stress. Check roots for rot and move to a brighter spot.' },
      { q: 'How fast does a rubber plant grow?', a: 'In good conditions, up to 30–60cm per year. Bright light and regular fertilizing speed up growth.' },
    ],
  },
  {
    slug: 'aloe-vera',
    name: 'Aloe barbadensis miller',
    commonName: 'Aloe Vera',
    family: 'Asphodelaceae',
    description: 'Aloe vera is a succulent known for its medicinal gel. It\'s incredibly easy to care for and thrives on neglect.',
    care: {
      watering: 'Every 3–4 weeks; very drought tolerant',
      light: 'Bright direct or indirect light',
      temperature: '13–27°C (55–80°F)',
      humidity: 'Low humidity is fine',
      soil: 'Cactus or succulent mix',
    },
    tips: [
      'The gel inside leaves soothes minor burns and skin irritation',
      'Plant in terracotta pots for better drainage',
      'Pups (offsets) can be separated and repotted',
      'Avoid letting water sit in the rosette center',
    ],
    faq: [
      { q: 'Why is my aloe vera turning brown?', a: 'Too much direct sun, overwatering, or root rot. Move to indirect light and reduce watering.' },
      { q: 'How do I harvest aloe vera gel?', a: 'Cut an outer leaf at the base, slice it open, and scoop out the clear gel. Use fresh or store in the fridge.' },
    ],
  },
  {
    slug: 'spider-plant',
    name: 'Chlorophytum comosum',
    commonName: 'Spider Plant',
    family: 'Asparagaceae',
    description: 'Spider plants are cheerful, fast-growing plants that produce cascading "spiderettes." They\'re nearly impossible to kill.',
    care: {
      watering: 'Every 1–2 weeks; let soil dry between waterings',
      light: 'Bright to medium indirect light',
      temperature: '13–27°C (55–80°F)',
      humidity: 'Average household humidity',
      soil: 'Well-draining all-purpose potting mix',
    },
    tips: [
      'Spiderettes can be propagated in water or soil',
      'Brown tips are usually from fluoride in tap water — use filtered water',
      'Safe for pets and children',
      'Great for hanging baskets',
    ],
    faq: [
      { q: 'How do I propagate spider plant babies?', a: 'Pin a spiderette to a small pot of soil while still attached to the mother plant. Once rooted, cut the runner.' },
      { q: 'Why do spider plant tips turn brown?', a: 'Usually fluoride or chlorine in tap water, low humidity, or dry soil. Switch to filtered water and mist occasionally.' },
    ],
  },
  {
    slug: 'zz-plant',
    name: 'Zamioculcas zamiifolia',
    commonName: 'ZZ Plant',
    family: 'Araceae',
    description: 'The ZZ plant is a nearly indestructible houseplant with glossy, dark green leaves. It thrives on neglect and tolerates low light.',
    care: {
      watering: 'Every 2–3 weeks; very drought tolerant',
      light: 'Low to bright indirect light',
      temperature: '15–30°C (60–85°F)',
      humidity: 'Tolerates low humidity',
      soil: 'Well-draining potting mix or cactus mix',
    },
    tips: [
      'Stores water in its rhizomes — perfect for forgetful owners',
      'Toxic to pets and humans if ingested',
      'Slow grower but very long-lived',
      'Wipe leaves for a natural shine',
    ],
    faq: [
      { q: 'Can ZZ plants grow in low light?', a: 'Yes, they\'re one of the best low-light plants. They won\'t grow as fast, but they\'ll survive.' },
      { q: 'Why are my ZZ plant leaves turning yellow?', a: 'Almost always overwatering. Let the soil dry completely between waterings.' },
    ],
  },
  {
    slug: 'boston-fern',
    name: 'Nephrolepis exaltata',
    commonName: 'Boston Fern',
    family: 'Lomariopsidaceae',
    description: 'Boston ferns are lush, feathery plants that love humidity. They\'re classic hanging basket plants that add a tropical feel.',
    care: {
      watering: 'Keep soil consistently moist; water 2–3 times per week',
      light: 'Bright indirect light',
      temperature: '15–24°C (60–75°F)',
      humidity: 'High humidity (50%+) essential',
      soil: 'Rich, well-draining potting mix',
    },
    tips: [
      'Mist daily or use a pebble tray with water',
      'Brown fronds = too dry; remove them to encourage new growth',
      'Fertilize monthly in spring and summer',
      'Repot every spring when roots fill the pot',
    ],
    faq: [
      { q: 'Why is my Boston fern turning brown and crispy?', a: 'Low humidity is the most common cause. Mist daily, use a humidifier, or place on a pebble tray.' },
      { q: 'How do I revive a dying Boston fern?', a: 'Trim all brown fronds, soak the root ball in water for 30 minutes, then place in a humid spot with indirect light.' },
    ],
  },
]

export function getPlantBySlug(slug: string): Plant | undefined {
  return plants.find((p) => p.slug === slug)
}
