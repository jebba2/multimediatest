import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLoginUrl() {
      try {
        const response = await fetch(
          "https://learningtoolsdev.gsu.edu/lti_tools/lti/launch"
        );
        if (response.ok) {
          const json = await response.json();
          setData(json);
          console.log(json);
        } else {
          console.error("Auth request failed");
        }
      } catch (error) {
        console.error("Auth request error:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchLoginUrl();
  }, []);

  if (loading) {
    console.log("Loading LTI Multi Media Test Page");
  }

  if (!loading) {
    console.log("Finished Loading");
    return "Hello World";
  }
}

export default App;
