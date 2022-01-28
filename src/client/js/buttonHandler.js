function deleteTrip(id){
    const xy = async ()=>{
        Client.tripsData.splice(id, 1);
    }
    xy()
    .then(function(){
        Client.createHTMLContent();
    })
}

export { deleteTrip }