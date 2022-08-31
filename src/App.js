import { useState, useEffect } from 'react';
import Form from "./components/Form";
import './App.css';

const query = `
  {
    fundCollection {
      items {
        fundName
        fundCode
        minInvest
        managed
        type
        volatility
        region
        pageLink
      }
    }
  }
`
function App() {
  const [fund, setFund] = useState(null);

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/{process.env.CONTENTFUL_SPACE_ID}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authenticate the request
          Authorization: `Bearer {process.env.CONTENTFUL_API_KEY}`,
        },
        // send the GraphQL query
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        // rerender the entire component with new data
        setFund(data.fundCollection.items[0]);
      });
  }, []);

  if (!fund) {
    return "Loading...";
  }

  return (
    <>
      {console.log(fund)}
      <Form />
    </>
  );
}

export default App;
