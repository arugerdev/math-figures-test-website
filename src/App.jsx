import { useEffect, useState } from 'react'
import './App.css'
import { getQuestions } from './utils/getQuestions'
import nextImage from './assets/images/next.png'
function App () {
  const [questions] = useState(getQuestions())
  const [currentQuestion, updateCurrentQuestion] = useState()
  const [currentResponse, setCurrentResponse] = useState('')
  const [interactable, setInteractable] = useState(true)
  const [state, setState] = useState('')
  const [effectMode, setEffectMode] = useState()
  const [currentIndex, updateIndex] = useState(0)
  const [suffledQuestions, setSuffledQuestions] = useState()

  useEffect(() => {
    const temporallyArray = getQuestions()
    temporallyArray.sort((a, b) => 0.5 - Math.random())
    setSuffledQuestions(temporallyArray)
    updateCurrentQuestion(temporallyArray[0])
  }, [questions])

  const submitResponse = (e) => {
    e.preventDefault()
    setInteractable(false)

    if (currentQuestion.solutions.filter((a) => a.toLowerCase() === currentResponse.toLowerCase()).length >
    0) {
      setState('Correcto! 💚')
      setEffectMode('correctEffect')
      return
    }
    console.log(currentQuestion.solutions[0])
    setState('Incorrecto 😿')
    setEffectMode('wrongEffect')
  }

  const nextQuestion = (e) => {
    e.preventDefault()
    const index = currentIndex
    setInteractable(true)
    setState('')
    setEffectMode('')
    updateIndex(index + 1)
    updateCurrentQuestion(suffledQuestions[index + 1])
    setCurrentResponse('')
  }

  return (
    <div className='App'>
      <div className={`effect ${effectMode}`} />
      <main className='testPage'>
        {currentQuestion &&
          <>
            <section className='currentQuestion'>
              <h2 className='currentQuestion_text'>{currentQuestion.question}</h2>
              {currentQuestion.image &&
                <img className='currentQuestion_image' src={currentQuestion.image} alt='' />}
              <h2>{state}</h2>
            </section>
            <section className='response'>
              <form action='' onSubmit={(state === '' ? submitResponse : nextQuestion)} onChange={(e) => setCurrentResponse(e.target.value)}>
                <input className='response_input' type='text' placeholder='Respuesta...' value={currentResponse} disabled={!interactable} />
                <button className='submitResponse' type='submit'>
                  <img src={nextImage} alt='' />
                </button>
              </form>
            </section>
          </>}

      </main>
    </div>
  )
}

export default App
