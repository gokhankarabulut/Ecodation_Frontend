// Dark Mode
let darkMode =()=>{
    document.body.classList.toggle("dark_mode")
}

// input search
$(document).ready(function(){
    const searchApi=["Adana","Balikesir","Çorum","Denizli","Diyarbakır","Edirne","Malatya","Van"];
    $("#tags").autocomplete({
        source:searchApi
    })
    }); 
    //end 

    //     Footer 
    // JS DOM
let newDate = ()=>{
    const date = new Date().getFullYear();
// document.getElementById("date_id").innerHTML=new Date().getFullYear();

    // Jquery DOM
    $("#date_id").html(date)


}
newDate();