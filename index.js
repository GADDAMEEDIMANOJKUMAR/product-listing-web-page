

const getPost=async(url,y)=>{
    const response=await fetch(url);
    const data=await response.json();
    
    data.categories.map((curEle,index)=>{
        if (curEle.category_name == document.getElementById(y).textContent){
    
            let ecommData = ''; 
            curEle.category_products.map((curEl,index)=>{
                const badgeTextHtml = curEl.badge_text ? `<div class="badgeText">${curEl.badge_text}</div>`: '';
    
                    let a= parseInt(((curEl.compare_at_price-curEl.price)/(curEl.compare_at_price))*100)
                    ecommData += `
                    <div style="padding:20px;">
                        <div style="position: relative;">
                            ${badgeTextHtml}
                            <img src="${curEl.image}" class="img_prop"/>
                        </div>
                        <div class="ecomm_title">
                            <p style="width:60%;">${curEl.title}</p>
                            <p>${curEl.vendor}</p>
                        </div>
                        <div class="ecomm_detail">
                            <p>Rs.${curEl.price}.00</p>
                            <p style="text-decoration: line-through;opacity:50%;">${parseInt(curEl.compare_at_price)}</p>
                            <p style="color:red;">${a}% Off</p>
                        </div>
                            <button class="cartButton">Add to Cart</button>
                    </div>
                `;
    
    
    
            }); 
    
            document.getElementById('category_desc').innerHTML=ecommData;
        }
    })
    }
    
    getPost("https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json", 'men');
    
    
    function getData(x) {
        if (x=='men'){
            document.getElementById('men').classList.add('tab_buttonMen');
            document.getElementById('men').classList.remove('tab_button');
    
            document.getElementById('women').classList.remove('tab_buttonMen');
            document.getElementById('women').classList.add('tab_button');
    
            document.getElementById('kids').classList.remove('tab_buttonMen');
            document.getElementById('kids').classList.add('tab_button');
        }else if (x=='women'){
            document.getElementById('women').classList.add('tab_buttonMen');
            document.getElementById('women').classList.remove('tab_button');
    
            document.getElementById('men').classList.remove('tab_buttonMen');
            document.getElementById('men').classList.add('tab_button');
    
            document.getElementById('kids').classList.remove('tab_buttonMen');
            document.getElementById('kids').classList.add('tab_button');
        }else{
            document.getElementById('kids').classList.add('tab_buttonMen');
            document.getElementById('kids').classList.remove('tab_button');
    
            document.getElementById('men').classList.remove('tab_buttonMen');
            document.getElementById('men').classList.add('tab_button');
    
            document.getElementById('women').classList.remove('tab_buttonMen');
            document.getElementById('women').classList.add('tab_button');
        }
        
    
        getPost("https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json", x);
    }
    
    
    
    
    
    
    