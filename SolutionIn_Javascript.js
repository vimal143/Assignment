let number = prompt();
        const arr=new Array();
        for(i=0;i<number;i++){
            arr[i]=prompt();

        }
        check_pair(number,arr);

        function check_pair(n,array){
            var unique_color_socks = Array.from(new Set(array)).map(val => array.filter(v => v === val).length);
            let possible_pair=0;
            for(i in unique_color_socks){
                possible_pair+=Math.floor((unique_color_socks[i])/2);
                
            }
            console.log(possible_pair);
            document.write(possible_pair);

        }
