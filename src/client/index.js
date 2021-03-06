import { saveData, tripsTestData } from './js/saveData'
import { createNavigationBar, createTravelCards, createHTMLContent, createWeatherTable } from './js/createHTML'
import { checkFormData } from './js/checkForm'
import { handleSubmit } from './js/formHandler'
import { getData, getImage, getApiData, getWeather } from './js/getData'
import { deleteTrip } from './js/buttonHandler'

import './styles/base.scss'
import './styles/main.scss'
import './styles/layout.scss'
import './styles/footer.scss'
import './styles/header.scss'
import './styles/form.scss'

export {
    createNavigationBar,
    createTravelCards,
    createHTMLContent,
    createWeatherTable,
    checkFormData,
    handleSubmit,
    saveData,
    tripsTestData,
    getData,
    getImage,
    getApiData,
    getWeather,
    deleteTrip
}