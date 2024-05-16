import bonanzaImg from '../assets/boardgame-bonanza.jpg';
import conquestImg from '../assets/tabletop-conquest.jpg';
import meepleMarathonImg from '../assets/meeple-marathon.jpg';
import euroGalaImg from '../assets/game-gala.jpg';
import strategySpectacularImg from '../assets/strategy-spectacular.jpg';

export const EVENTS = [
    {
        id: 0,
        name: "Boardgame Bonanza 2024",
        dates: "July 20-22, 2024",
        location: "Chicago, Illinois, McCormick Place",
        description: "Join hundreds of boardgame enthusiasts for a weekend filled with gaming! Featuring new game demos, tournaments, and panels with top game designers. Whether you're a seasoned player or new to boardgames, this event is perfect for everyone.",
        image: bonanzaImg,
        featured: false
    },
    {
        id: 1,
        name: "Tabletop Conquest",
        dates: "August 15-17, 2024",
        location: "San Francisco, California, Moscone Center",
        description: "Explore the latest in tabletop gaming at Tabletop Conquest! Enjoy hands-on experiences with upcoming games, exclusive previews, and the chance to meet your favorite creators. Perfect for families and gamers of all levels.",
        image: conquestImg,
        featured: false
    },
    {
        id: 2,
        name: "Manhattan Meeple Marathon",
        dates: "September 5-6, 2024",
        location: "New York, New York, Javits Center",
        description: "Don't miss out on the annual Manhattan Meeple Marathon! A 24-hour gaming marathon with contests, prizes, and all-night gaming sessions. Raise funds for charity while playing your favorite games.",
        image: meepleMarathonImg,
        featured: true
    },
    {
        id: 3,
        name: "Euro Game Gala",
        dates: "October 3-4, 2024",
        location: "Austin, Texas, Palmer Events Center",
        description: "Join us at the Euro Game Gala for a deep dive into European-style boardgames. Participate in workshops, strategy sessions, and tournaments. Whether you're a competitive gamer or looking for fun, this event has something for everyone.",
        image: euroGalaImg,
        featured: true
    },
    {
        id: 4,
        name: "Strategy Spectacular",
        dates: "November 10-12, 2024",
        location: "Seattle, Washington, Washington State Convention Center",
        description: "Gear up for the Strategy Spectacular, where strategic minds meet to challenge and be challenged. Featuring heavy strategy games, expert-led sessions, and networking opportunities for serious gamers.",
        image: strategySpectacularImg,
        featured: true
    }
];