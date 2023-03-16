import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AuthChecker from "../Component/AuthChecker";
import Home from '../Pages/Home';
import AuthLogin from "../Pages/Auth/login"
import AuthRegister from "../Pages/Auth/register"
import AuthForgotPassword from "../Pages/Auth/forgotPassword";
import MenuAdd from "../Pages/Menu/addMenu"
import MenuDetail from "../Pages/Menu/detailMenu"
import MenuEdit from "../Pages/Menu/editMenu"
import MenuSearch from "../Pages/Menu/searchMenu"

import DetailProfile from "../Pages/Profile/detailProfile";
import ChangePassword from "../Pages/Profile/changePassword";
import RecipesProfile from "../Pages/Profile/recipesProfile";
import BookmarkedProfile from "../Pages/Profile/bookmarkedProfile";



function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigate to="home" replace="true" />} />
            <Route path="/home" element={<Home />} />
        
            <Route path="/auth/login" element={<AuthLogin />} />
            <Route path="/auth/register" element={<AuthRegister />} />
            <Route path="/auth/forgotPassword" element={<AuthForgotPassword />} />
                
            <Route path="/menu/addMenu" element={<MenuAdd />} />
            <Route path="/menu/detailMenu/:id" element={<MenuDetail />} />
            <Route path="/menu/editMenu/:id" element={<MenuEdit />} />
            <Route path="/menu/searchMenu" element={<MenuSearch />} />
                
            <Route path="/profile/detailProfile" element={<DetailProfile />} /> 
            <Route path="/profile/changePassword" element={<ChangePassword />} /> 
            <Route path="/profile/recipesProfile" element={
                <AuthChecker>
                    <RecipesProfile />
                </AuthChecker>
                } />
            <Route path="/profile/bookmaredProfile" element={<BookmarkedProfile />} />
            
        </Routes>
        </BrowserRouter>
    );
}

export default App;
