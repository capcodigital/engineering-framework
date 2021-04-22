import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

// mocks react-dom and its render method
jest.mock("react-dom", () => ({ render: jest.fn() }))

it("renders with App and root div", () => {
  const root = document.createElement("div")
  root.id = "root"
  document.body.appendChild(root)

  // Requires index.tsx so that react-dom render method is called
  require("./index.tsx")

  // Asserts render was called with <App />
  // and HTML element with id = root
  expect(ReactDOM.render).toHaveBeenCalledWith(<App />, root)
})