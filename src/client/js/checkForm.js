function checkFormData(form){
    let check = true;
    //check name
    const regEx = /^[a-zA-Z\s,]+$/;
    if(form.city.value!=null && !form.city.value.match(regEx)){
        check= false;
    }

    let date = new Date()
    let day = date.getDate();
    let month = String(date.getMonth()+1).padStart(2, "0");
    let year = date.getFullYear();

    let today = new Date(`${year}-${month}-${day}`);
    let start = new Date(form.trip_start.value);
    let end = new Date(form.trip_end.value);

    if(form.trip_start.value=="" || form.trip_end.value==""){
        check = false;
    }

    //check if start date is smaller than today
    if(start.getTime() - today.getTime()<0){
        check = false;
    }
    //check if end date is smaller than start date
    if(end.getTime() - start.getTime()<0){
        check = false;
    }
    return check;
}

export { checkFormData }