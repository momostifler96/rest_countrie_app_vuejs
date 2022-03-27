<script>
/* defineProps({
    title: {
        type: String,
        required: true
    },

}) */
    export default {
        data() {
            return {
            message: "Hello world",
            pays:["aaaa","bbbb","cccc","dddd"],
            nom_pays:[],
            capital_pays:[],
            continent_pays:[],
            population_pays:[],
            drapeau_pays:[],
            monnai_pays:[],
            Mn:[],
            search:"",
            check:"name",
            selectedd:"",

            }
        },
        methods:{
            checkk(){
                console.log('radio box value',this.check)
                
                $("#coutri_searche_dv input").removeAttr("disabled");
                $("#continent_select_dv select").removeAttr("disabled");
                $("#continent_select_dv select").removeAttr("style");
                $("#coutri_searche_dv input").removeAttr("style");



                if (this.check =="continent") {
                    console.log('radio box value cont',this.check)

                    $("#continent_select_dv").removeAttr("style");
                    
                    $("#coutri_searche_dv").attr("style","display:none");
                    

                }
                else if (this.check =="all") {
                    $("#coutri_searche_dv input").attr("disabled","");
                    $("#continent_select_dv select").attr("disabled","");
                    this.recherch('all');
                    
                }
                else if (this.check !="continent"){
                    $("#coutri_searche_dv").removeAttr("style");
                    $("#continent_select_dv").attr("style","display:none");
                }

            }
            ,
            recherch(order_by = "all",name =""){

                if (name == 'continent') {
                    name = this.selectedd
                }
                else{
                    name = this.search
                }

                if (this.check != "all") {
                    order_by = this.check
                }

                var url = `https://restcountries.com/v3.1/${order_by}/${name}?fields=name,capital,continents,flags`;

                 fetch(url,{
                    method:"get",
                    
                }).then(response => response.json())
                    .then(data => {
                        console.log('fetch api',data)
                        
                        this.setPays(data)
                
                        
                    }).catch((err) => {
                        
                    })
                        
            },
            triepar(){
                this.pays = {Nom:"mali",Capital:"bamako",Continant:"Afrique"}
            },

            setPays(vars){
                var countri = this.pays = vars;

                this.nom_pays=[]
                this.capital_pays=[]
                this.continent_pays=[]
                this.population_pays=[]
                this.drapeau_pays=[]
                this.monnai_pays=[]

                countri.forEach(element => {
                    this.nom_pays.push(element.name.common);
                    this.capital_pays.push(element.capital?element.capital[0]:"no capital");
                    this.continent_pays.push(element.continents[0]);
                    this.population_pays.push(element.population);
                    this.drapeau_pays.push(element.flags.png);

                });
                this.nom_pays.sort();

                
            }
        },
        /* mounted(){
            for (var i=1;i<=250;i++) {
            this.Mn.push(i);
            }
            url = "https://restcountries.com/v3.1/all?fields=name,capital,continents,flags";

            fetch(url,{
                method:"get",
                
            }).then(response => response.json())
                 .then(data => {
                     console.log('fetch api',data);
                    this.setPays(data)
                    
                }) 
                    }, */
    }
</script>
<template>
     <div id="" class=" row align-middle mt-5" role="alert">
            
  <p class="text-center fw-bold fs-4">{{$route.params.title}}</p>
  </div>
<div  class=" row alert alert-info row-align-middle mt-5" role="alert">
            <div class="col">
                <strong>Trier par : </strong>
            </div>
            <div class="col">
                <div class="form-check form-check-inline">
                    <label class="form-check-label">
                        <input v-model="check" @change="checkk()" class="form-check-input" checked type="radio" name="Trier_par" id="" value="all"> Touts
                    </label>
                </div>
            </div>
            <div class="col">
                <div class="form-check form-check-inline">
                    <label class="form-check-label">
                        <input v-model="check" @change="checkk()" class="form-check-input"  type="radio" name="Trier_par" id="" value="name"> Nom
                    </label>
                </div>
            </div>
            <div class="col">
                <div class="form-check form-check-inline">
                    <label class="form-check-label">
                        <input v-model="check" @change="checkk()" class="form-check-input" type="radio" name="Trier_par" id="" value="capital"> capital
                    </label>
                </div>
                
            </div>
            <div class="col">
                <div class="form-check form-check-inline" id="">
                    <label class="form-check-label">
                        <input v-model="check" @change="checkk()"  class="form-check-input" type="radio" name="Trier_par" id="" value="continent"> continant
                    </label>
                </div>
            </div>
            
            <div class="col-3">
                <div class="input-group" id="coutri_searche_dv">
                    <input @input="recherch($check)" type="text" class="form-control" v-model="search" placeholder="Recherche ..." aria-label="Recipient's username" aria-describedby="button-addon2">
                  </div>
                  <div class="form-group" id="continent_select_dv" style="display:none">                    
                    <select v-model="selectedd" @change="recherch('region','continent')" class="form-control" name="continent" id="continent_select">
                      <optgroup label="letected name">
                          
                        <option value="Africa">Afrique</option>
                      <option value="europe">Europe</option>
                      <option value="Americas">amerique</option>
                      <option value="Asia">Asie</option>
                      <option value="Antarctica">antartique</option>
                      
                      </optgroup>
                        
                    </select>
                  </div>
            </div>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th class="col-1">#</th>
                    <th class="col-1">Nom</th>
                    <th class="col-1">Capital</th>
                    <th class="col-1">Continant</th>
                    <th class="col-1">Drapeau</th>
                </tr>
            </thead>
            <tbody id="data_tbb">
                <tr v-for="(pay,index) in pays" v-bind:key="index">
                    <th col="1">{{Mn[index]}}</th>
                    <td col="1">{{nom_pays[index]}}</td>
                    <td col="1">{{capital_pays[index]}}</td>
                    <td col="1">{{continent_pays[index]}}</td>
                    <td col="1"><img v-bind:src="drapeau_pays[index]" alt="rest image" width="80" height="50"></td>
                </tr>
                
            </tbody>
        </table>
        </template>
