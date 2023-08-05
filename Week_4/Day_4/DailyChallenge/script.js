/*
    ASTAR 06/08/2023

    99 bottles of beer on the wall
    99 bottles of beer
    Take 1 down, pass it around
    98 bottles of beer on the wall

    98 bottles of beer on the wall
    98 bottles of beer
    Take 2 down, pass them around
    96 bottles of beer on the wall
*/
function writeCouplet(bottleOnWall,bottleDown){
    let str1 = '1 bottle';
    let str2 = '1 bottle';
    let str3 ='it';
    if (bottleOnWall>1){
        str1 = `${bottleOnWall} bottles`;
    }
    if ( (bottleOnWall - bottleDown) > 1){
        str2 = `${bottleOnWall-bottleDown} bottles`;
    } else {
        if (bottleOnWall-bottleDown>=0){
            str2 = `${bottleOnWall-bottleDown} bottle`;
        } else {
            str2 = `no bottle`;
        }
    }
    if (bottleDown > 1){
        str3 = 'them';
    }


    console.log(`${str1} of beer on the wall
${str1} of beer
Take ${bottleDown} down, pass ${str3} around
${str2} of beer on the wall`);

}
function writeSongText(){
    let i = 99;
    let n = 1;
    //for (let n=1;n<100)
    while (i>=0){
        writeCouplet(i,n);
        i=i-n;
        n++;
    }
}

writeSongText();