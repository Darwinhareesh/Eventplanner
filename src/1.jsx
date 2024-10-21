// import React, { useState } from 'react';
// import './App.css';

// function Cater() {
//   const [activeTab, setActiveTab] = useState('caterers');
//   const [catererDetails, setCatererDetails] = useState(null);

//   const showTab = (tabName) => {
//     setActiveTab(tabName);
//   };

//   const showDetails = (catererId) => {
//     const details = {
//       caterer1: {
//         name: 'Gourmet Delights',
//         description: 'Exquisite dishes with a touch of elegance for any occasion.',
//         steps: ['Initial consultation', 'Menu planning', 'Food preparation', 'Delivery and setup', 'Post-event clean-up'],
//         menu: 'Standard Menu: Shrimp Scampi, Caesar Salad, Garlic Bread',
//         specialMenu: 'Signature Shrimp Scampi, Lobster Mac and Cheese',
//       },
//       caterer2: {
//         name: 'Classic Eats',
//         description: 'Traditional flavors with a modern twist. Perfect for classic events.',
//         steps: ['Initial consultation', 'Menu planning', 'Food preparation', 'Delivery and setup', 'Post-event clean-up'],
//         menu: 'Standard Menu: Roasted Chicken, Mashed Potatoes, Gravy',
//         specialMenu: 'Grilled Ribeye Steak, Baked Lobster',
//       },
//     };
//     setCatererDetails(details[catererId]);
//     showTab('details');
//   };

//   return (
//     <div className="App">
//       <main>
//         <h1 className="title">Find Catering Services</h1>

//         <div className="tab-buttons">
//           <button
//             className={`tab-btn ${activeTab === 'caterers' ? 'active' : ''}`}
//             onClick={() => showTab('caterers')}
//           >
//             Caterers
//           </button>
//           <button
//             className={`tab-btn ${activeTab === 'details' ? 'active' : ''}`}
//             onClick={() => showTab('details')}
//           >
//             Catering Details
//           </button>
//           <button
//             className={`tab-btn ${activeTab === 'register' ? 'active' : ''}`}
//             onClick={() => showTab('register')}
//           >
//             Registration
//           </button>
//         </div>

//         {activeTab === 'caterers' && (
//           <div id="caterers" className="tab-content active">
//             <div className="caterer-grid">
//               <div className="caterer-card" onClick={() => showDetails('caterer1')}>
//                 <img
//                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGaL1cnX7jblIwb74NuPY2UTsajYV0W7Mo6w&s"
//                   alt="Caterer 1"
//                 />
//                 <div className="content">
//                   <h3>Gourmet Delights</h3>
//                   <p>Exquisite dishes with a touch of elegance for any occasion.</p>
//                 </div>
//               </div>
//               <div className="caterer-card" onClick={() => showDetails('caterer2')}>
//                 <img
//                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXi67gEDX54OfFRFFLSK3Y9SI9nOfjYWBE5A&s"
//                   alt="Caterer 2"
//                 />
//                 <div className="content">
//                   <h3>Classic Eats</h3>
//                   <p>Traditional flavors with a modern twist. Perfect for classic events.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {activeTab === 'details' && (
//           <div id="details" className="tab-content">
//             {catererDetails && (
//               <div className="caterer-details">
//                 <h2>{catererDetails.name}</h2>
//                 <p>{catererDetails.description}</p>
//                 <h3>Menu:</h3>
//                 <p>{catererDetails.menu}</p>
//                 <h3>Special Menu:</h3>
//                 <p>{catererDetails.specialMenu}</p>
//               </div>
//             )}
//             <div className="details-form">
//               <label>Number of Persons:</label>
//               <input type="number" placeholder="Enter number of persons" required />
//               <label>Menu:</label>
//               <textarea rows="4" placeholder="Enter menu details" required></textarea>
//               <label>Special Menu:</label>
//               <textarea rows="4" placeholder="Enter special menu details"></textarea>
//               <button>Submit</button>
//             </div>
//           </div>
//         )}

