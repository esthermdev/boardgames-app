import terraImg from '../assets/terra_mystica.jpg';
import everdellImg from '../assets/everdell.jpg';
import splendorImg from '../assets/splendor.jpg';
import dowImg from '../assets/dead_of_winter.jpg';
import wingspanImg from '../assets/wingspan.jpg';
import codenamesImg from '../assets/codenames.jpg';
import catanImg from '../assets/catan.jpg';
import tabooImg from '../assets/taboo.jpg';

export const BOARDGAMES = [
    {
        id: 0,
        name: "Terra Mystica",
        rating: 8.1,
        category: "Strategy",
        players: "2-5",
        duration: "60-150 minutes",
        complexity: "High",
        expansions: ["Terra Mystica: Fire & Ice"],
        description: "Terra Mystica is a euro-style board game designed by Jens Drögemüller and Helge Ostertag. It is set in a fantasy world where players lead factions to terraform and build structures on a hexagonal landscape.",
        image: terraImg
    },
    {
        id: 1,
        name: "Everdell",
        rating: 8,
        category: "Strategy",
        players: "1-4",
        duration: "40-80 minutes",
        complexity: "Medium",
        expansions: ["Everdell: Pearlbrook", "Everdell: Bellfaire"],
        description: "Everdell is a worker placement and tableau-building game designed by James A. Wilson. Players develop their own woodland cities by placing workers and constructing buildings, all while managing resources and attracting critter citizens.",
        image: everdellImg
    },
    {
        id: 2,
        name: "Splendor",
        rating: null,
        category: "Family",
        players: "2-4",
        duration: "30 minutes",
        complexity: "Low",
        expansions: ["Splendor: Cities of Splendor"],
        description: "Splendor is a card-based board game designed by Marc André. Players collect chips representing gemstones and use them to purchase cards, which in turn provide permanent gem bonuses and victory points.",
        image: splendorImg
    },
    {
        id: 3,
        name: "Dead of Winter",
        rating: 7.5,
        category: "Thematic",
        players: "2-5",
        duration: "60-120 minutes",
        complexity: "Medium",
        expansions: ["Dead of Winter: The Long Night", "Dead of Winter: Warring Colonies"],
        description: "Dead of Winter is a cooperative board game designed by Jonathan Gilmour and Isaac Vega. Set in a post-apocalyptic world, players must work together to survive while dealing with crises and hidden objectives.",
        image: dowImg
    },
    {
        id: 4,
        name: "Wingspan",
        rating: 8.1,
        category: "Strategy",
        players: "1-5",
        duration: "40-70 minutes",
        complexity: "Medium",
        expansions: ["Wingspan: European Expansion"],
        description: "Wingspan is an engine-building board game designed by Elizabeth Hargrave. Players attract birds to their wildlife preserves, aiming to score the most points through diverse bird species and various habitats.",
        image: wingspanImg
    },
    {
        id: 5,
        name: "Codenames",
        rating: 7.5,
        category: "Party",
        players: "4-8+",
        duration: "15-30 minutes",
        complexity: "Low",
        expansions: ["Codenames: Pictures", "Codenames: Duet"],
        description: "Codenames is a social word game designed by Vlaada Chvátil. Players give one-word clues that can point to multiple words on the board, trying to help their team guess the correct words while avoiding the opponent's words and the assassin.",
        image: codenamesImg
    },
    {
        id: 6,
        name: "Catan",
        rating: 7.1,
        category: "Strategy",
        players: "3-4",
        duration: "60-120 minutes",
        complexity: "Medium",
        expansions: ["Catan: Seafarers", "Catan: Cities & Knights"],
        description: "Catan, previously known as The Settlers of Catan, is a resource management and trading board game designed by Klaus Teuber. Players collect and trade resources to build settlements, cities, and roads on the island of Catan, aiming to achieve victory points.",
        image: catanImg
    },
    {
        id: 7,
        name: "Taboo",
        rating: 6.3,
        category: "Party",
        players: "4+",
        duration: "30-60 minutes",
        complexity: "Low",
        expansions: [],
        description: "Taboo is a word guessing game designed by Brian Hersch. Players try to guess a word or phrase on a card without using certain forbidden words or phrases. A teammate gives clues to help them guess.",
        image: tabooImg
    }
];