import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log(" set to the DB ");

  // Create a connection to the database database and version we want to use.
  const jteDb = await openDB("jate", 1);

  // Create a new transaction and specify the database and data privileges.
  const tx = jteDb.transaction("jate", "readWrite");

  // Open up the desired object store.
  const store = tx.objectStore("jate");

  // Use the .add() method on the store and pass in the content.
  const request = store.add({ jate: content });

  // Get confirmation of the request.
  const result = await request;
  console.log("successfuly saved to the database", result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async (content) => {
  console.error("get from DB");

  const jteDb = await openDB("jate", 1);

  const tx = jteDb.transaction("jate", "readOnly");

  const store = tx.objectStore("jate");

  const request = store.getAll(content);

  //Confirmation of rquest
  const result = await request;
  console.log("succes", result);
};

initdb();
