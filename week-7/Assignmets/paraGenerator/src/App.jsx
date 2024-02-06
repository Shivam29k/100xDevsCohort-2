import { useState } from 'react'

function App() {
  const [para, setPara] = useState("Enter the word count then click on Generate to geneate your paragrraph.");
  const [count, setCount] = useState(0);

  function paragraph(count) {
    const words = ["lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore", "magna", "aliqua"];
    let paragraph = "";
    for (let i = 0; i < count; i++) {
      paragraph = paragraph + " " + words[parseInt(Math.random() * (words.length - 1))]
    }
    setPara(paragraph);
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      paragraph(count);
    }
  }


  

  return (
    <>
      <div><h1>Para Generator</h1></div>
      <div className='input'>
        <Input updateCount={setCount} handleKeyPress={handleKeyPress}/>
        <button id='in' onClick={() => { paragraph(count) }}>Generate</button>

      </div>
      <Paragraph para={para} />
    </>
  )
}

function Input({ updateCount, handleKeyPress }) {
  return <input id="in" type="number" placeholder='enter the number' onChange={(e) => {
      updateCount(parseInt(e.target.value));
    }} onKeyDown={handleKeyPress}/>
}



function Paragraph({ para }) {
  return <div className='para'>
    {para}
  </div>
}

export default App
