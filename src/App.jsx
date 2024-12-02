import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Products from "./components/Products";
import Modal from "./components/Modal";
import { useState } from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Header from "./components/Header";

function App() {
  const [open, setOpen] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  let toggleActions = () => {
    setSignIn((p) => !p);
    setSignUp((p) => !p);
  };
  return (
    <>
      <Header
        onOpenModal={() => setOpen(true)}
        onSignIn={() => setSignIn(true)}
        onSignUp={() => setSignUp(true)}
      />
      {open && (
        <Modal close={() => setOpen(false)}>
          <div className="w-96 min-h-56 bg-white">
            <h2>hello modal</h2>
            <button>Learn more</button>
            <button onClick={() => setOpen(false)}>Close</button>
          </div>
        </Modal>
      )}
      {signIn && (
        <Modal close={() => setSignIn(false)}>
          <SignIn toggle={toggleActions} />
        </Modal>
      )}
      {signUp && (
        <Modal close={() => setSignUp(false)}>
          <SignUp toggle={toggleActions} />
        </Modal>
      )}

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro a
        provident veritatis placeat ea fuga accusantium, rerum quod dolor
        adipisci at eos reiciendis facilis. Dolorem quasi explicabo doloribus
        similique maiores provident laborum! Culpa, consequatur, maxime
        excepturi necessitatibus quam dolores atque sunt illo harum sit
        voluptatibus ipsam cumque, molestiae rerum ab reprehenderit mollitia
        labore iusto magni minus tempora. Dolor esse quibusdam commodi, libero
        magnam repellat ipsa dolorum obcaecati numquam quaerat sit quia animi,
        accusantium atque perferendis autem eius voluptatibus, minus pariatur
        quod omnis! Est animi, harum quod eveniet error mollitia blanditiis,
        veritatis enim neque cum odit. Amet beatae iste itaque repellat.
      </p>

      <Products />
      <ToastContainer />
    </>
  );
}

export default App;
