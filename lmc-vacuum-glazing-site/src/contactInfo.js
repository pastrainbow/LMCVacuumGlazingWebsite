// Change telephone here
const telephone = "0114 276 2670";

// Change email address here
const mail = "enquiries@lmcvacuumglazing.co.uk";

const telephoneHref = `tel:${telephone.replaceAll(" ", "")}`;
const mailHref = `mailto:${mail}`;

export const contactMethods = [
  {
    name: "telephone",
    content: telephone,
    href: telephoneHref,
  },
  {
    name: "email",
    content: mail,
    href: mailHref,
  }
]

// Change addresses here
export const addresses = [
  { region: "Sheffield",
    addressLines: [
      "LMC Products Ltd.",
      "Knowle House",
      "4 Norfolk Park Road",
      "Sheffield, S2 3QE",
    ],
  },

  {
    region: "London",
    addressLines: [
      "77 Hammersmith Road",
      "London W14 0QH",
    ]
  }
];