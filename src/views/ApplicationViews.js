import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"
import { GameList } from "../components/games/GameList"
import { GameDetails} from "../components/games/GameDetails"
import { ControllerList} from "../components/controllers/ControllerList"
import { ControllerDetails} from "../components/controllers/ControllerDetails"
import { ConsoleList} from "../components/consoles/ConsoleList"
import { ConsoleDetails } from "../components/consoles/ConsoleDetails"
import { ConsoleCollectionList } from "../components/collections/consoleCollection/ConsoleCollectionList"
import { ControllerCollectionList } from "../components/collections/controller_collection/ControllerCollectionList"
import { GameCollectionList } from "../components/collections/game_collection/GameCollectionList"
import { GameCollectionForm } from "../components/collections/game_collection/GameCollectionForm"
import { GameCollectionDetails } from "../components/collections/game_collection/GameCollectionDetails"
import { GameCollectionUpdateForm } from "../components/collections/game_collection/GameCollectionEditForm"
import { ControllerCollectionForm } from "../components/collections/controller_collection/ControllerCollectionForm"
import { ControllerCollectionDetails } from "../components/collections/controller_collection/ControllerCollectionDetails"
import { ControllerCollectionUpdateForm } from "../components/collections/controller_collection/ControllerCollectionEditForm"
import { ConsoleCollectionDetails } from "../components/collections/consoleCollection/ConsoleCollectionDetails"
import { ConsoleCollectionForm } from "../components/collections/consoleCollection/ConsoleCollectionForm"
import { ConsoleCollectionUpdateForm } from "../components/collections/consoleCollection/ConsoleCollectionEditForm"
import { Home } from "../components/home/Home"


export const ApplicationViews = ({ token, setToken }) => {
    return <>
        <Routes>
            <Route path="/login" element={<Login setToken={setToken} />} />
            <Route path="/register" element={<Register setToken={setToken} />} />
            <Route element={<Authorized token={token}  />}>
                <Route path="/" element={<Home setToken={setToken} />} />
                <Route path="/games" element={<GameList setToken={setToken} />} />
                <Route path="/games/:gameId" element={<GameDetails setToken={setToken} />} />
                <Route path="/controllers" element={<ControllerList setToken={setToken} />} />
                <Route path="/controllers/:id" element={<ControllerDetails setToken={setToken} />} />
                <Route path="/consoles" element={<ConsoleList setToken={setToken} />} />
                <Route path="/consoles/:id" element={<ConsoleDetails setToken={setToken} />} />
                <Route path="/consolecollections" element={<ConsoleCollectionList setToken={setToken} />} />
                <Route path="/consolecollections/:collectionId" element={<ConsoleCollectionDetails setToken={setToken} />} />
                <Route path="/consolecollections/create" element={<ConsoleCollectionForm setToken={setToken} />} />
                <Route path="/consolecollections/:collectionId/edit" element={<ConsoleCollectionUpdateForm setToken={setToken} />} />
                <Route path="/controllercollections" element={<ControllerCollectionList setToken={setToken} />} />
                <Route path="/controllercollections/:collectionId" element={<ControllerCollectionDetails setToken={setToken} />} />
                <Route path="/controllercollections/create" element={<ControllerCollectionForm setToken={setToken} />} />
                <Route path="/controllercollections/:collectionId/edit" element={<ControllerCollectionUpdateForm setToken={setToken} />} />
                <Route path="/gamecollections" element={<GameCollectionList setToken={setToken} />} />
                <Route path="/gamecollections/create" element={<GameCollectionForm setToken={setToken} />} />
                <Route path="/gamecollections/:collectionId" element={<GameCollectionDetails setToken={setToken} />} />
                <Route path="/gamecollections/:collectionId/edit" element={<GameCollectionUpdateForm setToken={setToken} />} />
            </Route>
        </Routes>
    </>
}