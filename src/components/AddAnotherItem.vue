<template>
  <div id=app>
    <h1>Add Another Item Page</h1>
    <form id="fm1">
        <label>Item Category: </label>
        <select id="select1">
            <option value="vegetables">Vegetables</option>
            <option value="snacks">Snacks</option>
            <option value="drink">Drink</option>
            <option value="meat">Meat</option>
            <option value="set meal">Set Meal</option>
            <option value="fruit">Fruit</option>
            <option value="others">Others</option>
        </select>
        <label>Item Name: </label>
        <input type="text"/>
        <label>What is your name?</label>
        <input type="text"/>
        <div><br></div>
        <div>Thank you for Adding the Item! Have a Nice Day!</div>
        
    </form>
  </div>
</template>

<script>

export default {
  
  data(){
    return{
        
        msg:"Add Item"
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app *{
    box-sizing: border-box;
}
#app{
    margin: 20px auto;
    max-width: 500px;
}

p{
    align-content: center;
    color:ivory;
}
label{
    display: inline-block;
    margin: 20px 0 10px;
    width:50%;
    align-content:left;

}
input[type="text"]{
    display: inline-block;
    padding: 8px;
    width:50%;
}
select{
    display: inline-block;
    padding: 8px;
    width:50%;
}
</style>