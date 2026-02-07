 const dentalSchools = [
   {
     name: "Rutgers School of Dental Medicine",
     city: "Newark",
     state: "NJ",
     zip: "07103",
     phone: "(973) 972-4242",
     website: "https://sdm.rutgers.edu",
    notes: "Operates student, resident, and faculty clinics with low-cost treatment",
   },
   {
     name: "NYU College of Dentistry",
     city: "New York",
     state: "NY",
     zip: "10010",
     phone: "(212) 998-9800",
     website: "https://dental.nyu.edu",
     notes: "Operates student treatment clinic",
   },
  {
    name: "UCLA School of Dentistry",
    city: "Los Angeles",
    state: "CA",
    zip: "90095",
    phone: "(310) 825-5123",
    website: "https://www.dentistry.ucla.edu",
    notes: "Offers student, resident, and faculty treatment options with discounted fees for educational institutions",
  },
   {
     name: "University of Michigan School of Dentistry",
     city: "Ann Arbor",
     state: "MI",
     zip: "48109",
     phone: "(734) 763-6933",
     website: "https://dent.umich.edu",
    notes: "Operates student treatment clinic; costs approximately 50% of local private dental practices",
   },
  {
    name: "UTHealth School of Dentistry",
    city: "Houston",
    state: "TX",
    zip: "77054",
    phone: "(713) 486-4000",
    website: "https://dentistry.uth.edu",
    notes: "Student clinic treatment under faculty supervision; emergency clinic initial exam $22, most treatments under $200",
  },
  {
    name: "Harvard School of Dental Medicine",
    city: "Boston",
    state: "MA",
    zip: "02115",
    phone: "(617) 432-1443",
    website: "https://www.hsdm.harvard.edu",
    notes: "Student and resident treatment at Teaching Practice; lower cost than faculty treatment; some insurance including MassHealth in-network",
  },
  {
    name: "Tufts University School of Dental Medicine",
    city: "Boston",
    state: "MA",
    zip: "02111",
    phone: "(617) 636-6828",
    website: "https://dental.tufts.edu",
    notes: "Dental school clinic costs lower than private practice; Teaching Clinic fees up to 50% lower",
  },
  {
    name: "Boston University Henry M. Goldman School of Dental Medicine",
    city: "Boston",
    state: "MA",
    zip: "02118",
    phone: "(617) 358-8300",
    website: "https://www.bu.edu/dental",
    notes: "Student treatment supervision; costs significantly lower than private practices; new patients accepted continuously",
  },
  {
    name: "Columbia University College of Dental Medicine",
    city: "New York",
    state: "NY",
    zip: "10032",
    phone: "(212) 305-6100",
    website: "https://www.dental.columbia.edu",
    notes: "Educational treatment with lower fees than private practice; accepts Medicaid; no sliding fee scale",
  },
  {
    name: "University of Pennsylvania School of Dental Medicine",
    city: "Philadelphia",
    state: "PA",
    zip: "19104",
    phone: "(215) 898-8965",
    website: "https://www.dental.upenn.edu",
    notes: "Student and resident treatment at education clinic; 50-70% lower average cost; accepts Medicaid",
  },
  {
    name: "Temple University Kornberg School of Dentistry",
    city: "Philadelphia",
    state: "PA",
    zip: "19140",
    phone: "(215) 707-2900",
    website: "https://dentistry.temple.edu",
    notes: "Offers Dental Pass and income-based sliding fee scale; treats PA Medical Assistance patients",
  },
  {
    name: "University of Pittsburgh School of Dental Medicine",
    city: "Pittsburgh",
    state: "PA",
    zip: "15261",
    phone: "(412) 648-8616",
    website: "https://www.dental.pitt.edu",
    notes: "DMD student treatment at General Dentistry Practice; faculty treatment available",
  },
  {
    name: "University of Maryland School of Dentistry",
    city: "Baltimore",
    state: "MD",
    zip: "21201",
    phone: "(410) 706-7101",
    website: "https://www.dental.umaryland.edu",
    notes: "Provides student clinic treatment; student treatment fees lower than private practice",
  },
  {
    name: "Howard University College of Dentistry",
    city: "Washington",
    state: "DC",
    zip: "20059",
    phone: "(202) 806-0007",
    website: "https://dentistry.howard.edu",
    notes: "Operates comprehensive dental clinic; low-cost treatment for public under guidance of experienced dentists",
  },
  {
    name: "Virginia Commonwealth University School of Dentistry",
    city: "Richmond",
    state: "VA",
    zip: "23298",
    phone: "(804) 828-9190",
    website: "https://dentistry.vcu.edu",
    notes: "Student and specialty clinics accept Medicaid, Delta Dental (VA) in-network; no sliding fee scale; student discount plan (6 months $40, exam/X-rays/cleaning up to 80% off, filling 60% off); student clinic initial screening $79",
  },
  {
    name: "University of North Carolina Adams School of Dentistry",
    city: "Chapel Hill",
    state: "NC",
    zip: "27514",
    phone: "(919) 537-3737",
    website: "https://dentistry.unc.edu",
    notes: "Student clinic low cost (approx. 3 hours); accepts Medicaid and Delta Dental; no sliding fee scale or free treatment; some specialty clinics about 50% of private fees",
  },
  {
    name: "East Carolina University School of Dental Medicine",
    city: "Greenville",
    state: "NC",
    zip: "27834",
    phone: "(252) 737-7834",
    website: "https://dental.ecu.edu",
    notes: "Student and resident clinic costs lower than private practice; accepts Medicaid and most private insurance; initial screening free (excluding radiography costs)",
  },
  {
    name: "University of Florida College of Dentistry",
    city: "Gainesville",
    state: "FL",
    zip: "32610",
    phone: "(352) 273-6700",
    website: "https://dental.ufl.edu",
    notes: "Student and resident clinic fees approximately 50%/80% of private; accepts extensive group insurance and Medicaid; assigned to student/resident/faculty clinic after screening",
  },
  {
    name: "Nova Southeastern University College of Dental Medicine",
    city: "Fort Lauderdale",
    state: "FL",
    zip: "33328",
    phone: "(954) 262-7500",
    website: "https://dental.nova.edu",
    notes: "Student and resident clinics with discounted fees and long appointments; some off-site clinics accept Medicaid; CareCredit available; operates Davie emergency walk-in clinic",
  },
  {
    name: "University of Alabama at Birmingham School of Dentistry",
    city: "Birmingham",
    state: "AL",
    zip: "35294",
    phone: "(205) 934-3000",
    website: "https://www.uab.edu/dentistry",
    notes: "Student and resident clinic low cost (up to approx. 50% less than private); Blue Cross AL and MetLife in-network; Medicaid and Medicare accepted; payment on day of treatment",
  },
  {
    name: "Louisiana State University Health Sciences Center School of Dentistry",
    city: "New Orleans",
    state: "LA",
    zip: "70119",
    phone: "(504) 619-8700",
    website: "https://www.lsusd.lsuhsc.edu",
    notes: "Student clinic costs significantly lower than private; accepts Medicaid (especially pediatric and dentures); initial evaluation appointment fee $140 (applied to future treatment); student treatment takes 3-4 hours",
  },
  {
    name: "University of Tennessee Health Science Center College of Dentistry",
    city: "Memphis",
    state: "TN",
    zip: "38103",
    phone: "(901) 448-6200",
    website: "https://www.uthsc.edu/dentistry",
    notes: "Student clinic treatment fees lower than private; assigned after screening; payment at start of treatment; insurance claims submitted by patient",
  },
  {
    name: "University of Kentucky College of Dentistry",
    city: "Lexington",
    state: "KY",
    zip: "40508",
    phone: "(859) 323-8085",
    website: "https://dentistry.uky.edu",
    notes: "Operates student, resident, and faculty clinics; student clinic costs approximately 30-50% lower than private; emergency clinic evaluation fee $132",
  },
  {
    name: "University of Louisville School of Dentistry",
    city: "Louisville",
    state: "KY",
    zip: "40202",
    phone: "(502) 852-5096",
    website: "https://louisville.edu/dentistry",
    notes: "Student clinic costs up to 50% lower than private; accepts Kentucky Medicaid, commercial insurance, and Medicare (medical only); non-refundable $75 after screening appointment; treatment takes up to 3 hours",
  },
  {
    name: "The Ohio State University College of Dentistry",
    city: "Columbus",
    state: "OH",
    zip: "43210",
    phone: "(614) 688-3763",
    website: "https://dentistry.osu.edu",
    notes: "Student clinic costs 40-50% lower than Columbus average; accepts insurance including Medicaid and Delta Dental; screening costs $118-$170; treatment takes about 3 hours",
  },
  {
    name: "Case Western Reserve University School of Dental Medicine",
    city: "Cleveland",
    state: "OH",
    zip: "44106",
    phone: "(216) 368-8730",
    website: "https://case.edu/dental",
    notes: "Student comprehensive clinic provides treatment under supervising dentist; appointments may take half a day; fees about 40-60% lower than private; accepts Medicaid",
  },
  {
    name: "University of Minnesota School of Dentistry",
    city: "Minneapolis",
    state: "MN",
    zip: "55455",
    phone: "(612) 625-2495",
    website: "https://dentistry.umn.edu",
    notes: "Operates student comprehensive treatment clinic (under faculty supervision); costs about 30% lower than Twin Cities average; accepts most private insurance, Medical Assistance, and MinnesotaCare; interest-free installment payments available",
  },
  {
    name: "University of Iowa College of Dentistry",
    city: "Iowa City",
    state: "IA",
    zip: "52242",
    phone: "(319) 335-7499",
    website: "https://dentistry.uiowa.edu",
    notes: "Operates student clinic; accepts and bills most private insurance; participates in Iowa Medicaid and Dental Wellness Plan (does not accept other state Medicaid); interest-free installment payments available for high-cost treatments",
  },
  {
    name: "Marquette University School of Dentistry",
    city: "Milwaukee",
    state: "WI",
    zip: "53233",
    phone: "(414) 288-6790",
    website: "https://www.marquette.edu/dentistry",
    notes: "Dental school student clinic costs about 50% lower than private; accepts Wisconsin Medicaid (ForwardHealth); full payment required at each visit",
  },
  {
    name: "University of Illinois Chicago College of Dentistry",
    city: "Chicago",
    state: "IL",
    zip: "60612",
    phone: "(312) 996-7555",
    website: "https://dentistry.uic.edu",
    notes: "Education clinic offers discounted fees; accepts Delta Dental IL and Medicaid (some clinics); payment at time of treatment (no installment payments)",
  },
  {
    name: "Indiana University School of Dentistry",
    city: "Indianapolis",
    state: "IN",
    zip: "46202",
    phone: "(317) 274-7433",
    website: "https://dentistry.iu.edu",
    notes: "Significantly lower fees than private practice; accepts various insurance and Medicaid; installment payments available for high-cost treatments after contract",
  },
  {
    name: "University of Missouri-Kansas City School of Dentistry",
    city: "Kansas City",
    state: "MO",
    zip: "64108-2784",
    phone: "(816) 235-2100",
    website: "https://dentistry.umkc.edu",
    notes: "Student and resident clinic costs 1/3 to 1/2 of private; accepts Missouri and Kansas Medicaid; full payment on day of treatment",
  },
  {
    name: "University of Nebraska Medical Center College of Dentistry",
    city: "Lincoln",
    state: "NE",
    zip: "68583-0740",
    phone: "(402) 472-1333",
    website: "https://www.unmc.edu/dentistry",
    notes: "Significantly lower fees than region; accepts Ameritas, BCBS, and Nebraska Medicaid (new Medicaid after 2025-03 only for pediatric and specialty training clinics)",
  },
  {
    name: "Creighton University School of Dentistry",
    city: "Omaha",
    state: "NE",
    zip: "68102",
    phone: "(402) 280-5990",
    website: "https://www.creighton.edu/dentistry",
    notes: "Education-based treatment with lower costs than region; accepts most insurance and Nebraska/Iowa Medicaid; same-day payment principle",
  },
  {
    name: "University of Colorado School of Dental Medicine",
    city: "Aurora",
    state: "CO",
    zip: "80045",
    phone: "(303) 724-6900",
    website: "https://dental.cuanschutz.edu",
    notes: "Student clinic costs up to 50% lower than local private practice; accepts Health First Colorado (Medicaid); Delta Dental in-network (other insurance may be out-of-network); student clinic denture discount $249/arch",
  },
  {
    name: "University of Washington School of Dentistry",
    city: "Seattle",
    state: "WA",
    zip: "98195-6365",
    phone: "(206) 616-6996",
    website: "https://dental.washington.edu",
    notes: "Student clinic costs about 30-40% lower than Seattle private practice; accepts Apple Health (Medicaid); no sliding fee scale; UW Community Dental Plan for Medicaid-eligible offers up to 85% discount off average",
  },
  {
    name: "Oregon Health & Science University School of Dentistry",
    city: "Portland",
    state: "OR",
    zip: "97201-5042",
    phone: "(503) 494-8867",
    website: "https://www.ohsu.edu/school-of-dentistry",
    notes: "Comprehensive education and specialty clinic costs 30-40% lower than local private practice; accepts Oregon Health Plan (Medicaid) and Washington Apple Health; accepts most Delta Dental and BCBS",
  },
  {
    name: "University of Utah School of Dentistry",
    city: "Salt Lake City",
    state: "UT",
    zip: "84108",
    phone: "(801) 587-6453",
    website: "https://dentistry.utah.edu",
    notes: "Contact verified",
  },
  {
    name: "Midwestern University College of Dental Medicine-Arizona",
    city: "Glendale",
    state: "AZ",
    zip: "85308",
    phone: "(623) 572-3805",
    website:
      "https://www.midwestern.edu/academics/degrees-programs/doctor-dental-medicine-program/college-dental-medicine-arizona",
    notes: "Contact verified",
  },
  {
    name: "University of Nevada, Las Vegas School of Dental Medicine",
    city: "Las Vegas",
    state: "NV",
    zip: "89106-4124",
    phone: "(702) 774-2400",
    website: "https://www.unlv.edu/dental",
    notes: "Contact verified",
  },
  {
    name: "Roseman University College of Dental Medicine",
    city: "South Jordan",
    state: "UT",
    zip: "84095",
    phone: "(801) 878-1200",
    website: "https://www.roseman.edu",
    notes: "Contact verified",
  },
  {
    name: "University of the Pacific Arthur A. Dugoni School of Dentistry",
    city: "San Francisco",
    state: "CA",
    zip: "94103",
    phone: "(415) 929-6486",
    website: "https://www.pacific.edu/dental",
    notes: "Contact verified",
  },
  {
    name: "USC Herman Ostrow School of Dentistry",
    city: "Los Angeles",
    state: "CA",
    zip: "90089-0641",
    phone: "(213) 740-2800",
    website: "https://dentistry.usc.edu",
    notes: "Contact verified",
  },
  {
    name: "UCSF School of Dentistry",
    city: "San Francisco",
    state: "CA",
    zip: "94143",
    phone: "(415) 476-1891",
    website: "https://dentschool.ucsf.edu",
    notes: "Contact verified",
  },
  {
    name: "Loma Linda University School of Dentistry",
    city: "Loma Linda",
    state: "CA",
    zip: "92350",
    phone: "(909) 558-4621",
    website: "https://dentistry.llu.edu",
    notes: "Contact verified",
  },
  {
    name: "Western University of Health Sciences College of Dental Medicine",
    city: "Pomona",
    state: "CA",
    zip: "91766",
    phone: "(909) 469-5441",
    website: "https://www.westernu.edu/dentistry",
    notes: "Contact verified",
  },
  {
    name: "Midwestern University College of Dental Medicine-Illinois",
    city: "Downers Grove",
    state: "IL",
    zip: "60515",
    phone: "(630) 743-4500",
    website: "https://clinics.midwestern.edu/downers-grove-clinic/dental-institute-il",
    notes: "Contact verified",
  },
  {
    name: "Texas A&M College of Dentistry",
    city: "Dallas",
    state: "TX",
    zip: "75246",
    phone: "(214) 828-8100",
    website: "https://dentistry.tamu.edu",
    notes: "Contact verified",
  },
  {
    name: "UT Health San Antonio School of Dentistry",
    city: "San Antonio",
    state: "TX",
    zip: "78229",
    phone: "(210) 450-3700",
    website: "https://uthscsa.edu/dental",
    notes: "Contact verified",
  },
  {
    name: "University of Oklahoma College of Dentistry",
    city: "Oklahoma City",
    state: "OK",
    zip: "73117",
    phone: "(405) 271-7744",
    website: "https://dentistry.ouhsc.edu",
    notes: "Contact verified",
  },
  {
    name: "University of Arkansas for Medical Sciences College of Dentistry",
    city: "Little Rock",
    state: "AR",
    zip: "72205",
    phone: "(501) 526-7619",
    website: "https://uamshealth.com/expertise/dental-care/",
    notes: "Contact verified",
  },
  {
    name: "University of Mississippi Medical Center School of Dentistry",
    city: "Jackson",
    state: "MS",
    zip: "39216",
    phone: "(601) 984-6155",
    website:
      "https://umc.edu/Healthcare/Dentistry-and-Oral-Health/Dentistry_and_Oral_Health_Home.html",
    notes: "Contact verified",
  },
  {
    name: "Meharry Medical College School of Dentistry",
    city: "Nashville",
    state: "TN",
    zip: "37208",
    phone: "(615) 327-6900",
    website: "https://meharry.edu/meharry-clinics/dental-clinic/",
    notes: "Contact verified",
  },
  {
    name: "University of Detroit Mercy School of Dentistry",
    city: "Detroit",
    state: "MI",
    zip: "48208",
    phone: "(313) 494-6700",
    website: "https://dentalpatients.udmercy.edu/",
    notes: "Contact verified",
  },
  {
    name: "Touro College of Dental Medicine",
    city: "Hawthorne",
    state: "NY",
    zip: "10532",
    phone: "(914) 594-2700",
    website: "https://dental.touro.edu/patients/ny/location--contact/",
    notes: "Contact verified",
  },
  {
    name: "University of New England College of Dental Medicine",
    city: "Portland",
    state: "ME",
    zip: "04103",
    phone: "(207) 221-4747",
    website: "https://www.une.edu/dentalmedicine",
    notes: "Contact verified",
  },
  {
    name: "University at Buffalo School of Dental Medicine",
    city: "Buffalo",
    state: "NY",
    zip: "14214",
    phone: "(716) 560-5127",
    website: "https://dental.buffalo.edu",
    notes: "Contact verified",
  },
  {
    name: "University of Connecticut School of Dental Medicine",
    city: "Farmington",
    state: "CT",
    zip: "06030",
    phone: "(860) 679-7600",
    website: "https://dentalmedicine.uconn.edu",
    notes: "Contact verified",
  },
  {
    name: "LECOM School of Dental Medicine",
    city: "Bradenton",
    state: "FL",
    zip: "34211",
    phone: "(941) 405-1600",
    website: "https://lecom.edu/dental/",
    notes: "Contact verified",
  },
  {
    name: "Dental College of Georgia at Augusta University",
    city: "Augusta",
    state: "GA",
    zip: "30912",
    phone: "(706) 721-2371",
    website: "https://www.augusta.edu/dentalmedicine/",
    notes: "Contact verified",
  },
  {
    name: "Southern Illinois University School of Dental Medicine",
    city: "Alton",
    state: "IL",
    zip: "62002",
    phone: "(618) 474-7000",
    website: "https://www.siue.edu/dental/",
    notes: "Contact verified",
  },
  {
    name: "A.T. Still University Missouri School of Dentistry & Oral Health",
    city: "Kirksville",
    state: "MO",
    zip: "63501",
    phone: "(660) 626-2019",
    website: "https://www.atsu.edu/missouri-school-of-dentistry-and-oral-health",
    notes: "Contact verified",
  },
  {
    name: "Kansas City University College of Dental Medicine",
    city: "Joplin",
    state: "MO",
    zip: "64804",
    phone: "(417) 208-0806",
    website: "https://www.kansascity.edu/oral-health-center",
    notes: "Contact verified",
  },
  {
    name: "Stony Brook University School of Dental Medicine",
    city: "Stony Brook",
    state: "NY",
    zip: "11794",
    phone: "(631) 632-8989",
    website: "https://dentistry.stonybrookmedicine.edu",
    notes: "Contact verified",
  },
  {
    name: "High Point University School of Dental Medicine and Oral Health",
    city: "High Point",
    state: "NC",
    zip: "27268",
    phone: "(336) 951-7892",
    website: "https://www.highpoint.edu/dental-medicine/",
    notes: "Contact verified",
  },
  {
    name: "Texas Tech University Health Sciences Center El Paso-Hunt School of Dentistry",
    city: "El Paso",
    state: "TX",
    zip: "79905",
    phone: "(915) 215-6700",
    website: "https://ttdentalcare.com",
    notes: "Contact verified",
  },
  {
    name: "Arizona School of Dentistry & Oral Health",
    city: "Mesa",
    state: "AZ",
    zip: "85206",
    phone: "(480) 248-8100",
    website: "https://www.atsu.edu/arizona-school-of-dentistry-and-oral-health",
    notes: "Contact verified",
  },
  {
    name: "California Northstate University College of Dental Medicine",
    city: "Elk Grove",
    state: "CA",
    zip: "95757",
    phone: "(916) 686-8914",
    website: "https://dentalmedicine.cnsu.edu/",
    notes: "Contact verified",
  },
  {
    name: "Medical University of South Carolina College of Dental Medicine",
    city: "Charleston",
    state: "SC",
    zip: "29425",
    phone: "(843) 792-4892",
    website: "https://dentistry.musc.edu",
    notes: "Contact verified",
  },
  {
    name: "Lincoln Memorial University College of Dental Medicine",
    city: "Knoxville",
    state: "TN",
    zip: "37917",
    phone: "(865) 370-2148",
    website: "https://www.lmunet.edu/college-of-dental-medicine/",
    notes: "Contact verified",
  },
  {
    name: "University of Puerto Rico School of Dental Medicine",
    city: "San Juan",
    state: "PR",
    zip: "00936-5067",
    phone: "(787) 758-2525",
    website: "https://dental.rcm.upr.edu/",
    notes: "Contact verified",
  },
  {
    name: "Universidad Ana G. Mendez School of Dental Medicine",
    city: "Gurabo",
    state: "PR",
    zip: "00778",
    phone: "(787) 743-7979",
    website: "https://uagm.edu/es/school-dental-medicine",
    notes: "Contact verified",
  },
  {
    name: "Ponce Health Sciences University School of Dental Medicine",
    city: "Ponce",
    state: "PR",
    zip: "00716-2347",
    phone: "(787) 840-2575",
    website: "https://phsu.edu/academics/schools/school-of-dental-medicine.php",
    notes: "Contact verified",
  },
 ];
 