//         {activeTab === 'register' && (
//           <div id="register" className="tab-content">
//             <div className="registration-form">
//               <h2>Caterer Registration</h2>
//               <label>About:</label>
//               <textarea rows="4" placeholder="Tell us about your services" required></textarea>
//               <label>Hygiene Standards:</label>
//               <textarea rows="4" placeholder="Describe your hygiene standards" required></textarea>
//               <label>Upload Photos:</label>
//               <input type="file" multiple accept="image/*" />
//               <label>Address:</label>
//               <input type="text" placeholder="Enter address" required />
//               <label>Contact Details:</label>
//               <input type="text" placeholder="Enter contact details" required />
//               <label>Instagram Link:</label>
//               <input type="url" placeholder="Enter Instagram link" />
//               <label>Facebook Link:</label>
//               <input type="url" placeholder="Enter Facebook link" />
//               <button>Register</button>
//             </div>
//           </div>
//         )}
//       </main>

//       <footer>
//         <p>&copy; 2024 Event Planner & Catering Services</p>
//       </footer>
//     </div>
//   );
// }

// export default Cater;


import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './home';
import AboutUs from './about';
import RegistrationForm from './register.jsx';
import Plan from './plan';
import Caterers from './caters';
import LoginForm from './Loginform';
import Elegantevents from './Elegantevents.jsx'
import Dreamweddings from './Randomweddings.jsx'
import Partymagic from './Partymagic.jsx'
import CorporateCreations from './CorporateCreations.jsx'
import GlamorousGatherings from './GlamorousGatherings.jsx'
import SunshineEvents from './SunshineEvents.jsx'
import MajesticMemories from './MajesticMemories.jsx'
import FiestaFun from './FiestaFun.jsx'
import RoyalReceptions from './RoyalReceptions.jsx'
import VibrantVibes from './VibrantVibes.jsx'
import './App.css';


const App = () => {
  const [activeTab, setActiveTab] = useState('events'); // Default tab is 'events'

  const showTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={
            <div>
              <Main activeTab={activeTab} showTab={showTab} />
              <Footer />
            </div>
          } />
          <Route path="/about" element={<div><AboutUs /><Footer /></div>} />
          <Route path="/register" element={<div><RegistrationForm /><Footer /></div>} />
          {/* Dynamic route for Plan component */}
          <Route path="/plan/:eventId" element={<Plan />} />
          <Route path="/caters/:eventId" element={<Caterers />} />
          <Route path="/Loginform" element={<div><LoginForm /><Footer /></div>} /> {/* New Route for Login */}
          <Route path='/elegant' element={<Elegantevents/>}></Route>
          <Route path='/dream' element={<Dreamweddings/>}></Route>
          <Route path='/party' element={<Partymagic/>}></Route>
          <Route path='/corporate' element={<CorporateCreations/>}></Route>
          <Route path='/glamor' element={<GlamorousGatherings/>}></Route>
          <Route path='/sun' element={<SunshineEvents/>}></Route>
          <Route path='/maj' element={<MajesticMemories/>}></Route>
          <Route path='/fie' element={<FiestaFun/>}></Route>
          <Route path='/Royal' element={<RoyalReceptions/>}></Route>
          <Route path='/vibe' element={<VibrantVibes/>}></Route>
       
       


        </Routes>
      </div>
    </Router>
  );
};

const Header = () => {
  return (
    <header>
      <div className="logo">Event Planner</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/register">Register</Link>
        <Link to="/Loginform">Login</Link> {/* Link to Login */}
      </nav>
      <div className="search-location">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
        <span className="location-icon">&#128205;</span>
        <div className="location-details">Fetch Location</div>
      </div>
    </header>
  );
};

const Main = ({ activeTab, showTab }) => {
  return (
    <main>
      <div className="tab-buttons">
        <button className={activeTab === 'events' ? 'active' : ''} onClick={() => showTab('events')}>
          Events
        </button>
        <button className={activeTab === 'caterers' ? 'active' : ''} onClick={() => showTab('caterers')}>
          Caterers
        </button>
        <button className={activeTab === 'function-halls' ? 'active' : ''} onClick={() => showTab('function-halls')}>
          Function Halls
        </button>
      </div>

      {activeTab === 'events' && <EventsSection />}
      {activeTab === 'caterers' && <CaterersSection />}
      {activeTab === 'function-halls' && <FunctionHallsSection />}
    </main>
  );
};

