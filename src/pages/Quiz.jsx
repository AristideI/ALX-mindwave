/* eslint-disable react-refresh/only-export-components */
import Spinner from "../assets/Spinner";
import QuestionCard from "../components/QuestionCard";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  const response = await fetch(
    "https://opentdb.com/api.php?amount=10&category=18"
  );
  const quests = await response.json();
  return quests.results;
}

export default function Quiz() {
  const questions = useLoaderData();
  console.log(questions);
  const questionCards = questions.map((question, ind) => {
    const options = [...question.incorrect_answers, question.correct_answer];
    shuffleArray(options);
    return (
      <QuestionCard
        key={ind}
        num={ind + 1}
        question={question.question}
        correct={question.correct_answer}
        options={options}
        dif={question.difficulty}
      />
    );
  });

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  return questions?.length === 0 ? (
    <Spinner />
  ) : (
    <article>
      <section className="px-12 flex flex-col gap-6 my-8">
        {questionCards}
      </section>
    </article>
  );
}
