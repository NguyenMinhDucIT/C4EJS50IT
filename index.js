let laptop=[
    {  
        'name':'lenovo ideapad l340',
        'price': 18*Math.pow(10,6),
        'core': 'intel core i5', 
        'RAM':'8GB DDR4',
        'Ổ cứng': 'HDD 1TB + SSD NVMe 256GB (quà tặng)',
        'Card đồ họa':'Nvidia GTX 1050 3GB',
        'Màn hình':'15.6 Inch Full HD'
        
     },
     {
        'name':'Laptop HP 15-cs2060TX',
        'price': 19*Math.pow(10,6),
        'core': 'Intel Core i5 8265U', 
        'RAM':'8GB DDR4',
        'Ổ cứng': 'SSD NVMe 256GB + HDD 1TB',
        'Card đồ họa':'Nvidia MX130 2GB',
        'Màn hình':'15.6 Inch Full HD'
        
     }
 ]

//  for (let i = 0; i < laptop.length; i++) {
//      const ltop = laptop[i];
//      let stt= i +1;
//      let ltopString=`${stt}`
//      for (const key in ltop) {
//          if (ltop.hasOwnProperty(key)) {
//              const value =ltop[key];
//              ltopString +=`${key} : ${value}`;
//               }
//               console.log(ltopString);
//      }
//  }
 
// let latopName= prompt(" nhập tên máy tính mới");
// // let latopPrice= prompt("nhập giá ");
// // let latopCore= prompt(" nhập thông tin core");
// // let latopRam= prompt(" nhập thông tin ram");
// // let latopOCung= prompt(" nhập thông tin ổ cứng");
// // let latopCard= prompt(" nhập thông tin care đồ họa");
// // let latopManHinh= prompt("nhập thông tin màn hình ");
//  let laptopNew ={
//         'name':lotopName,
//         'price': laptpPrice,
//         'core': latoCore, 
//         'RAM':latopRam,
//         'Ổ cứng': latopOCung,
//         'Card đồ họa':latopCare,
//         'Màn hình':latopManHinh
// }

inames=[]
iqtyp=[]
iprice=[]


function sanpham(){
 inames.push(document.getElementById('pnames').value);
 iqtyp.push(parseInt(document.getElementById('pqtyp').value));
 iprice.push(parseInt(document.getElementById('iprice').value));
 displayCart()
}
  
function displayCart(){
     cactsp= '<table><tr><th>Product Name</th><th>Quantity</<th>Price</th <th>Total</th></tr></table>'

    total= 0;
 for (let i = 0; i < inames.length; i++) {
     total+-iqtyp[i]*iprice[i];
     cartsp +="<tr><td>" + inames[i]+ 
     "</td><td>"+iqtyp[i]
     +"</td><td>"+iprice[i] 
     +"</td><td>"+iqtyp[i]*iprice[i]+
     "</td><td><button onclick='delElement(" + i +")'>Delete</button></td></tr>"
     
 }

cartsp += '<tr><td></td><td></td><td></td><td>' 
+ total 
+'</td></tr></table>'
document.getElementById('cart').innerHTML=cartsp
}

function delElement(a){
    inames.splice(a,1)
    iqtyp.splice(a,1)
    iprice.splice(a,1)
    displayCart()
}
