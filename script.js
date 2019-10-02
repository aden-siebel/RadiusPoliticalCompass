(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    var poli = 0;
    var econ = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === "1") {
        poli += currentQuestion.poliRes[4];
        econ += currentQuestion.poliRes[9];

      } else if (userAnswer === "2") {
        poli += currentQuestion.poliRes[3];
        econ += currentQuestion.poliRes[8];
      } else if (userAnswer === "3") {
        poli += currentQuestion.poliRes[2];
        econ += currentQuestion.poliRes[7];
      } else if (userAnswer === "4") {
        poli += currentQuestion.poliRes[1];
        econ += currentQuestion.poliRes[6];
      } else if (userAnswer === "5") {
        poli += currentQuestion.poliRes[0];
        econ += currentQuestion.poliRes[5];
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `Political axis: ${poli}. Economic axis: ${econ}.`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = [

 { question: 	"If economic globalisation is inevitable, it should primarily serve the worst off",
  answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      },
  poliRes: [0.04,	0.02,	0,	0,	0,	-0.1,	-0.04,	-0.01,	0.03,	0.06] },

{ question: 	"I’d always support my country, whether it was right or wrong.",	answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [0.1,	0.05,	0.01,	-0.02,	-0.04,	0,	0,	0,	0,	0] },
{ question: 	"Some races have superior qualities, compared with other races.",	 answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [0.2,	0.12,	0.04,	-0.01,	-0.04,	0,	0,	0,	0,	0] },


{ question: 	" 'Peace through strength' is a fundamentally good idea",	 answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [0.06,	0.02,	0,	-0.02,	-0.06,	0,	0,	0,	0,	0] },
{ question: 	"Military action that defies international law is sometimes justified.",	answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [0.15,	0.1,	0.03,	-0.02,	-0.05,	0,	0,	0,	0,	0] },

{ question: 	"People are ultimately divided more by class than by nationality.",	answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [	-0.05,	-0.02,	0,	0.02,	0.05,	-0.15,	-0.05,	0,	0.4,	0.8] },
{ question: 	"Controlling inflation is more important than controlling unemployment.",	answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [	0,	0,	0,	0,	0,	0.1,	0.05,	0,	-0.05,	-0.1] },
{ question: 	"Corporations should be heavily regulated to protect the environment",	 answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [0.04,	0.02,	0,	-0.02,	-0.04,	-0.08,	-0.04,	0,	0.04,	0.08] },
{ question: 	"'from each according to his ability, to each according to his need' is a fundamentally good idea.",	 answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [0.02,	0.01,	0,	-0.01,	-0.02,	-0.15,	-0.1,	-0.05,	0.04,	0.08] },
{ question: 	"It’s a sad reflection on our society that something as basic as drinking water is now a bottled, branded consumer product.",	 answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [0,	0,	0,	0,	0,	-0.1,	-0.05,	0,	0.2,	0.08] },
{ question: 	"Land shouldn’t be a commodity to be bought and sold.",	answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [0,	0,	0,	0,	0,	-0.15,	-0.1,	-0.05,	0.04,	0.08] },
{ question: 	"Investment bankers and consultants contribute less to society than they are economically rewarded for",	answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [0,	0,	0,	0,	0,	-0.08,	-0.02,	-0.01,	0,	0.06] },
{ question: 	"Protectionism is necessary in trade.",	answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [0.04,	0.02,	0,	-0.02,	-0.04,	-0.12,	-0.05,	0,	0.04,	0.12] },
{ question: 	"The only responsibility of a company should be to deliver a profit to its shareholders.",	answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [0,	0,	0,	0,	0,	0.12,	0.05,	0,	-0.04,	-0.12] },
{ question: 	"The rich are too highly taxed.",	answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [-0.02,	-0.01,	0,	0,	0,	0.12,	0.05,	0,	-0.04,	-0.12] },
{ question: 	"Those with the ability to pay should have access to higher standards of medical care.",	answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [0,	0,	0,	0,	0,	0.08,	0.4,	0,	-0.05,	-0.1] },
{ question: 	"Governments should regulate free markets to prevent the rise of monopolies",	answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [0.06,	0.02,	0,	0,	0,	-0.06,	-0.02,	0,	0.04,	0.1] },
{ question: 	"The freer the market, the freer the people",	answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [	-0.05,	-0.02,	0,	0,	0,	0.1,	0.05,	0,	-0.05,	0.1] },
{ question: 	"Abortion, when the woman’s life is not threatened, should be illegal.",	answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [	0.1,	0.05,	0.01,	-0.02,	-0.04,	0,	0,	0,	0,	0] },
{ question: 	"All authority should be questioned.",	answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [	-0.15,	-0.1,	-0.05,	0.04,	0.08,	0,	0,	0,	0,	0] },
{ question: 	"An eye for an eye and a tooth for a tooth is inherently fair and just",	answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [	0.12,	0.06,	0,	-0.03,	-0.06,	0,	0,	0,	0,	0] },
{ question: 	"Taxpayers should not be expected to prop up any theatres or museums that cannot survive on a commercial basis.",	answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [	0,	0,	0,	0.02,	0.03,	0.04,	0.02,	0,	-0.02,	-0.04] },
{ question: 	"It is better if different sorts of people keep to their own kind.",	answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [	0.12,	0.06,	0,	-0.03,	-0.06,	0,	0,	0,	0,	0] },
{ question: 	"Good parents sometimes have to spank their children.",	answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [	0.12,	0.06,	0,	-0.03,	-0.06,	0,	0,	0,	0,	0] },
{ question: 	"Possessing recreational drugs for personal use should not be a criminal offence.",	answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [	-0.12,	-0.08,	-0.02,	0.03,	0.12,	0.1,	0.05,	0,	0,	0] },
{ question: 	"The prime function of schooling should be to equip the future generation to find jobs.",	answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [	-0.02,	-0.01,	0,	0.04,	0.08,	0.1,	0.05,	0,	0,	0] },
{ question: 	"People with serious inheritable disabilities should be encouraged not to reproduce.",	answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [	0.2,	0.15,	0.06,	-0.02,	-0.04,	0,	0,	0,	0,	0] },
{ question: 	"The most important thing for children to learn is to accept discipline.",	answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [	0.12,	0.08,	0,	-0.04,	-0.08,	0,	0,	0,	0,	0] },
{ question: 	"There are no savage and civilised peoples; there are only different cultures.",	answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [	-0.1,	-0.05,	0,	0.05,	0.1,	0,	0,	0,	0,	0] },
{ question: 	"Those who are able to work, and refuse the opportunity, should not expect society’s support.",	answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [0.1,	0.06,	0,	-0.03,	-0.06,	0.18,	0.1,	0,	-0.08,	-0.12] },
{ question: 	"First-generation immigrants can never be fully integrated within their new country.",	answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [0.1,	0.06,	0,	-0.06,	-0.1,	0,	0,	0,	0,	0] },
{ question: 	"No broadcasting institution, however independent its content, should receive public funding.",	answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [	-0.04,	-0.02,	0,	0.02,	0.04,	0.08,	0.04,	0,	-0.01,	-0.02] },
{ question: 	"Civil liberties are excessively curbed in the name of counter-terrorism.",	answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [	-0.15,	-0.08,	0,	0.08,	0.15,	0,	0,	0,	0,	0] },
{ question: 	"A significant advantage of a one-party state is that it avoids all the arguments that delay progress in a democratic political system.",	answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [	0.12,	0.08,	0,	-0.04,	-0.08,	0,	0,	0,	0,	0] },
{ question: 	"Although the electronic age makes official surveillance easier, only wrongdoers need to be worried.",	answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [	0.15,	0.08,	0,	-0.08,	-0.15,	0,	0,	0,	0,	0] },
{ question: 	"Governments should be allowed to use the death penalty",	answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [	0.1,	0.05,	0,	-0.04,	-0.08,	0,	0,	0,	0,	0] },
{ question: 	"In society, hierarchies arise naturally.",	answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [	0.12,	0.08,	0,	-0.04,	-0.08,	0.05,	0.03,	0,	0,	-0.02] },
{ question: 	"In criminal justice, punishment should be more important than rehabilitation.",	answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [	0.1,	0.05,	0,	-0.05,	-0.1,	-0.04,	-0.02,	0,	0.01,	0.02] },
{ question: 	"It is a waste of time to try to rehabilitate some criminals.",	answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [	0.1,	0.05,	0,	-0.05,	-0.1,	0,	0,	0,	0,	0] },
{ question: 	"The businessperson and the manufacturer are more important than the writer and the artist.",	answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [	0,	0,	0,	0,	0,	-0.1,	-0.05,	0,	0.05,	0.1] },
{ question: 	"It is tragic but necessary that women give up parts of their careers to be mothers",	answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [	0.1,	0.05,	0,	-0.05,	-0.1,	0,	0,	0,	-0.08,	-0.12] },
{ question: 	"Multinational companies are unethically exploiting the resources of developing countries.",	answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [	0.05,	0.03,	0,	0,	0,	-0.12,	-0.06,	0,	0.06,	0.12] },
{ question: 	"Making peace with the establishment is an important aspect of maturity.",	answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [	0.1,	0.05,	0,	-0.05,	-0.1,	0,	0,	0,	0.02,	0.04] },
{ question: 	"Charity is better than welfare as a means of helping the genuinely disadvantaged.",	answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [	0,	0,	0,	0,	0,	0.18,	0.09,	0.02,	-0.08,	-0.18] },
{ question: 	"It is important that schools instill moral values.",	answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [	0.1,	0.05,	0,	-0.05,	-0.1,	0,	0,	0,	0.02,	0.04] },
{ question: 	"A same sex couple should not be excluded from the possibility of child adoption.",	answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [	-0.1,	-0.05,	0,	0.05,	0.1,	0,	0,	0,	0,	0] },
{ question: 	"Pornography should be legal for the adult population.",	answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [	0,	0,	0,	0.02,	0.04,	0.18,	0.09,	0,	-0.04,	-0.08] },
{ question: 	"These days openness about sex has gone too far.",	answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [	0.1,	0.05,	0,	-0.05,	-0.1,	0,	0,	0,	0,	0] },
{ question: 	"American Exceptionalism is true",	answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [	0.15,	0.08,	0,	-0.08,	-0.15,	0,	0,	0,	0,	0] },
{ question: 	"America should export freedom and democracy across the globe",	answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [	0.15,	0.08,	0,	-0.08,	-0.15,	0.1,	0.05,	0,	-0.02,	-0.05] },
{ question: 	"Armed intervention is sometimes necessary and good ",	answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [	0.15,	0.08,	0,	-0.08,	-0.15,	0.02,	0.01,	0,	-0.01,	-0.02] },
{ question: 	"Liberty must be defended at all costs",	answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [	-0.2,	-0.12,	0,	0.1,	0.15,	0,	0,	0,	0,	0] },
{ question: 	"People should voulantarily sacrifice themselves sometimes so the state does not have to",	answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [	0.2,	0.12,	0.03,	-0.1,	-0.15,	-0.06,	-0.03,	0,	0.5,	0.1] },
{ question: 	"The sole purpose of taxation is raising revenue",	answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [	0,	0,	0,	0.03,	0.06,	0.2,	0.12,	0.03,	-0.1,	-0.18] },
{ question: 	"The state exists for the people but the people must serve the state ",	answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [	0.2,	0.12,	0.03,	-0.1,	-0.15,	0,	0,	0,	0.02,	0.04] },
{ question: 	"Curtailing rights is sometimes necessary for change",	answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [	0.2,	0.12,	0.03,	-0.1,	-0.15,	0.04,	0.02,	0,	-0.01,	-0.02] },
{ question: 	"A society with billionaires is necessarily immoral",	answers: {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Not Sure",
        4: "Agree",
        5: "Strongly Agree"
      }, poliRes: [	0,	0,	0,	0,	0,	-0.2,	-0.15,	0,	0.08,	0.15] },

  ];

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
