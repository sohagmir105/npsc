

export const MALE_NAMES = [
  "James", "John", "Robert", "Michael", "William", "David", "Richard", "Joseph", "Thomas", "Charles",
  "Christopher", "Daniel", "Matthew", "Anthony", "Donald", "Mark", "Paul", "Steven", "Andrew", "Kenneth",
  "Joshua", "Kevin", "Brian", "George", "Edward", "Ronald", "Timothy", "Jason", "Jeffrey", "Ryan",
  "Jacob", "Gary", "Nicholas", "Eric", "Jonathan", "Stephen", "Larry", "Justin", "Scott", "Brandon",
  "Benjamin", "Samuel", "Frank", "Gregory", "Raymond", "Alexander", "Patrick", "Jack", "Dennis", "Jerry",
  "Ethan", "Liam", "Mason", "Noah", "Aiden", "Logan", "Lucas", "Jackson", "Elijah", "Oliver"
];

export const FEMALE_NAMES = [
  "Mary", "Patricia", "Jennifer", "Linda", "Elizabeth", "Barbara", "Susan", "Jessica", "Sarah", "Karen",
  "Nancy", "Lisa", "Margaret", "Betty", "Sandra", "Ashley", "Dorothy", "Kimberly", "Emily", "Donna",
  "Michelle", "Carol", "Amanda", "Melissa", "Deborah", "Stephanie", "Rebecca", "Laura", "Sharon", "Cynthia",
  "Kathleen", "Amy", "Shirley", "Angela", "Helen", "Anna", "Brenda", "Pamela", "Nicole", "Samantha",
  "Katherine", "Emma", "Ruth", "Christine", "Catherine", "Debra", "Rachel", "Carolyn", "Janet", "Virginia",
  "Sophia", "Olivia", "Ava", "Isabella", "Mia", "Charlotte", "Amelia", "Harper", "Evelyn", "Abigail"
];

export const LAST_NAMES = [
  "Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor",
  "Anderson", "Thomas", "Jackson", "White", "Harris", "Martin", "Thompson", "Garcia", "Martinez", "Robinson",
  "Clark", "Rodriguez", "Lewis", "Lee", "Walker", "Hall", "Allen", "Young", "Hernandez", "King",
  "Wright", "Lopez", "Hill", "Scott", "Green", "Adams", "Baker", "Gonzalez", "Nelson", "Carter",
  "Mitchell", "Perez", "Roberts", "Turner", "Phillips", "Campbell", "Parker", "Evans", "Edwards", "Collins",
  "Stewart", "Sanchez", "Morris", "Rogers", "Reed", "Cook", "Morgan", "Bell", "Murphy", "Bailey",
  "Rivera", "Cooper", "Richardson", "Cox", "Howard", "Ward", "Torres", "Peterson", "Gray", "Ramirez",
  "Watson", "Brooks", "Kelly", "Sanders", "Price", "Bennett", "Wood", "Barnes", "Ross", "Henderson",
  "Coleman", "Jenkins", "Perry", "Powell", "Long", "Patterson", "Hughes", "Flores", "Washington",
  "Butler", "Simmons", "Foster", "Gonzales", "Bryant", "Alexander", "Russell", "Griffin", "Diaz", "Hayes"
];

export interface CityData {
  name: string;
  pop: number;
}

