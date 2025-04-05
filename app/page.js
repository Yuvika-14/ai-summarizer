"use client"

import Image from 'next/image';
import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';
export default function Home() {
  const router = useRouter();

  const [isFAQVisible, setIsFAQVisible] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);
  const scrollToDemo = () => {
    document.getElementById('demo').scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => setIsVisible(true), 500);
  };

  const scrollToFAQ = () => {
    document.getElementById('faq').scrollIntoView({ behavior: 'smooth' });
    setIsFAQVisible(true);
  };
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center">
      {/* Navbar */}
      <nav className="w-full bg-secondary shadow-sm p-4 flex items-center justify-between">
        <Image src={'/icon.svg'} width={60} height={60} alt="Logo" />
        <ul className="hidden md:flex gap-10 mx-auto">
          <li className="hover:text-purple-800 hover:font-bold transition-all cursor-pointer">Dashboard</li>
          <li className="hover:text-purple-800 hover:font-bold transition-all cursor-pointer" onClick={scrollToDemo}>Demo</li>
          <li className="hover:text-purple-800 hover:font-bold transition-all cursor-pointer" onClick={scrollToFAQ}>Questions</li>
          <li className="hover:text-purple-800 hover:font-bold transition-all cursor-pointer">How it Works?</li>
        </ul>
      </nav>
      
      {/* Main Content */}
      <div className="mt-48 px-6 text-center">
        <h2 className="text-lg">Tools & YouTube Video Summarizer</h2>
        <h1 className="text-4xl font-bold mt-4">YouTube Video Summarizer: Powered by AI</h1>
        <p className="text-lg mt-2">How to summarize a YouTube video using Jasper.</p>
        <button 
          className="mt-6 px-6 py-3 bg-purple-500 text-white rounded-full text-lg font-semibold hover:bg-purple-600 transition"
          onClick={() => router.push('/sign-in?redirect_url=http%3A%2F%2Flocalhost%3A3000%2Fdashboard')}
        >
          Try For Free
        </button>
      </div>
      
      {/* Demo Section */}
      <div id="demo" className="flex min-h-screen w-full items-center justify-center rounded-md px-3 mt-48">
        
          <video 
            src="/demo/vid.mp4" 
            poster="/demo/poster.png" 
            id="demo-video" 
            controls 
            loop 
            muted 
            className="rounded-xl md:w-2/3"
          ></video>
    
      </div>

      {/* FAQ Section */}
      <div id="faq" className="w-full max-w-2xl mt-36 p-6 rounded-lg">
        <h1 className="text-3xl font-bold text-white text-center mb-4">Frequently Asked Questions</h1>
        <div className="space-y-4">
          {[
            { question: "Does Summify work with videos without transcripts?", answer: "Yes, Summify can process videos without transcripts using AI-based audio processing." },
            { question: "How accurate are the summaries?", answer: "The accuracy depends on the video's clarity and content, but Summify uses advanced NLP models to provide reliable summaries." },
            { question: "Can I summarize long videos?", answer: "Yes, Summify can summarize videos of any length, but the processing time may vary." }
          ].map((faq, index) => (
            <div key={index} className="border-b p-2 sm:py-4 ">
              <button 
                type="button" 
                className="flex w-full items-center justify-between py-4  transition-all hover:underline text-left"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" height="24" viewBox="0 0 24 24" 
                  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                  className={`lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200 ${openFAQ === index ? 'rotate-180' : ''}`}
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
              {openFAQ === index && (
                <p className="mt-2 text-white-300">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
