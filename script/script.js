// history deleted button
document.getElementById('clearBtn').addEventListener('click',function(){
    document.getElementById('history').innerHTML = '';
})

// discover something new today (button)
document.getElementById('discover').addEventListener('click',function(event){
    event.preventDefault();
    window.location.href="./blog.html"
})

// all completed button
document.getElementById('completed-1').addEventListener('click',function(event){
    event.preventDefault();
    alert('Board updated successfully');
    document.getElementById('completed-1').disabled=true;
    const totalTask = document.getElementById('23').innerText;
    const convertedTotalTask = parseInt(totalTask);
    const total = convertedTotalTask + 1;
    document.getElementById('23').innerText=total;
    const task = document.getElementById('06').innerText;
    const convertedTask = parseInt(task);
    const subtract = convertedTask - 1;
    document.getElementById('06').innerText=subtract;

    const currentTime =new Date().toLocaleTimeString();
    const container = document.getElementById('history');
    const div = document.createElement('div');
    div.innerHTML=`<div class="m-2 p-2 rounded-2xl bg-slate-300">
    <p>You have completed the task <b>Fix Mobile Button Issue<b/> at ${currentTime}</p>
</div>`
    container.appendChild(div)
})


document.getElementById('completed-2').addEventListener('click',function(event){
    event.preventDefault();
    alert('Board updated successfully');
    document.getElementById('completed-2').disabled=true;
    const totalTask = document.getElementById('23').innerText;
    const convertedTotalTask = parseInt(totalTask);
    const total = convertedTotalTask + 1;
    document.getElementById('23').innerText=total;
    const task = document.getElementById('06').innerText;
    const convertedTask = parseInt(task);
    const subtract = convertedTask - 1;
    document.getElementById('06').innerText=subtract;

    const currentTime =new Date().toLocaleTimeString();
    const container = document.getElementById('history');
    const div = document.createElement('div');
    div.innerHTML=`<div class="m-2 p-2 rounded-2xl bg-slate-300">
    <p>You have completed the task <b>Add Dark Mode<b/> at ${currentTime}</p>
</div>`
    container.appendChild(div)
})


document.getElementById('completed-3').addEventListener('click',function(event){
    event.preventDefault();
    alert('Board updated successfully');
    document.getElementById('completed-3').disabled=true;
    const totalTask = document.getElementById('23').innerText;
    const convertedTotalTask = parseInt(totalTask);
    const total = convertedTotalTask + 1;
    document.getElementById('23').innerText=total;
    const task = document.getElementById('06').innerText;
    const convertedTask = parseInt(task);
    const subtract = convertedTask - 1;
    document.getElementById('06').innerText=subtract;

    const currentTime =new Date().toLocaleTimeString();
    const container = document.getElementById('history');
    const div = document.createElement('div');
    div.innerHTML=`<div class="m-2 p-2 rounded-2xl bg-slate-300">
    <p>You have completed the task <b>Optimize  Home page<b/>  at ${currentTime}</p>
</div>`
    container.appendChild(div)
})


document.getElementById('completed-4').addEventListener('click',function(event){
    event.preventDefault();
    alert('Board updated successfully');
    document.getElementById('completed-4').disabled=true;
    const totalTask = document.getElementById('23').innerText;
    const convertedTotalTask = parseInt(totalTask);
    const total = convertedTotalTask + 1;
    document.getElementById('23').innerText=total;
    const task = document.getElementById('06').innerText;
    const convertedTask = parseInt(task);
    const subtract = convertedTask - 1;
    document.getElementById('06').innerText=subtract;

    const currentTime =new Date().toLocaleTimeString();
    const container = document.getElementById('history');
    const div = document.createElement('div');
    div.innerHTML=`<div class="m-2 p-2 rounded-2xl bg-slate-300">
    <p>You have completed the <b>task Add new emoji🤲 at ${currentTime}<b/></p>
</div>`
    container.appendChild(div)
})


document.getElementById('completed-5').addEventListener('click',function(event){
    event.preventDefault();
    alert('Board updated successfully');
    document.getElementById('completed-5').disabled=true;
    const totalTask = document.getElementById('23').innerText;
    const convertedTotalTask = parseInt(totalTask);
    const total = convertedTotalTask + 1;
    document.getElementById('23').innerText=total;
    const task = document.getElementById('06').innerText;
    const convertedTask = parseInt(task);
    const subtract = convertedTask - 1;
    document.getElementById('06').innerText=subtract;

    const currentTime =new Date().toLocaleTimeString();
    const container = document.getElementById('history');
    const div = document.createElement('div');
    div.innerHTML=`<div class="m-2 p-2 rounded-2xl bg-slate-300">
    <p>You have completed the task <b>Integrate OpenAI API<b/> at ${currentTime}</p>
</div>`
    container.appendChild(div)
})


document.getElementById('completed-6').addEventListener('click',function(event){
    event.preventDefault();
    alert('Board updated successfully');
    alert('Congrates!!! You have completed all the current task')
    document.getElementById('completed-6').disabled=true;
    const totalTask = document.getElementById('23').innerText;
    const convertedTotalTask = parseInt(totalTask);
    const total = convertedTotalTask + 1;
    document.getElementById('23').innerText=total;
    const task = document.getElementById('06').innerText;
    const convertedTask = parseInt(task);
    const subtract = convertedTask - 1;
    document.getElementById('06').innerText=subtract;

    const currentTime =new Date().toLocaleTimeString();
    const container = document.getElementById('history');
    const div = document.createElement('div');
    div.innerHTML=`<div class="m-2 p-2 rounded-2xl bg-slate-300">
    <p>You have completed the task <b>Improve Job searching <b/>  at ${currentTime}</p>
</div>`
    container.appendChild(div)
})


// for challange mark

// current date
function showCurrentDate() {
    const currentDate = new Date();
    const options = { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' };
    const dateString = currentDate.toLocaleDateString('en-US', options);
    document.getElementById('date').textContent = dateString;
}
showCurrentDate();

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
