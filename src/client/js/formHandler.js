function handleSubmit(event) {
    event.preventDefault();

    const form = document.form1;
    if(Client.checkFormData(form)){
        Client.getData(form.city.value, form.trip_start.value, form.trip_end.value)
    }else{
        alert("Please use valid data for city and dates!");
    }
}

export { handleSubmit }