const schoolOverrideKey = "guerillaSchoolOverrides";
const schoolBackupKey = "guerillaSchoolBackups";
const schoolChangeLogKey = "guerillaSchoolChangeLog";
let schoolOverrides = JSON.parse(
  localStorage.getItem(schoolOverrideKey) || "{}"
);

const saveSchoolOverrides = () => {
  localStorage.setItem(schoolOverrideKey, JSON.stringify(schoolOverrides));
};

const getEffectiveSchools = (options = {}) => {
  const includeHidden = Boolean(options.includeHidden);
  const merged = dentalSchools.map((school) => ({
    ...school,
    ...(schoolOverrides[school.name] || {}),
  }));
  return includeHidden ? merged : merged.filter((school) => !school.hidden);
};

const requiredFields = ["name", "city", "state", "zip", "phone", "website"];
const coreFields = ["name", "city", "state", "website"];
const contactFields = ["zip", "phone"];
const fieldLabels = {
  name: "School Name",
  city: "City",
  state: "State",
  zip: "ZIP",
  phone: "Phone",
  website: "Website",
};

const sanitizeString = (value) =>
  typeof value === "string" ? value.trim().replace(/\s+/g, " ") : value;

const hasValue = (value) =>
  typeof value === "string" ? value.trim().length > 0 : Boolean(value);

