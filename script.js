let container = document.getElementById("container")

let url = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees`
let final

async function GetData(){
    try {
        let res  = await fetch(url)
      let  data = await res.json()

       final = data.data
        
        DisplayData(final)
    } catch (error) {
        console.log("Error" , error)
    }
}



function DisplayData(arr){

   

arr.map(function(ele,i){

    let tbody = document.querySelector("tbody")

    let tr = document.createElement("tr")

    let srNo = document.createElement("td")
    srNo.innerHTML = ele.id

    let Name = document.createElement("td")
    Name.innerHTML = ele.name

    let Gender = document.createElement("td")
    Gender.innerHTML = ele.gender

    let Department = document.createElement("td")
    Department.innerHTML = ele.department

    let salary = document.createElement("td")
    salary.innerHTML = ele.salary

  tr.append(srNo,Name,Gender,Department,salary)
  tbody.append(tr)

})
}

function databysalary(){

let value = salary.value

let logic

if(value === "low"){
    logic = final.sort(function(a,b){
       console.log(a.salary - b.salary)
    })

}

else if( value === "high"){
    logic = final.sort(function(a,b){
        return b.salary - a.salary
        
    })
}
    
DisplayData(logic)
}


let salary = document.getElementById("sortbysalary")

salary.addEventListener("change" , databysalary)




GetData()