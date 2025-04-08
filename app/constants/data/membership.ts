export const memberships: MembershipCategory[] = [
  {
    category: "Championship Membership",
    description:
      "Access to the championship course with exclusive benefits, available all days of the week.",
    benefits: [
      "Unlimited access to academy courses",
      "Unlimited range balls",
      "Unlimited access to championship course",
      "Advance & early booking",
      "Reduced event fees",
      "Free swimming pool access",
      "Free access to gym",
      "Discounted championship green fees",
      "Discounted lesson rates",
      "Reduced event registration fee",
      "Discounts on pro shop items",
      "Discounts on restaurants",
      "Free Membership Passes",
      "Free Lesson Vouchers",
    ],
    options: [
      {
        title: "Gold Membership (Single)",
        pricing: {
          full_year: 12100,
          pro_rata: {
            "1_month": 1400,
            "2_months": 2750,
            "3_months": 4100,
            "4_months": 5100,
            "5_months": 6100,
            "6_months": 7000,
            "7_months": 7900,
            "8_months": 8700,
            "9_months": 9400,
            "10_months": 10300,
            "11_months": 11200,
            "12_months": 12100,
          },
        },
      },
      {
        title: "Gold Membership (Couple)",
        pricing: {
          full_year: 22200,
          pro_rata: {
            "1_month": 2800,
            "2_months": 5500,
            "3_months": 8200,
            "4_months": 10200,
            "5_months": 12200,
            "6_months": 14200,
            "7_months": 16200,
            "8_months": 18200,
            "9_months": 18800,
            "10_months": 20300,
            "11_months": 22400,
            "12_months": 22200,
          },
        },
      },
      {
        title: "Silver Membership (Single)",
        pricing: {
          full_year: 8000,
          pro_rata: {
            "1_month": 900,
            "2_months": 1700,
            "3_months": 2500,
            "4_months": 3200,
            "5_months": 3900,
            "6_months": 4500,
            "7_months": 5200,
            "8_months": 5800,
            "9_months": 6400,
            "10_months": 7000,
            "11_months": 7500,
            "12_months": 8000,
          },
        },
      },
    ],
  },
  {
    category: "Junior Membership",
    description:
      "Full access to junior events and training for juniors (17 & under).",
    benefits: [
      "Golf access for juniors (17 & under)",
      "Coaching sessions included",
      "Special junior tournaments",
    ],
    options: [
      {
        title: "Junior Gold Membership",
        pricing: {
          full_year: 5000,
          pro_rata: {
            "1_month": 600,
            "2_months": 1200,
            "3_months": 1800,
            "4_months": 2300,
            "5_months": 2800,
            "6_months": 3300,
            "7_months": 3800,
            "8_months": 4200,
            "9_months": 4600,
            "10_months": 4800,
            "11_months": 4900,
            "12_months": 5000,
          },
        },
      },
    ],
  },
  {
    category: "Academy Membership",
    description: "Access to academy courses and training sessions.",
    benefits: [
      "Complimentary green fess on the Academy courses",
      "Complimentary use of the club practice facilities",
      "Members discount on Golf Shop purchases",
      "Members golf lesson tariff",
      "Academy members green fee rate on Championship Course.",
      "1 x 30 minute golf lesson voucher to be used with any of our Porfessionals",
      "Green Fee passes for members guest to play on the Academy Course"
    ],
    options: [
      {
        title: "Academy Membership (Single)",
        pricing: {
          full_year: 8000,
          pro_rata: {
            "1_month": 900,
            "2_months": 1700,
            "3_months": 2500,
            "4_months": 3200,
            "5_months": 3900,
            "6_months": 4500,
            "7_months": 5200,
            "8_months": 5800,
            "9_months": 6400,
            "10_months": 7000,
            "11_months": 7500,
            "12_months": 8000,
          },
        },
      },
      {
        title: "Academy Membership (Couple)",
        pricing: {
          full_year: 15000,
          pro_rata: {
            "1_month": 1800,
            "2_months": 3400,
            "3_months": 5000,
            "4_months": 6500,
            "5_months": 7800,
            "6_months": 9000,
            "7_months": 10200,
            "8_months": 11400,
            "9_months": 12600,
            "10_months": 13800,
            "11_months": 14500,
            "12_months": 15000,
          },
        },
      },
    ],
  },
  {
    category: "Junior Academy Pass",
    description: "Specialized training and access for juniors under 17.",
    benefits: [
      "Academy course access",
      "Junior training programs",
      "Special junior competitions",
    ],
    options: [
      {
        title: "Junior Academy Pass",
        pricing: {
          full_year: 4000,
          pro_rata: {
            "1_month": 500,
            "2_months": 1000,
            "3_months": 1500,
            "4_months": 1900,
            "5_months": 2300,
            "6_months": 2700,
            "7_months": 3100,
            "8_months": 3400,
            "9_months": 3700,
            "10_months": 3900,
            "11_months": 4000,
            "12_months": 4000,
          },
        },
      },
    ],
  },
];



export default memberships;
