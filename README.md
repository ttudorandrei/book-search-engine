# Book search engine

## Table of contents

- [Book search engine](#book-search-engine)
  - [Table of contents](#table-of-contents)
  - [Description](#description)
  - [User Story](#user-story)
  - [Queries](#queries)
  - [Mutations](#mutations)
  - [Screenshots](#screenshots)
  - [Link to GitHub repository](#link-to-github-repository)
  - [Link to Deployed application](#link-to-deployed-application)

## Description

A full stack application running on a GraphQL server in the backend and using ReactJS to display the pages in the browser.

## User Story

```
 AS A USER I am able to create an account.

 WHEN I create an account
 THEN I can login using the same credentials I chose when creating the account.

 WHEN I Log in,
 THEN I am presented with the landing page

 WHEN I search for a keyword,
 THEN I am presented with a list of books matching that keyword

 WHEN I click the "Add to Favorites" button,
 THEN that book is saved in the database;

 WHEN I view the "Saved Books" page,
 THEN I am presented with all of the books I have saved;

 WHEN I click the "Remove" button,
 THEN that specific book is removed from the favorites;

 WHEN I click the "logout" button,
 THEN I am logged out and returned to the landing page;

 WHEN I am logged out,
 THEN I can still search for books but I can not add the, to favorites;
```

## Queries

Example of response when you query for a user

```
"me": {
      "_id": "610abceb3379196410f4f7ef",
      "username": "pparker",
      "email": "pparker@email.com",
      "bookCount": 14,
      "savedBooks": [
        {
          "bookId": "f280CwAAQBAJ",
          "authors": [
            "J.K. Rowling"
          ],
          "description": "All seven eBooks in the multi-award winning, internationally bestselling Harry Potter series, available as one download with stunning cover art by Olly Moss. Enjoy the stories that have captured the imagination of millions worldwide. Having now become classics of our time, the Harry Potter ebooks never fail to bring comfort and escapism to readers of all ages. With its message of hope, belonging and the enduring power of truth and love, the story of the Boy Who Lived continues to delight generations of new readers.",
          "title": "Harry Potter: The Complete Collection (1-7)",
          "image": "http://books.google.com/books/content?id=f280CwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
          "link": null
        },
        {
          "bookId": "635FAQAAIAAJ",
          "authors": [
            "François Fortin",
            "Serge D'Amico"
          ],
          "description": "A comprehensive guidebook for the supermarket and the kitchen covers more than one thousand ingredients, including fifty-eight varieties of fruits, thirty-seven types of meat, and thirty-four cereals and grains.",
          "title": "The Visual Food Encyclopedia",
          "image": "http://books.google.com/books/content?id=635FAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
          "link": null
        }]
```

## Mutations

- Signup Mutation

```
"signupInput": {
    "username": "test",
    "email": "test@test.com",
    "password": "p123"
}
```

- Login Mutation

```
"loginInput": {
    "email": "test@test.com",
    "password": "p123"
  }
```

- Save book Mutation

```
"saveBookInput": {
    "authors": [
            "J.K. Rowling"
          ],
    "description": "All seven eBooks in the multi-award winning, internationally bestselling Harry Potter series, available as one download with stunning cover art by Olly Moss. Enjoy the stories that have captured the imagination of millions worldwide. Having now become classics of our time, the Harry Potter ebooks never fail to bring comfort and escapism to readers of all ages. With its message of hope, belonging and the enduring power of truth and love, the story of the Boy Who Lived continues to delight generations of new readers.",
    "title": "Harry Potter: The Complete Collection (1-7)",
    "bookId": "f280CwAAQBAJ",
    "image": "http://books.google.com/books/content?id=f280CwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "link": null
  },
```

- Delete book mutation

```
"removeBookBookId": "brITEAAAQBAJ"
```

## Screenshots

Landing Page
![Landing Page](assets/images/book-search-engine-landing-page.png)

Singup page
![Signup Page](assets/images/book-search-engine-signup-page.png)

Login Page
![Login Page](assets/images/book-search-engine-login-page.png)

Search results when logged in page
![Search Results When Logged In Page](assets/images/book-search-engine-search-results-logged-in-page.png)

Search results when logged out page
![Search Results When Logged Out Page](assets/images/book-search-engine-search-results-logged-out-page.png)

## Link to GitHub repository

Access the GitHub repository by clicking [here](https://github.com/ttudorandrei/book-search-engine)

## Link to Deployed application

Access the Deployed Application by clicking [here](https://evening-mountain-94192.herokuapp.com/)
