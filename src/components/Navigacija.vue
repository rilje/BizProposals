<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary ">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Logo</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li v-for="item,index in meni" class="nav-item">
                            <RouterLink class="nav-link " aria-current="page" :to="item.path" >{{ item.name }}</RouterLink>
                        </li>
                        
                        
                        
                    </ul>
                
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    name: "Navigacija",
    data() {
        return {
            meni: [
                {
                    name: "Home Page",
                    path: "/"
                },
                {
                    name: "Proposals Manager",
                    path: "/proposals"
                },
            ]
        }
    },
}
</script>
<style scoped>
    
</style>