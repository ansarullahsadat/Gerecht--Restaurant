import {
  Navbar,
  Header,
  About,
  Menu,
  Chefs,
  Meal,
  Award,
  Gallery,
  Cta,
  Footer,
} from "./components/index"

function App() {
  return (
    <main className='text-greyColor  '>
      <Navbar />
      <Header />
      <About />
      <Menu />
      <Chefs />
      <Meal />
      <Award />
      <Gallery />
      <Cta />

      <Footer />
    </main>
  )
}

export default App
