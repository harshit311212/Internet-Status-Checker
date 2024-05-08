window.addEventListener("load", checkInternetConnection);

function checkInternetConnection(){
    const statustext = document.getElementById('statustext');
    const iptext = document.getElementById('iptext');
    const networktext = document.getElementById('networktext');

    statustext.textContent = 'Checking...';
    if(navigator.onLine){
        fetch('https://api.ipify.org?format=json')
        .then((response)=> response.json())
        .then((data)=>{
            iptext.textContent = data.ip;
            statustext.textContent = 'Connected'
            const connection = navigator.connection;
            const networkstrength = connection?connection.downlink + 'Mbps' : 'Unknown';
            networktext.textContent = networkstrength;
        })
    }
    else{
        statustext.textContent = 'Disconnected';
        iptext.textContent = '-'
        networktext.textContent = "-"
    }
}