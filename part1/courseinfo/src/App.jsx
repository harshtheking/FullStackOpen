const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  
  return (
    <div>
      <Header course={course}/>
      <Content items={[part1, exercises1]}/>
      <Content items={[part2, exercises2]}/>
      <Content items={[part3, exercises3]}/>
      <Total arr={[exercises1, exercises2, exercises3]} />
    </div>
  )
}

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
    )
}

const Content = (props) => {
  return (
    <>
      <Part part={props.items[0]} exercises={props.items[1]} />
    </>
    )
}

const Part = (props) => {
  return (
    <>
      <p>{props.part} {props.exercises}</p>
    </>
    )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)}</p>
    </>
    )
}

export default App