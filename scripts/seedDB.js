const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const bookSeed = [
  {
    title: "Jurassic Park",
    author: "Michael Crichton",
    synopsis:
      "An island off Costa Rica will soon be the world's most ambitious theme park--a dinosaur preserve. A visionary financier's biotechnology company has succeeded in cloning these extinct reptiles. Fifteen different species, presumably incapable of breeding, are now placidly roaming around, but Jurassic Park's resident mathematician, an expert in chaos theory, predicts that the animals' behavior is inherently unstable. When a rival genetics firm attempts to steal frozen dinosaur embryos, things go haywire. Two cute American kids, eight-year-old Tina and 11-year-old Tim, a safari guide from Kenya and a Denver paleontologist set things aright--almost. Though the dinosaurs here are more interesting than the people, Crichton ( The Andromeda Strain ) ingeniously interweaves details of genetic engineering, computer wizardry and current scientific controversy over dinosaurs to fashion a scary, creepy, mesmerizing techno-thriller with teeth. It can be read as a thought-provoking fable about technological hubris and the hazards of bioengineering.",
    image: "https://books.google.com/books/content/images/frontcover/V5s14nks9I8C?fife=w200-h300",
    link: "https://play.google.com/store/books/details/Michael_Crichton_Jurassic_Park?id=V5s14nks9I8C",
    date: new Date(Date.now())
  },
  {
    title: "The Fellowship Of The Ring",
    author: "J.R.R. Tolkien",
    synopsis:
      "In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell into the hands of Bilbo Baggins, as told in The Hobbit. In a sleepy village in the Shire, young Frodo Baggins finds himself faced with an immense task, as his elderly cousin Bilbo entrusts the Ring to his care. Frodo must leave his home and make a perilous journey across Middle-earth to the Cracks of Doom, there to destroy the Ring and foil the Dark Lord in his evil purpose.",
    image: "https://books.google.com/books/content/images/frontcover/aWZzLPhY4o0C?fife=w200-h300",
    link: "https://play.google.com/store/books/details/J_R_R_Tolkien_The_Fellowship_of_the_Ring?id=aWZzLPhY4o0C",
    date: new Date(Date.now())
  },
  {
    title: "The Two Towers",
    author: "J.R.R. Tolkien",
    synopsis:
      "Frodo and his Companions of the Ring have been beset by danger during their quest to prevent the Ruling Ring from falling into the hands of the Dark Lord by destroying it in the Cracks of Doom. They have lost the wizard, Gandalf, in a battle in the Mines of Moria. And Boromir, seduced by the power of the Ring, tried to seize it by force. While Frodo and Sam made their escape, the rest of the company was attacked by Orcs. Now they continue the journey alone down the great River Anduin—alone, that is, save for the mysterious creeping figure that follows wherever they go.",
    image: "https://books.google.com/books/content/images/frontcover/12e8PJ2T7sQC?fife=w200-h300",
    link: "https://play.google.com/store/books/details/J_R_R_Tolkien_The_Two_Towers?id=12e8PJ2T7sQC",
    date: new Date(Date.now())
  },
  {
    title: "The Return Of The King",
    author: "J.R.R. Tolkien",
    synopsis:
      "As the Shadow of Mordor grows across the land, the Companions of the Ring have become involved in separate adventures. Aragorn, revealed as the hidden heir of the ancient Kings of the West, has joined with the Riders of Rohan against the forces of Isengard, and takes part in the desperate victory of the Hornburg. Merry and Pippin, captured by Orcs, escape into Fangorn Forest and there encounter the Ents. Gandalf has miraculously returned and defeated the evil wizard, Saruman. Sam has left his master for dead after a battle with the giant spider, Shelob; but Frodo is still alive—now in the foul hands of the Orcs. And all the while the armies of the Dark Lord are massing as the One Ring draws ever nearer to the Cracks of Doom.",
    image: "https://books.google.com/books/content/images/frontcover/WZ0f_yUgc0UC?fife=w200-h300",
    link: "https://play.google.com/store/books/details/J_R_R_Tolkien_The_Return_of_the_King?id=WZ0f_yUgc0UC",
    date: new Date(Date.now())
  },
  {
    title: "Game Of Thrones",
    author: "George R. R. Martin",
    synopsis:
      "Winter is coming. Such is the stern motto of House Stark, the northernmost of the fiefdoms that owe allegiance to King Robert Baratheon in far-off King’s Landing. There Eddard Stark of Winterfell rules in Robert’s name. There his family dwells in peace and comfort: his proud wife, Catelyn; his sons Robb, Brandon, and Rickon; his daughters Sansa and Arya; and his bastard son, Jon Snow. Far to the north, behind the towering Wall, lie savage Wildings and worse—unnatural things relegated to myth during the centuries-long summer, but proving all too real and all too deadly in the turning of the season. Yet a more immediate threat lurks to the south, where Jon Arryn, the Hand of the King, has died under mysterious circumstances. Now Robert is riding north to Winterfell, bringing his queen, the lovely but cold Cersei, his son, the cruel, vainglorious Prince Joffrey, and the queen’s brothers Jaime and Tyrion of the powerful and wealthy House Lannister—the first a swordsman without equal, the second a dwarf whose stunted stature belies a brilliant mind. All are heading for Winterfell and a fateful encounter that will change the course of kingdoms. Meanwhile, across the Narrow Sea, Prince Viserys, heir of the fallen House Targaryen, which once ruled all of Westeros, schemes to reclaim the throne with an army of barbarian Dothraki—whose loyalty he will purchase in the only coin left to him: his beautiful yet innocent sister, Daenerys.",
    image: "https://books.google.com/books/content/images/frontcover/5NomkK4EV68C?fife=w200-h300",
    link: "https://play.google.com/store/books/details/George_R_R_Martin_A_Game_of_Thrones?id=5NomkK4EV68C",
    date: new Date(Date.now())
  },
  {
    title: "It",
    author: "Stephen King",
    synopsis:
      "Welcome to Derry, Maine. It’s a small city, a place as hauntingly familiar as your own hometown. Only in Derry the haunting is real. They were seven teenagers when they first stumbled upon the horror. Now they are grown-up men and women who have gone out into the big world to gain success and happiness. But the promise they made twenty-eight years ago calls them reunite in the same place where, as teenagers, they battled an evil creature that preyed on the city’s children. Now, children are being murdered again and their repressed memories of that terrifying summer return as they prepare to once again battle the monster lurking in Derry’s sewers.",
    image: "https://books.google.com/books/content/images/frontcover/-rUACwAAQBAJ?fife=w200-h300",
    link: "https://play.google.com/store/books/details/Stephen_King_It?id=-rUACwAAQBAJ",
    date: new Date(Date.now())
  },
  {
    title: "Starship Troopers",
    author: "Robert A. Heinlein",
    synopsis:
      "Johnnie Rico never really intended to join up—and definitely not the infantry. But now that he’s in the thick of it, trying to get through combat training harder than anything he could have imagined, he knows everyone in his unit is one bad move away from buying the farm in the interstellar war the Terran Federation is waging against the Arachnids. Because everyone in the Mobile Infantry fights. And if the training doesn’t kill you, the Bugs are more than ready to finish the job...",
    image: "https://books.google.com/books/content/images/frontcover/1lK3xA72adAC?fife=w200-h300",
    link: "https://play.google.com/store/books/details/Robert_A_Heinlein_Starship_Troopers?id=1lK3xA72adAC",
    date: new Date(Date.now())
  },
  {
    title: "Fight Club: A Novel",
    author: "Chuck Palahniuk",
    synopsis:
      "The first rule about fight club is you don't talk about fight club. Chuck Palahniuk showed himself to be his generation’s most visionary satirist in this, his first book. Fight Club’s estranged narrator leaves his lackluster job when he comes under the thrall of Tyler Durden, an enigmatic young man who holds secret after-hours boxing matches in the basements of bars. There, two men fight \"as long as they have to.\" This is a gloriously original work that exposes the darkness at the core of our modern world.",
    image: "https://books.google.com/books/content/images/frontcover/hoGkPfds4tAC?fife=w200-h300",
    link: "https://play.google.com/store/books/details/Chuck_Palahniuk_Fight_Club_A_Novel?id=hoGkPfds4tAC",
    date: new Date(Date.now())
  },
  {
    title: "Annihilation",
    author: "Jeff VanderMeer",
    synopsis:
      "Area X has been cut off from the rest of the continent for decades. Nature has reclaimed the last vestiges of human civilization. The first expedition returned with reports of a pristine, Edenic landscape; the second expedition ended in mass suicide; the third expedition in a hail of gunfire as its members turned on one another. The members of the eleventh expedition returned as shadows of their former selves, and within weeks, all had died of cancer. In Annihilation, the first volume of Jeff VanderMeer's Southern Reach trilogy, we join the twelfth expedition. The group is made up of four women: an anthropologist; a surveyor; a psychologist, the de facto leader; and our narrator, a biologist. Their mission is to map the terrain, record all observations of their surroundings and of one another, and, above all, avoid being contaminated by Area X itself. They arrive expecting the unexpected, and Area X delivers—they discover a massive topographic anomaly and life forms that surpass understanding—but it's the surprises that came across the border with them and the secrets the expedition members are keeping from one another that change everything.",
    image: "https://books.google.com/books/content/images/frontcover/qUo0AQAAQBAJ?fife=w200-h300",
    link: "https://play.google.com/store/books/details/Jeff_VanderMeer_Annihilation?id=qUo0AQAAQBAJ",
    date: new Date(Date.now())
  },
  {
    title: "Total Recall: My Unbelievably True Life Story",
    author: "Arnold Schwarzenegger",
    synopsis:
      "In his signature larger-than-life style, Arnold Schwarzenegger’s Total Recall is a revealing self-portrait of his illustrious, controversial, and truly unique life. The greatest immigrant success story of our time. His story is unique, and uniquely entertaining, and he tells it brilliantly in these pages. He was born in a year of famine, in a small Austrian town, the son of an austere police chief. He dreamed of moving to America to become a bodybuilding champion and a movie star. By the age of twenty-one, he was living in Los Angeles and had been crowned Mr. Universe. Within five years, he had learned English and become the greatest bodybuilder in the world. Within ten years, he had earned his college degree and was a millionaire from his business enterprises in real estate, landscaping, and bodybuilding. He was also the winner of a Golden Globe Award for his debut as a dramatic actor in Stay Hungry. Within twenty years, he was the world’s biggest movie star, the husband of Maria Shriver, and an emerging Republican leader who was part of the Kennedy family. Thirty-six years after coming to America, the man once known by fellow body­builders as the Austrian Oak was elected governor of California, the seventh largest economy in the world. He led the state through a budget crisis, natural disasters, and political turmoil, working across party lines for a better environment, election reforms, and bipartisan solutions. With Maria Shriver, he raised four fantastic children. In the wake of a scandal he brought upon himself, he tried to keep his family together. Until now, he has never told the full story of his life, in his own voice. Here is Arnold, with total recall.",
    image: "https://books.google.com/books/content/images/frontcover/qYijfgz4acgC?fife=w200-h300",
    link: "https://play.google.com/store/books/details/Arnold_Schwarzenegger_Total_Recall?id=qYijfgz4acgC",
    date: new Date(Date.now())
  }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
