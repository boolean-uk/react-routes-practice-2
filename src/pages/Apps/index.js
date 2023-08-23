import React from 'react'

function AppsPage(props) {
  console.log("Inside AppsPage: ", { props });

  const { apps } = props;

  return (
    <main>
      <h2>Apps</h2>
      <ul>
        {apps.map((app, index) => {
          return (
            <li key={index}>
              <h3>{app.name}</h3>
              <p>{app.price === 0 ? "FREE" : `£${app.price}`}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default AppsPage;