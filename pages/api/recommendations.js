// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: "Zahaan Mahajan ",
    image: "images/zahaan.jpeg",
    designation:
      "Flutter Developer | Machine Learning Engineer | Python Developer",
    view: "I had the privilege of working alongside Arsalan on multiple university projects, and I must say, his talent and work ethic truly stood out. Recently, we were both part of the dynamic team, where Arsalan's professionalism and attention to detail shone brightly. I wholeheartedly endorse Arsalan for any opportunity that calls for a highly skilled and dedicated individual.",
    linkednURL: "https://www.linkedin.com/in/zahan-mahajan-6bb365210/",
  },
  {
    id: 1,
    name: "Nihal Bhagat ",
    image: "images/nihal.jpeg",
    designation: "Java | SpringBoot | Maven | Spring",
    view: "I wholeheartedly recommend Osama as a talented React frontend developer with an incredible flair for UI/UX design. His proficiency in Node.js further enhances his capabilities, allowing him to build robust and scalable applications. Arsalan's attention to detail, problem-solving skills, and dedication to delivering exceptional results make him a valuable addition to any development team.",
    linkednURL: "https://www.linkedin.com/in/nihal-bhagat-7341ab1ba/",
  },
  {
    id: 2,
    name: "Abdul Mannan Bhat",
    image: "images/mannan.jpeg",
    designation: "Java Developer | Python ",
    view: "I highly recommend Arsalan for web frontend development positions. Their expertise in ReactJS and Next.js, combined with their professionalism and dedication, make them an invaluable asset to any team.",
    linkednURL: "https://www.linkedin.com/in/abdul-manan-bhat-016a9a226/",
  },
  {
    id: 3,
    name: "Tavkeer",
    image: "images/tavkeer.png",
    designation: "Flutter Developer | Freelancer at Upwork",
    view: "Arsalan demonstrates exceptional proficiency in React.js and full-stack development. His talent for crafting dynamic and responsive user interfaces stands out as a testament to his dedication and skill. With the ability to seamlessly connect front-end and back-end components, Arsalan exemplifies versatility in the world of web development. His contributions consistently elevate projects, and his expertise is highly valued and appreciated by his peers.",
    linkednURL: "https://www.linkedin.com/in/tavkeer-shah-7848a3233/",
  },
];
export default function handler(req, res) {
  res.status(200).json(recommendationCard);
}
