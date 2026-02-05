'use strict'
console.log("Hi davinder");

let creationOfNewCategory=document.getElementById('newCategoryBox');
console.log(creationOfNewCategory);

creationOfNewCategory.addEventListener('click',function()
{
    inputBox.setAttribute('style','display:flex');
    let input=document.getElementById('input').focus();
    // input.addEventListener('keydown',function(e){
    //     console.log(input.value);
    //     if(e.key==='Enter'){
    //         let value=input.value;
    //         console.log(value);
    //     }
    // });

    //we will add new more thing after some time    
});
input.addEventListener('keydown',function(e){
        console.log(input.value);
        if(e.key==='Enter'){
            let value=input.value;
            console.log("enter");
            if(value.length>0)
            {
                let div=document.createElement('div');
                div.setAttribute('class','categories');

                console.log(div);   
                document.querySelector('#categoriesBox').appendChild(div);       
       
                let childDiv=document.createElement('div');
                childDiv.setAttribute('class','categoriesMessage');
                childDiv.innerText=value;
                div.appendChild(childDiv);


                childDiv=document.createElement('img');
                childDiv.setAttribute('class','submitSymbol');
                childDiv.setAttribute('src','/Frontend/assets/img/threeDot.png');
                childDiv.innerText=value;
                div.appendChild(childDiv);
                // childDiv=document.createElement('div');
                // childDiv.setAttribute('class','submitSymbol');
                // childDiv.innerText='...';
                // div.appendChild(childDiv);
                 

            }
            
        }
    });

let menuBox=document.getElementById('menuBox');
console.log(menuBox);

menuBox.addEventListener('click',function()
{
    document.getElementById('leftSideBar').setAttribute('style','width:10vw');
});
