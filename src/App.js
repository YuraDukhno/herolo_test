import React, { useEffect } from "react";
import { get5dayDailyForecast } from "./API";
import { HashRouter as Router, Switch, Route} from "react-router-dom";
import Favorites from "./Components/Favorites";
import HomePage from "./Components/HomePage"
import Header from "./Components/Header/index.jsx";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { setDaily, setCurrent, addFavorite, removeFavorite } from "./store/reducers/generalSlice"



export default function App() {
  const dispatch = useDispatch()
  const daily = useSelector(state => state.general.daily)
  const favorites = useSelector(state => state.general.favorites)
  const currCity = useSelector(state => state.general.currCity)
  const getDaily = async ({ id, label } = { id: "215854", label: "Tel Aviv" }) => {
    const data = await get5dayDailyForecast(id);
    dispatch(setDaily(data.DailyForecasts))
    dispatch(setCurrent({ id, label }))
  };

  const addFavorite = (location, currWeather) => {
  console.log("🚀 ~ file: App.js ~ line 25 ~ addFavorite ~ location, currWeather", location, currWeather)
    dispatch(addFavorite({...location, currWeather}))
  };



  useEffect(() => {
    getDaily();
  }, [])
  
  return (
    <Router>
      <div className="App">
        <Header />
            <Switch>
              <Route exact path="/">
                <HomePage
                  daily={daily}
                  getWeather={getDaily}
                  favorites={favorites}
                  // addFavorite={addFavorite}
                  // removeFavorite={removeFavorite}
                  currCity={currCity}
                />
              </Route>
              <Route path="/favorites">
                <Favorites
                  favorites={favorites}
                  getWeather={getDaily}
                />
              </Route>
            </Switch>
      </div>
    </Router>
  )
}


// class App extends React.Component {
//   state = {
//     daily: [],
//     favorites: [],
//     currCity: {},
//   };

  // // ! Get daily forecast when component is mounted.
  // componentDidMount() {
  //   this.getDaily();
  // }

  // ! Get daily forecast. If input is empty take id by default 215854, label by default Tel Aviv.
  // getDaily = async ({ id, label } = { id: "215854", label: "Tel Aviv" }) => {
  //   const data = await get5dayDailyForecast(id);
  //   this.setState({
  //     daily: data.DailyForecasts,
  //     currCity: { id, label },
  //   });
  // };

  // // ! Add to favorite.
  // addFavorite = (location, currWeather) => {
  //   // debugger
  //   const updatedFavorites = [
  //     ...this.state.favorites,
  //     { ...location, currWeather },
  //   ];
  //   this.setState({
  //     favorites: updatedFavorites,
  //   });
  // };

  // ! Remove from favorite.
  // removeFavorite = id => {
  //   debugger
  //   const updatedFavorites = [...this.state.favorites].filter(
  //     favorite => favorite.id !== id  
  //   );
  //   this.setState({
  //     favorites: updatedFavorites,
  //   });
  // };

//   render() {
//     return (
//       <Router>
//         <div className="App">
//           <Header />
//               <Switch>
//                 <Route exact path="/">
//                   <HomePage
//                     daily={this.state.daily}
//                     getWeather={this.getDaily}
//                     favorites={this.state.favorites}
//                     addFavorite={this.addFavorite}
//                     removeFavorite={this.removeFavorite}
//                     currCity={this.state.currCity}
//                   />
//                 </Route>
//                 <Route path="/favorites">
//                   <Favorites
//                     favorites={this.state.favorites}
//                     getWeather={this.getDaily}
//                   />
//                 </Route>
//               </Switch>
//         </div>
//       </Router>
//     );
//   }
// }

// export default App;
