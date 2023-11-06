const sampleBase64pdf = require("./mock-data-pdf-base64");

module.exports = [
  {
    id: 1,
    title: "Use the right type for your variables",
    description:
      "Use the right type for your variables. This is a good practice to avoid errors in your code.",
    author: "John Doe",
    publishDate: "13/03/2022",
    rating: 2,
    tags: ["Learning"],
    contentUrl:
      "https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-types",
  },
  {
    id: 2,
    title: "Be consistent with your naming conventions",
    description: "This is a good practice to avoid errors in your code.",
    author: "Peter Parker",
    publishDate: "13/02/2022",
    rating: 1,
    tags: ["Service Actions"],
    contentUrl: sampleBase64pdf,
  },
  {
    id: 3,
    title: "Be consistent with your naming conventions",
    description: "This is a good practice to avoid errors in your code.",
    author: "Mary Jane",
    publishDate: "13/01/2022",
    rating: 5,
    tags: ["Collaboration", "Reflection", "Huddle"],
    contentUrl:
      "https://github.com/KNITS-OS/SkillQuest/raw/master/Resources/corporatebrochurekuehnenagel2021en.pdf",
  },
];
