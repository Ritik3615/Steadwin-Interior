// OffersNewsPage.jsx
// React + Tailwind component for a 'News / Offers' page
// Dynamic sections for promotional updates like Diwali Offer, Chhath Offer, etc.

import React, { useState } from 'react';
import Footer from '../../Components/Footer';

export default function OffersNewsPage() {
  const [offers, setOffers] = useState([
    {
      id: 1,
      title: 'Diwali Offer — Spark Your Space!',
      date: 'Oct 25, 2025',
      description: 'Celebrate Diwali with style! Get up to 20% off on all interior design services. Offer valid till Nov 10.',
      tag: 'Festival',
      highlight: true,
    },
    {
      id: 2,
      title: 'Chhath Puja Special Offer',
      date: 'Oct 27, 2025',
      description: 'Book any modular kitchen package and get free lighting consultation worth ₹10,000. Limited period only.',
      tag: 'Festival',
      highlight: false,
    },
    {
      id: 3,
      title: 'Bring a Friend — Get 20% Discount',
      date: 'Nov 1, 2025',
      description: 'Refer a friend to Steadwin Interiors and both of you get 20% discount on your next project. Because good taste should be shared.',
      tag: 'Referral',
      highlight: true,
    },
  ]);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <section className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop"
          alt="Investor Relations"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Offers for new invension{" "}
            <span className="text-amber-400">Steadwin Group</span>
          </h1>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold">Latest News & Offers</h2>
          <p className="mt-2 text-gray-600">Get all seasonal deals, discounts, and announcements in one place.</p>
        </div>

        <div className="space-y-6">
          {offers.map((offer) => (
            <article
              key={offer.id}
              className={`bg-white rounded-2xl shadow p-6 border-l-4 transition-all ${
                offer.highlight ? 'border-l-indigo-600' : 'border-l-gray-300'
              }`}
            >
              <header className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-900">{offer.title}</h3>
                <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full">{offer.tag}</span>
              </header>
              <p className="text-sm text-gray-500 mt-1">{offer.date}</p>
              <p className="mt-3 text-gray-700 leading-relaxed">{offer.description}</p>

              <div className="mt-4">
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:opacity-95 text-sm">Claim Offer</button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 border-t pt-6 text-center">
          <h4 className="text-lg font-semibold mb-2">Want to post a new offer?</h4>
          <p className="text-sm text-gray-600 mb-4">This section can later connect to an admin dashboard where you can add offers dynamically.</p>
          <button
            onClick={() => {
              const newOffer = {
                id: offers.length + 1,
                title: `Special Offer #${offers.length + 1}`,
                date: new Date().toDateString(),
                description: 'A new promotional offer will be updated here soon. Stay tuned!',
                tag: 'General',
                highlight: false,
              };
              setOffers([newOffer, ...offers]);
            }}
            className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 text-sm"
          >
            + Add Dummy Offer
          </button>
        </div>
      </section>

      {/* <footer className="bg-white border-t mt-12">
        <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-gray-500 flex justify-between">
          <div>© {new Date().getFullYear()} Steadwin Group</div>
          <div className="space-x-4">
            <a href="#" className="hover:text-indigo-600">Home</a>
            <a href="#" className="hover:text-indigo-600">Contact</a>
            <a href="#" className="hover:text-indigo-600">Services</a>
          </div>
        </div>
      </footer> */}
      <Footer/>
    </main>
  );
}
