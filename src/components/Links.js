import React, { useEffect, useState } from "react";
import { db } from "../firebase";

const Links = () => {
  const [links, setLinks] = useState([]);

  const getLinks = async () => {
    db.collection("links").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setLinks(docs);
    });
  };


  useEffect(() => {
    getLinks();
  }, []);

  return (
    <>
      <div className="col-md-4 p-2">
      </div>
      <div className="col-md-8 p-2">
        {links.map((link) => (
          <div className="card mb-1" key={link.id}>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h4>{link.name}</h4>
              </div>
              <p>{link.description}</p>
              <iframe width="420" height="315"src={link.url} target="_blank" rel="noopener noreferrer"></iframe>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Links;
