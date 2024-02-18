import {makeAutoObservable} from 'mobx'


export default class InfoStore{
    constructor() {
        this._userModel = [
             {id:1, name: 'Ivan', email:'some@mail', password:'assassasasasa' }
        ]
        this._userInfo = [
             {id: 1, reservValue: 1000, perMounth:1100, bufferMoney:3000, valuePerDay:40, salaryDay:10, realBalance:5000}
        ]
        this._expiditure = [
             {id: 1, name: 'flat', value: 200, status:true, description: 'for flat', calculation:'int'},
            {id: 2, name: 'flat', value: 21, status:true, description: 'for flat', calculation:'int'},
            {id: 3, name: 'flat', value: 20, status:true, description: 'for flat', calculation:'int'},
            {id: 4, name: 'flat', value: 2, status:true, description: 'for flat', calculation:'int'},
        ]

        this._salary = [
            {id: 1, name: 'salary', value: 3000, status:false, date: 'date101122', },
            {id: 2, name: 'av', value: 1000, status:false, date: 'date101122',},
            {id: 3, name: 'salary', value: 2700, status:true, date: 'date101122', },
            {id: 4, name: 'av', value: 1000, status:true, date: 'date101122', },
        ]

        this._additionalIncome = [
            {id: 1, name: 'new', value: 2000, status:true, description: 'fo', date:'date111213'},
            {id: 2, name: 'start', value: 300, status:true, description: 'for', date:'date111213'},
            {id: 3, name: 'prod', value: 7000, status:true, description: 'for f', date:'date111213'},
            {id: 4, name: 'rent', value: 5000, status:true, description: 'for fl', date:'date111213'},
        ]

        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3

        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands){
        this._brands = brands
    }
    setDevices(devices){
        this._devices = devices
    }

    setSelectedType(type){
        this.setPage(1)
        this._selectedType = type
    }

    setSelectedBrand(brand){
        this.setPage(1)
        this._selectedBrand = brand
    }

    setPage(page){
        this._page = page
    }

    setTotalCount(count){
        this._totalCount = count
    }





    get types(){
        return this._types
    }

    get brands(){
        return this._brands
    }
    get devices(){
        return this._devices
    }

    get selectedType(){
        return this._selectedType
    }

    get selectedBrand(){
        return this._selectedBrand
    }

    get totalCount() {
        return this._totalCount
    }

    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}
