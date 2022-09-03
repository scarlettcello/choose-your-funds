import { useState, useEffect } from 'react';
import Form from "./components/Form";
import './App.css';

const query = `
  {
    sectorCollection {
      items {
        sector
        linkedFrom {
          fundCollection {
            items {
              fundCode
              fundName
              managed
              minInvest
              pageLink
              region
              type
              volatility
            }
          }
        }
      }
    }
  }
`

function App() {
  const spaceId = process.env.REACT_APP_CONTENTFUL_SPACE_ID;
  const apiKey = process.env.REACT_APP_CONTENTFUL_API_KEY;

  const [funds, setFunds] = useState(null);

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/${spaceId}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authenticate the request
          Authorization: `Bearer ${apiKey}`,
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
        setFunds(data.sectorCollection.items);
      });
  }, []);

  if (!funds) {
    return "Loading...";
  }

  return (
    <>
      <Form fundsData={funds} />
    </>
  );
}

export default App;
