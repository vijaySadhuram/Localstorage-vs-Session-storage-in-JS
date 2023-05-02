const btn=document.getElementById("mybtn");
const myinput=document.getElementById("myInput");

const clickbtn=()=>{
    // if()){
    //     alert(myinput.value)
    // };// store in session
    

    sessionStorage.setItem("key1",myinput.value);
    // console.log(myinput.value);
}

// sessionStorage.setItem("key1",myinput.value);
btn.addEventListener("click",clickbtn);
alert(sessionStorage.getItem("key1"));
// console.log(sessionStorage.length);