export const USA_DATA: Record<string, CityData[]> = {
  "Alabama": [
    { name: "Birmingham", pop: 200733 }, { name: "Montgomery", pop: 200603 }, { name: "Huntsville", pop: 215006 }, 
    { name: "Mobile", pop: 187041 }, { name: "Tuscaloosa", pop: 101129 }, { name: "Hoover", pop: 92606 },
    { name: "Dothan", pop: 71072 }, { name: "Auburn", pop: 76143 }, { name: "Decatur", pop: 57938 }
  ],
  "Alaska": [
    { name: "Anchorage", pop: 291247 }, { name: "Fairbanks", pop: 32515 }, { name: "Juneau", pop: 32255 },
    { name: "Sitka", pop: 8458 }, { name: "Ketchikan", pop: 8050 }, { name: "Wasilla", pop: 9054 }
  ],
  "Arizona": [
    { name: "Phoenix", pop: 1608139 }, { name: "Tucson", pop: 542629 }, { name: "Mesa", pop: 504258 }, 
    { name: "Chandler", pop: 275987 }, { name: "Scottsdale", pop: 241361 }, { name: "Glendale", pop: 248325 },
    { name: "Gilbert", pop: 267918 }, { name: "Tempe", pop: 180587 }, { name: "Peoria", pop: 190985 },
    { name: "Surprise", pop: 143148 }, { name: "Yuma", pop: 95548 }
  ],
  "Arkansas": [
    { name: "Little Rock", pop: 202591 }, { name: "Fort Smith", pop: 89142 }, { name: "Fayetteville", pop: 93949 },
    { name: "Springdale", pop: 84161 }, { name: "Jonesboro", pop: 78576 }, { name: "Rogers", pop: 69908 }
  ],
  "California": [
      { name: "Los Angeles", pop: 3898747 }, { name: "San Diego", pop: 1386932 }, { name: "San Jose", pop: 1013240 }, 
      { name: "San Francisco", pop: 873965 }, { name: "Fresno", pop: 542107 }, { name: "Sacramento", pop: 524943 }, 
      { name: "Long Beach", pop: 466742 }, { name: "Oakland", pop: 440646 }, { name: "Bakersfield", pop: 403455 }, 
      { name: "Anaheim", pop: 346824 }, { name: "Santa Ana", pop: 310227 }, { name: "Riverside", pop: 314998 },
      { name: "Stockton", pop: 320804 }, { name: "Irvine", pop: 307670 }, { name: "Chula Vista", pop: 275487 },
      { name: "Fremont", pop: 230504 }, { name: "San Bernardino", pop: 222101 }, { name: "Modesto", pop: 218464 }
  ],
  "Colorado": [
    { name: "Denver", pop: 715522 }, { name: "Colorado Springs", pop: 478961 }, { name: "Aurora", pop: 386261 }, 
    { name: "Fort Collins", pop: 169810 }, { name: "Lakewood", pop: 155984 }, { name: "Thornton", pop: 141867 },
    { name: "Arvada", pop: 124402 }, { name: "Westminster", pop: 116317 }, { name: "Pueblo", pop: 111876 }
  ],
  "Connecticut": [
    { name: "Bridgeport", pop: 148654 }, { name: "New Haven", pop: 134023 }, { name: "Stamford", pop: 135470 }, 
    { name: "Hartford", pop: 121054 }, { name: "Waterbury", pop: 114403 }, { name: "Norwalk", pop: 91184 },
    { name: "Danbury", pop: 86518 }, { name: "New Britain", pop: 74135 }
  ],
  "Delaware": [
    { name: "Wilmington", pop: 70898 }, { name: "Dover", pop: 39403 }, { name: "Newark", pop: 31455 },
    { name: "Middletown", pop: 23192 }, { name: "Smyrna", pop: 12883 }
  ],
  "Florida": [
      { name: "Jacksonville", pop: 949615 }, { name: "Miami", pop: 442241 }, { name: "Tampa", pop: 384959 }, 
      { name: "Orlando", pop: 307573 }, { name: "St. Petersburg", pop: 258308 }, { name: "Hialeah", pop: 223109 }, 
      { name: "Port St. Lucie", pop: 204851 }, { name: "Tallahassee", pop: 196169 }, { name: "Cape Coral", pop: 194016 },
      { name: "Fort Lauderdale", pop: 182760 }, { name: "Pembroke Pines", pop: 171178 }, { name: "Hollywood", pop: 153067 }
  ],
  "Georgia": [
    { name: "Atlanta", pop: 498715 }, { name: "Augusta", pop: 202081 }, { name: "Columbus", pop: 206922 }, 
    { name: "Macon", pop: 157346 }, { name: "Savannah", pop: 147780 }, { name: "Athens", pop: 127315 },
    { name: "Sandy Springs", pop: 108080 }, { name: "South Fulton", pop: 107436 }, { name: "Roswell", pop: 92833 }
  ],
  "Hawaii": [
    { name: "Honolulu", pop: 350964 }, { name: "East Honolulu", pop: 49914 }, { name: "Pearl City", pop: 47698 },
    { name: "Hilo", pop: 44180 }, { name: "Kailua", pop: 40514 }, { name: "Waipahu", pop: 43485 }
  ],
  "Idaho": [
    { name: "Boise", pop: 235684 }, { name: "Meridian", pop: 117635 }, { name: "Nampa", pop: 100200 },
    { name: "Idaho Falls", pop: 64818 }, { name: "Caldwell", pop: 59996 }, { name: "Pocatello", pop: 56320 }
  ],
  "Illinois": [
      { name: "Chicago", pop: 2746388 }, { name: "Aurora", pop: 180542 }, { name: "Naperville", pop: 149540 }, 
      { name: "Joliet", pop: 150362 }, { name: "Rockford", pop: 148655 }, { name: "Springfield", pop: 114394 },
      { name: "Elgin", pop: 114797 }, { name: "Peoria", pop: 113150 }, { name: "Champaign", pop: 88302 }
  ],
  "Indiana": [
    { name: "Indianapolis", pop: 887642 }, { name: "Fort Wayne", pop: 263886 }, { name: "Evansville", pop: 117298 },
    { name: "South Bend", pop: 103453 }, { name: "Carmel", pop: 99757 }, { name: "Fishers", pop: 98977 },
    { name: "Bloomington", pop: 79168 }, { name: "Hammond", pop: 77879 }
  ],
  "Iowa": [
    { name: "Des Moines", pop: 214133 }, { name: "Cedar Rapids", pop: 137710 }, { name: "Davenport", pop: 101724 },
    { name: "Sioux City", pop: 85797 }, { name: "Iowa City", pop: 74828 }, { name: "Waterloo", pop: 67314 }
  ],
  "Kansas": [
    { name: "Wichita", pop: 397532 }, { name: "Overland Park", pop: 197238 }, { name: "Kansas City", pop: 156607 },
    { name: "Olathe", pop: 141290 }, { name: "Topeka", pop: 126587 }, { name: "Lawrence", pop: 94934 }
  ],
  "Kentucky": [
    { name: "Louisville", pop: 633045 }, { name: "Lexington", pop: 322570 }, { name: "Bowling Green", pop: 72294 },
    { name: "Owensboro", pop: 60183 }, { name: "Covington", pop: 40961 }, { name: "Richmond", pop: 36129 }
  ],
  "Louisiana": [
    { name: "New Orleans", pop: 383997 }, { name: "Baton Rouge", pop: 227470 }, { name: "Shreveport", pop: 187112 },
    { name: "Lafayette", pop: 121374 }, { name: "Lake Charles", pop: 84872 }, { name: "Kenner", pop: 66448 }
  ],
  "Maine": [
    { name: "Portland", pop: 68408 }, { name: "Lewiston", pop: 37121 }, { name: "Bangor", pop: 31753 },
    { name: "South Portland", pop: 26498 }, { name: "Auburn", pop: 24061 }
  ],
  "Maryland": [
    { name: "Baltimore", pop: 585708 }, { name: "Frederick", pop: 78171 }, { name: "Rockville", pop: 67117 },
    { name: "Gaithersburg", pop: 69657 }, { name: "Bowie", pop: 58329 }, { name: "Hagerstown", pop: 43527 }
  ],
  "Massachusetts": [
    { name: "Boston", pop: 675647 }, { name: "Worcester", pop: 206518 }, { name: "Springfield", pop: 155929 }, 
    { name: "Cambridge", pop: 118403 }, { name: "Lowell", pop: 115554 }, { name: "Brockton", pop: 105643 },
    { name: "Quincy", pop: 101636 }, { name: "Lynn", pop: 101253 }, { name: "New Bedford", pop: 101079 }
  ],
  "Michigan": [
    { name: "Detroit", pop: 639111 }, { name: "Grand Rapids", pop: 198917 }, { name: "Warren", pop: 139387 }, 
    { name: "Sterling Heights", pop: 134346 }, { name: "Ann Arbor", pop: 123851 }, { name: "Lansing", pop: 112644 },
    { name: "Dearborn", pop: 109976 }, { name: "Livonia", pop: 95535 }
  ],
  "Minnesota": [
    { name: "Minneapolis", pop: 429954 }, { name: "St. Paul", pop: 311527 }, { name: "Rochester", pop: 121395 },
    { name: "Duluth", pop: 86697 }, { name: "Bloomington", pop: 89987 }, { name: "Brooklyn Park", pop: 86478 }
  ],
  "Mississippi": [
    { name: "Jackson", pop: 153701 }, { name: "Gulfport", pop: 72926 }, { name: "Southaven", pop: 54648 },
    { name: "Biloxi", pop: 49449 }, { name: "Hattiesburg", pop: 48730 }
  ],
  "Missouri": [
    { name: "Kansas City", pop: 508090 }, { name: "St. Louis", pop: 301578 }, { name: "Springfield", pop: 169176 },
    { name: "Columbia", pop: 126254 }, { name: "Independence", pop: 123011 }, { name: "Lee's Summit", pop: 101108 }
  ],
  "Montana": [
    { name: "Billings", pop: 117116 }, { name: "Missoula", pop: 73489 }, { name: "Great Falls", pop: 60442 },
    { name: "Bozeman", pop: 53293 }, { name: "Butte", pop: 34494 }
  ],
  "Nebraska": [
    { name: "Omaha", pop: 486051 }, { name: "Lincoln", pop: 291082 }, { name: "Bellevue", pop: 64176 },
    { name: "Grand Island", pop: 53131 }, { name: "Kearney", pop: 33790 }
  ],
  "Nevada": [
    { name: "Las Vegas", pop: 641903 }, { name: "Henderson", pop: 317610 }, { name: "Reno", pop: 264165 }, 
    { name: "North Las Vegas", pop: 262527 }, { name: "Sparks", pop: 108445 }, { name: "Carson City", pop: 58639 }
  ],
  "New Hampshire": [
    { name: "Manchester", pop: 115644 }, { name: "Nashua", pop: 91322 }, { name: "Concord", pop: 43976 },
    { name: "Dover", pop: 32741 }, { name: "Rochester", pop: 32492 }
  ],
  "New Jersey": [
    { name: "Newark", pop: 311549 }, { name: "Jersey City", pop: 292449 }, { name: "Paterson", pop: 159732 }, 
    { name: "Elizabeth", pop: 137298 }, { name: "Lakewood", pop: 135158 }, { name: "Edison", pop: 107588 },
    { name: "Woodbridge", pop: 103639 }, { name: "Toms River", pop: 95438 }, { name: "Hamilton", pop: 92297 }
  ],
  "New Mexico": [
    { name: "Albuquerque", pop: 564559 }, { name: "Las Cruces", pop: 111385 }, { name: "Rio Rancho", pop: 104046 },
    { name: "Santa Fe", pop: 87505 }, { name: "Roswell", pop: 48422 }, { name: "Farmington", pop: 46624 }
  ],
  "New York": [
      { name: "New York City", pop: 8468000 }, { name: "Buffalo", pop: 278349 }, { name: "Rochester", pop: 211328 }, 
      { name: "Yonkers", pop: 211569 }, { name: "Syracuse", pop: 148620 }, { name: "Albany", pop: 99224 },
      { name: "New Rochelle", pop: 79726 }, { name: "Mount Vernon", pop: 73893 }, { name: "Schenectady", pop: 67047 }
  ],
  "North Carolina": [
    { name: "Charlotte", pop: 874579 }, { name: "Raleigh", pop: 467665 }, { name: "Greensboro", pop: 299035 }, 
    { name: "Durham", pop: 283506 }, { name: "Winston-Salem", pop: 249545 }, { name: "Fayetteville", pop: 208501 },
    { name: "Cary", pop: 174721 }, { name: "Wilmington", pop: 115933 }, { name: "High Point", pop: 114059 }
  ],
  "North Dakota": [
    { name: "Fargo", pop: 125990 }, { name: "Bismarck", pop: 73622 }, { name: "Grand Forks", pop: 59166 },
    { name: "Minot", pop: 48377 }, { name: "West Fargo", pop: 38626 }
  ],
  "Ohio": [
    { name: "Columbus", pop: 905748 }, { name: "Cleveland", pop: 372624 }, { name: "Cincinnati", pop: 309317 }, 
    { name: "Toledo", pop: 270871 }, { name: "Akron", pop: 190469 }, { name: "Dayton", pop: 137644 },
    { name: "Parma", pop: 81146 }, { name: "Canton", pop: 70872 }, { name: "Lorain", pop: 65211 }
  ],
  "Oklahoma": [
    { name: "Oklahoma City", pop: 681054 }, { name: "Tulsa", pop: 413066 }, { name: "Norman", pop: 128026 },
    { name: "Broken Arrow", pop: 113540 }, { name: "Edmond", pop: 94428 }, { name: "Lawton", pop: 90381 }
  ],
  "Oregon": [
    { name: "Portland", pop: 652503 }, { name: "Salem", pop: 175535 }, { name: "Eugene", pop: 176654 },
    { name: "Gresham", pop: 114247 }, { name: "Hillsboro", pop: 106447 }, { name: "Beaverton", pop: 97494 },
    { name: "Bend", pop: 99178 }, { name: "Medford", pop: 85824 }
  ],
  "Pennsylvania": [
    { name: "Philadelphia", pop: 1603797 }, { name: "Pittsburgh", pop: 302971 }, { name: "Allentown", pop: 125845 }, 
    { name: "Erie", pop: 94831 }, { name: "Reading", pop: 95112 }, { name: "Scranton", pop: 76328 },
    { name: "Bethlehem", pop: 75781 }, { name: "Lancaster", pop: 58039 }, { name: "Harrisburg", pop: 50099 }
  ],
  "Rhode Island": [
    { name: "Providence", pop: 190934 }, { name: "Cranston", pop: 82934 }, { name: "Warwick", pop: 82672 },
    { name: "Pawtucket", pop: 75604 }, { name: "East Providence", pop: 47139 }, { name: "Woonsocket", pop: 43240 }
  ],
  "South Carolina": [
    { name: "Charleston", pop: 150227 }, { name: "Columbia", pop: 137300 }, { name: "North Charleston", pop: 114852 },
    { name: "Mount Pleasant", pop: 90801 }, { name: "Rock Hill", pop: 74372 }, { name: "Greenville", pop: 70720 }
  ],
  "South Dakota": [
    { name: "Sioux Falls", pop: 192517 }, { name: "Rapid City", pop: 74703 }, { name: "Aberdeen", pop: 28495 },
    { name: "Brookings", pop: 23377 }, { name: "Watertown", pop: 22655 }
  ],
  "Tennessee": [
    { name: "Nashville", pop: 689447 }, { name: "Memphis", pop: 633104 }, { name: "Knoxville", pop: 190740 }, 
    { name: "Chattanooga", pop: 181099 }, { name: "Clarksville", pop: 166722 }, { name: "Murfreesboro", pop: 152769 },
    { name: "Franklin", pop: 83454 }, { name: "Jackson", pop: 68205 }
  ],
  "Texas": [
      { name: "Houston", pop: 2304580 }, { name: "San Antonio", pop: 1434625 }, { name: "Dallas", pop: 1304379 }, 
      { name: "Austin", pop: 961855 }, { name: "Fort Worth", pop: 918915 }, { name: "El Paso", pop: 678815 }, 
      { name: "Arlington", pop: 394266 }, { name: "Corpus Christi", pop: 317863 }, { name: "Plano", pop: 285494 },
      { name: "Laredo", pop: 255205 }, { name: "Lubbock", pop: 257141 }, { name: "Garland", pop: 246018 },
      { name: "Irving", pop: 256684 }, { name: "Amarillo", pop: 200393 }, { name: "Grand Prairie", pop: 196100 }
  ],
  "Utah": [
    { name: "Salt Lake City", pop: 199723 }, { name: "West Valley City", pop: 140230 }, { name: "Provo", pop: 115162 },
    { name: "West Jordan", pop: 116961 }, { name: "Orem", pop: 98129 }, { name: "Sandy", pop: 96904 },
    { name: "St. George", pop: 95342 }, { name: "Ogden", pop: 87321 }
  ],
  "Vermont": [
    { name: "Burlington", pop: 44743 }, { name: "South Burlington", pop: 20292 }, { name: "Rutland", pop: 15807 },
    { name: "Essex Junction", pop: 10590 }, { name: "Barre", pop: 8491 }, { name: "Montpelier", pop: 8074 }
  ],
  "Virginia": [
    { name: "Virginia Beach", pop: 459470 }, { name: "Norfolk", pop: 238005 }, { name: "Chesapeake", pop: 249422 }, 
    { name: "Richmond", pop: 226610 }, { name: "Newport News", pop: 186247 }, { name: "Alexandria", pop: 159467 },
    { name: "Hampton", pop: 137148 }, { name: "Roanoke", pop: 100011 }, { name: "Portsmouth", pop: 97915 }
  ],
  "Washington": [
    { name: "Seattle", pop: 737015 }, { name: "Spokane", pop: 228989 }, { name: "Tacoma", pop: 219346 }, 
    { name: "Vancouver", pop: 190915 }, { name: "Bellevue", pop: 151854 }, { name: "Kent", pop: 136588 },
    { name: "Everett", pop: 110629 }, { name: "Renton", pop: 106785 }, { name: "Spokane Valley", pop: 102976 }
  ],
  "West Virginia": [
    { name: "Charleston", pop: 48864 }, { name: "Huntington", pop: 46842 }, { name: "Morgantown", pop: 30347 },
    { name: "Parkersburg", pop: 29738 }, { name: "Wheeling", pop: 27052 }, { name: "Fairmont", pop: 18416 }
  ],
  "Wisconsin": [
    { name: "Milwaukee", pop: 577222 }, { name: "Madison", pop: 269840 }, { name: "Green Bay", pop: 107395 },
    { name: "Kenosha", pop: 99986 }, { name: "Racine", pop: 77816 }, { name: "Appleton", pop: 75644 },
    { name: "Waukesha", pop: 71158 }, { name: "Eau Claire", pop: 69421 }
  ],
  "Wyoming": [
    { name: "Cheyenne", pop: 65132 }, { name: "Casper", pop: 59038 }, { name: "Laramie", pop: 31407 },
    { name: "Gillette", pop: 33403 }, { name: "Rock Springs", pop: 23526 }, { name: "Sheridan", pop: 18737 }
  ]
};

export const ALL_STATES = Object.keys(USA_DATA).sort();
