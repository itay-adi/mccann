import "./App.css";

import { IoMdClose } from "react-icons/io";

import ContactForm from "./components/contactForm/contactForm";

function App() {
  return (
    <div>
      <header>
        <IoMdClose className="closeIcon" color="black" />
      </header>
      <main className="mainContent">
        <ContactForm />
      </main>
    </div>
  );
}

export default App;
