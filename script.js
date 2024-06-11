/*const myPromise = new Promise((resolve, reject) => {
    fetch('https://fakestoreapi.com/products/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur de réseau');
            }
            return response.json();
        })
        .then(data => {
            resolve(data);
        })
        .catch(error => {
            reject(error);
        });
});

myPromise.then(data => {
    console.log(data);
}).catch(error => {
    console.error(error);
});

function fetchUser(){ 
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const userData = {username:'nour', email:'meddebnourhen21@gmail.com'};
            resolve(userData);
        },1000)
    })
};

//chaining promesess
function fetchPost(username){
    return new Promise((resolve,reject)=>
    setTimeout(()=>{
        const userPost = [{id:'1', title:'post 1'},{id:'2', title:'post 2'}];
        resolve(userPost);
    },3000)
)};
fetchUser().then(userData => {
    console.log("userData:",userData);
    return fetchPost(userData.username);
}).then(userPost => {
    console.log("userpost:",userPost);
}).catch(error => {
    console.error(error);
});
/*querry promesses : 
--Promise.all
--Promise.race

//Promise.all
const promess1 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('result 1');
    },1000)
});

const promess2 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('result 2');
    },3000)
});
const promess3 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve ('result 3');
    },5000)
});Promise.all([promess1,promess2,promess3]).then((result)=>{
    console.log("result:",result);
}).catch(error =>{
    console.error(error);
});

//Promiss.race si resultat resolve
const promess1 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('first');
    },1904)
});

const promess2 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('second');
    },1903)
});
const promess3 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve ('third');
    },1902)
});Promise.race([promess1,promess2,promess3]).then((resultat)=>{
    console.log("Promise race (retour première promise effectué)",resultat);
}).catch(error =>{
    console.error(error);
});

//promess.race si resultat reject
const promess1 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('result 1');
    },1000)
});

const promess2 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('result 2');
    },3000)
});
const promess3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject ('pas de resultat promess numéro 3');
    },5000)
});Promise.all([promess1,promess2,promess3]).then((result)=>{
    console.log("result:",result);
}).catch(error =>{
    console.error(error);
});

//customize = personnalisation de promess
const customPromess = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let sucess = false;
        if(sucess){
            resolve('resulat bien effectué');
        }else {
            reject('resulat non effectué correctement');
        };
    }, 2500);
   
});customPromess.then((message)=>{
    console.log(message);
}).catch((error)=>{
    console.error(error);
});

//fetchnig
function fetchData(url){
return new Promise((resolve, reject) => {
    fetch(url).then(response => {
        if (response.ok) {
            return response.json();
        } else {
            reject('Network response was not ok');
        }
    }).then(data => resolve(data)).catch(error => reject(error))
})
}
fetchData('https://gorest.co.in/public/v2/users').then(data=> console.log(data)).catch(error => console.error('error fectching data:',error));

async function fetchData(){
    const reposne = await fetch('https://gorest.co.in/public/v2/users')
    const data = await reposne.json();
    return data;
}
fetchData().then((data)=>{
    user = data.find(user=> user.id)
    console.log('this result of async/await function:',user.email);
}).catch((error)=>{
    console.error(error);
});*/

function fetchData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Network response was not ok');
                }
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

const url1 = 'https://gorest.co.in/public/v2/users';
const url2 = 'https://github.com/';

Promise.all([fetchData(url1), fetchData(url2)])
    .then(([data1, data2]) => {
        console.log('Data from first URL:', data1);
        console.log('Data from second URL:', data2);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });