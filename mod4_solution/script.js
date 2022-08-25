var names=new Array();
names[0]="Jennifer";
names[1]="Rahul";
names[2]="nishi";
names[3]="Jocky";
names[4]="yesh";
names[5]="jack";
names[6]="vicky";
names[7]="Jolly";
names[8]="Lio";
names[9]="Jelly";

for (var i = 0; i<names.length; i++){
    if(names[i].charAt(0)==='J'||names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i]);
    }
      else{
        console.log("Hello " + names[i]);
      }
}