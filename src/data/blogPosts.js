import blog1 from '../assets/blog_organic_cotton.png';
import blog2 from '../assets/blog_market_trends.png';
import blog3 from '../assets/blog_processing_tech.png';
import blogFiber from '../assets/blog_fiber_science.png';
import blogBaling from '../assets/blog_baling_storage.png';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Sustainable Cotton Farming in India',
    excerpt: 'How modern technology and organic practices are revolutionizing the way we grow cotton while protecting our soil.',
    category: 'Sustainability',
    date: 'March 15, 2024',
    image: blog1,
    author: 'Dr. Rajesh Mehta',
    content: [
      'India is rapidly positioning itself as a global leader in sustainable cotton through innovation in farm methodology and holistic eco-friendly practices. At Aarnalaxmi, we partner with farmers to implement soil health programs, drip irrigation, and zero-chemical pest control, reducing carbon footprints while improving yield.',
      'The development of sustainable seed varieties makes fields resilient to climate stress and reduces input costs by 30%. These initiatives lead to superior fiber quality, promoting traceability and long-term value across export markets.',
      'Our vision includes transparent certification (GOTS, BCI) by 2025 for all supply chain stakeholders and full global traceability from seed to shipment.'
    ]
  },
  {
    id: 2,
    title: 'Understanding Global Cotton Market Trends for 2024',
    excerpt: 'An in-depth analysis of supply chain shifts and growing demand for premium certified cotton in European markets.',
    category: 'Market Analysis',
    date: 'March 10, 2024',
    image: blog2,
    author: 'Sanjay Patel',
    content: [
      'Global demand for premium, certified organic cotton is projected to grow by 14% year-over-year. European brands are shifting purchasing towards verified traceable sources that ensure sustainability and labor compliance.',
      'This creates strategic opportunity for Indian exporters who already operate large-scale GOTS and BCI production. Investing in modern warehousing and contamination-free logistics becomes essential to retain margin on high-value bales.',
      'Aarnalaxmi remains focused on priority lanes such as Germany, Italy, Turkey, and Bangladesh with tailored offerings in fiber grade and bale size to match mill-specific requirements.'
    ]
  },
  {
    id: 3,
    title: 'The Science of Staple Length: Why Fiber Quality Matters',
    excerpt: 'Exploring the technical aspects of cotton fiber strength and length, and how it impacts high-end textile manufacturing.',
    category: 'Quality Control',
    date: 'March 08, 2024',
    image: blogFiber,
    author: 'Dr. Kavita Rao',
    content: [
      'Staple length is a direct decider for yarn strength and uniformity. Longer staple fibers enable smoother spinning and higher tensile strength, which is critical for premium fabrics.',
      'Our in-house fiber testing lab measures micronaire, strength and uniformity every 12 hours, ensuring each shipment maintains consistent quality levels. Post-harvest handling and gravity separation are vital to keep trash content below 0.2%.',
      'We work with ginners and balers to standardize compression for better fiber longevity during export transport.'
    ]
  },
  {
    id: 4,
    title: 'Innovation in Cotton Processing: Beyond the Ginning',
    excerpt: 'Exploring our new high-tech processing facility that ensures zero contamination and 100% fiber integrity.',
    category: 'Technology',
    date: 'March 05, 2024',
    image: blog3,
    author: 'Vikram Shah',
    content: [
      'Our facility integrates AI-enabled detection and automated cleaning to maximize purity. We deploy smart flow systems that separate incoming stock by grade and track each bale digitally through QR-based traceability.',
      'A closed-loop air filtration system reduces foreign matter and dust to near-zero. This yields cleaner modules for spinning mills and reduces rejects at the count stage.',
      'Technology investments are focused on capacity expansion with zero compromise on quality, aligning with global buyer expectations.'
    ]
  },
  {
    id: 5,
    title: 'Bailing and Storage: Preserving Fiber Quality During Transport',
    excerpt: 'Standardized bailing techniques and humidity-controlled storage that prevent fiber degradation during export.',
    category: 'Logistics',
    date: 'March 01, 2024',
    image: blogBaling,
    author: 'Arjun Khanna',
    content: [
      'Correct bailing pressure and moisture control keep cotton from compressing excessively, avoiding staple breakage. Our warehouses maintain 55-60% relative humidity to stabilize fiber characteristics.',
      'Each bale is sealed with protective covers and tagged with shipment details to avoid mishandling. We use GPS-tracked containers with inert liners to ensure quality through long sea transit.',
      'These procedures are especially critical for high-grade exports destined for fashion and technical fabrics.'
    ]
  },
  {
    id: 6,
    title: 'GOTS vs. BCI: Decoding Cotton Certifications for Buyers',
    excerpt: 'A comprehensive guide to understanding different global sustainability certificates and their impact on branding.',
    category: 'Industry Standards',
    date: 'February 25, 2024',
    image: blog1,
    author: 'Anita Desai',
    content: [
      'GOTS (Global Organic Textile Standard) certifies organic farming plus social criteria, while BCI (Better Cotton Initiative) focuses on improved practices and farmer livelihoods. Each serves different market expectations.',
      'Clients fighting greenwashing select GOTS for full lifecycle traceability. BCI provides broad market acceptance for brands transitioning from conventional supply chains.',
      'Aarnalaxmi operates both schemes and helps buyers choose the right balance of cost, compliance, and branding impact.'
    ]
  },
  {
    id: 7,
    title: 'Soil Health Management: The Secret to High-Yield Cotton',
    excerpt: 'How regenerative farming and soil mapping are helping our farmers produce stronger and whiter cotton fibers.',
    category: 'Environment',
    date: 'February 20, 2024',
    image: blog2,
    author: 'Amit Kumar',
    content: [
      'Crop rotation, green manures and biofertilizers are core to our soil health strategy. These practices increase organic matter and reduce chemical dependency.',
      'We use satellite soil mapping and on-field sensors to adapt nutrient plans block-by-block, improving yield by 18-22%. This translates to stronger fiber with higher micronaire consistency.',
      'Farmers receive training on integrated pest management, protecting biodiversity and long-term land productivity.'
    ]
  },
  {
    id: 8,
    title: 'From Seed to Shirt: The Transparent Supply Chain',
    excerpt: 'How blockchain technology is helping us provide 100% traceability for every bale of cotton we export.',
    category: 'Innovation',
    date: 'February 15, 2024',
    image: blog3,
    author: 'Priya Sharma',
    content: [
      'Blockchain records each stage: seed selection, farm inputs, ginning, processing, baling, and shipping. Buyers can verify source origin with a QR scan to access quality documentation.',
      'This transparency cuts audit timelines and builds confidence with международные бренды looking for seríous ESG credentials.',
      'Our road map includes live shipment updates and buyer-specific sustainability scorecards in 2025.'
    ]
  },
  {
    id: 9,
    title: 'The Impact of Climate Change on Cotton Fiber Strength',
    excerpt: 'Adapting to changing weather patterns with resilient seed varieties and smart irrigation systems.',
    category: 'Research',
    date: 'February 10, 2024',
    image: blogFiber,
    author: 'Dr. Rajesh Mehta',
    content: [
      'Heat stress reduces fiber length and breaks staple. We introduced drought-tolerant genotypes that maintain strength under higher temperatures.',
      'Water-efficient furrow systems and sensors help conserve water while keeping soil conditions optimal. Climate data modeling forecasts pest cycles to apply preventive measures with minimal spray.',
      'Our research team shares findings openly in partnership forums to scale resilient cotton practice across regions.'
    ]
  },
  {
    id: 10,
    title: 'Export Logistics: Ensuring Contamination-Free Delivery',
    excerpt: 'Our specialized container lining and handling protocols for maintaining Cotton Gold standards worldwide.',
    category: 'Shipping',
    date: 'February 05, 2024',
    image: blogBaling,
    author: 'Vikram Shah',
    content: [
      'Every export container is lined with industrial-grade fabric to prevent moisture, dust, and foreign matter contact. We also pre-cool shipments for hot-weather transit to avoid fiber deterioration.',
      'Bales are labeled by grade, density and moisture, ensuring rapid customs checks and smooth port handling. Our compliance team coordinates with Customs House Agents to expedite clearance.',
      'We provide buyers with an electronic quality certificate and freight tracking updates until final delivery.'
    ]
  }
];

export default blogPosts;
