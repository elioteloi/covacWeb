import { render, screen } from "@testing-library/react"
import App from "./components/App"

test("render learn react link", () => {
    render(<App/>)
    const linkElement = screen.getByText(/learn react/i)
    expect(linkElement).toBeInTheDocment();
})