// Sample components for Events, Caterers, Function Halls, and Footer







const EventsSection = () => {
  return (
    <div>
      <h1 className="title">Plan Your Perfect Event</h1>
      <div className="event-grid">
        {eventData.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <img src={event.image} alt={event.title} />
      <div className="content">
        <h3>{event.title}</h3>
        <p>{event.description}</p>
        {/* Open Plan in a new tab */}
        <a href={/plan/${event.id}} target="_blank" rel="noopener noreferrer">View Details</a>
      </div>
    </div>
  );
};


const CaterersSection = () => {
    return (
        <div>
            <h1 className="title">Find the Best Caterers</h1>
            <div className="caterer-grid">
                {catererData.map((caterer) => (
                    <CatererCard key={caterer.id} caterer={caterer} />
                ))}
            </div>
        </div>
    );
};

const CatererCard = ({ caterer }) => {
  return (
      <div className="caterer-card">
          <img src={caterer.image} alt={caterer.name} />
          <div className="content">
              <h3>{caterer.name}</h3>
              <p>{caterer.description}</p>
              <a href={/caters/${caterer.id}} target="_blank" rel="noopener noreferrer">View Details</a>
          </div>
      </div>
  );
};


const FunctionHallsSection = () => {
    return (
        <div>
            <h1 className="title">Discover Function Halls</h1>
            <div className="function-hall-grid">
                {functionHallData.map((hall) => (
                    <FunctionHallCard key={hall.id} hall={hall} />
                ))}
            </div>
        </div>
    );
};

const FunctionHallCard = ({ hall }) => {
    return (
        <div className="function-hall-card">
            <img src={hall.image} alt={hall.name} />
            <div className="content">
                <h3>{hall.name}</h3>
                <p>{hall.description}</p>
                <a href={hall.detailsLink}>View Details</a>
            </div>
        </div>
    );
};

const Footer = () => {
    return (
        <footer>
            <p>&copy; 2024 Event Planner. All Rights Reserved.</p>
        </footer>
    );
};

const eventData = [
  { id: 1, image: 'https://tse2.mm.bing.net/th?id=OIP.NBQJbQmFD85lm4-7dSWmoQHaE9&pid=Api&P=0&h=220', title: 'Birthday Party', description: 'Make your birthday memorable with our creative and fun ideas.', detailsLink: '/event-details' },
  { id: 2, image: 'https://media.istockphoto.com/id/1314780540/photo/indian-traditional-wedding-ceremony-photography.webp?a=1&b=1&s=612x612&w=0&k=20&c=6IXyY17ba4WBS96lAIhNOfOAiuG-s-iFfOtyjjLCwEE=', title: 'Weddings', description: 'Plan the perfect wedding with us. From decor to catering, we cover it all.', detailsLink: '/event-details' },
  { id: 3, image: 'https://tse1.mm.bing.net/th?id=OIP.FWbFDMhofCx6N2pjHUV6qAHaE7&pid=Api&P=0&h=220', title: 'Haldi', description: 'Celebrate the haldi ceremony with vibrant decorations and services.', detailsLink: '/event-details' },
  { id: 4, image: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2ZmaWNlJTIwZXZlbnRzfGVufDB8fDB8fHww ', title: 'Office Events', description: 'Host professional office parties with top-tier planning.', detailsLink: '/event-details' },
  { id: 5, image: 'https://tse3.mm.bing.net/th?id=OIP.0RzLVH0bgK3-R90z6Tu9jQHaE8&pid=Api&P=0&h=220', title: 'Pooja Ceremonies', description: 'Our team will ensure your religious ceremonies are flawless.', detailsLink: '/event-details' },
  { id: 6, image: 'https://tse1.mm.bing.net/th?id=OIP.85fYulUQd_tTrGuLtNyYDwHaE7&pid=Api&P=0&h=220', title: 'Naming Ceremony', description: 'We make naming ceremonies joyful and memorable for all guests.', detailsLink: '/event-details' },
  { id: 7, image: 'https://tse3.mm.bing.net/th?id=OIP.VOcHJTMODZf5XLY13w_QMQHaGc&pid=Api&P=0&h=220', title: 'Half Saree Functions', description: 'Make your moments memorable with our rich culture and tradition.', detailsLink: '/event-details' },
  { id: 8, image: 'https://tse4.mm.bing.net/th?id=OIP.j8T4iFD4Rzjft69r-KXcxgHaFj&pid=Api&P=0&h=220', title: 'Sangeet', description: 'Plan the perfect sangeeth with us to make your memories colourful.', detailsLink: '/event-details' },
 ];

 


const functionHallData = [
  { id: 1, image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/grand-hotel-logo-design-template-50c7255579b1e9df6d8bae41f78889c1_screen.jpg?ts=1611148225', name: 'Hotel Grand', description: 'A spacious hall ideal for large events and gatherings.', detailsLink: '/hall-details' },
  { id: 2, image: 'https://tse4.mm.bing.net/th?id=OIP.8_1_TQjjwn1-wFCRy_FiGgHaFj&pid=Api&P=0&h=220', name: 'Aurora', description: 'An elegant venue for your sophisticated events.', detailsLink: '/hall-details' },
  { id: 3, image: 'https://img.freepik.com/free-vector/letter-r-royal-luxury-logo-your-brand_1017-27683.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726272000&semt=ais_hybrid', name: 'Royal Space', description: 'Experience luxury with our royal function space.', detailsLink: '/hall-details' },
  { id: 4, image: 'https://img.freepik.com/premium-vector/garden-logo-vector_848918-13537.jpg', name: 'Garden Pavilion', description: 'Charming outdoor space for a unique and memorable event.', detailsLink: '/hall-details' },
  { id: 5, image: 'https://biz.prlog.org/CityView/logo.jpg', name: 'City View Hall', description: 'A modern hall with stunning views of the city skyline.', detailsLink: '/hall-details' },
  { id: 6, image: 'https://tse2.mm.bing.net/th?id=OIP.C5NlePLMk45JNslm2VjmewAAAA&pid=Api&P=0&h=220', name: 'Banquet Bliss', description: 'Perfect for weddings and grand celebrations.', detailsLink: '/hall-details' },
  { id: 7, image: 'https://tse3.mm.bing.net/th?id=OIP.g75Gw9reUsBH_Gbxy10XvAAAAA&pid=Api&P=0&h=220', name: 'The Grand Ballroom', description: 'An expansive ballroom for large parties and receptions.', detailsLink: '/hall-details' },
  { id: 8, image: 'https://tse3.mm.bing.net/th?id=OIP.UD63tehlPlIg1ugpA11COQHaHy&pid=Api&P=0&h=220', name: 'Luxury Lounge', description: 'A sophisticated lounge for intimate gatherings.', detailsLink: '/hall-details' },
  { id: 9, image: 'https://tse2.mm.bing.net/th?id=OIP.JayVfy01HNHlPiA9thbwrAAAAA&pid=Api&P=0&h=220', name: 'Cozy Corner Hall', description: 'A warm and inviting space for small events.', detailsLink: '/hall-details' },
  { id: 10, image: 'https://tse1.mm.bing.net/th?id=OIP.YR23ObXbHW86k3ssJo9ELwHaHa&pid=Api&P=0&h=220', name: 'Seaside Venue', description: 'A picturesque venue by the sea, perfect for outdoor weddings.', detailsLink: '/hall-details' },
  { id: 11, image: 'https://tse2.mm.bing.net/th?id=OIP.QyZvdVcmPZ01zkVK8JKddwAAAA&pid=Api&P=0&h=220', name: 'Heritage Hall', description: 'Experience the charm of history in a beautiful setting.', detailsLink: '/hall-details' },
  { id: 12, image: 'https://tse4.mm.bing.net/th?id=OIP.6-osWWFpuDtUt4RfdNSIRAHaFj&pid=Api&P=0&h=220', name: 'Imperal Hotel', description: 'A rooftop venue with breathtaking views for your special events.', detailsLink: '/hall-details' },
];




export default App;