const getMissingFields = (school) =>
  requiredFields.filter((field) => !hasValue(school[field]));

const isSchoolComplete = (school) =>
  requiredFields.every((field) => hasValue(school[field]));

const normalizeSchoolName = (name) => (name || "").trim().toLowerCase();

const getDuplicateNameSet = (schools) => {
  const counts = schools.reduce((acc, school) => {
    const key = normalizeSchoolName(school.name);
    if (!key) return acc;
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
  return new Set(Object.keys(counts).filter((key) => counts[key] > 1));
};

const getBackupHistory = () =>
  JSON.parse(localStorage.getItem(schoolBackupKey) || "[]");

const saveBackupSnapshot = (reason) => {
  const backups = getBackupHistory();
  backups.push({
    timestamp: new Date().toISOString(),
    reason,
    data: getEffectiveSchools({ includeHidden: true }),
  });
  localStorage.setItem(schoolBackupKey, JSON.stringify(backups));
  return backups.length;
};

const getChangeLog = () =>
  JSON.parse(localStorage.getItem(schoolChangeLogKey) || "[]");

const recordChangeLog = (entry) => {
  const logs = getChangeLog();
  logs.push({ timestamp: new Date().toISOString(), ...entry });
  localStorage.setItem(schoolChangeLogKey, JSON.stringify(logs));
  return logs.length;
};

const getSchoolReviewStatus = (school, duplicateNames) => {
  const missingFields = getMissingFields(school);
  const missingCore = missingFields.filter((field) => coreFields.includes(field));
  const missingContact = missingFields.filter((field) =>
    contactFields.includes(field)
  );
  const normalizedName = normalizeSchoolName(school.name);
  const isDuplicate = normalizedName ? duplicateNames.has(normalizedName) : false;
  const isUnidentifiable =
    !hasValue(school.name) ||
    (!hasValue(school.city) && !hasValue(school.state) && !hasValue(school.website));
  const severity = isUnidentifiable
    ? "Unidentifiable"
    : missingCore.length > 0
    ? "Missing Core"
    : missingContact.length > 0
    ? "Missing Contact"
    : "Complete";
  const action = isDuplicate || isUnidentifiable
    ? "Clean up candidate"
    : missingFields.length > 0
    ? "Needs completion"
    : "Normal";
  return {
    missingFields,
    missingCore,
    missingContact,
    isDuplicate,
    isUnidentifiable,
    severity,
    action,
  };
};

const formatLogEntry = (entry) => {
  if (!entry) return "";
  const time = new Date(entry.timestamp).toLocaleString("en-US");
  const action = entry.action === "delete" ? "Deleted" : entry.action || "Changed";
  return `${time} · ${action} · ${entry.name || "Unknown"}`;
};

const buildVerificationReport = (schools) => {
  const duplicateNames = getDuplicateNameSet(schools);
  const statusList = schools.map((school) =>
    getSchoolReviewStatus(school, duplicateNames)
  );
  const total = schools.length;
  const complete = statusList.filter((status) => status.missingFields.length === 0)
    .length;
  const missingCore = statusList.filter((status) => status.missingCore.length > 0)
    .length;
  const missingContact = statusList.filter(
    (status) => status.missingContact.length > 0 && status.missingCore.length === 0
  ).length;
  const unidentifiable = statusList.filter((status) => status.isUnidentifiable)
    .length;
  const duplicates = statusList.filter((status) => status.isDuplicate).length;
  const hiddenCount = schools.filter((school) => school.hidden).length;
  const incomplete = total - complete;
  const errorRate = total > 0 ? (incomplete / total) * 100 : 0;
  return {
    total,
    complete,
    incomplete,
    missingCore,
    missingContact,
    unidentifiable,
    duplicates,
    hiddenCount,
    errorRate,
  };
};

const scriptOutput = document.getElementById("scriptOutput");
const schoolOutput = document.getElementById("schoolOutput");
const stateSelect = document.getElementById("stateSelect");
const schoolCount = document.getElementById("schoolCount");
const dataCoverage = document.getElementById("dataCoverage");
const costOutput = document.getElementById("costOutput");
const checklistContainer = document.getElementById("checklist");
const urgencyOutput = document.getElementById("urgencyOutput");
const membershipOutput = document.getElementById("membershipOutput");
const feeOutput = document.getElementById("feeOutput");
const routeOutput = document.getElementById("routeOutput");
const tagOutput = document.getElementById("tagOutput");
const communityList = document.getElementById("communityList");
const dataJson = document.getElementById("dataJson");
const exportDataButton = document.getElementById("exportData");
const importDataButton = document.getElementById("importData");
const showMissingButton = document.getElementById("showMissing");
const finalizeDataButton = document.getElementById("finalizeData");
const exportReportButton = document.getElementById("exportReport");
const dataEditorList = document.getElementById("dataEditorList");
const saveScriptPresetButton = document.getElementById("saveScriptPreset");
const applyScriptPresetButton = document.getElementById("applyScriptPreset");
const deleteScriptPresetButton = document.getElementById("deleteScriptPreset");
const scriptPresetSelect = document.getElementById("scriptPresetSelect");
const generateScriptButton = document.getElementById("generateScript");
 
const scriptPresetKey = "guerillaScriptPresets";
const getScriptPresets = () =>
  JSON.parse(localStorage.getItem(scriptPresetKey) || "[]");
const saveScriptPresets = (presets) =>
  localStorage.setItem(scriptPresetKey, JSON.stringify(presets));
let lastGeneratedScripts = null;

const languageLabels = {
  ko: "Korean",
  en: "English",
  es: "Español",
};

const getLanguageValue = () =>
  document.getElementById("languageSelect")?.value || "en";

const getScriptFormValues = () => ({
  procedure: document.getElementById("procedure").value,
  payment: document.getElementById("payment").value,
  urgency: document.getElementById("urgency").value,
  scenario: document.getElementById("scenario").value,
  budget: document.getElementById("budget").value,
  tone: document.getElementById("tone").value,
  channel: document.getElementById("channel").value,
  isShort: document.getElementById("shortScript").checked,
  lang: getLanguageValue(),
});

const buildScriptPresetLabel = (preset) => {
  const shortText = preset.isShort ? " · Short" : "";
  const languageLabel =
    languageLabels[preset.lang] || preset.lang || languageLabels.en;
  return `${preset.procedure} · ${preset.payment} · ${preset.urgency} · ${preset.scenario} · ${preset.budget} · ${preset.tone} · ${preset.channel} · ${languageLabel}${shortText}`;
};

const renderScriptPresets = () => {
  const presets = getScriptPresets();
  if (presets.length === 0) {
    scriptPresetSelect.innerHTML =
      '<option value="">No saved presets</option>';
    return;
  }
  scriptPresetSelect.innerHTML = presets
    .map(
      (preset) =>
        `<option value="${preset.id}">${buildScriptPresetLabel(preset)}</option>`
    )
    .join("");
};

renderScriptPresets();

saveScriptPresetButton.addEventListener("click", () => {
  const presets = getScriptPresets();
  const next = { id: String(Date.now()), ...getScriptFormValues() };
  presets.unshift(next);
  saveScriptPresets(presets.slice(0, 20));
  renderScriptPresets();
});

applyScriptPresetButton.addEventListener("click", () => {
  const id = scriptPresetSelect.value;
  if (!id) return;
  const preset = getScriptPresets().find((item) => item.id === id);
  if (!preset) return;
  document.getElementById("procedure").value = preset.procedure;
  document.getElementById("payment").value = preset.payment;
  document.getElementById("urgency").value = preset.urgency;
  document.getElementById("scenario").value = preset.scenario;
  document.getElementById("budget").value = preset.budget;
  document.getElementById("tone").value = preset.tone;
  document.getElementById("channel").value = preset.channel;
  document.getElementById("shortScript").checked = preset.isShort;
  document.getElementById("languageSelect").value = preset.lang || "en";
  generateScriptButton.click();
});

deleteScriptPresetButton.addEventListener("click", () => {
  const id = scriptPresetSelect.value;
  if (!id) return;
  const presets = getScriptPresets().filter((item) => item.id !== id);
  saveScriptPresets(presets);
  renderScriptPresets();
});

generateScriptButton.addEventListener("click", () => {
  const values = getScriptFormValues();
  const { scriptA, scriptB } = buildScripts(values);
  lastGeneratedScripts = { scriptA, scriptB };
  window.lastGeneratedScripts = { scriptA, scriptB };
  if (typeof recordScriptUsage === "function") {
    recordScriptUsage(values);
  }

  scriptOutput.innerHTML = `
    <div class="script-grid">
      <div class="script-card">
        <strong>Option A</strong>
        <div class="button-row">
          <button class="copy-script" data-script="scriptA">Copy A</button>
        </div>
        <div>${scriptA.replaceAll("\n", "<br />")}</div>
      </div>
      <div class="script-card">
        <strong>Option B</strong>
        <div class="button-row">
          <button class="copy-script" data-script="scriptB">Copy B</button>
        </div>
        <div>${scriptB.replaceAll("\n", "<br />")}</div>
      </div>
    </div>
  `;
 });

scriptOutput.addEventListener("click", async (event) => {
  const button = event.target.closest(".copy-script");
  if (!button || !lastGeneratedScripts) return;
  const key = button.dataset.script;
  const text = lastGeneratedScripts[key];
  if (!text) return;
  try {
    await navigator.clipboard.writeText(text);
    const original = button.textContent;
    button.textContent = "Copied";
    setTimeout(() => {
      button.textContent = original;
    }, 1200);
  } catch (error) {
    button.textContent = "Copy failed";
    setTimeout(() => {
      button.textContent = "Retry";
    }, 1200);
  }
});

const costRanges = {
  "Exam/Cleaning": { min: 80, max: 250 },
  "Filling": { min: 150, max: 450 },
  "Root Canal": { min: 700, max: 1600 },
  "Crown": { min: 800, max: 1800 },
  "Extraction/Implant": { min: 900, max: 3500 },
};

const regionMultiplier = {
  "National Average": 1,
  "Major City": 1.2,
  "Mid-Size City": 0.9,
};

document.getElementById("estimateCost").addEventListener("click", () => {
  const procedure = document.getElementById("costProcedure").value;
  const region = document.getElementById("costRegion").value;
  const base = costRanges[procedure];
  const multiplier = regionMultiplier[region] ?? 1;
  const min = Math.round(base.min * multiplier);
  const max = Math.round(base.max * multiplier);
  costOutput.textContent = `${procedure} estimated range: $${min} ~ $${max}\nCosts may be lower when using dental school or community clinics.`;
  if (typeof recordCostEstimate === "function") {
    recordCostEstimate(procedure, region);
  }
});

const checklistItems = [
  "ID and contact info",
  "Recent X-rays or treatment records",
  "Available dates 2-3 options",
  "Budget limit note",
  "Payment method (cash/card/installment) decided",
  "Pain level and duration recorded",
];

const checklistKey = "guerillaChecklist";
const checklistState = JSON.parse(
  localStorage.getItem(checklistKey) || "{}"
);

checklistContainer.innerHTML = checklistItems
  .map((item, index) => {
    const id = `check-${index}`;
    const checked = checklistState[id] ? "checked" : "";
    return `
      <label class="checkbox">
        <input type="checkbox" data-checklist="${id}" ${checked} />
        ${item}
      </label>
    `;
  })
  .join("");

checklistContainer.addEventListener("change", (event) => {
  const target = event.target;
  if (target.matches("[data-checklist]")) {
    checklistState[target.dataset.checklist] = target.checked;
    localStorage.setItem(checklistKey, JSON.stringify(checklistState));
    if (typeof recordChecklistToggle === "function") {
      const id = target.dataset.checklist || "";
      const index = Number.parseInt(id.replace("check-", ""), 10);
      const label = Number.isFinite(index) ? checklistItems[index] : id;
      recordChecklistToggle(label);
    }
  }
});

const urgencyGuide = {
  "Severe Pain": {
    level: "Visit recommended within 24 hours",
    action: "Check contraindications before taking pain relievers, then visit as soon as possible.",
  },
  "Facial Swelling": {
    level: "High possibility of emergency",
    action: "If you have fever or difficulty breathing, consider emergency care immediately.",
  },
  "Bleeding Won't Stop": {
    level: "High possibility of emergency",
    action: "Persistent bleeding requires prompt medical attention.",
  },
  "Broken Tooth": {
    level: "Consultation recommended within 72 hours",
    action: "Even without pain, consultation within 1-3 days is recommended.",
  },
  "Gum Swelling": {
    level: "Consultation recommended within 48 hours",
    action: "If swelling and pain are present, visit promptly.",
  },
  "Pain with Fever": {
    level: "High possibility of emergency",
    action: "Fever combined with pain requires immediate medical attention.",
  },
};

document.getElementById("checkUrgency").addEventListener("click", () => {
  const symptom = document.getElementById("symptomSelect").value;
  const guide = urgencyGuide[symptom];
  urgencyOutput.textContent = `${guide.level}\n${guide.action}`;
});

document.getElementById("membershipGuide").addEventListener("click", () => {
  const target = document.getElementById("membershipInput").value.trim();
  const targetLine = target ? `Target: ${target}\n` : "";
  membershipOutput.textContent = `${targetLine}Inquiry questions:\n- Do you have a membership plan?\n- What are the monthly costs and included items?\n- Are there treatment discounts?\nRecommended keywords:\n- in-house membership plan\n- dental discount plan\n- cash discount`;
});

const feeExplainer = {
  "Exam Fee": "Cost for initial exam, X-rays, and condition assessment.",
  "Material Fee": "Cost for materials used such as resin, crowns, etc.",
  "Lab Fee": "External laboratory cost for prosthesis fabrication.",
  "Anesthesia Fee": "Cost for local anesthesia or additional anesthesia.",
  "Emergency Fee": "Additional cost for urgent response or after-hours treatment.",
};

document.getElementById("feeExplain").addEventListener("click", () => {
  const item = document.getElementById("feeItem").value;
  feeOutput.textContent = feeExplainer[item] || "No information available.";
});

document.getElementById("routeButton").addEventListener("click", () => {
  const from = document.getElementById("fromInput").value.trim();
  const to = document.getElementById("toInput").value.trim();
  if (!to) {
    routeOutput.textContent = "Please enter a destination.";
    return;
  }
  const url = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
    from || "Current Location"
  )}&destination=${encodeURIComponent(to)}`;
  routeOutput.innerHTML = `<a href="${url}" target="_blank" rel="noreferrer">Open Directions</a>`;
});

const tagKey = "guerillaTags";
const tagState = JSON.parse(localStorage.getItem(tagKey) || "{}");

const renderTags = () => {
  tagOutput.innerHTML = Object.entries(tagState)
    .sort((a, b) => b[1] - a[1])
    .map(([tag, count]) => `<span class="tag-item">${tag} · ${count}</span>`)
    .join("");
};

document.querySelectorAll(".chip").forEach((button) => {
  button.addEventListener("click", () => {
    const tag = button.dataset.tag;
    tagState[tag] = (tagState[tag] || 0) + 1;
    localStorage.setItem(tagKey, JSON.stringify(tagState));
    renderTags();
  });
});

document.getElementById("addCustomTag").addEventListener("click", () => {
  const input = document.getElementById("customTagInput");
  const tag = input.value.trim();
  if (!tag) return;
  tagState[tag] = (tagState[tag] || 0) + 1;
  localStorage.setItem(tagKey, JSON.stringify(tagState));
  input.value = "";
  renderTags();
});

renderTags();

const eventKey = "guerillaEvents";
const defaultEvents = [
  {
    title: "Local Community Free Screening",
    date: "Ongoing",
    link: "https://www.healthcare.gov",
  },
  {
    title: "Dental School Low-Cost Treatment Program",
    date: "Year-round",
    link: "https://www.adea.org",
  },
];

const events =
  JSON.parse(localStorage.getItem(eventKey) || "null") || defaultEvents;

const renderEvents = () => {
  communityList.innerHTML = events
    .map((event) => {
      const link = event.link
        ? `<a href="${event.link}" target="_blank" rel="noreferrer">Link</a>`
        : "";
      return `
        <div class="school">
          <strong>${event.title}</strong>
          <span>Date: ${event.date}</span>
          ${link}
        </div>
      `;
    })
    .join("");
};

renderEvents();

document.getElementById("addEvent").addEventListener("click", () => {
  const title = document.getElementById("eventTitle").value.trim();
  const date = document.getElementById("eventDate").value || "TBD";
  const link = document.getElementById("eventLink").value.trim();
  if (!title) return;
  events.unshift({ title, date, link });
  localStorage.setItem(eventKey, JSON.stringify(events));
  document.getElementById("eventTitle").value = "";
  document.getElementById("eventDate").value = "";
  document.getElementById("eventLink").value = "";
  renderEvents();
});
 
const normalizeZip = (zip) =>
  String(zip || "")
    .trim()
    .replace(/\D/g, "")
    .slice(0, 5);

const zipLocationCache = new Map();
const zipCacheKey = "guerillaZipCache";
const zipCacheTtlMs = 1000 * 60 * 60 * 24 * 30;
let zipLocalCache = JSON.parse(localStorage.getItem(zipCacheKey) || "{}");

const saveZipLocalCache = () => {
  localStorage.setItem(zipCacheKey, JSON.stringify(zipLocalCache));
};

const readZipLocalCache = (zip) => {
  const entry = zipLocalCache[zip];
  if (!entry || !entry.ts) return null;
  if (Date.now() - entry.ts > zipCacheTtlMs) return null;
  if (entry.value === null) return null;
  if (Number.isFinite(entry.lat) && Number.isFinite(entry.lon)) {
    return { lat: entry.lat, lon: entry.lon };
  }
  return null;
};

const writeZipLocalCache = (zip, value) => {
  if (value) {
    zipLocalCache[zip] = { lat: value.lat, lon: value.lon, ts: Date.now() };
  } else {
    zipLocalCache[zip] = { value: null, ts: Date.now() };
  }
  saveZipLocalCache();
};

const fetchZipLocation = async (zip) => {
  const normalized = normalizeZip(zip);
  if (!normalized || normalized.length !== 5) return null;
  if (zipLocationCache.has(normalized)) {
    return zipLocationCache.get(normalized);
  }
  const cached = readZipLocalCache(normalized);
  if (cached) {
    zipLocationCache.set(normalized, cached);
    return cached;
  }
  try {
    const response = await fetch(
      `https://api.zippopotam.us/us/${normalized}`
    );
    if (!response.ok) {
      zipLocationCache.set(normalized, null);
      writeZipLocalCache(normalized, null);
      return null;
    }
    const data = await response.json();
    const place = data.places && data.places[0];
    if (!place) {
      zipLocationCache.set(normalized, null);
      writeZipLocalCache(normalized, null);
      return null;
    }
    const lat = Number.parseFloat(place.latitude);
    const lon = Number.parseFloat(place.longitude);
    if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
      zipLocationCache.set(normalized, null);
      writeZipLocalCache(normalized, null);
      return null;
    }
    const value = { lat, lon };
    zipLocationCache.set(normalized, value);
    writeZipLocalCache(normalized, value);
    return value;
  } catch (error) {
    zipLocationCache.set(normalized, null);
    writeZipLocalCache(normalized, null);
    return null;
  }
};

