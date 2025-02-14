<template>
    <br>
    <div class="d-flex justify-content-center gap-2 flex-wrap">
        
        <div class="col-md-5 border p-3">
            <!-- <h5 class="d-flex justify-content-between align-items-center">Company ID: {{ this.id }} <span><RouterLink :to="'/'" class="btn btn-primary">Return</RouterLink></span></h5>
            <hr>
            <h5>Company Name: {{ podatak.name }}</h5>
            <hr>
            <h5>Service description: {{ podatak.description }}</h5>
            <hr>
            <h5>Location: {{ podatak.location }}</h5>
            <hr>
            <h5>Adress: {{ podatak.adress }}</h5>
            <hr>
            <h5>Time Zone: {{ podatak.timeZone }}</h5> -->
            <ul class="list-group">
                <li class="list-group-item "><h6 class="d-flex justify-content-between align-items-center">Company ID: {{ podatak.id }} <span><RouterLink :to="'/'" class="btn btn-primary">Return</RouterLink></span></h6></li>
                <li class="list-group-item"><h6>Company name: {{ podatak.name }}</h6></li>
                <li class="list-group-item"><h6>Company description: {{ podatak.description }}</h6></li>
                <li class="list-group-item"><h6>Company location: {{ podatak.location }}</h6></li>
                <li class="list-group-item"><h6>Company adress: {{ podatak.adress }}</h6></li>
                <li class="list-group-item"><h6>Time Zone: {{ podatak.timeZone }}</h6></li>
            </ul>
        </div>
        <div class="col-md-2 border">
            <img class="slikaSingle" :src="podatak.image" alt="">
        </div>
        <div v-if="!poslato" class="col-md-8 border p-3">
            <h4>Contact </h4>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Name</label>
                <input v-model="proposal.name" type="text" class="form-control shadow-sm" id="exampleFormControlInput1" placeholder="">
                
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input v-model="proposal.email" type="email" class="form-control shadow-sm" id="exampleFormControlInput1" placeholder="name@example.com">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Select Company Activity</label>
                <select v-model="proposal.activity" class="form-select form-select-sm shadow-sm" aria-label="Small select example">
                   
                    <option value="Manufacturing">Manufacturing Companies</option>
                    <option value="Trading">Trading Companies</option>
                    <option value="Service">Service Companies</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Proposal</label>
                <textarea v-model="proposal.proposal" class="form-control shadow-sm" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="mb-3">
                <label for="formFileSm" class="form-label">Attach Company Presentation</label>
                <input class="form-control form-control-sm shadow-sm"  id="formFileSm" type="file">
            </div>
            <div class="mb-3 text-end">
                <button @click="posalji" class="btn btn-primary">Send Proposal</button>
            </div>
        </div>
        <div v-if="poslato" class="col-md-6  p-3">
            <ul class="list-group">
                <li class="list-group-item  bg-success text-white text-center" aria-current="true">You have succesfuly sent an proposal to {{ podatak.name }}</li>
               
            </ul>
        </div>
    </div>
    <br>
</template>
<script>
import axios from 'axios';
export default {
    name: "SingleDataView",
    props: {
        id: String,
        class: String
    },
    data() {
        return {
            podaci: [],
            podatak: {},
            poslato: false,
            proposal: {
                name: "",
                email: "",
                activity: "",
                proposal: "",
                status: "Pending",
            },
            proposals: [],
        }
    },
    methods: {
        async dohvatiPodatke(){
            const response = await axios.get('https://67977c92c2c861de0c6ce764.mockapi.io/products')
            this.podaci = response.data
            // console.log(this.podaci)
            this.podatak = this.podaci.find((podatak) => podatak.id == this.id) || {}
            // console.log(this.podatak)
            
        },
        posalji(){
            // svaki put kada se upise neki proposal, zelim da mu dodelim random ID Date.now() i da ga upisem u localstorage pod kljucem 'proposals'
            if(JSON.parse(localStorage.getItem('proposals')) == null){
                localStorage.setItem('proposals', JSON.stringify([]))
            }
            this.proposal.id = Date.now()
            this.proposals = JSON.parse(localStorage.getItem('proposals') || [])
            console.log(this.proposals)
            this.proposals.push(this.proposal)
            localStorage.setItem('proposals',JSON.stringify(this.proposals))
            this.poslato = true
            
        }
    },
    mounted() {
        this.dohvatiPodatke()
    },
}
</script>
<style>
    .slikaSingle{
        width: 100%;
        height: 100%;
    }
</style>