import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [liveNews, setLiveNews] = useState(null);

  useEffect(() => {
    fetchLiveNews();
  }, []);

  const fetchLiveNews = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/live-news/1");
      setLiveNews(response.data);
    } catch (error) {
      console.error("Error fetching LiveNews:", error);
    }
  };

  const renderLiveNews = () => {
    if (!liveNews) {
      return <p>Loading LiveNews...</p>;
    }

    return liveNews.map((newsItem) => (
      <div className="card" key={newsItem.id}>
        <img src={newsItem.image} alt="Live News" className="card-img-left" />
        <div className="card-body">
          <h5 className="card-title">{newsItem.title}</h5>
          <p className="card-text">{newsItem.description}</p>
        </div>
      </div>
    ));
  };

  const renderRelatedNews = () => {
    if (!liveNews) {
      return <p>Loading Related News...</p>;
    }

    return liveNews.map((newsItem) => (
      <div className="card" key={newsItem.id}>
        <img src={newsItem.image} alt="Related News" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{newsItem.title}</h5>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <div className="LiveNews">
        <h1 className="display">Live News</h1>
        {renderLiveNews()}
      </div>
      
      <div className="RelatedNews">
        <h2>Related News</h2>
        {renderRelatedNews()}
      </div>

      <div className="Donations">
        <h2>Recent Donations</h2>
        <p className="text-secondary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
          tempora porro recusandae architecto perferendis. Perspiciatis impedit
          est dignissimos eius ipsam asperiores possimus voluptate molestias
          vero illo, fugiat quisquam excepturi ducimus? Sequi iusto odit
          laboriosam praesentium, incidunt eligendi tempora recusandae
          explicabo, dolor voluptatem repellat harum obcaecati aspernatur cum.
          Quod sint fuga, quidem perferendis culpa alias ipsum totam vitae.
          Adipisci, enim quaerat. Officiis dolor distinctio repellendus suscipit
          ipsum fuga, dignissimos reiciendis omnis tempore aut explicabo
          temporibus minima cupiditate animi esse quis fugit officia rem modi
          quas blanditiis eius. Aperiam veniam animi dolorem. Distinctio modi
          magni, impedit blanditiis laborum amet nihil dolorum omnis porro a
          dolores, earum accusamus recusandae tempore nemo! Consectetur adipisci
          quam consequatur cupiditate in soluta expedita repudiandae tempore
          amet consequuntur! Doloremque accusantium quibusdam, dignissimos
          fugiat in iste dicta pariatur architecto quia ratione aperiam soluta
          assumenda voluptate nesciunt nisi obcaecati et voluptatem natus
          corporis. Adipisci non recusandae architecto eligendi tempora
          similique!
        </p>
      </div>
    </div>
  );
};

export default Home;