const toRadians = (value) => (value * Math.PI) / 180;

const haversineMiles = (a, b) => {
  const earthRadiusMiles = 3958.8;
  const dLat = toRadians(b.lat - a.lat);
  const dLon = toRadians(b.lon - a.lon);
  const lat1 = toRadians(a.lat);
  const lat2 = toRadians(b.lat);

  const sinLat = Math.sin(dLat / 2);
  const sinLon = Math.sin(dLon / 2);
  const calc =
    sinLat * sinLat +
    Math.cos(lat1) * Math.cos(lat2) * sinLon * sinLon;
  const c = 2 * Math.atan2(Math.sqrt(calc), Math.sqrt(1 - calc));
  return earthRadiusMiles * c;
};
 
const buildStateOptions = () => {
  const current = stateSelect.value;
  stateSelect.innerHTML = '<option value="">All States</option>';
  const states = Array.from(
    new Set(getEffectiveSchools().map((school) => school.state).filter(Boolean))
  ).sort();
  states.forEach((state) => {
    const option = document.createElement("option");
    option.value = state;
    option.textContent = state;
    stateSelect.appendChild(option);
  });
  if (states.includes(current)) {
    stateSelect.value = current;
  }
};

buildStateOptions();

const renderMissingSchools = () => {
  const allSchools = getEffectiveSchools({ includeHidden: true });
  const schools = getEffectiveSchools();
  const duplicateNames = getDuplicateNameSet(allSchools);
  const report = buildVerificationReport(allSchools);
  const reviewList = schools
    .map((school) => ({
      school,
      status: getSchoolReviewStatus(school, duplicateNames),
    }))
    .filter(
      ({ status }) =>
        status.missingFields.length > 0 ||
        status.isDuplicate ||
        status.isUnidentifiable
    );
  const backupCount = getBackupHistory().length;
  const changeLog = getChangeLog();
  const lastLogText = formatLogEntry(changeLog[changeLog.length - 1]);
  const header = `
    <div class="meta">${backupCount} backups · ${changeLog.length} change logs${
      lastLogText ? ` · Recent ${lastLogText}` : ""
    }</div>
    <div class="meta">Total ${report.total} · Complete ${report.complete} · Missing ${report.incomplete} · Missing Core ${report.missingCore} · Missing Contact ${report.missingContact} · Duplicates ${report.duplicates} · Unidentifiable ${report.unidentifiable} · Hidden ${report.hiddenCount} · Error Rate ${report.errorRate.toFixed(2)}%</div>
  `;
  if (reviewList.length === 0) {
    dataEditorList.innerHTML = `${header}<div class="meta">No missing information or duplicate items.</div>`;
    return;
  }
  dataEditorList.innerHTML =
    header +
    reviewList
      .map(({ school, status }) => {
        const zip = school.zip || "";
        const phone = school.phone || "";
        const website = school.website || "";
        const city = school.city || "";
        const state = school.state || "";
        const missingText =
          status.missingFields.length > 0
            ? status.missingFields.map((field) => fieldLabels[field]).join(", ")
            : "None";
        const duplicateText = status.isDuplicate ? " · Possible duplicate" : "";
        const shouldAllowDelete = status.isDuplicate || status.isUnidentifiable;
        const deleteButton = shouldAllowDelete
          ? `<button class="deleteSchool" data-name="${school.name}">Delete</button>`
          : "";
        return `
        <div class="school" data-name="${school.name}">
          <strong>${school.name}</strong>
          <span>Missing: ${missingText}</span>
          <span>Category: ${status.action} · ${status.severity}${duplicateText}</span>
          <label>City <input data-field="city" value="${city}" /></label>
          <label>State <input data-field="state" value="${state}" /></label>
          <label>ZIP <input data-field="zip" value="${zip}" /></label>
          <label>Phone <input data-field="phone" value="${phone}" /></label>
          <label>Website <input data-field="website" value="${website}" /></label>
          <button class="saveSchool" data-name="${school.name}">Save</button>
          ${deleteButton}
        </div>
      `;
      })
      .join("");
};

