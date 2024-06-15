import React, { useEffect, useState } from "react";

export const AyurvedaNews: React.FC = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("/ayurveda-news");
        if (response.ok) {
          const data = await response.json();
          setNews(data);
        } else {
          console.error("Failed to fetch news");
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <section id="ayurveda-news" className="bg-[#DDF8E8] dark:bg-gray-800 py-20">
      <div className="grid max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16">
        <h2 className="text-5xl font-bold text-center mb-12">Latest Ayurveda News</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {news.map((article: any, index: number) => (
            <div key={index} className="p-4 border rounded-lg bg-white dark:bg-gray-900 text-black dark:text-white w-64">
              <h3 className="text-2xl font-bold mb-2">{article.title}</h3>
              <p className="text-sm mb-4">{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
