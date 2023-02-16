
                    //1 is rock, 2 is paper , 3 is Scissors 
                    let jugador =0
                    let min=1
                    let max =3
                    let pc =0
                    pc = Math.floor(Math.random()*(max-min+1)+min)
                    jugador = prompt("Choose: 1 for rock, 2 for paper, 3 for scissors")
                    if(jugador == 1){
                    alert("you chose 🥌")
                 }else if(jugador ==2){
                    alert("you chose 📋")
                 }
                 else if (jugador ==3){
                    alert(" you chose ✂")
                    }else{
                        alert("you chose to lose")
                    }
                    if(pc == 1){
                    alert("computer choose 🥌")
                 }else if(pc ==2){
                    alert("computer choose 📋")
                 }else if (pc ==3){
                    alert("computer choose ✂")
                 }
                    //jue
                    if(pc ==jugador){
                        alert ("TIE")
                    }else if(jugador==1 && pc ==3){
                        alert("WON")
                    }else if (jugador ==2 &&  pc ==1){
                        alert("WON")
                    }else{
                        alert ("YOU LOST")
                    }