export type University = {
  id: number
  name: string
  county: string
  type: "Public" | "Private" | "Technical"
  courses: string[]
  cutoff: number
  fees_per_year: number
  website: string
}

export const universities: University[] = [
  {
    id: 1,
    name: "University of Nairobi",
    county: "Nairobi",
    type: "Public",
    courses: ["Computer Science", "Medicine", "Law", "Engineering", "Business"],
    cutoff: 38,
    fees_per_year: 16000,
    website: "https://www.uonbi.ac.ke"
  },
  {
    id: 2,
    name: "Kenyatta University",
    county: "Nairobi",
    type: "Public",
    courses: ["Education", "Computer Science", "Nursing", "Business", "Engineering"],
    cutoff: 36,
    fees_per_year: 16000,
    website: "https://www.ku.ac.ke"
  },
  {
    id: 3,
    name: "Strathmore University",
    county: "Nairobi",
    type: "Private",
    courses: ["Computer Science", "Business", "Law", "Actuarial Science"],
    cutoff: 40,
    fees_per_year: 180000,
    website: "https://www.strathmore.edu"
  },
  {
    id: 4,
    name: "Moi University",
    county: "Uasin Gishu",
    type: "Public",
    courses: ["Medicine", "Engineering", "Law", "Education", "Business"],
    cutoff: 35,
    fees_per_year: 16000,
    website: "https://www.mu.ac.ke"
  },
  {
    id: 5,
    name: "Daystar University",
    county: "Nairobi",
    type: "Private",
    courses: ["Communication", "Computer Science", "Business", "Education", "Psychology"],
    cutoff: 34,
    fees_per_year: 120000,
    website: "https://www.daystar.ac.ke"
  },
  {
    id: 6,
    name: "JKUAT",
    county: "Kiambu",
    type: "Public",
    courses: ["Engineering", "Computer Science", "Agriculture", "Business", "Medicine"],
    cutoff: 37,
    fees_per_year: 16000,
    website: "https://www.jkuat.ac.ke"
  },
  {
    id: 7,
    name: "Egerton University",
    county: "Nakuru",
    type: "Public",
    courses: ["Agriculture", "Engineering", "Education", "Business", "Science"],
    cutoff: 34,
    fees_per_year: 16000,
    website: "https://www.egerton.ac.ke"
  },
  {
    id: 8,
    name: "Maseno University",
    county: "Kisumu",
    type: "Public",
    courses: ["Medicine", "Education", "Business", "Science", "Arts"],
    cutoff: 33,
    fees_per_year: 16000,
    website: "https://www.maseno.ac.ke"
  },
  {
    id: 9,
    name: "Dedan Kimathi University",
    county: "Nyeri",
    type: "Public",
    courses: ["Engineering", "Computer Science", "Business", "Science"],
    cutoff: 36,
    fees_per_year: 16000,
    website: "https://www.dkut.ac.ke"
  },
  {
    id: 10,
    name: "Multimedia University of Kenya",
    county: "Nairobi",
    type: "Public",
    courses: ["Computer Science", "Engineering", "Business", "Media"],
    cutoff: 32,
    fees_per_year: 16000,
    website: "https://www.mmu.ac.ke"
  },
  {
    id: 11,
    name: "United States International University",
    county: "Nairobi",
    type: "Private",
    courses: ["Business", "Psychology", "Computer Science", "Law", "Communication"],
    cutoff: 36,
    fees_per_year: 200000,
    website: "https://www.usiu.ac.ke"
  },
  {
    id: 12,
    name: "Catholic University of Eastern Africa",
    county: "Nairobi",
    type: "Private",
    courses: ["Arts", "Education", "Business", "Law", "Science"],
    cutoff: 32,
    fees_per_year: 90000,
    website: "https://www.cuea.edu"
  },
  {
    id: 13,
    name: "Masinde Muliro University",
    county: "Kakamega",
    type: "Public",
    courses: ["Engineering", "Science", "Business", "Education", "Health Sciences"],
    cutoff: 33,
    fees_per_year: 16000,
    website: "https://www.mmust.ac.ke"
  },
  {
    id: 14,
    name: "Pwani University",
    county: "Kilifi",
    type: "Public",
    courses: ["Marine Science", "Business", "Education", "Science", "Arts"],
    cutoff: 32,
    fees_per_year: 16000,
    website: "https://www.pu.ac.ke"
  },
  {
    id: 15,
    name: "South Eastern Kenya University",
    county: "Kitui",
    type: "Public",
    courses: ["Engineering", "Education", "Business", "Science", "Arts"],
    cutoff: 31,
    fees_per_year: 16000,
    website: "https://www.seku.ac.ke"
  },
  {
    id: 16,
    name: "Karatina University",
    county: "Nyeri",
    type: "Public",
    courses: ["Business", "Education", "Science", "Agriculture", "Arts"],
    cutoff: 30,
    fees_per_year: 16000,
    website: "https://www.karu.ac.ke"
  },
  {
    id: 17,
    name: "Kiriri Womens University",
    county: "Nairobi",
    type: "Private",
    courses: ["Business", "Computer Science", "Education", "Science"],
    cutoff: 28,
    fees_per_year: 80000,
    website: "https://www.kwust.ac.ke"
  },
  {
    id: 18,
    name: "Kenya Methodist University",
    county: "Meru",
    type: "Private",
    courses: ["Business", "Health Sciences", "Education", "Science", "Arts"],
    cutoff: 30,
    fees_per_year: 95000,
    website: "https://www.kemu.ac.ke"
  },
  {
    id: 19,
    name: "Laikipia University",
    county: "Laikipia",
    type: "Public",
    courses: ["Education", "Business", "Science", "Arts", "Agriculture"],
    cutoff: 29,
    fees_per_year: 16000,
    website: "https://www.laikipia.ac.ke"
  },
  {
    id: 20,
    name: "Chuka University",
    county: "Tharaka Nithi",
    type: "Public",
    courses: ["Business", "Education", "Science", "Agriculture", "Arts"],
    cutoff: 29,
    fees_per_year: 16000,
    website: "https://www.chuka.ac.ke"
  },
  {
    id: 21,
    name: "Technical University of Mombasa",
    county: "Mombasa",
    type: "Technical",
    courses: ["Engineering", "Business", "Applied Sciences", "Computer Science", "Built Environment"],
    cutoff: 31,
    fees_per_year: 16000,
    website: "https://www.tum.ac.ke"
  },
  {
    id: 22,
    name: "Kenyatta University - Mombasa Campus",
    county: "Mombasa",
    type: "Public",
    courses: ["Business", "Education", "Nursing", "Computer Science"],
    cutoff: 30,
    fees_per_year: 16000,
    website: "https://www.ku.ac.ke"
  },
  {
    id: 23,
    name: "Kisii University",
    county: "Kisii",
    type: "Public",
    courses: ["Medicine", "Law", "Business", "Computer Science", "Agriculture"],
    cutoff: 33,
    fees_per_year: 16000,
    website: "https://www.kisiiuniversity.ac.ke"
  },
  {
    id: 24,
    name: "Kisii University - Nyamira Campus",
    county: "Nyamira",
    type: "Public",
    courses: ["Business", "Education", "Science"],
    cutoff: 28,
    fees_per_year: 16000,
    website: "https://www.kisiiuniversity.ac.ke"
  },
  {
    id: 25,
    name: "Machakos University",
    county: "Machakos",
    type: "Public",
    courses: ["Business", "Education", "Science", "Engineering", "Agriculture"],
    cutoff: 30,
    fees_per_year: 16000,
    website: "https://www.mksu.ac.ke"
  },
  {
    id: 26,
    name: "Lukenya University",
    county: "Machakos",
    type: "Private",
    courses: ["Business", "Education", "Computer Science", "Theology"],
    cutoff: 26,
    fees_per_year: 75000,
    website: "https://www.lukenyauniversity.ac.ke"
  },
  {
    id: 27,
    name: "University of Eldoret",
    county: "Uasin Gishu",
    type: "Public",
    courses: ["Education", "Agriculture", "Science", "Natural Resources", "Business"],
    cutoff: 31,
    fees_per_year: 16000,
    website: "https://www.uoeld.ac.ke"
  },
  {
    id: 28,
    name: "Moi University - Eldoret Town Campus",
    county: "Uasin Gishu",
    type: "Public",
    courses: ["Law", "Business", "Education", "Computer Science"],
    cutoff: 32,
    fees_per_year: 16000,
    website: "https://www.mu.ac.ke"
  },
  {
    id: 29,
    name: "Garissa University",
    county: "Garissa",
    type: "Public",
    courses: ["Education", "Business", "Science", "Agriculture"],
    cutoff: 27,
    fees_per_year: 16000,
    website: "https://www.gau.ac.ke"
  },
  {
    id: 30,
    name: "University of Embu",
    county: "Embu",
    type: "Public",
    courses: ["Agriculture", "Business", "Science", "Education", "Engineering"],
    cutoff: 29,
    fees_per_year: 16000,
    website: "https://www.embuni.ac.ke"
  },
  {
    id: 31,
    name: "Kenya Methodist University - Embu Campus",
    county: "Embu",
    type: "Private",
    courses: ["Business", "Health Sciences", "Education"],
    cutoff: 28,
    fees_per_year: 95000,
    website: "https://www.kemu.ac.ke"
  },
  {
    id: 32,
    name: "Kisii National Polytechnic",
    county: "Kisii",
    type: "Technical",
    courses: ["Engineering", "Building Technology", "Applied Sciences", "Business"],
    cutoff: 22,
    fees_per_year: 30000,
    website: "https://www.kisiipoly.ac.ke"
  }
]