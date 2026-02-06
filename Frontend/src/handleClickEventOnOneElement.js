'use strict';
let categoriesBox=document.getElementById('categoriesBox');
let firstChildOfCategoriesBox=document.getElementById('firstChild');

let count=1;
firstChildOfCategoriesBox.addEventListener('click',function(e){
    if(count & 1)
    {
        for(let index=1;index<categoriesBox.children.length;index++)
        {
            let childOfCategoriesBox=categoriesBox.children[index];
            childOfCategoriesBox.setAttribute('style','display:none');
        }
    }
    else
    {
        for(let index=1;index<categoriesBox.children.length;index++)
        {
            let childOfCategoriesBox=categoriesBox.children[index];
            childOfCategoriesBox.setAttribute('style','display:flex');
        }
    }
    console.log(count);
    count++;
});

