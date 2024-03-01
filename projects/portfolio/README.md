# My Portfolio
This mini-project, made as part of the OneCodeCamp MERN Stack bootcamp, features a personal portfolio intended to showcase my web development work.

## How to Navigate the Source Code
To see how routes are being handled here, check out the following files:
- `src/routing/Router.jsx`
- `src/pages/PageData.jsx`
- `src/App.jsx`

In a nutshell, the router (`Router.jsx`) component used in `App.jsx` has been set up so that new routes can be easily configured via `PageData.jsx`.

To see how data involving projects is managed and presented, check out:
- `src/data/projectData.js`, `src/data/companies.js`, `src/data/category.js`
- `src/pages/Projects.jsx`
- `src/components/ProjectItem.jsx`

Going through these files in order, and summarizing the purposes: I have defined information for each project, separating data that I can reuse accordingly (`src/data/*`). Logic in the `Projects.jsx` component organizes the raw project data, so that it can be listed individually as repetitions of the `ProjectItem.jsx` component.

## If I had more time to improve upon this project, I will...
- Further improve the styling of the content so as to ensure full presentability
- Add images representing my projects, including logos representing technologies used.