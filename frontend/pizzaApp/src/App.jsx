import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./../components/Home/Homepage"
import LoginPage from "./../components/Login/LoginPage"
import AdminPage from "./../components/Admin/AdminPage"
import AdminLogin from "./../components/Admin/AdminLogin"
import CustomPizza from "./../components/CustomPizza/CustomPizza"
import DetailPizza from "./../components/DetailPizza/DetailPizza"
import PlaceOrder from "./../components/PlaceOrder/PlaceOrder"


function App() {
//to run check u r in this path ->pizzaApp\frontend\pizzaApp> then type=>"npm run dev"
  return (
    <div>
      <Router>
				<Routes>
					<Route path="/" element={<LoginPage/>} ></Route>
					<Route path="/home" element={<HomePage />}></Route>
					<Route path="/detailpizza/:pizzaid" element={<DetailPizza />}></Route>
					<Route path="/custompizza" element={<CustomPizza />}></Route>
					<Route path="/placeorder" element={<PlaceOrder />}></Route>
					<Route path="/adminlogin" element={<AdminLogin />}></Route>
					<Route path="/admin" element={<AdminPage />}></Route>
				</Routes>
			</Router>
    </div>
  )
}

export default App
