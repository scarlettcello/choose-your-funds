import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Form from "./components/Form";
import './App.css';

const query = `
{
  pageCollection {
    items {
      step
      heading
      body
    }
  }
  fundCollection {
    items { 
      equitySectors
      fixedIncomeSectors
      fundName
      fundCode
      managed
      minInvest
      pageLink
      region
      type
      volatility
    }
  }
}
`

function App() {
  const spaceId = process.env.REACT_APP_CONTENTFUL_SPACE_ID;
  const apiKey = process.env.REACT_APP_CONTENTFUL_API_KEY;

  const [funds, setFunds] = useState(null);
  const [pages, setPages] = useState(null);

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
        setFunds(data.fundCollection.items);
        setPages(data.pageCollection.items);
      });
  }, []);

  if (!funds) {
    return "Loading...";
  }

  return (
    <div className='wrapper'>
      <Form fundsData={funds} pagesData={pages} />
      <ToastContainer />
    </div>
  );
}

export default App;
