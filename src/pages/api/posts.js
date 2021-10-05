const getDate = (day = 0) => {
  let date = new Date();
  date.setDate(date.getDate() - day);

  return date;
};

const posts = [
  {
    date: getDate(),
    title: "This is a very good title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    category: "game markets",
    image:
      "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    date: getDate(3),
    title: "Yubi Yubi is Key",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    category: "game markets",
    image:
      "https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    date: getDate(7),
    title: "Yo Dayo Meet and Greet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    category: "game markets",
    image:
      "https://images.pexels.com/photos/762041/pexels-photo-762041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    date: getDate(10),
    title: "Shuba Shuba Entertainment Joins US Market",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    category: "game markets",
    image: "https://cdn.allcorrectgames.com/wp-content/uploads/2019/12/DSC_1647.jpg",
  },
  {
    date: getDate(11),
    title: "When Legendary Dragon Meets Asia",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    category: "game markets",
    image:
      "https://images.pexels.com/photos/929773/pexels-photo-929773.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    date: getDate(13),
    title: "Rocking the German Gaming Market with Nanoras",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    category: "game markets",
    image:
      "https://images.pexels.com/photos/278918/pexels-photo-278918.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    date: getDate(14),
    title: "Miko Danye Dominating Local Gamers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    category: "game markets",
    image:
      "https://images.pexels.com/photos/278918/pexels-photo-278918.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    date: getDate(15),
    title: "Mogu Mogu Entertainment Sweeps Through Food Related Games",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    category: "game markets",
    image:
      "https://images.pexels.com/photos/278918/pexels-photo-278918.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    date: getDate(16),
    title: "This is a very good title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    category: "game markets",
    image:
      "https://images.pexels.com/photos/278918/pexels-photo-278918.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    date: getDate(17),
    title: "This is a very good title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    category: "game markets",
    image:
      "https://images.pexels.com/photos/278918/pexels-photo-278918.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    date: getDate(5),
    title: "Localization, Seven Steps To Succcess",
    description:
      "Who even said that localization has to be successful in the first place? There exists an opinion that certain products require a minimal level of localization — a machine translation should suffice for the target audience to decide whether the game is worth downloading, and once they’ve played it for a while, they will inevitably become sucked in. Let’s take a few steps back and analyze this issue from a critical perspective. Suppose we have a game with its own potentially great niche — it’s fun to play, well balanced, and has a suitable monetization model, for instance. Finally, it hits the virtual store shelves. Needless to say, it requires marketing. You seek the services of an ASO expert, who, after analyzing the conversion, tells you: “We must expand into new segments!” OK, then. Expansion is your next move. How do you do it though? There are two methods, which are by no means mutually exclusive — in fact, it’s quite the opposite! They complement each other extremely well.",
    category: "localization",
    image:
      "https://images.pexels.com/photos/682933/pexels-photo-682933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    date: getDate(8),
    title: "Localization: When Robots Foget Their Umbrellas",
    description:
      "Who even said that localization has to be successful in the first place? There exists an opinion that certain products require a minimal level of localization — a machine translation should suffice for the target audience to decide whether the game is worth downloading, and once they’ve played it for a while, they will inevitably become sucked in. Let’s take a few steps back and analyze this issue from a critical perspective. Suppose we have a game with its own potentially great niche — it’s fun to play, well balanced, and has a suitable monetization model, for instance. Finally, it hits the virtual store shelves. Needless to say, it requires marketing. You seek the services of an ASO expert, who, after analyzing the conversion, tells you: “We must expand into new segments!” OK, then. Expansion is your next move. How do you do it though? There are two methods, which are by no means mutually exclusive — in fact, it’s quite the opposite! They complement each other extremely well.",
    category: "localization",
    image: "https://cdn.allcorrectgames.com/wp-content/uploads/2019/12/DSC_1647.jpg",
  },
  {
    date: getDate(10),
    title: "Localization, Seven Steps To Succcess",
    description:
      "Who even said that localization has to be successful in the first place? There exists an opinion that certain products require a minimal level of localization — a machine translation should suffice for the target audience to decide whether the game is worth downloading, and once they’ve played it for a while, they will inevitably become sucked in. Let’s take a few steps back and analyze this issue from a critical perspective. Suppose we have a game with its own potentially great niche — it’s fun to play, well balanced, and has a suitable monetization model, for instance. Finally, it hits the virtual store shelves. Needless to say, it requires marketing. You seek the services of an ASO expert, who, after analyzing the conversion, tells you: “We must expand into new segments!” OK, then. Expansion is your next move. How do you do it though? There are two methods, which are by no means mutually exclusive — in fact, it’s quite the opposite! They complement each other extremely well.",
    category: "localization",
    image: "https://cdn.allcorrectgames.com/wp-content/uploads/2019/12/DSC_1647.jpg",
  },
  {
    date: getDate(8),
    title: "Outstaffing Project Management In Localization",
    description:
      "Who even said that localization has to be successful in the first place? There exists an opinion that certain products require a minimal level of localization — a machine translation should suffice for the target audience to decide whether the game is worth downloading, and once they’ve played it for a while, they will inevitably become sucked in. Let’s take a few steps back and analyze this issue from a critical perspective. Suppose we have a game with its own potentially great niche — it’s fun to play, well balanced, and has a suitable monetization model, for instance. Finally, it hits the virtual store shelves. Needless to say, it requires marketing. You seek the services of an ASO expert, who, after analyzing the conversion, tells you: “We must expand into new segments!” OK, then. Expansion is your next move. How do you do it though? There are two methods, which are by no means mutually exclusive — in fact, it’s quite the opposite! They complement each other extremely well.",
    category: "localization",
    image: "https://cdn.allcorrectgames.com/wp-content/uploads/2019/12/DSC_1647.jpg",
  },
];

export default function handler(req, res) {
  res.status(200).json(posts);
}
