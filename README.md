
# Rick and Morty Appspace Challenge

  
## Description

The project shows a list of characters coming from [Rick and Morty API](https://rickandmortyapi.com/).
You can filter by gender and species and also sort by Id or Name. Is also possible to enter to the charater detailed card and see much more information about the character.

Link to the app: https://appspace-rick-and-morty-tech-challenge.vercel.app

### How to run
Clone the project and execute the following commands:
`yarn install ` to install all project dependencies
`yarn start` to start the project. By default will be on port 3000.

### Decisions:

 - Use of styled components instead of stylesheets with exception of pagination component.
 - Use of React-router-dom to navigate from home page to detailed card.
 - Some use of ESLint to fix the possible code problems. 
 - Basic component testing using Jest and React Testing Library.
 - Responsive design usable on all displays (tested on browser and different phones).
 - App usable in modern browsers. Not supported on IE11.
	 
  
### Available Scripts
 `yarn deploy`: Deploys the project to vercel. To make a deploy you should have a vercel account but you will be guided by the script.


### Possible improvements
- Use of Typescript.
- Use inheritance for styled components.
- E2E testing.
- Improve some styles for better UX.
- Use of React Query and custom hooks.
