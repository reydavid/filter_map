import './App.css';
import Objects from './Objects';

function App() {
  const arr = [
    {   name: "JellyFish",
        environ: "Ocean",
        period: "yes"
    },{
        name: "Urchin",
        environ: "Tidal Zone",
        period: "Cambrian"
    },{
        name:"Clam",
        environ: "Seabed",
        period: "Mesozoic"
    },{
      name:"Shrimp",
      environ: "Mid-level",
      period: "Jurassic"
    },{
        name:"Clam",
        environ: "Seabed",
        period: "Mesozoic"
    },{
      name:"Skate",
      environ: "Seafloor",
      period: "Triassic"
    },{
      name:"Narwhat",
      environ: "Ocean",
      period: "Calabrian"
    },{
      name:"Anemone",
      environ: "Tidal Zone",
      period: "Paleocene"
    },{
      name:"Gastropod",
      environ: "Free-floating",
      period: "Cretaceous"
    },{
      name:"Six Gill Shark",
      environ: "Deep Water",
      period: "Paleozoic"
    }
  ]
const obj = arr.map(item => (<Objects name={item.name} environ={item.environ} period={item.period}/>));
//<Component notation
console.log("Name:", obj)
  return (
    <div className="App">
      {obj}
      {/* <Objects /> */}
    </div>
  );
}

export default App;
