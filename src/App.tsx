import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./App.css";

function App() {
  return (
    <div>
      {/* Set pages to 4 to accommodate all layers */}
      <Parallax pages={4}>
        {/* First background layer */}
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={1} // Occupies 1 page
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/47367/full-moon-moon-bright-sky-47367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            backgroundSize: "cover",
          }}
        />

        {/* Second background layer */}
        <ParallaxLayer
          offset={1} // Starts at page 1
          speed={1}
          factor={1} // Occupies 1 page
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/253905/pexels-photo-253905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            backgroundSize: "cover",
          }}
        />

        {/* Text layer */}
        <ParallaxLayer speed={0.05} offset={0.2} style={{ zIndex: 1 }}>
          <h1>Welcome to my website!</h1>
        </ParallaxLayer>

        {/* Text layer */}
        <ParallaxLayer speed={2} offset={3} style={{ zIndex: 1 }}>
          <h1>I Love Web Development</h1>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
