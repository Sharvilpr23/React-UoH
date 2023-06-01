const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  const content = []
  for(let i = 0; i < props.numParts; i++) {
    content.push(
      <p>
        {props.parts[i]} {props.exercises[i]}
      </p>
    )
  }

  return content;
}

const Total = (props) => {
  var sum = 0

  for (var idx = 0; idx <= props.exercises.length - 1; idx++) {
    sum += props.exercises[idx];
}

  return (
    <div>
      <p>
        Number of exercises {sum}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = ['Fundamentals of React', 'Using props to pass data', 'State of a component']
  const exercises = [10, 7, 11]
  const numParts = parts.length
  return (
    <div>
      <Header course={course}/>
      <Content parts={parts} exercises={exercises} numParts={numParts} />
      <Total exercises={exercises} />
    </div>
  )
}

export default App