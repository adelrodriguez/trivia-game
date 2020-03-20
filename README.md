# Trivia Game

[See live](http://adelrodriguez.com/trivia-game/#/)

This is a simple Trivia Game application created using React. The application fetches 10 questions an API and presents the user to answer either True or False.

The API link is: `https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean`

The application was built using `create-react-app` using the TypeScript template.

Is is composed of three screens:

- Intro Screen. Shows the welcome message and performs the initial fetch of the questions to the API.
- Quiz Screen. Show the different questions and allows the use to answer. To handle showing the multiple questions on the same screen, `react-albus` was used to create a wizard-like experience.
- Results Screen. Shows the user's results, calculated internally by the store, and allows the user to return to the Intro Screen to play again.

Easy Peasy was chosen as a state manager due to its simplicity being more than enough to fit the needs of the application, while being based on Redux. The API based on Hooks is specially helpful to maintain the standard of using functional components. Semantic UI React was chosen as the base UI Framework, due to the clean API.

## Built With

- [create-react-app](https://create-react-app.dev/)
- [react-router-dom](https://reacttraining.com/react-router/)
- [Easy Peasy](https://github.com/ctrlplusb/easy-peasy)
- [Semantic UI React](https://react.semantic-ui.com/)
- [react-albus](https://github.com/americanexpress/react-albus)
