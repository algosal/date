function myDateTimeObject(){
    let d = new Date();
    let day = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    let hours = 0;
    let minutes = 0;
    let seconds = 0; 
    let Month = ["January", "February", "March", "April", "May", "Janue", "July", "August", "September", "October", "November", "December"];
    if(d.getSeconds()<=9){
        seconds = "0" + d.getSeconds();
    }
    else{
        seconds = d.getSeconds();
    }

    
    if(d.getMinutes()<=9){
        minutes = "0" + d.getMinutes();
    }
    else{
        minutes = d.getMinutes();
    }
    
    if(d.getHours()<=9){
        hours = "0" + d.getHours();
    }
    else{
        hours = d.getHours();
    }
    
    
    let todaysDate = Month[month] + " " + day + ", " + year;
    let timeRightNow = "" + hours + ":" + minutes + ":" + seconds;
    return {'date': todaysDate, 'time' : timeRightNow}; 

}


module.exports = {myDateTimeObject}; 
