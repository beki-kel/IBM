// global scope
var globalVar="I'm a global variable";
let globalLet="I'm also global but scoped with let ";
const globalConst="I'm a global constant";

// block scope
{
    var blockVar="I'm a block scoped variable";
    let blockLet="I'm also block-scoped with let ";
    const blockConst="I'm a block-scoped constant";
}

//console.log(globalVar);
//console.log(globalLet);
//console.log(globalConst);

//Block Scope
//console.log(blockVar);
//console.log(blockLet);

function show(){
    var functionVar="I'm block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
}

show();

//console.log(functionVar); // Throws ReferenceError
//console.log(functionLet); // Throws ReferenceError
//console.log(functionConst); // Throws ReferenceError

{
    let chachi="nardos"
    var bro="eyosi"
    const gidere="abeni"

    bro="fira"
    chachi="nardi"
    gidere=" "

}

bro="dfa"
chachi="ni"
gidere="abenezer"

console.log(chachi)
console.log(bro)
console.log(gidere)