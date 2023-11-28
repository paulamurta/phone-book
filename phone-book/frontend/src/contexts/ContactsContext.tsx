// import { createContext, useState } from "react";
// import { api } from "../api/api";
// import React from "react";

// export const ContactsContext = createContext({});

// export const ContactsProvider = ({ children }) => {
//   const [contacts, setContacts] = useState([]);

//   function postContact(data) {
//     api
//       .post("/contacts", data)
//       .then((res) => {
//         setContacts(...contacts, data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   function getContacts() {
//     api
//       .get("/contacts")
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   function getContactsByLastName(search) {
//     api
//       .get(`/contacts/${search}`)
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
//   function deleteContact(id) {
//     api
//       .delete(`/contacts/${id}`)
//       .then((res) => {
//         const newContacts = contacts.filter((contact) => contact.id !== id);
//         setContacts(newContacts);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   function updateBook(data) {
//     api
//       .put(`books/${data.isbn}`)
//       .then((res) => {
//         const editedBooks = books.map((book) => {
//           if (book.isbn === res.data.isbn) {
//             return res.data;
//           } else {
//             return book;
//           }
//         });
//         setBooks(editedBooks);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   }

//   return (
//     <BooksContext.Provider
//       value={{
//         books,
//         setBooks,
//         listBooks,
//         listBookByIsbn,
//         postBook,
//         updateBook,
//         deleteBook,
//       }}
//     >
//       {children}
//     </BooksContext.Provider>
//   );
// };
