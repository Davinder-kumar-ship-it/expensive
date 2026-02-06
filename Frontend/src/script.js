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
        if(e.key==='Enter')
        {
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
                input.value='';
                div.setAttribute('id',div.innerText);
                console.log(div);
            }
            
        }
 });
let dynamicCategory=document.querySelectorAll('submitSymbol');
console.log(dynamicCategory);
document.querySelector('.submitSymbol').addEventListener('click',function(e)
{
   for(let index=1;index<dynamicCategory.length;index++)
   {
        let latestObject=dynamicCategory[index];
        console.log(e.target.id);
        console.log('davinder kumar');
   }
   console.log(e.target.id);
});


