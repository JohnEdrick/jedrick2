import Frenzy from "../img/frenzy.jpg";
import Hotel from "../img/hotel.PNG";
import Pos from "../img/pos.PNG";
import GameStore from "../img/gaming-store.PNG";

export const Projects = [
  {
    id: 1,
    title: "Frenzy Brain",
    image: Frenzy,
    description:
      "The game is a side-scrolling game control where the character attempting to fly to a portal containing the correct answer in each given problem if the character gets the wrong answer it will show the right. This game was created using Unity2D and C#.",
    tools: ["Unity", "C#"],
  },
  {
    id: 1,
    title: "Reservation System",
    image: Hotel,
    description:
      "This hotel reservation is created using C# and MySql as a database. The main feature of this system is the system will generate QR Codes to the customer and will send automatically on their email containing the other details. They will just need to present the QR code to the lobby and they can check-in much faster",
    tools: ["C#", "MySql"],
  },
  {
    id: 3,
    title: "Point of Sales",
    image: Pos,
    description:
      "This POS is created using Java and MySql as a database. The main purpose of this system is to make the process of the business much faster using this technology the cashier will now take the order much faster and give accurate numbers to the customer provided with a receipt.",
    tools: ["Java", "MySql"],
  },
  {
    id: 4,
    title: "Gaming Store",
    image: GameStore,
    description:
      "This website is created using HTML, CSS, JavaScript. The objective of this website is to provide online viewing of products to their customer. to see what available products that the store has.",
    tools: ["HTML", "CSS", "JavaScript"],
  },
];
