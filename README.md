# JavaScript 2 Resit 1

## Goal

To apply knowledge of JavaScript techniques to implement the front-end functionality for an ecommerce application.

## API

The API you are using for this project can be found [here](https://dummyjson.com/docs).

This a testing API, so POST, PUT, DELETE requests will not have an affect on the data. Appropriate messages should be displayed after the requests and errors should be catered for (not just consoled logged).

Use modules (imports/exports) where you think they are appropriate.

## Brief

The project is an ecommerce site, with the required pages listed below. The frontend should be attractive and responsive but can be built with standard Booststrap or Tailwind classes.

Using the provided API and API documentation, create a functioning user interface that allows for viewing, posting, editing and deleting products.

You will need to make use of GET, POST, PUT, and DELETE HTTP methods.

Use localStorage for storing the token returned from the login API call.

A finished project fulfils the requirements below with an easy to use and error-free user interface.

## Required features

The following user stories are required for a passing submission:

- User can login with one of the user email and password combinations returned from [this endpoint](https://dummyjson.com/users). The first user can also be found [here](https://dummyjson.com/docs/users) - click _Show ouput_. The login endpoint is demonstrated [here](https://dummyjson.com/docs/auth).
- User can view a list of products
- User can view a single product fetched by id
- User can search for a product
- User can create a post content item
- User can update a post content item
- User can delete a post content item
- Only logged in users can use the create, update and delete functionality
- If a user is logged in and tries to access the login page, they should be redirected to the home page

The example code snippets use the `then`/`catch` syntax but consider using `async`/`await` for better readability.

Note: There is no registration functionality.

## Development process

1. Create a js2 branch from the default master or main branch.
2. You may use either Trello or GitHub Projects to manage your development tasks. If you are using Trello, please make sure that your board is public and that a link is provided in your readme.md file.
3. Review the API documentation.
4. Plan your approach, desired features and work strategy.
5. Implement the required features as per your work plan.
6. Open a Pull Request from js2 into the default branch and deliver the link to this PR in Moodle.

## Restrictions

- Required functionality must be implemented in original, pure JavaScript.
- A CSS Framework may be used to build the application UI.
- A .gitignore file must be provided including node_modules. This folder must be untracked.
