
const family = document.querySelector('.family-member')

phone.map((data, index) => {

    family.innerHTML += (`
    
    <div class="member">
        <div class="image">
            <img src="${data.image}" alt="">
        </div>
        <ul>
            <li class="color2"> <span>ID </span>: ${index + 1}</li> 
            <li><span>Name </span>: ${data.name}</li> 
            <li class="color2"><span>Reletion</span>:${data.relation}</li>
            <li ><span>Phone Number</span>:${data.phoneNumber}</li>
            <li class="color2"><span>Loocation</span>:${data.location}</li>
        </ul>
    </div> 

    `)

})