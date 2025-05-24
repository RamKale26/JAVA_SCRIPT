class Add
{
    setValue=(x,y)=>{
        this.x=x;
        this.y=y;
    }
    showAdd=()=>{
        console.log("Addition is :"+(this.x+this.y));
        }
}
let add=new Add();
add.setValue(10,20);
add.showAdd();