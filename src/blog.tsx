import React, { useState, useEffect } from "react";

const Blog: React.FC = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Retrieve visitor count from local storage on component mount
    const storedCount = localStorage.getItem("visitorCount");
    if (storedCount) {
      setVisitorCount(Number(storedCount));
    }
  }, []);

  useEffect(() => {
    // Update local storage with visitor count on count change
    localStorage.setItem("visitorCount", String(visitorCount));
  }, [visitorCount]);

  const incrementCounter = () => {
    setVisitorCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>Welcome to my Blog</h1>
      <img src="https://juniorit.ai/img/ai-no-sel-3.png" alt="Blog Photo" />
      <p>Visitor Count: {visitorCount}</p>
      <button onClick={incrementCounter}>Increment Counter</button>
    </div>
  );
};

export default Blog;