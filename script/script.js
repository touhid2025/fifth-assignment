// color changing button
const colors = ["#FF5733", "#33FF57", "#3357FF"]; 
        let index = 0; 
        document.getElementById("colorButton").addEventListener("click", function(event) {
            event.preventDefault();
            if (index < colors.length) {
                document.body.style.backgroundColor = colors[index];
                index++;
            } else {
                document.body.style.backgroundColor = "";
                index = 0; 
            }
        });

// discover something new today (button)
document.getElementById('discover').addEventListener('click',function(event){
    event.preventDefault();
    window.location.href="./blog.html"
})

document.getElementById('completed-1').addEventListener('click',function(event){
    event.preventDefault();
    alert('You have successfully completed the task');
    document.getElementById('completed-1').disabled=true;
    const totalTask = document.getElementById('23').innerText;
    const convertedTotalTask = parseInt(totalTask);
    const total = convertedTotalTask + 1;
    document.getElementById('23').innerText=total;
    const task = document.getElementById('06').innerText;
    const convertedTask = parseInt(task);
    const subtract = convertedTask - 1;
    document.getElementById('06').innerText=subtract;

})

document.getElementById('completed-2').addEventListener('click',function(event){
    event.preventDefault();
    alert('You have successfully completed the task');
    document.getElementById('completed-2').disabled=true;
    const totalTask = document.getElementById('23').innerText;
    const convertedTotalTask = parseInt(totalTask);
    const total = convertedTotalTask + 1;
    document.getElementById('23').innerText=total;
    const task = document.getElementById('06').innerText;
    const convertedTask = parseInt(task);
    const subtract = convertedTask - 1;
    document.getElementById('06').innerText=subtract;

})


document.getElementById('completed-3').addEventListener('click',function(event){
    event.preventDefault();
    alert('You have successfully completed the task');
    document.getElementById('completed-3').disabled=true;
    const totalTask = document.getElementById('23').innerText;
    const convertedTotalTask = parseInt(totalTask);
    const total = convertedTotalTask + 1;
    document.getElementById('23').innerText=total;
    const task = document.getElementById('06').innerText;
    const convertedTask = parseInt(task);
    const subtract = convertedTask - 1;
    document.getElementById('06').innerText=subtract;

})


document.getElementById('completed-4').addEventListener('click',function(event){
    event.preventDefault();
    alert('You have successfully completed the task');
    document.getElementById('completed-4').disabled=true;
    const totalTask = document.getElementById('23').innerText;
    const convertedTotalTask = parseInt(totalTask);
    const total = convertedTotalTask + 1;
    document.getElementById('23').innerText=total;
    const task = document.getElementById('06').innerText;
    const convertedTask = parseInt(task);
    const subtract = convertedTask - 1;
    document.getElementById('06').innerText=subtract;

})


document.getElementById('completed-5').addEventListener('click',function(event){
    event.preventDefault();
    alert('You have successfully completed the task');
    document.getElementById('completed-5').disabled=true;
    const totalTask = document.getElementById('23').innerText;
    const convertedTotalTask = parseInt(totalTask);
    const total = convertedTotalTask + 1;
    document.getElementById('23').innerText=total;
    const task = document.getElementById('06').innerText;
    const convertedTask = parseInt(task);
    const subtract = convertedTask - 1;
    document.getElementById('06').innerText=subtract;

})


document.getElementById('completed-6').addEventListener('click',function(event){
    event.preventDefault();
    alert('You have successfully completed the task');
    alert('congratulation! you have successfully completed all the task')
    document.getElementById('completed-6').disabled=true;
    const totalTask = document.getElementById('23').innerText;
    const convertedTotalTask = parseInt(totalTask);
    const total = convertedTotalTask + 1;
    document.getElementById('23').innerText=total;
    const task = document.getElementById('06').innerText;
    const convertedTask = parseInt(task);
    const subtract = convertedTask - 1;
    document.getElementById('06').innerText=subtract;

})

// for challange mark
function showCurrentDate() {
    const currentDate = new Date();
    const options = { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' };
    const dateString = currentDate.toLocaleDateString('en-US', options);
    document.getElementById('date').textContent = dateString;
}
showCurrentDate();