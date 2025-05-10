import React, { useEffect, useRef } from "react";
import "../styles.css";

const HelloWorld = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    // Optional: Add any additional animation logic here that requires JS
    const container = containerRef.current;
    
    // Add a class for entrance animation if needed
    if (container) {
      container.classList.add("animate");
    }
    
    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div ref={containerRef} className="hello-world-container">
      <h1>
        <span className="hello-text">Hello </span>
        <span className="world-text">World!</span>
      </h1>
      <p className="subtitle">Welcome to my animated React application</p>
    </div>
  );
};

export default HelloWorld;