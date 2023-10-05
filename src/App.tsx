import './App.css'
import {Outlet, useNavigate} from "react-router-dom";

const App = () => {
    const navigate = useNavigate()
    navigate('/avia')

    return (
        <div>
            asdasdasdasdasdasdasd
            <Outlet/>
        </div>

    );
}


export default App
