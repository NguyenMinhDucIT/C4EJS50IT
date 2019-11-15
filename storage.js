let dsLtGaming = [
    {
        'id': 'lap1',
        'name': 'Dell Gaming7559 (Core i5-6300HQ, RAM 8GB, HDD 500GB + SSD 128GB, VGA 4GB GTX 960M, 15.6 inch FHD) Mới 98 >99%',
        'image': 'https://laptopaz.vn/media/product/849_laptop_dell_7559_laptopaz__7_.JPG',
        'price': 10 * Math.pow(10, 6),
        'cpu': 'i5 6300HQ',
        'ram': '8GB',
        'hrdw': 'SSD 128GB + HDD 500GB',
        'vga': 'NVIDIA GTX 960M',
        'screen': 'FHD TN',
    },
    {
        'id': 'lap2',
        'name': 'Laptop MSI GF63-9RC-273VN ',
        'image': 'https://laptopaz.vn/media/product/1346_laptop_msi_gf63_9rc_laptopaz__3_.JPG',
        'price': 17 * Math.pow(10, 6),
        'cpu': 'i5 6300HQ',
        'ram': '8GB',
        'hrdw': 'SSD 128GB + HDD 500GB',
        'vga': 'NVIDIA GTX 960M',
        'screen': 'FHD TN',
    },
    {
        'id': 'lap3',
        'name': 'Dell G7 7588 ',
        'image': 'https://laptopaz.vn/media/product/1172_dell_inspiron_g7_7588_laptopaz__4_.JPG',
        'price': 17 * Math.pow(10, 6),
        'cpu': 'i5 6300HQ',
        'ram': '8GB',
        'hrdw': 'SSD 128GB + HDD 500GB',
        'vga': 'NVIDIA GTX 960M',
        'screen': 'FHD TN',
    },
    {
        'id': 'lap5',
        'name': 'Dell G7 7588 ',
        'image': 'https://laptopaz.vn/media/product/1172_dell_inspiron_g7_7588_laptopaz__4_.JPG',
        'price': 17 * Math.pow(10, 6),
        'cpu': 'i5 6300HQ',
        'ram': '8GB',
        'hrdw': 'SSD 128GB + HDD 500GB',
        'vga': 'NVIDIA GTX 960M',
        'screen': 'FHD TN',
    },
    {
        'id': 'lap5',
        'name': 'Dell G7 7588 ',
        'image': 'https://laptopaz.vn/media/product/1172_dell_inspiron_g7_7588_laptopaz__4_.JPG',
        'price': 17 * Math.pow(10, 6),
        'cpu': 'i5 6300HQ',
        'ram': '8GB',
        'hrdw': 'SSD 128GB + HDD 500GB',
        'vga': 'NVIDIA GTX 960M',
        'screen': 'FHD TN',
    },
]
localStorage.setItem('dsLtGaming', JSON.stringify(dsLtGaming));
let ltGaming = JSON.parse(localStorage.getItem('dsLtGaming'));
console.log(ltGaming);

function displaysanpham() {
    let s = '';
    for (let i = 0; i < dsLtGaming.length; i++) {
        const dt = dsLtGaming[i];
        s += `<tr>
            <td>${i + 1}</td>
            <td>${dt.name}</td>
            <td>
                <button onclick="detail('${dt.id}')">Detail</button>
            </td>
        </tr>`
    }
    document.getElementById("hanghoa").innerHTML = s;
}
displaysanpham();
function detail(id) {
    // alert(id);
    localStorage.setItem("DTselected", id);
    window.location.href = "chitiet.html";
}

