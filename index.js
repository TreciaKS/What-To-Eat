// have to figure out a way to refractor the code
// what I don't understand is that if i declare a 
// function before the generate() function, errors arise

let hideContent = document.getElementById("foodContent")
let transformHeading = document.getElementById("heading")

// hiding the content, displayed when generate is called
hideContent.style.display = "none"

function generate() {
fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(response => response.json())
    .then(data => {

        // enlarge text and change message with randomMsg array
        transformHeading.style.fontSize = "2rem"
        transformHeading.style.color = "white"
        transformHeading.textContent = "What to eat? Maybe this? 😁"

        // displays the content when called
        if (hideContent.style.display === "none") {
            hideContent.style.display = "block"
        }

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

    //  loop in array object failed
    // for (let items in recipe) {
    //     console.log(items)
    // }