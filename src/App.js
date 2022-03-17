import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import {ToastContainer} from "react-toastify";

function App() {
    return (
        <>
            <ToastContainer/>
            <Header/>
            <Content/>
            <Footer/>
        </>
    );
}

export default App;
