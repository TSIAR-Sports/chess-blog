import React from "react";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-700 to-purple-600 text-white py-8 shadow-md">
        <h1 className="text-4xl font-bold text-center">
          TSIAR Chess Tournament 2025
        </h1>
        <p className="text-center text-lg mt-2">
          Organized by <strong>TSIAR Sports Pvt. Ltd.</strong> — Where Passion Meets Competition ♟️
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto p-6">
       {/* Intro */}
  <section className="mb-12 text-center">
    <h2 className="text-xl md:text-2xl font-semibold mb-4">Welcome to the TSIAR Chess Community</h2>
    <p className="text-base md:text-lg leading-relaxed text-justify">
      Welcome to the official chess community of <strong>TSIAR Sports Pvt. Ltd.</strong> — a space
      built for Karnataka’s engineering college chess enthusiasts. We are here with one mission: <strong>to promote sports</strong>.
    </p>
    <p className="text-base md:text-lg leading-relaxed mt-4 text-justify">
      TSIAR will be hosting <strong>multiple tournaments</strong> across Karnataka, both online
      and offline. Our commitment is simple — if TSIAR is hosting, co-hosting, or collaborating,
      you can expect <strong>premium quality tournaments</strong> and fair play standards.
    </p>
    <p className="text-base md:text-lg leading-relaxed mt-4 text-justify">
      The community is dedicated, disciplined, and inclusive — connecting every chess player
      from engineering colleges across the state.
    </p>
    <p className="italic mt-4 text-indigo-700 font-medium text-justify">
      ✨ TSIAR — Where Passion Meets Competition ✨
    </p>
  </section>

  {/* Tournament Highlights */}
  <section className="py-12 bg-gray-50">
    <h2 className="text-2xl md:text-3xl font-semibold text-center text-blue-700 mb-10">
      🎥 Tournament Highlights
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-2 md:px-6">
      {/* YouTube Video */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/5775NFx78E8"
            title="TSIAR Chess Tournament Video"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-3 text-center">
          <p className="font-medium text-gray-700 text-sm md:text-base">
            🎬 Official Tournament Short — YouTube
          </p>
        </div>
      </div>

      {/* Instagram Reel */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <a
          href="https://www.instagram.com/reel/DPSoPEUD_mj/?igsh=MTE3YXg1ZXQwamJtNQ=="
          target="_blank"
          rel="noreferrer"
        >
          <div className="aspect-video bg-gray-100 flex items-center justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram Reel"
              className="w-20 md:w-24 h-20 md:h-24"
            />
          </div>
        </a>
        <div className="p-3 text-center">
          <p className="font-medium text-gray-700 text-sm md:text-base">
            📸 Watch Highlights — Instagram Reel
          </p>
        </div>
      </div>

      {/* LinkedIn Post */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <a
          href="https://www.linkedin.com/posts/tsiar_chesstournament-karnatakachess-indiansports-activity-7379365399802527744-trXc"
          target="_blank"
          rel="noreferrer"
        >
          <div className="aspect-video bg-gray-100 flex items-center justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn Post"
              className="w-20 md:w-24 h-20 md:h-24"
            />
          </div>
        </a>
        <div className="p-3 text-center">
          <p className="font-medium text-gray-700 text-sm md:text-base">
            🔗 View Post — LinkedIn Announcement
          </p>
        </div>
      </div>
    </div>
  </section>


        {/* Tournament Details */}
<section className="mb-12 px-4 md:px-6">
  <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6 text-blue-700">
    🏆 Tournament Overview
  </h2>
  <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md text-base md:text-lg leading-relaxed">
    <p>
      The <strong>TSIAR Chess Tournament 2025</strong> was a landmark event that united
      hundreds of passionate chess players from Karnataka’s leading engineering colleges.
      Players demonstrated exceptional strategic thinking, patience, and sportsmanship.
    </p>
    <p className="mt-4">
      The matches were organized under professional standards with digital chess clocks,
      official arbiters, and a fair pairing system. Both individual and team events were
      conducted with a time control of <strong>15 minutes + 5 seconds increment</strong>.
    </p>
    <p className="mt-4">
      Winners received trophies, medals, and exclusive recognition by TSIAR Sports Pvt. Ltd.
      Every participant received a certificate of participation.
    </p>
    <ul className="list-disc ml-6 mt-4 space-y-2">
      <li>Category: Inter-Engineering College Level</li>
      <li>Format: Rapid Chess (Swiss System)</li>
      <li>Location: Karnataka, India</li>
      <li>Participants: 150+ Students from 20+ Colleges</li>
    </ul>
  </div>
</section>

        {/* Gallery */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-center mb-6">📸 Tournament Gallery</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <img
              src="https://raw.githubusercontent.com/TSIAR-Sports/Chess-comp/refs/heads/main/20250925_133111.jpg"
              alt="Chess Tournament photo 1"
              className="rounded-xl shadow-md object-cover h-72 w-full"
            />
            <img
              src="https://raw.githubusercontent.com/TSIAR-Sports/Chess-comp/refs/heads/main/20250925_133500.jpg"
              alt="Chess Tournament photo 2"
              className="rounded-xl shadow-md object-cover h-72 w-full"
            />
          </div>
          <p className="text-center text-sm mt-3 text-gray-600">
            View complete albums:
            <br />
            <a
              href="https://photos.app.goo.gl/JXkkHSJPK5N3pf7m8"
              target="_blank"
              rel="noreferrer"
              className="text-indigo-600 underline"
            >
              Album 1
            </a>{" "}
            |{" "}
            <a
              href="https://photos.app.goo.gl/B6Rsm35BWAQi7dGr5"
              target="_blank"
              rel="noreferrer"
              className="text-indigo-600 underline"
            >
              Album 2
            </a>
          </p>
        </section>

        {/* Workshop Section */}
<section className="mb-12 bg-indigo-50 p-4 md:p-6 rounded-2xl shadow-inner">
  <h2 className="text-xl md:text-2xl font-semibold text-center mb-4 text-indigo-800">
    🧠 TSIAR Chess Workshop
  </h2>
  <p className="text-base md:text-lg leading-relaxed text-justify">
    TSIAR conducted an in-depth workshop for all participants before the tournament,
    focusing on strategy, endgame mastery, and psychological preparation.
  </p>
  <p className="text-base md:text-lg leading-relaxed mt-3 text-justify">
    Players who were selected for the <strong>South Zone Tournament</strong> found it
    extremely helpful. The workshop was led by experienced mentors and FIDE-rated coaches.
  </p>
  <p className="mt-3 font-medium text-indigo-700 text-base md:text-lg text-justify text-center">
    “This would be a very helpful workshop — do attend!”
  </p>
</section>

        {/* About TSIAR */}
<section className="mb-12 px-4 md:px-6">
  <h2 className="text-xl md:text-2xl font-semibold text-center mb-6 text-blue-700">
    💼 About TSIAR Sports Pvt. Ltd.
  </h2>
  <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-justify">
    <strong>TSIAR Sports Pvt. Ltd.</strong> is a growing sports-tech organization from
    Karnataka committed to fostering a competitive and community-driven sports culture
    among students. Apart from chess, TSIAR is also active in cricket, football, and
    badminton. Their motto stands strong —{" "}
    <span className="text-indigo-700 font-medium">"Where Passion Meets Competition."</span>
  </p>
</section>

        {/* Footer */}
       <footer className="text-black py-8 shadow-md">
  <div className="max-w-5xl mx-auto px-4 text-center">
    <p className="font-medium">
      © 2025 TSIAR Sports Pvt. Ltd. — All Rights Reserved
    </p>

    <p className="mt-2">
      📧 Email: 
      <a href="mailto:office@tsiar.com" className="underline ml-1">
        office@tsiar.com
      </a>
    </p>

    <p className="mt-2">
      🔗 LinkedIn: 
      <a 
        href="https://www.linkedin.com/company/tsiar-sports-pvt-ltd" 
        target="_blank" 
        rel="noreferrer" 
        className="underline ml-1"
      >
        TSIAR Sports Pvt. Ltd.
      </a>
    </p>

    <p className="text-sm mt-6">
      Follow us on social media for the latest updates on tournaments and workshops.
    </p>
  </div>
</footer>
      </main>
    </div>
  );
}

export default App;
