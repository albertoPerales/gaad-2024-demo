/* QUESTIONARIO*/
const showFeedback = () => {
  const questionText = document.querySelector(".questionary__question");
  const buttonsContainer = document.querySelector(".questionary_buttons");
  const feedback = document.querySelector(".questionary__feedback");

  questionText.style.display = "none";
  buttonsContainer.style.display = "none";
  feedback.style.display = "block";
};
