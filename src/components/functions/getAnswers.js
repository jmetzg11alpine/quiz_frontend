const getAnswers = (questions) => {
  let allAnswers = ''
  for (let i = 0; i < questions.length; i++) {
    let question = questions[i]['questionsText']
    let answers = questions[i]['answerOptions']
    let answer = findAnswer(answers)
    allAnswers = allAnswers + question + ': ' + answer + '. '
  }
  return allAnswers
}

const findAnswer = (answers) => {
  let answer = ''
  for (let i = 0; i < answers.length; i++) {
    if (answers[i]['isCorrect'] === true) {
      answer = answers[i]['answerText']
    }
  }
  return answer
}
export default getAnswers
