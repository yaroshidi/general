const xanoApiBaseUrl = 'https://x8ki-letl-twmt.n7.xano.io/api:AdRE1MAv';

function fetchApi(endpoint, options = {}) {
    return fetch(`${xanoApiBaseUrl}/${endpoint}`, options).then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
    });
}

function incrementVote(questionId, voteType, callback) {
    fetchApi(`question/${questionId}`)
        .then(questionData => {
            const updatedQuestionData = { ...questionData, [voteType]: questionData[voteType] + 1 };
            return fetchApi(`question/${questionId}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedQuestionData)
            });
        })
        .then(() => callback())
        .catch(error => console.error('Error:', error));
}

function displayQuestion(question, containerSelector, resultSelector) {
    const container = document.querySelector(containerSelector);
    if (container) {
        container.textContent = question.question;
        const resultText = document.querySelector(resultSelector);
        resultText.textContent = question.resultText;
    } else {
        console.error('Element not found:', containerSelector);
    }
}

function setupVoteHandling(cardSelector, yesButtonSelector, noButtonSelector, voteHandler) {
    const card = document.querySelector(cardSelector);
    card.querySelector(yesButtonSelector).onclick = () => voteHandler('yes_votes');
    card.querySelector(noButtonSelector).onclick = () => voteHandler('no_votes');
}

document.addEventListener('DOMContentLoaded', () => {
    fetchApi('question').then(questions => {
        const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
        displayQuestion(randomQuestion, '.question', '.result-text');
    });

    setupVoteHandling("#card-form", '.button-yes', '.button-no', voteType => {
        incrementVote(randomQuestion.id, voteType, () => {
            // Update UI or perform other actions after vote
        });
    });
});
