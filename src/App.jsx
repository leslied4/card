import "./App.css"
import Info from "./Info"
import About from "./About"
import Interest from "./Interest"
import Footer from "./Footer"

export default function App() {
  return (
    <div className="app">
      <Info />
      <section className="section">
        <About />
        <Interest />
      </section>
      <Footer />
    </div>
  )
}