showMissingButton.addEventListener("click", () => {
  renderMissingSchools();
});

exportDataButton.addEventListener("click", () => {
  dataJson.value = JSON.stringify(getEffectiveSchools(), null, 2);
});

importDataButton.addEventListener("click", () => {
  const raw = dataJson.value.trim();
  if (!raw) return;
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      dataJson.value = "JSON array required.";
      return;
    }
    const allowedFields = ["city", "state", "zip", "phone", "website", "notes"];
    parsed.forEach((item) => {
      if (!item || !item.name) return;
      const exists = dentalSchools.find((school) => school.name === item.name);
      if (!exists) return;
      const next = {};
      allowedFields.forEach((field) => {
        if (item[field]) {
          const normalized = sanitizeString(item[field]);
          if (normalized) {
            next[field] = normalized;
          }
        }
      });
      if (Object.keys(next).length > 0) {
        schoolOverrides[item.name] = {
          ...(schoolOverrides[item.name] || {}),
          ...next,
        };
      }
    });
    saveSchoolOverrides();
    buildStateOptions();
    dataJson.value = "";
    renderMissingSchools();
    if (typeof recordDataChange === "function") {
      recordDataChange("import");
    }
  } catch (error) {
    dataJson.value = "Invalid JSON format.";
  }
});

