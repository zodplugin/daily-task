let result = []

let datas = [{
    nama: 'Zee',
    age: 21,
    status: 'married'
}, {
    nama: 'Asep',
    age: 22,
    status: 'single'
}, {
    nama: 'DyaY',
    age: 22,
    status: 'single'
}];



function isMarried(datas) {
    for (let i = 0; i < datas.length; i++) {
        if (datas[i].status == 'married') {
            result.push(datas[i])
        }
    }

    return result;
}


function isD(datas) {
    for (let i = 0; i < datas.length; i++) {
        if (datas[i].nama[0] === 'D') {
            result.push(datas[i])
        }
    }

    return result;
}

function isTwenty(datas) {
    for (let i = 0; i < datas.length; i++) {
        if (datas[i].age > 20) {
            result.push(datas[i])
        }
    }

    return result;
}


function isTwentySingleLastwordName(datas) {
    for (let i = 0; i < datas.length; i++) {
        if (datas[i].age > 20 && datas[i].status === 'single' && datas[i].nama.slice(-1) === 'Y') {
            result.push(datas[i])
        }
    }

    return result;
}

function isTwentySingleMidwordName(datas) {
    for (let i = 0; i < datas.length; i++) {
        if (datas[i].age > 20 && datas[i].status == 'married' && datas[i].nama[Math.round(datas[i].nama.length / 2)] == 'e') {
            result.push(datas[i])
        }
    }

    return result;
}

console.log(isTwentySingleMidwordName(datas));