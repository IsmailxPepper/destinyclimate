function getCurrentLocation(){

    if(!navigator.geolocation){

        return;

    }

    navigator.geolocation.getCurrentPosition(
        (position)=>{

            console.log(
                position.coords.latitude,
                position.coords.longitude
            );

        }
    );

}
