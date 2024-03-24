import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const AdminPanel = () => {
  const [collections, setCollections] = useState(null);

  useEffect(() => {
    const obtenerCollections = async () => {
      try {
        const response = await fetch(
          `https://pruebas-mvc.somee.com/api/collection`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200) {
          const contentType = response.headers.get("content-type");
          if (contentType && contentType.includes("application/json")) {
            const data = await response.json();
            setCollections(data);
          } else {
            const textData = await response.text();
          }
        } else {
          console.error("Error al obtener el token:", response.statusText);
        }
      } catch (error) {
        console.log(error);
      }
    };

    obtenerCollections();
  }, []);

  return (
    <>
      <main className="admin-panel">
        <div className="admin-title">
          <h1>DASHBOARD</h1>
        </div>

        <section className="command-create">
          <Link className="btn-command" as={Link} to={`/admin-panel/create`}>
            Create new Collection
          </Link>
        </section>

        <div className="collections-list">
          <h2>Modify or delete collections</h2>
          {collections &&
            collections.map((collection) => (
              <div
                key={collection.Id}
                id={`collection-${collection.Id}`}
                className="collection"
              >
                <h3>{collection.Title}</h3>
                <ul className="command-list">
                  <li className="command-item">
                    <Link
                      className="btn-command"
                      as={Link}
                      to={`/admin-panel/edit/${collection.Id}`}
                    >
                      Edit
                    </Link>
                  </li>
                  <li className="command-item">
                    <button className="btn-command">Delete</button>
                  </li>
                </ul>
              </div>
            ))}
        </div>
      </main>
    </>
  );
};
