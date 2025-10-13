import '../CSS/Propsproject.css'
const Propsproj= ({name,club,image})=>{
    return(
        <>
        <div className="propsProject">
            <h1>{name}</h1>
            <img src={image} alt="images" />
            <p>my name is {name}. i play for {club}</p>
        </div>
        </>
    )
}
export default Propsproj