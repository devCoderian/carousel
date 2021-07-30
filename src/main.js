(()=>{
    const csUl = document.querySelector(".cs__list");
    const preBtn = document.querySelector(".prev__btn");
    const nextBtn = document.querySelector(".next__btn");
    
    function next(){
        console.log('다음')
            const items = document.querySelectorAll(".cs__item");
            const item  = document.querySelector(".select");
            const next = item.nextElementSibling;
            csUl.appendChild(item);
            item.classList.remove('select');
            next.classList.add('select');
           
    };

    function prev(){
        console.log('이전')
        const items = document.querySelectorAll(".cs__item");
        if(items.length > 1){
            const item  = document.querySelector(".select");
            const prev = csUl.lastElementChild;
            csUl.insertBefore(prev, items[0]);
            item.classList.remove('select');
            prev.classList.add('select');

        }
    };

    preBtn.addEventListener('click', prev);
    nextBtn.addEventListener('click', next);
    
})();