finalizeDataButton.addEventListener("click", () => {
  saveBackupSnapshot("finalize");
  const report = buildVerificationReport(getEffectiveSchools({ includeHidden: true }));
  recordChangeLog({
    action: "finalize",
    name: "Dental School Data",
    report,
  });
  dataJson.value = JSON.stringify(getEffectiveSchools(), null, 2);
  renderMissingSchools();
  if (typeof recordDataChange === "function") {
    recordDataChange("finalize");
  }
});

exportReportButton.addEventListener("click", () => {
  const report = buildVerificationReport(getEffectiveSchools({ includeHidden: true }));
  dataJson.value = JSON.stringify(report, null, 2);
});

dataEditorList.addEventListener("click", (event) => {
  if (event.target.classList.contains("saveSchool")) {
    const name = event.target.dataset.name;
    const container = event.target.closest(".school");
    if (!container || !name) return;
    const fields = Array.from(container.querySelectorAll("[data-field]")).reduce(
      (acc, input) => {
        const value = sanitizeString(input.value);
        if (value) {
          acc[input.dataset.field] = value;
        }
        return acc;
      },
      {}
    );
    if (Object.keys(fields).length === 0) return;
    schoolOverrides[name] = { ...(schoolOverrides[name] || {}), ...fields };
    saveSchoolOverrides();
    buildStateOptions();
    renderMissingSchools();
    if (typeof recordDataChange === "function") {
      recordDataChange("edit");
    }
    return;
  }
  if (event.target.classList.contains("deleteSchool")) {
    const name = event.target.dataset.name;
    if (!name) return;
    const schools = getEffectiveSchools({ includeHidden: true });
    const duplicateNames = getDuplicateNameSet(schools);
    const school = schools.find((item) => item.name === name);
    if (!school) return;
    const status = getSchoolReviewStatus(school, duplicateNames);
    if (!status.isDuplicate && !status.isUnidentifiable) return;
    const confirmation = prompt(
      `Enter the school name exactly to delete.\n${name}`
    );
    if (confirmation !== name) return;
    saveBackupSnapshot(`delete:${name}`);
    recordChangeLog({
      action: "delete",
      name,
      reason: status.isDuplicate ? "Duplicate" : "Unidentifiable",
      missing: status.missingFields,
    });
    schoolOverrides[name] = { ...(schoolOverrides[name] || {}), hidden: true };
    saveSchoolOverrides();
    buildStateOptions();
    renderMissingSchools();
    if (typeof recordDataChange === "function") {
      recordDataChange("delete");
    }
  }
});

