let URLL = "https://pokeapi.co/api/v2/pokemon/ditto"
fetch(URLL)
 .then(res => res.json())
 .then(res => {
    console.log(res)
    // for()
    console.log(res.held_items[1].item)
 })
 .catch((err)=>{
    console.log(err)
 })