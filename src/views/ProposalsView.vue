<template>
    <div class="col-md-9">
        <div class="d-flex justify-content-between align-items-center">
            <div class=" col-md-5">
                <div class="d-flex" role="search">
                    <input v-model="pretraga" class="form-control me-2" type="search" placeholder="Search by name" aria-label="Search ">
                    <button class="btn btn-outline-success" disabled >Search</button>
                    
                </div>
            </div>
            <div class="border">
                <h4 class="text-end p-2">Filters</h4>
                <div class=" p-2 d-flex justify-content-end gap-1">
                    <span><button @click="ponistiFilter" class="btn btn-info text-white btn-sm">All</button></span>
                    <span><button @click="promeniPending" class="btn btn-secondary btn-sm">Pending <span class="badge text-bg-danger">{{ brojPendingProposala }}</span></button></span>
                    <span><button @click="promeniAccepted" class="btn btn-secondary btn-sm">Accepted <span class="badge text-bg-danger">{{ brojAcceptedProposala }}</span></button></span>
                    <span><button @click="promeniDeclined" class="btn btn-secondary btn-sm">Declined <span class="badge text-bg-danger">{{ brojDeclinedProposala }}</span></button></span>              
                </div>
                <div class=" p-2 d-flex justify-content-end gap-1">
                    <span><button @click="promeniManufacturing" class="btn btn-secondary btn-sm">Manufacturing <span class="badge text-bg-primary">{{ brojManu }}</span></button></span>
                    <span><button @click="promeniService" class="btn btn-secondary btn-sm">Service <span class="badge text-bg-primary">{{ brojService }}</span></button></span>
                    <span><button @click="promeniTrading" class="btn btn-secondary btn-sm">Trading <span class="badge text-bg-primary">{{ brojTrading }}</span></button></span>              
                </div>
            </div>
            
        </div>
        <br>
        <div>
            <table class="table table-hover">
                <thead>
                    <th>ID</th>
                    <th>Status</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Activity</th>
                    <th>Proposal</th>
                    
                    <th>Options</th>
                </thead>
                <tbody>
                    <tr v-for="item, index in pretrazeniKorisnici" :key="item.id">
                        <td>{{ item.id }}</td>
                        <td :class="{'pending': item.status == 'Pending', 'accepted': item.status == 'Accepted', 'declined' : item.status == 'Declined'}">{{ item.status }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.email }}</td>
                        <td>{{ item.activity }}</td>
                        <td>{{ item.proposal }}</td>
                        
                        <td class="d-flex gap-1 justify-content-center">
                            <button @click="prihvati(item.id)" class="btn btn-success btn-sm"><i class="bi bi-check"></i></button>
                            <button @click="odbij(item.id)" class="btn btn-danger btn-sm"><i class="bi bi-x"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
          
        </div>
    </div>
</template>
<script>
export default {
    name: "ProposalsView",
    data() {
        return {
            proposals: [],
            filter: "sve",
            pretraga: "",
        }
    },
    methods: {
        dohvatiPodatke(){
            this.proposals = JSON.parse(localStorage.getItem('proposals'))
            console.log(this.proposals)
        },
        prihvati(id){
            console.log(id)
            const index = this.proposals.findIndex((proposal) => proposal.id == id)
            console.log(index)
            this.proposals[index].status = 'Accepted'
            localStorage.setItem('proposals', JSON.stringify(this.proposals))
        },
        odbij(id){
            console.log(id)
            const index = this.proposals.findIndex((proposal) => proposal.id == id)
            console.log(index)
            this.proposals[index].status = 'Declined'
            localStorage.setItem('proposals', JSON.stringify(this.proposals))
        },
        promeniPending(){
            this.filter = 'pending'
        },
        promeniAccepted(){
            this.filter = 'accepted'
        },
        promeniDeclined(){
            this.filter = 'declined'
        },
        ponistiFilter(){
            this.filter = 'sve'
        },
        promeniManufacturing(){
            this.filter = 'manu'
        },
        promeniService(){
            this.filter = 'service'
        },
        promeniTrading(){
            this.filter = 'trading'
        }

    },
    computed: {
        filtriraniKorisnici(){
            if(this.filter == 'sve'){
                return this.proposals
            }
            if(this.filter == 'accepted'){
                return this.proposals.filter((proposal) => proposal.status == 'Accepted')
            }
            if(this.filter == 'declined'){
                return this.proposals.filter((proposal) => proposal.status == 'Declined')
            }
            if(this.filter == 'pending'){
                return this.proposals.filter((proposal) => proposal.status == 'Pending')
            }
            if(this.filter == 'manu'){
                return this.proposals.filter((proposal) => proposal.activity == 'Manufacturing')
            }
            if(this.filter == 'service'){
                return this.proposals.filter((proposal) => proposal.activity == 'Service')
            }
            if(this.filter == 'trading'){
                return this.proposals.filter((proposal) => proposal.activity == 'Trading')
            }
        },
        pretrazeniKorisnici(){
            return this.filtriraniKorisnici.filter((korisnik) => korisnik.name.toLowerCase().includes(this.pretraga.toLowerCase()))
            
        },
        brojPendingProposala(){
            let broj = 0
            for (const item of this.proposals) {
                if(item.status == 'Pending'){
                    broj ++
                }
            }
            return broj
        },
        brojAcceptedProposala(){
            let broj = 0
            for (const item of this.proposals) {
                if(item.status == 'Accepted'){
                    broj ++
                }
            }
            return broj
        },
        brojDeclinedProposala(){
            let broj = 0
            for (const item of this.proposals) {
                if(item.status == 'Declined'){
                    broj ++
                }
            }
            return broj
        },
        brojManu(){
            let broj = 0
            for (const item of this.proposals) {
                if(item.activity == 'Manufacturing'){
                    broj ++
                }
            }
            return broj
        },
        brojService(){
            let broj = 0
            for (const item of this.proposals) {
                if(item.activity == 'Service'){
                    broj ++
                }
            }
            return broj
        },
        brojTrading(){
            let broj = 0
            for (const item of this.proposals) {
                if(item.activity == 'Trading'){
                    broj ++
                }
            }
            return broj
        }
       
    },
    mounted() {
        this.dohvatiPodatke()
    },
}
</script>
<style scoped>
    th,td{
        text-align: center;
    }
    .pending{
        background-color: rgb(255, 255, 73);
    }
    .accepted{
        background-color: rgb(27, 235, 27);
        color: white;
    }
    .declined{
        background-color: red;
        color: white;
    }
    
</style>