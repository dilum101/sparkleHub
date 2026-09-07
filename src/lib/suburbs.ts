export interface SuburbData {
  slug: string;
  name: string;
  region: string;
  nearby: string[];
  blurb: string;
}

export const SUBURBS: SuburbData[] = [
  {
    slug: "richmond",
    name: "Richmond",
    region: "Inner East",
    nearby: ["Collingwood", "Fitzroy", "Hawthorn", "South Yarra"],
    blurb: "From terrace houses on Church Street to modern apartments near Bridge Road, PRIMEORA provides professional house cleaning across Richmond.",
  },
  {
    slug: "fitzroy",
    name: "Fitzroy",
    region: "Inner North",
    nearby: ["Collingwood", "Carlton", "Brunswick", "Richmond"],
    blurb: "Fitzroy's mix of Victorian terraces, warehouses and new builds all get the same meticulous PRIMEORA clean — tailored to your property type.",
  },
  {
    slug: "brunswick",
    name: "Brunswick",
    region: "Inner North",
    nearby: ["Coburg", "Northcote", "Carlton", "Fitzroy"],
    blurb: "Brunswick's vibrant share houses and family homes deserve a reliable cleaner. PRIMEORA serves the whole Brunswick area with eco-friendly products.",
  },
  {
    slug: "st-kilda",
    name: "St Kilda",
    region: "Inner South",
    nearby: ["South Yarra", "Prahran", "Windsor", "Elwood"],
    blurb: "Beachside apartments and heritage homes along Fitzroy Street — PRIMEORA cleans them all to a spotless standard in St Kilda.",
  },
  {
    slug: "south-yarra",
    name: "South Yarra",
    region: "Inner South",
    nearby: ["Prahran", "Toorak", "Richmond", "St Kilda"],
    blurb: "Premium apartments and townhouses in South Yarra deserve a premium clean. PRIMEORA delivers the detail-focused service this suburb demands.",
  },
  {
    slug: "collingwood",
    name: "Collingwood",
    region: "Inner North",
    nearby: ["Fitzroy", "Richmond", "Abbotsford", "Carlton"],
    blurb: "Collingwood's converted warehouses and terrace homes are our specialty. PRIMEORA brings professional cleaning to every corner of Collingwood.",
  },
  {
    slug: "carlton",
    name: "Carlton",
    region: "Inner North",
    nearby: ["Fitzroy", "Brunswick", "Parkville", "Collingwood"],
    blurb: "From student apartments near Melbourne Uni to Victorian terraces, PRIMEORA provides reliable house cleaning throughout Carlton.",
  },
  {
    slug: "prahran",
    name: "Prahran",
    region: "Inner South",
    nearby: ["South Yarra", "Windsor", "St Kilda", "Armadale"],
    blurb: "Prahran's boutique apartments and family homes along High Street get the PRIMEORA treatment — thorough, reliable and eco-friendly.",
  },
  {
    slug: "hawthorn",
    name: "Hawthorn",
    region: "Inner East",
    nearby: ["Camberwell", "Kew", "Richmond", "Glenferrie"],
    blurb: "Hawthorn's leafy streets and grand family homes deserve a cleaning team that matches the standard. PRIMEORA delivers every time.",
  },
  {
    slug: "camberwell",
    name: "Camberwell",
    region: "Inner East",
    nearby: ["Hawthorn", "Box Hill", "Balwyn", "Glen Iris"],
    blurb: "Spacious family homes in Camberwell get the deep clean they deserve. PRIMEORA's team arrives fully equipped and on time.",
  },
  {
    slug: "glen-waverley",
    name: "Glen Waverley",
    region: "South East",
    nearby: ["Box Hill", "Doncaster", "Clayton", "Ringwood"],
    blurb: "Glen Waverley's large family homes and new builds are a perfect fit for PRIMEORA's thorough house cleaning and vacate clean services.",
  },
  {
    slug: "box-hill",
    name: "Box Hill",
    region: "East",
    nearby: ["Glen Waverley", "Doncaster", "Camberwell", "Ringwood"],
    blurb: "Box Hill's growing community of families and professionals trusts PRIMEORA for regular home cleaning and one-off deep cleans.",
  },
  {
    slug: "doncaster",
    name: "Doncaster",
    region: "North East",
    nearby: ["Box Hill", "Templestowe", "Balwyn", "Ringwood"],
    blurb: "Doncaster's spacious family homes and townhouses are no match for our professional cleaning teams. PRIMEORA covers all of Doncaster.",
  },
  {
    slug: "preston",
    name: "Preston",
    region: "North",
    nearby: ["Reservoir", "Northcote", "Coburg", "Thornbury"],
    blurb: "Preston's diverse mix of family homes and units all benefit from PRIMEORA's reliable, eco-friendly cleaning service.",
  },
  {
    slug: "reservoir",
    name: "Reservoir",
    region: "North",
    nearby: ["Preston", "Coburg", "Bundoora", "Northcote"],
    blurb: "Reservoir families trust PRIMEORA for weekly, fortnightly and one-off cleans. We cover all of Reservoir and surrounding suburbs.",
  },
  {
    slug: "coburg",
    name: "Coburg",
    region: "North",
    nearby: ["Brunswick", "Preston", "Reservoir", "Northcote"],
    blurb: "Coburg's character homes and modern townhouses get the same attentive PRIMEORA clean — tailored to your home's needs.",
  },
  {
    slug: "footscray",
    name: "Footscray",
    region: "Inner West",
    nearby: ["Sunshine", "Williamstown", "Newport", "Seddon"],
    blurb: "Footscray's rapidly growing suburb of new apartments and family homes is fully covered by PRIMEORA's professional cleaning service.",
  },
  {
    slug: "sunshine",
    name: "Sunshine",
    region: "West",
    nearby: ["Footscray", "Werribee", "Altona", "Hoppers Crossing"],
    blurb: "Sunshine families and renters needing end-of-lease cleans rely on PRIMEORA for a guaranteed, bond-back clean every time.",
  },
  {
    slug: "toorak",
    name: "Toorak",
    region: "Inner South",
    nearby: ["South Yarra", "Malvern", "Armadale", "Hawthorn"],
    blurb: "Toorak's luxury homes demand the highest standard of cleaning. PRIMEORA's professional team delivers the detail and discretion expected.",
  },
  {
    slug: "northcote",
    name: "Northcote",
    region: "Inner North",
    nearby: ["Thornbury", "Fitzroy", "Preston", "Coburg"],
    blurb: "Northcote's heritage homes and stylish renovations are cleaned with care and precision by PRIMEORA's experienced team.",
  },
  {
    slug: "frankston",
    name: "Frankston",
    region: "South East",
    nearby: ["Mornington", "Cranbourne", "Cheltenham", "Dandenong"],
    blurb: "Frankston families and landlords needing vacate cleans trust PRIMEORA's bond-back guarantee for a stress-free inspection.",
  },
  {
    slug: "dandenong",
    name: "Dandenong",
    region: "South East",
    nearby: ["Frankston", "Springvale", "Clayton", "Berwick"],
    blurb: "PRIMEORA provides professional house cleaning across Dandenong — from regular home maintenance to full end-of-lease cleans.",
  },
  {
    slug: "werribee",
    name: "Werribee",
    region: "West",
    nearby: ["Hoppers Crossing", "Sunshine", "Altona", "Point Cook"],
    blurb: "Werribee's fast-growing residential areas are well served by PRIMEORA. We handle regular cleans, deep cleans and vacate cleans.",
  },
  {
    slug: "ringwood",
    name: "Ringwood",
    region: "East",
    nearby: ["Croydon", "Box Hill", "Doncaster", "Mooroolbark"],
    blurb: "Ringwood homeowners and tenants count on PRIMEORA for reliable, professional cleaning that meets real estate inspection standards.",
  },
];

export function getSuburb(slug: string): SuburbData | undefined {
  return SUBURBS.find((s) => s.slug === slug);
}
