<template >
    <div>
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li @click="prethodnaStrana" class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li @click="sledecaStrana" class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
    name: "Pagination",
    props: {
        trenutnaStrana: {
            type: Number,
            required: true
        },
        poStrani: {
            type: Number,
            required: true
        }
    },
    methods: {
        prethodnaStrana(){
            if(this.trenutnaStrana == 0){
                return
            }
            this.trenutnaStrana -= 1
            console.log(this.trenutnaStrana)
        }
    }
}
</script>
<style>
    
</style>