import React from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"
import "./styles.css"

const Box = styled.div`
  margin: 15px;
  position: relative;
  height: 100px;
  width: 100px;
  border-radius: 4px;
  box-shadow: 0 0 20px -5px #6effbb;
`

const Box1 = styled(Box)`
  background: linear-gradient(
    135deg,
    transparent 49%,
    #21ff97 50%,
    #21ffe9 50%
  );
`
const Box2 = styled(Box)`
  background: linear-gradient(135deg, #21ff97 45%, #21ffe9 46%);
`
const Box3 = styled(Box)`
  background: linear-gradient(135deg, #21ff97 45%, #21ffe9 46%);
`

function App() {
  return (
    <div className="App">
      <Box1 />
      <Box2 />
      <Box3 />
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
