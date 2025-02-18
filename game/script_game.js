

    function clickX(){
        let a = document.getElementById('number').value;
        let box = document.getElementById("box"+a);
        console.log(box); 
        // let btn1 =document.getElementById("btn1");
        // let btn2 = document.getElementById("btn2");
  
        
        // document.getElementById("btn2").disabled = true;
        // document.getElementById("btn2").enabled = false;
        // document.getElementById("btn1").enabled = true;  
        // document.getElementById("btn1").enabled = false;
       
        
         let value = box.innerText;
        if(value== "X" ===true||value=="O"){
            alert("already selected");
        }
        else{
            box.style.backgroundColor = 'red';
            box.innerText = "X";

            document.getElementById("btn1").disabled = true ;
            document.getElementById("btn2").disabled = false;

            winner()

        }
        
     
        }

        function clickO(){
            let a = document.getElementById('number').value;
            let box = document.getElementById("box"+a);
            let btn1 =document.getElementById("btn1");
            let btn2 = document.getElementById("btn2");
             let value = box.innerText;
            if(value == "O" ===true || value =="X"){
                alert("already selected");
            }else{
                box.style.backgroundColor = "blue";
                box.innerText = "O";

                document.getElementById("btn1").disabled = false ;
                document.getElementById("btn2").disabled = true;
                winner()
            }
        }

        // function won(){
        //     let arr = [box1,box2,box3,box4,box5,box6,box7,box8,box9];
        //     for(let i = o ; i <= arr.length;i++){
        //         const box = document.getElementById(box[i]);
        //         box.innerText = "X";
        //         box.style.backgroundColor = "red";
        //     }
        //     alert("you won");


        // document.getElementById("box1").innerText = "X";
        // document.getElementById("box2").innerText = "X";
        // document.getElementById("box3").innerText = "X"
    //     val= ("box"+a).innerText;
    //     if( val === "X"|| val == "O"){
    //    alert("X won");
    //     }else if( val ==="O"|| val =="X"){
    //      alert("O won");
    //     }

        // }



        function winner(){
            let box1 = document.getElementById("box1").innerText;
            let box2 = document.getElementById("box2").innerText;
            let box3 = document.getElementById("box3").innerText;
            let box4 = document.getElementById("box4").innerText;
            let box5 = document.getElementById("box5").innerText;
            let box6 = document.getElementById("box6").innerText;
            let box7 = document.getElementById("box7").innerText;
            let box8 = document.getElementById("box8").innerText;
            let box9 = document.getElementById("box9").innerText;
            if(box1 == box2 &&  box2==box3 && box3==box1){
              document.getElementById("box1").style.backgroundColor = "green";
              document.getElementById("box2").style.backgroundColor = "green";
              document.getElementById("box3").style.backgroundColor = "green";
                alert("you won");
            }
            else if(box4 == box5 && box5 == box6 && box6 ==box4){
                document.getElementById("box4").style.backgroundColor = "green";
                document.getElementById("box5").style.backgroundColor = "green";
                document.getElementById("box6").style.backgroundColor = "green";
                alert("you won");
            }else if( box7 == box8 && box8 == box9 && box9 == box7){
                document.getElementById("box7").style.backgroundColor = "green";
                document.getElementById("box8").style.backgroundColor = "green";
                document.getElementById("box9").style.backgroundColor = "green";
                alert("you won");
            }else if(box1==box4 && box4 == box7 && box7 ==box1){
                document.getElementById("box1").style.backgroundColor = "green";
                document.getElementById("box4").style.backgroundColor = "green";
                document.getElementById("box7").style.backgroundColor = "green";
                alert("you won");
            }else if( box2 == box5&& box5 == box8 && box8 ==box2){
                document.getElementById("box2").style.backgroundColor = "green";
                document.getElementById("box5").style.backgroundColor = "green";
                document.getElementById("box8").style.backgroundColor = "green";
                alert("you won");
            }else if(box3 == box6 && box6 == box9 && box9 == box3){
                document.getElementById("box3").style.backgroundColor = "green";
                document.getElementById("box6").style.backgroundColor = "green";
                document.getElementById("box9").style.backgroundColor = "green";
                    alert("you won");
            }else if(box1 ==box5 && box5 == box9 && box9 ==box1){
                document.getElementById("box1").style.backgroundColor = "green";
                document.getElementById("box5").style.backgroundColor = "green";
                document.getElementById("box9").style.backgroundColor = "green";
                    alert("you won");
            }else if(box3 == box5 && box5 ==box7 && box7 ==box3){
                document.getElementById("box3").style.backgroundColor = "green";
                document.getElementById("box5").style.backgroundColor = "green";
                document.getElementById("box7").style.backgroundColor = "green";
                    alert("you won");
            }

        }

        // function winnerCheck(){
        //     for(let a=1 ; a<= 9;a++){
        //         let value =document.getElementById("box"+a).innerText;
        //         if(value == "X"){
        //             alert(" X won");
        //             return;
        //         }else if(value =="O"){
        //             alert(" O won");
        //             return;
        //         }
        //     }
        // }

     
        
           



    