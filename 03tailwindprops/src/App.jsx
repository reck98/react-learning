import Card10 from "./components/Card10";

function App() {

    const myArr = [1,2,3,4,5,6,7,8,9,10]
    const myPrice = 234
    return (
        <>
            <h1 className="bg-green-400 text-white p-25 m-25 font-bold text-3xl">
                reck98 and vite
            </h1>

            <Card10 basicProp = "Hey this is " thisIsProp = {myArr} myPrice = {myPrice}/>
            <Card10 basicProp = "Yo Yo " thisIsProp = {[1,2]} myPrice = {25}/>
            <Card10 basicProp = "Something some thing" thisIsProp = {[25,45]} myPrice = {451}/>
        </>
    );
}

export default App;
