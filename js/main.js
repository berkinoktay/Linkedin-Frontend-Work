function notification(msg){

    var old_div = document.querySelector('.alert');
    if(old_div){
        old_div.parentNode.removeChild(old_div);
    }
    var div = document.createElement('div');
    div.className = 'alert';
    div.innerHTML = msg;
    document.getElementById("idShare").appendChild(div);
    setTimeout(() => {
        div.classList.add('active');
    }, 1);
    setTimeout(() => {
        div.classList.remove('active');
    }, 1000);
}

function copyurl(id){
document.getElementById(id).select();
document.execCommand('copy');
notification('Paylaşma linki başarıyla kopyalandı.');
}