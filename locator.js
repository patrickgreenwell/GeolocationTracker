export default class Locator
{
    constructor()
    {
        var geo_options = {
            enableHighAccuracy: true, 
            maximumAge        : 5000, 
            timeout           : 2700
          };
          this.Positions = [];
        
        this.wpid = navigator.geolocation.watchPosition(position => {
               
            console.log(position.coords);
            this.Positions.push(position.coords);
        }, error=> {
            switch (error.code) {
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
                    console.log(error);
                    break;
            }
        },geo_options)
    }   
}
