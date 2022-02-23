let hideContent = document.getElementById("hidden")

// hideContent.style.display = "none"

// function generate() {
//     if (hideContent.style.display === "none") {
//         hideContent.style.display = "block"
//     } else {
//         hideContent.style.display = "none"
//     }
// }
function generate() {
fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(response => response.json())
    .then(data => {
        // title
        document.getElementById("recipe-title").innerText = `${data.meals[0].strMeal}`
        // coocking instructions
        document.getElementById("instructions").innerText = `${data.meals[0].strInstructions}`
        // thumbnail image
        document.getElementById("dishImage").src = `${data.meals[0].strMealThumb}`
        // Youtube link
        document.getElementById("foodVideoLink").href = `${data.meals[0].strYoutube}`
        // Website link
        document.getElementById("foodSiteLink").href = `${data.meals[0].strSource}`
        // country of origin
        document.getElementById("cultureOrigin").innerText = `Dish Origin: ${data.meals[0].strArea}`
           
    })
}

    // for (let items in recipe) {
    //     console.log(items)
    // }