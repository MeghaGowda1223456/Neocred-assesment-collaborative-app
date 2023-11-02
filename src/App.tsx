// import "./App.css";
// import Home from "./pages/HomePage";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Toaster } from "react-hot-toast";

// function App() {
//   return (
//     <div className="App">
//       <div>
//         <Toaster
//           position="top-right"
//           toastOptions={{
//             success: {
//               theme: {
//                 primary: "#4aed88",
//               },
//             },
//           }}
//         ></Toaster>
//       </div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />}></Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
import "./App.css";
import Home from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import EditorPage from "./pages/EditorPage";

function App() {
  return (
    <div className="App">
      <div>
        <Toaster
          position="top-right"
          toastOptions={{
            success: {
              style: {
                background: "#4aed88",
                color: "#fff",
              },
            },
          }}
        ></Toaster>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editor/:roomId" element={<EditorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
