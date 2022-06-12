import Navbar from '../Navbar/Navbar'


function Form (){
    return (
        <div>
            <Navbar />
         
            <h3>Create your OWN Videogames!</h3>
            <form action="" onSubmit={(e) => {e.preventDefault()}}>
                <label htmlFor="">Name</label>
                <input type="text" placeholder="Name of your game..." />
                <label htmlFor="">Category</label>
                <input type="text" placeholder="Category of your game..."/>
                <button>Create Videogame</button>
            </form>
        </div>
    )
}

export default Form