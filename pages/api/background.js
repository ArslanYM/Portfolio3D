const background = [
  {
    eduCards: [
      {
        id: 0,
        title: "Coimbatore Institite Of Technology",
        degree: "Bachelor Of Engineering",
        detail: "Bachelor's Degree in Electrical and Electronics Engineering",
        year: "2020-2024",
      },
      {
        id: 1,
        title: "Kashmir Harvard Edu. Ins.",
        degree: "HSSC, Pre Engineering",
        detail:
          "Completed High School part 1 and part 2 in Kashmir Harvard Educational Institute",
        year: "2017-2019",
      },
      {
        id: 2,
        title: "Kashmir Harvard Edu. Ins.",
        degree: "SSC, Science Subjects",
        detail:
          "Completed Middle Schooling in Kashmir Harvard Educational Institute",
        year: "-2017",
      },
    ],
  },
  {
    expCards: [
      {
        id: 1,
        title: "EpicSense Technologies",
        role: "Lead FullStack Instructor",
        url: "https://www.linkedin.com/company/epicsense-technologies/",
        desc: "Lead a cohort of 30 students and taught Full-Stack Development",
        year: "08/2023 - Present",
        location: "Coimbatore, India",
      },
      {
        id: 2,
        title: "RoboLabs India",
        role: "Software Development Engineering Intern",
        url: "https://www.linkedin.com/company/robolabs-india/",
        desc: "As an Internee, I learned how to use React & JavaScript to build interactive websites.",
        year: "July/2022 - Aug/2022",
        location: "India",
      },
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(background);
}
