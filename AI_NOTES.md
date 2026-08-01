# AI Usage Notes

## 1. Which parts were AI-generated vs. written by me?

I used ChatGPT as a development assistant throughout the project. AI was primarily used for discussing the overall project structure, Express.js best practices, middleware organization, debugging issues, and writing the initial versions of some code snippets.

The implementation, integration, debugging, testing, and refinement of the application were completed by me. I adapted AI suggestions to fit my project structure and coding style.

## 2. What did I validate, test, or change?

I manually verified every endpoint using Postman.

During development I identified and fixed several issues, including:
- Module import and export errors
- File path issues
- UUID compatibility with Jest
- Validation middleware integration
- Route configuration
- JSON file handling

I also wrote automated tests using Jest and Supertest to verify the API functionality.

## 3. AI suggestions I chose not to use

Several implementation approaches were discussed during development. For example:

- I chose a Monthly Summary endpoint as the optional bonus feature instead of alternatives such as Swagger documentation or Docker support.
- I kept some controller implementations simpler and more readable instead of using more condensed implementations suggested during development.
- I organized the project into controllers, routes, middleware, utilities, and tests to maintain a clear project structure.

Overall, AI was used as a coding assistant for brainstorming, debugging, and reviewing implementation decisions, while I remained responsible for integrating, validating, testing, and finalizing the solution.
