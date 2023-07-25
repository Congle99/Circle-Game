            let draw = document.querySelector(".draw");
            let src1 = document.querySelector(".screen1");
            let src2 = document.querySelector(".screen2");
            let btn_start = document.querySelector(".btn_start");
            let listCircle = document.querySelector(".circle");
            let score = document.querySelector(".point");
            let timeDisplay = document.querySelector(".timer");
    
            btn_start.addEventListener("click", batdau);
            
            function batdau(){
              
                src1.style.visibility = "visible";
                src2.style.visibility = "hidden";
    
                
                let point = 0;
                let time = 60;
                score.textContent = point;
    
               
                listCircle = document.querySelectorAll(".circle");
    
                
               var switchVitri = setInterval(function () {
                for (let i = 0; i < listCircle.length; i++) {
                    const element = listCircle[i];
    
           
                    element.style.visibility = "visible";
    
                    element.style.top = randomSo(0,(800 - 70))+"px";
                    element.style.left = randomSo(0,(1200 - 70))+"px";
                }
               }, 2000);
    
            
                for (let i = 0; i < listCircle.length; i++) {
                    const element = listCircle[i];
    
                    element.addEventListener("click", () => {
                        
                      
                        point = point + parseInt(element.innerHTML);
    
                 
                        element.style.top = randomSo(0,(800 - 70))+"px";
                        element.style.left = randomSo(0,(1200 - 70))+"px";
                    });
                }
    
                var countdown = setInterval(function(){
                    time--;
                    //Hiển thị thời gian đếm ngược
                    timeDisplay.innerText = time + "s";
    
                    if(time === 0){
                        clearInterval(countdown);
                        clearInterval(switchVitri);
                       //Set lại thời gian hiển thị ban đầu 
                        timeDisplay.innerText = 60 + "s";
    
                        //Ẩn srceen1 và hiện kết quả ở srceen2
                        src1.style.visibility = "hidden";
                        src2.style.visibility = "visible";
    
                        //Xuất điểm người chơi ra span.point ở srceen2
                        score.innerHTML = point;
                    }
                }, 1000);
            }
            
            function randomSo(min, max) {
                return Math.floor(Math.random() * (max - min)) + min;
            }