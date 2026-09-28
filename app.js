const I18N = {
en: {
  "nav.services": "Services", "nav.why": "Why us", "nav.gallery": "Gallery", "nav.faq": "FAQ",
  "nav.reviews": "Reviews", "nav.contact": "Contact",
  "nav.call": "6680 9600",
  "hero.kicker": "Hawalli, Kuwait · AC &amp; appliance repair since 2012",
  "hero.title": "Your AC and appliances<br>fixed at your home.",
  "hero.sub": "Air conditioners, refrigerators and washing machines — repaired at your home since 2012. Rated 5.0 stars on kuwaityello.",
  "hero.cta1": "Book a visit", "hero.cta2": "See services",
  "trust.t1t": "Open 6 days a week", "trust.t1d": "Mon–Thu &amp; Sat–Sun 8 AM – 10 PM",
  "trust.t2t": "AC · Fridge · Washing machine", "trust.t2d": "Repair &amp; spare parts",
  "trust.t3t": "Homes &amp; companies", "trust.t3d": "Serving all of Kuwait",
  "stats.samedayNum": "Since 2012", "stats.sameday": "repairing in Kuwait",
  "stats.tradesNum": "5.0 stars", "stats.trades": "kuwaityello rating",
  "stats.rateNum": "Open till 10 PM", "stats.rate": "Mon–Thu &amp; Sat–Sun",
  "stats.visitNum": "Homes &amp; companies", "stats.visit": "home repair service",
  "services.kicker": "What we do", "services.title": "AC and appliance repair, done right",
  "services.s1t": "AC repair &amp; servicing", "services.s1d": "Split and window AC units — diagnosed and repaired properly.",
  "services.s2t": "Refrigerator repair", "services.s2d": "Fridges of all kinds — cooling problems fixed fast.",
  "services.s3t": "Washing machine repair", "services.s3d": "Top and front loaders — spinning, draining and washing again.",
  "services.s4t": "AC gas refilling", "services.s4d": "Refrigerant refills for weak cooling — tested after the fix.",
  "services.s5t": "Spare parts", "services.s5d": "Genuine spare parts for ACs, fridges and washing machines.",
  "services.s6t": "Appliance maintenance", "services.s6d": "Regular servicing that keeps your appliances running longer.",
  "why.kicker": "Why choose us", "why.title": "Repair people you can trust",
  "why.intro": "Since 2012 we have repaired ACs, fridges and washing machines for homes and companies across Kuwait — affordable rates, on time, every time.",
  "why.l1t": "Affordable rates", "why.l1d": "Fair, affordable pricing agreed on the phone before we come.",
  "why.l2t": "On time, every time", "why.l2d": "We arrive when we say we will — and finish the job properly.",
  "why.l3t": "Homes and companies", "why.l3d": "We repair for homes and companies all across Kuwait.",
  "why.l4t": "Experienced technicians", "why.l4d": "Our technicians handle all kinds of ACs, fridges and washing machines.",
  "gallery.kicker": "Our work", "gallery.title": "Fixed right, first time",
  "gallery.c1": "Washing machine servicing, done right",
  "gallery.c2": "AC outdoor units serviced and tested",
  "gallery.c3": "Fridge repairs without the mess",
  "reviews.kicker": "What people say", "reviews.title": "Rated 5.0 by our customers",
  "reviews.more": "5.0 stars from 4 reviews on kuwaityello — read them here",
  "faq.kicker": "Good to know", "faq.title": "Frequently asked questions",
  "faq.q1": "What do you repair?",
  "faq.a1": "We repair and fix all kinds of air conditioners, refrigerators and washing machines.",
  "faq.q2": "Which areas do you serve?",
  "faq.a2": "We are based in Hawalli and serve homes and companies across Kuwait.",
  "faq.q3": "Do you sell spare parts?",
  "faq.a3": "Yes — we also provide spare parts for air conditioners and other home appliances.",
  "faq.q4": "How do I book a visit?",
  "faq.a4": "Call or WhatsApp us on 6680 9600 and tell us what needs fixing — we will take it from there.",
  "contact.kicker": "Get in touch", "contact.title": "Book your visit",
  "contact.addr": "Address", "contact.phone": "Phone", "contact.hours": "Hours",
  "contact.hoursVal": "Mon – Thu: 8:00 AM – 10:00 PM<br>Fri: closed<br>Sat – Sun: 8:00 AM – 10:00 PM",
  "contact.cta": "Call to book", "contact.cta2": "WhatsApp us",
  "footer.tag": "AC &amp; appliance repair · Hawalli, Kuwait"
}};

document.querySelectorAll("[data-i18n]").forEach(el => {
  const key = el.getAttribute("data-i18n");
  const val = I18N.en[key];
  if (val !== undefined) el.innerHTML = val;
  else console.warn("missing i18n key:", key);
});

const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
menuBtn.addEventListener("click", () => mainNav.classList.toggle("open"));
mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mainNav.classList.remove("open")));
