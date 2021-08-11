
    
$(()=>{
    $.ajax({
        url:'https://data.cityofnewyork.us/resource/erm2-nwe9.json',
    
        success: (data)=>{
            console.log(data)
            $('#bt1').on('click',function(data) {
                for(let i =0; i < data.length; i++){
                    complains = $("#complains").html
                    while (compains > 0){
                        borough = data[i].borough
                        if (data[i].brough==="manhattan") {
                            data.append('<li>' + data.borough)}

                    }
                    
                }

            })
            $('#bt2').on('click',function(data) {
                for(let i =0; i < data.length; i++){
                    complains = $("#complains").html
                    while (compains > 0){
                        borough = data[i].borough
                        if (data[i].brough==="brooklyn") {
                            data.append('<li>' + data.borough)}

                    }
                    
                }

            })
            $('#bt3').on('click',function(data) {
                for(let i =0; i < data.length; i++){
                    complains = $("#complains").html
                    while (compains > 0){
                        borough = data[i].borough
                        if (data[i].brough==="queens") {
                            data.append('<li>' + data.borough)}

                    }
                    
                }

            })
            $('#bt4').on('click',function(data) {
                for(let i =0; i < data.length; i++){
                    complains = $("#complains").html
                    while (compains > 0){
                        borough = data[i].borough
                        if (data[i].brough==="staten island") {
                            data.append('<li>' + data.borough)}

                    }
                    
                }

            })
            $('#bt5').on('click',function(data) {
                for(let i =0; i < data.length; i++){
                    complains = $("#complains").html
                    while (compains > 0){
                        borough = data[i].borough
                        if (data[i].brough==="bronx") {
                            data.append('<li>' + data.borough)}

                    }
                    
                }

            })
            

        
           
        },
        error: ()=>{
            console.log("Bad Request")
        }
    
    })

})

