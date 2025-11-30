import React from 'react';
import ContactForm from './components/ContactForm';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-blue-600 text-white shadow-md p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-semibold">Friendly Contact</h1>
          <nav>
            <a href="#" className="hover:text-blue-200 transition duration-150 ease-in-out">
              Home
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4 md:p-8 flex items-center justify-center">
        <section className="w-full max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-6">
            We'd Love to Hear From You!
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
            Whether you have a question, feedback, or just want to say hello, feel free to reach out using the form below. We aim to respond as quickly as possible.
          </p>
          <ContactForm />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 p-4 mt-8">
        <div className="container mx-auto text-center text-sm px-4">
          &copy; {new Date().getFullYear()} Friendly Contact. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;