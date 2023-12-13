import * as Style from "./styleApp"
import NavBar from './navBer';


function App() {
  return (
    <Style.AppContainer>
      <NavBar />
      <div className="content">
        {/* Add the rest of your application content here */}
      </div>
    </Style.AppContainer>
  );
}

export default App;