document.getElementById("findSchools").addEventListener("click", async () => {
  const zip = normalizeZip(document.getElementById("zipInput").value);
  const selectedState = stateSelect.value;
  const onlyComplete = document.getElementById("onlyComplete").checked;
  let filtered = getEffectiveSchools();

  if (selectedState) {
    filtered = filtered.filter((school) => school.state === selectedState);
  }
  if (onlyComplete) {
    filtered = filtered.filter((school) => isSchoolComplete(school));
  }

  schoolCount.textContent = "Searching...";
  schoolOutput.textContent = "";
  dataCoverage.textContent = "";

  const userLocation = zip ? await fetchZipLocation(zip) : null;
  if (zip && !userLocation) {
    schoolCount.textContent = "";
    schoolOutput.textContent = "Please enter a valid ZIP code.";
    if (typeof recordSchoolSearch === "function") {
      recordSchoolSearch({
        zipProvided: Boolean(zip),
        state: selectedState,
        onlyComplete,
        invalidZip: true,
      });
    }
    return;
  }

  const schoolZips = filtered.map((school) => school.zip).filter(Boolean);
  await Promise.all(schoolZips.map((schoolZip) => fetchZipLocation(schoolZip)));

  const withDistance = filtered.map((school) => {
    const schoolLocation = school.zip
      ? zipLocationCache.get(normalizeZip(school.zip))
      : null;
    const distanceMiles =
      userLocation && schoolLocation
        ? haversineMiles(userLocation, schoolLocation)
        : null;
    return { ...school, distanceMiles };
  });

  const sorted = withDistance.sort((a, b) => {
    const distanceA = a.distanceMiles ?? Number.POSITIVE_INFINITY;
    const distanceB = b.distanceMiles ?? Number.POSITIVE_INFINITY;
    if (distanceA === distanceB) {
      return a.name.localeCompare(b.name);
    }
    return distanceA - distanceB;
  });

  schoolOutput.innerHTML = sorted
    .map((school) => {
      const distanceText =
        typeof school.distanceMiles === "number"
          ? `Distance: ${school.distanceMiles.toFixed(1)} mi`
          : "";
      const locationParts = [school.city, school.state].filter(Boolean);
      const locationLine =
        locationParts.length > 0
          ? `${locationParts.join(", ")}${school.zip ? ` ${school.zip}` : ""}`
          : "";
      const isComplete = isSchoolComplete(school);
      const completenessText = isComplete ? "Data Complete" : "Some Info Missing";
      const searchQuery = encodeURIComponent(
        `${school.name} dental school address phone zip`
      );
      const searchLink = !isComplete
        ? `<a href="https://www.google.com/search?q=${searchQuery}" target="_blank" rel="noreferrer">Find Info</a>`
        : "";
      const lines = [
        `<strong>${school.name}</strong>`,
        locationLine ? `<span>${locationLine}</span>` : "",
        distanceText ? `<span>${distanceText}</span>` : "",
        school.phone ? `<span>Phone: ${school.phone}</span>` : "",
        school.website
          ? `<a href="${school.website}" target="_blank" rel="noreferrer">Website</a>`
          : "",
        school.notes ? `<span>${school.notes}</span>` : "",
        `<span>${completenessText}</span>`,
        searchLink,
      ]
        .filter(Boolean)
        .join("");
      return `
        <div class="school">
          ${lines}
        </div>
      `;
    })
    .join("");

  const distanceCount = withDistance.filter(
    (school) => typeof school.distanceMiles === "number"
  ).length;
  schoolCount.textContent = `Showing ${sorted.length} schools · Distance calculated for ${distanceCount}`;
  const completeCount = sorted.filter((school) => isSchoolComplete(school))
    .length;
  dataCoverage.textContent = `Data Complete: ${completeCount}`;
  if (typeof recordSchoolSearch === "function") {
    recordSchoolSearch({
      zipProvided: Boolean(zip),
      state: selectedState,
      onlyComplete,
      invalidZip: false,
    });
  }
});
