<template>
    <div>
        <br>
        
        <div class="d-flex justify-content-between">
            <div>
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li @click="prethodnaStrana" class="page-item" :class="{disabled: trenutnaStrana == 1}">
                            <a class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li @click="idiNaStranu(page)" v-for="page in ukupanBrojStrana" class="page-item"><a class="page-link" href="#">{{ page }}</a></li>
                        
                        <li @click="sledecaStrana" class="page-item" :class="{disabled: trenutnaStrana == ukupanBrojStrana}">
                            <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="col-md-5">
                <nav class="navbar bg-body-tertiary ">
                    <div class="container ">
                        <form class="d-flex col-md-10" role="search">
                        <input v-model="pretraga" class="form-control me-2 col-md-12" type="search" placeholder="Search by Location" aria-label="Search">
                        
                        <button disabled class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        
                    </div>
                </nav>
                
            </div>
        </div>
        <p>Strana {{ trenutnaStrana }} od {{ ukupanBrojStrana }}</p>
        <table class="table table-striped">
            <thead>
                <th>ID</th>
                <th>Company name</th>
                <th>Description</th>
                <th>Location</th>
                <th>Adress</th>
                <th>Time Zone</th>
                <th></th>
                
            </thead>
            <tbody>
                <tr v-for="podatak in pretrazeniPodaci">
                    <td>{{ podatak.id }}</td>
                    <td>{{ podatak.name }}</td>
                    <td>{{ podatak.description }}</td>
                    <td>{{ podatak.location }}</td>
                    <td>{{ podatak.adress }}</td>
                    <td>{{ podatak.timeZone }}</td>
                    <td><RouterLink :to="`single-data/${podatak.id}`">More</RouterLink></td>
                </tr>
            </tbody>
            
        </table>
    </div>
</template>
<script>


export default {
    name: "Tabela",
    props: {
        podaci: {
            type: Array,
            required : true
        }
    },
    
    data() {
        return {
            trenutnaStrana: 1,
            poStrani: 10,
            pretraga: ""
            
        }
    },
    methods: {
        paginisaniPodaci(){
            let startIndex = (this.trenutnaStrana - 1) * this.poStrani 
            
            let lastIndex = this.trenutnaStrana * this.poStrani
           
            
            return this.podaci.slice(startIndex,lastIndex)
            
        },
        prethodnaStrana(){
            if(this.trenutnaStrana == 1){
                return
            }
            this.trenutnaStrana -= 1
        },
        sledecaStrana(){
            if(this.trenutnaStrana == this.ukupanBrojStrana){
                return
            }
            this.trenutnaStrana += 1
            
        },
        idiNaStranu(brojStrane){
            
            this.trenutnaStrana = brojStrane
        }
    },
    computed: {
        ukupanBrojStrana(){
            let brojPodataka = this.podaci.length
            let brojStrana = Math.ceil(brojPodataka / this.poStrani)
            return brojStrana
        },

        pretrazeniPodaci(){
            let pretrazeniPodaci = this.podaci.filter((podatak) => podatak.location.toLowerCase().includes(this.pretraga.toLowerCase()))
            if(this.pretraga != ''){
                return pretrazeniPodaci
            }
            return this.paginisaniPodaci()
        }
        
    }
    
}
</script>
<style>
    
</style>