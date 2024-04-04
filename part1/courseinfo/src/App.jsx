
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const Header = (props) =>{
    console.log(props.course)
    return(
    
      <h1>{props.course}</h1>
      
    )}

  const Content=(props) =>{
console.log(props.parts[0].name)
    const Part = (props) =>{
      
      return(<>
      <p>
       {props.part} {props.exercises}
      </p>
</>)}

    return(
      <>
   <Part part={props.parts[0].name} exercises={props.parts[0].exercises}/>
   <Part part={props.parts[1].name} exercises={props.parts[1].exercises}/>
 <Part part={props.parts[2].name} exercises={props.parts[2].exercises}/>
</>)}

  const Total = (props) =>{
    console.log(props.parts[0].exercises)
const a =props.parts[0].exercises
const b =props.parts[1].exercises
const c =props.parts[2].exercises
return(
  <p>Number of exercises {a+ b + c}</p>
)}

  return (

    <div>
      <Header course={course.name} />
     <Content parts ={course.parts}/>
     <Total parts={course.parts}/>
    </div>
    
  )
}

export default App;