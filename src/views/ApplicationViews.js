import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"
import { GameList } from "../components/games/GameList"
import { GameDetails} from "../components/games/GameDetails"


export const ApplicationViews = ({ token, setToken }) => {
    return <>
        <Routes>
            <Route path="/" element={<Login setToken={setToken} />} />
            <Route path="/register" element={<Register setToken={setToken} />} />
            <Route element={<Authorized token={token}  />}>
                <Route path="/games" element={<GameList setToken={setToken} />} />
                <Route path="/games/:gameId" element={<GameDetails setToken={setToken} />} />

            </Route>
        </Routes>
    </>
}