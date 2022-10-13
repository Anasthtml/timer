function go() {
    window.setInterval(timer, 1000);
}

function timer() {
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let now = new Date();
    let mid = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
    let res = Math.floor((mid - now) / 1000);

    var hoursRemain   = Math.floor(res / (60 * 60));
	var minutesRemain = Math.floor((res - hoursRemain * 60 * 60) / 60);
	var secondsRemain = Math.floor(res % 60);
	hours.innerHTML   = hoursRemain;
	minutes.innerHTML = addZero(minutesRemain);
	seconds.innerHTML = addZero(secondsRemain); 

}

function addZero(n) {
    if(n <= 9) {
        return '0' + n;
    } else {
        return n;
    }
}