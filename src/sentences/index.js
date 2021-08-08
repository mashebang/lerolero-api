const defaults = require('./defaults')
const psychoanalyst = require('./psychoanalyst')
const developer = require('./developer')

const generate = (id) => {
  const sentencesGroups = {
    defaults,
    psychoanalyst,
    developer
  }

  if (!!sentencesGroups[id]) {
    
    return sentencesGroups[id]
      .reduce((sentence, currentPiece) => sentence + currentPiece[Math.floor(Math.random()*currentPiece.length)]
    , '');
  } else {
    throw new Error('Sentencas nao encontradas')
  }
}

module.exports = generate
