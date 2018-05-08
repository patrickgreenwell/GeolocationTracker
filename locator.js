export default class Locator
{
    
    constructor()
    {
        var geo_options = {
            enableHighAccuracy: true, 
            maximumAge        : 5000, 
            timeout           : 27000
          };
          this.Positions = [];
        
        this.wpid = navigator.geolocation.watchPosition(success,error,geo_options)
    }
    success(position){
        postion.timestamp = new Date();
        console.log(position);
        this.Positions.push(position);
    };
    error(positionerror){
        switch (positionerror.code) {
            case 1:
                console.warn('Geo Permission denied, please give access')
                break;
            case 2:
                console.info('Postion Unavailable')
                break;
            case 3:
                console.info('Geolocation Timeout')
                break;
            default:
                console.log(positionerror);
                break;
        }
    };
    
}
